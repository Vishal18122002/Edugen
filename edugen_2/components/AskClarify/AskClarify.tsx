"use client";
import { useState, useEffect } from "react";

interface Message {
  sender: "student" | "staff";
  content: string;
}

const AskAndClarify = ({ isStaff }: { isStaff: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Load messages from localStorage when the component mounts
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    // Store messages in localStorage whenever they are updated
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      sender: isStaff ? "staff" : "student", // Differentiating between staff and student
      content: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="chat-container p-4">
      <div className="chat-box bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-4 h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "student" ? "text-left" : "text-right"
            } mb-2`}
          >
            <p
              className={`p-2 rounded-lg ${
                msg.sender === "student"
                  ? "bg-blue-200 dark:bg-blue-600"
                  : "bg-green-200 dark:bg-green-600"
              }`}
            >
              {msg.sender === "student" ? "Student: " : "Staff: "}
              {msg.content}
            </p>
          </div>
        ))}
      </div>

      <input
        type="text"
        className="p-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 mb-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message here..."
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white p-2 rounded-lg w-full"
      >
        Send
      </button>
    </div>
  );
};

export default AskAndClarify;
