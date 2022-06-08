const User = require("../models/userInfo");

const registerUser = async(req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        // throw new Error("Please add all fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);

        // throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        return res.redirect('/');
    } else {
        res.status(400);
        // throw new Error("Invalid user data");
    }
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (async(req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && password === user.password) {
        return res.redirect('/home');
    } else {
        return res.redirect('/');
    }
});

module.exports = {
    registerUser,
    loginUser,
};