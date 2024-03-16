const User = require("../models/User");

async function saveUserPerformance(req, res) {
  const { userId, performance } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { performance } },
      { new: true },
    );
    if (!updatedUser) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    res.status(200).json({
      message: "Performance saved successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error saving user performance:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = { saveUserPerformance };
