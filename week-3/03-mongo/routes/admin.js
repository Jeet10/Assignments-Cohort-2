const express = require("express")
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup 
    try {
        // Create a new admin
        const { username, password } = req.body;
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ msg: "Username already exists" });
        }
        await Admin.create({ username, password });

        // Respond with success message
        res.json({ msg: "Admin created successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error creating admin:", error);
        res.status(500).json({ msg: "Failed to create admin" });
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;

    const newCourse = await Course.create({ title, description, imageLink, price });
    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find ({});

    res.json({
        courses: allCourses
    })

});

module.exports = router;