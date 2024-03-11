const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;

        // Check if admin credentials are provided
        if (!username || !password) {
            return res.status(400).json({ msg: "Admin credentials are missing" });
        }

        // Find admin in the database
        const admin = await Admin.findOne({ username, password });

        // If admin exists, proceed to the next middleware
        if (admin) {
            return next();
        } else {
            return res.status(403).json({ msg: "Invalid admin credentials" });
        }
}

module.exports = adminMiddleware; 