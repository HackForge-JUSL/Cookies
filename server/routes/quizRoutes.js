const {
  createCustomizeQuiz,
  createMultiplayerQuiz,
} = require("../controllers/quizController");

const router = require("express").Router();

router.get("/practice", createCustomizeQuiz);
router.get("/create", createMultiplayerQuiz);

module.exports = router;
