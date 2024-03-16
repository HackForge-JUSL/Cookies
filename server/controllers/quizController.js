const { Question } = require("../models/Question");

// Fisher-Yates algorithm to shuffle array element with truly random distribution
function shuffleQuestions(questions) {
  for (let i = questions.lenght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
  return questions;
}

function uniqueArrayList(array) {
  let uniq = [...new Set(array)];
  return uniq;
}

async function createCustomizeQuiz(req, res) {
  try {
    //const subjectName = req.body.subjectName;
    const chapterName = req.body.chapterName;
    const topicName = req.body.topicName;

    let questions = await Question.find({
      chapterName: { $in: chapterName },
    });

    questions.push(
      await Question.find({
        topicTag: { $in: topicName },
      }),
    );
    questions = shuffleQuestions(uniqueArrayList(questions));

    if (questions.length > 200) {
      questions = questions.slice(0, 100);
    }

    return res.status(200).json(questions);
  } catch (error) {
    console.error("Error generating createCustomizeQuiz ", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

async function createMultiplayerQuiz(req, res) {
  try {
    const { chapterName, topicName, numberQuestion, timeLimit } = req.body;
    let questions = await Question.find({
      chapterName: { $in: chapterName },
    });

    questions.push(
      await Question.find({
        topicTag: { $in: topicName },
      }),
    );
    questions = shuffleQuestions(uniqueArrayList(questions));
    questions = questions.slice(0, numberQuestion);

    return res.status(200).json(questions);
  } catch (error) {
    console.error("Error generating createMultiplayerQuiz ", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

module.exports = { createCustomizeQuiz, createMultiplayerQuiz };
