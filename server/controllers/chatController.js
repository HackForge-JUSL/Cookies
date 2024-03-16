const responseToMessage = require("../GenAIChatBot/chatBot.js");

async function responseToMsg(req, res) {
  try {
    let message = req.body.message;

    let responseMessage = await responseToMessage(message);

    return res.status(200).json({
      message: responseMessage,
    });
  } catch (error) {
    console.error("Error generating createCustomizeQuiz ", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

module.exports = responseToMsg;
