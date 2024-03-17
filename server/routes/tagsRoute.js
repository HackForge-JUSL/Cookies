const {
  getAllChapterName,
  getAllTopicName,
  getAllSubjectName,
} = require("../controllers/tagController");

const router = require("express").Router();

router.get("/allChapter", getAllChapterName);
router.get("/allTopicName", getAllTopicName);
router.get("/allSubjectName", getAllSubjectName);

module.exports = router;
