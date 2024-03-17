const { Question } = require("../models/Question");
const User = require("../models/User");

// Fisher-Yates algorithm to shuffle array element with truly random distribution
function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
  return questions;
}

function uniqueArrayList(questions) {
  const uniqueIds = new Set();

  const uniqueQuestions = questions.filter((question) => {
    if (uniqueIds.has(question._id.toString())) {
      return false;
    } else {
      uniqueIds.add(question._id.toString());
      return true;
    }
  });

  return uniqueQuestions;
}

async function filterQuestionNotSolvedByUser(questions, userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const solvedQuestionIds = new Set(
      user.performance.flatMap((performanceEntry) =>
        performanceEntry.solvedQuestion.map((question) =>
          question.questionId.toString(),
        ),
      ),
    );

    console.log(solvedQuestionIds);
    // Filter questions not solved by the user
    const unsolvedQuestions = questions.filter((question) => {
      if (question._id && solvedQuestionIds.has(question._id.toString())) {
        return false;
      } else {
        return true;
      }
    });

    console.log(unsolvedQuestions);
    return unsolvedQuestions;
  } catch (error) {
    console.error("Error filtering questions:", error);
    return [];
  }
}

async function createCustomizeQuiz(req, res) {
  try {
    const chapterName = req.body.chapterName;
    const topicName = req.body.topicName;
    const userId = req.body.userId;

    let questions = [];

    // Fetch questions for each chapter and topic concurrently
    await Promise.all(
      chapterName.map(async (chapter) => {
        let tempQuestions = await Question.find({
          chapterName: { $in: chapter },
        });
        questions.push(...tempQuestions);
      }),
    );

    await Promise.all(
      topicName.map(async (topic) => {
        let tempQuestions = await Question.find({ topicTag: { $in: topic } });
        questions.push(...tempQuestions);
      }),
    );

    //console.log(questions);
    questions = uniqueArrayList(questions);
    questions = await filterQuestionNotSolvedByUser(questions, userId);
    questions = shuffleQuestions(questions);

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
    const { subject, topicName } = req.body;
    let questions = await Question.find({
      subject: { $in: subject },
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

