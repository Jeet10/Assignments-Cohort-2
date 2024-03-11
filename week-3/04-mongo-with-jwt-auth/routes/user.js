const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {

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

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username)

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router