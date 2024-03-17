const { Question } = require("../models/Question");

async function getAllChapterName(req, res) {
  try {
    let subjectNames = req.body.subjectNames; // Assuming subjectNames is an array
    // Fetch all unique chapter names from the questions that match the provided subject names
    const chapterNames = await Question.distinct("chapterName", {
      subject: { $in: subjectNames },
    });

    res.status(200).json({ chapterNames });
  } catch (error) {
    console.error("Error fetching chapter names:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllTopicName(req, res) {
  try {
    let chapterNames = req.body.chapterNames; // Assuming chapterNames is an array
    // Fetch all unique topic names from the questions that match the provided chapter names
    const topicNames = await Question.distinct("topicTag", {
      chapterName: { $in: chapterNames },
    });

    res.status(200).json({ topicNames });
  } catch (error) {
    console.error("Error fetching topic names:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllSubjectName(req, res) {
  try {
    // Fetch all unique subjects from the questions
    const subjects = await Question.distinct("subject");

    res.status(200).json({ subjects });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getAllChapterName, getAllTopicName, getAllSubjectName };
