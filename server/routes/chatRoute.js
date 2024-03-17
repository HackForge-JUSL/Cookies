const router = require("express").Router();

const { auth, isTeacher, isStudent, isAdmin } = require("../middleware/authMiddleware")
const responseToMsg = require("../controllers/chatController");
router.post("/", responseToMsg);

module.exports = router;
