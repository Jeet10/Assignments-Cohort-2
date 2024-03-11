const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;

    const userExist = await User.findOne({ username })
    if (userExist) {
        return res.status(400).json({
            msg: "User already exists"
        })
    }

    await User.create({ username, password });
    res.json({
        msg: "User created Successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "Course bought successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })

});

module.exports = router