const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);

async function responseToMessage(message) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = message;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const replayMessage = text;
  console.log("Result from Gemini-Pro : " + text);
  return replayMessage;
}

module.exports = responseToMessage;
