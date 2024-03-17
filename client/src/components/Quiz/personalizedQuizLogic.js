const fetchQuestions = async (chapterName, topicName, userId) => {
  try {
    const response = await fetch("/api/quiz/practice", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapterName: chapterName,
        topicName: topicName,
        userId: `${userId}`,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    throw error;
  }
};

const submitPerformance = async (userId, performanceData) => {
  try {
    const response = await fetch("/api/performance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        userId: userId,
        performance: performanceData,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to submit performance data");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error submitting performance data:", error.message);
    throw error;
  }
};

export { fetchQuestions, submitPerformance };
