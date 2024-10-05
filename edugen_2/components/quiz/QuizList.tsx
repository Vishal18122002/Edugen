// components/quiz/QuizList.tsx
"use client";
import React, { useEffect, useState } from 'react';

const QuizList = ({ onTakeQuiz }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes from local storage
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);
  }, []);

  return (
    <div className="w-full max-w-md">
      {quizzes.length > 0 ? (
        quizzes.map((quiz, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
            <button
              onClick={() => onTakeQuiz(quiz)}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Take Quiz
            </button>
          </div>
        ))
      ) : (
        <p>No quizzes available.</p>
      )}
    </div>
  );
};

export default QuizList;
