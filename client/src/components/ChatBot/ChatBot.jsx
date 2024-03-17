
import React from 'react';
import { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim() === "") return;

    try {
      // Sending message to backend
      const response = await axios.post("/api/chat", { message: prompt });
      let responseMessage = response.message;
      console.log(responseMessage);

      // Adding user message to state
      setMessages([...messages, { type: "user", text: prompt }]);

      // Adding bot response to state
      setMessages([...messages, { type: "bot", text: response.data.message }]);
    } catch (error) {
      console.error("Error:", error);
    }

    // Clearing prompt after submission
    setPrompt("");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-100 border-b">
          <p className="font-bold text-lg">ChatGPT</p>
        </div>
        <div className="p-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.type === "user" ? "text-right text-blue-700" : "text-left text-gray-700"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={handlePromptChange}
            className="w-full px-4 py-2 bg-gray-200 border-t border-gray-300"
            placeholder="Type something..."
          />
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
