const User = require("../models/user.model");
const login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = User.findOne({ email });

    if (!user.length) {
      return res.status(400).json({ message: "User not found" });
    }

    const accessToken = generateAccessToken({
      _id: user[0]._id,
      email: user[0].email,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({ message: "Login successful", accessToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login };
