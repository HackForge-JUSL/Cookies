import React, { useState, useEffect } from "react";
import { fetchQuestions, submitPerformance } from "./personalizedQuizLogic"; // Assuming you have API functions to interact with the backend

const QuizTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [difficulty, setDifficulty] = useState("easy");
  const [performanceData, setPerformanceData] = useState([]);
  const [attemptedQuestion, setAttemptedQuestion] = useState([]);

  useEffect(() => {
    // Fetch initial set of questions
    fetchQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleAnswerSubmission = (questionId, answer) => {
    // Update userAnswers state
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const updatedPerformanceData = [];

  const evaluatePerformance = () => {
    for (let questionId in userAnswers) {
      const userAnswer = userAnswers[questionId];
      const question = questions.find((q) => q.id === questionId);

      if (!question) {
        console.error(`Question with ID ${questionId} not found.`);
        continue;
      }

      const isCorrect = userAnswer === question.correctOption; // Assuming correct answer is included in the question object
      const freq = 1; // logic to calculate frequency

      updatedPerformanceData.push({
        questionId,
        status: isCorrect ? "correct" : "incorrect",
        freq,
        userId: "user_id_placeholder", // Replace with actual user ID
      });
    }
    setPerformanceData(updatedPerformanceData);
    if (updatedPerformanceData.size() == 5) {
      submitPerformance(updatedPerformanceData);
      updatedPerformanceData = [];
    }
  };

  const loadNextQuestions = () => {
    // Define the number of questions to load for each difficulty level
    const easyQuestionsCount = 10;
    const mediumQuestionsCount = 20;
    const hardQuestionsCount = 10;

    currentQuestionIndex = currentQuestionIndex + 1;
    // If the current difficulty level is medium or hard, update the next index accordingly
    if (difficulty === "medium") {
      nextIndex += mediumQuestionsCount;
    } else if (difficulty === "hard") {
      nextIndex += hardQuestionsCount;
    }

    // Check if there are more questions available
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      // If there are no more questions, you may fetch more questions from the backend or handle accordingly
      console.log("No more questions available.");
    }

    // Update difficulty level if necessary
    if (currentQuestionIndex >= questions.length) {
      // If all questions have been answered for the current difficulty level, update the difficulty
      if (difficulty === "easy") {
        setDifficulty("medium");
      } else if (difficulty === "medium") {
        setDifficulty("hard");
      } // Add more conditions if needed for further difficulty levels
    }
  };

  const handleNextQuestion = () => {
    evaluatePerformance();
    loadNextQuestions();
  };

  return (
    <div>
      {questions.length > 0 && (
        <QuestionComponent
          question={questions[currentQuestionIndex]}
          onSubmit={handleAnswerSubmission}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
};

const QuestionComponent = ({ question, onSubmit, onNext }) => {
  const handleAnswerSelection = (selectedAnswer) => {
    onSubmit(question.id, selectedAnswer);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerSelection(option)}>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default QuizTest;
