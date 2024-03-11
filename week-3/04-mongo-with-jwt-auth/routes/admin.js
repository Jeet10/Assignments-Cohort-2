const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ msg: "Username already exists" });
        }
        await Admin.create({ username, password });

        // Respond with success message
        res.json({ msg: "Admin created successfully" });
    } catch {
        // Handle errors
        console.error("Error creating admin:", error);
        res.status(500).json({ msg: "Failed to create admin" });
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    const userExist = await User.find({
        username,
        password
    })

    if (userExist) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Incorrect Email or Password"
        })
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body;

    const newCourse = await Course.create({ title, description, imageLink, price });
    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allCourses = await Course.find ({});

    res.json({
        courses: allCourses
    })
});

module.exports = router;