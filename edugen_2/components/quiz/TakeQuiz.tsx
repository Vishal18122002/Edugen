// components/quiz/TakeQuiz.tsx
"use client";
import React, { useState } from 'react';

const TakeQuiz = ({ quiz, onQuizComplete }) => {
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctAnswers = quiz.questions.filter(
      (q, index) => q.correctAnswer === answers[index]
    ).length;
    const scorePercentage = (correctAnswers / quiz.questions.length) * 100;
    setScore(scorePercentage);
    onQuizComplete(scorePercentage);
  };

  return (
    <div className="quiz">
      {score === null ? (
        <>
          <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
          {quiz.questions.map((q, index) => (
            <div key={index} className="quiz-question mb-4">
              <h3 className="text-lg mb-2">{q.question}</h3>
              {q.options.map((option, i) => (
                <div key={i} className="quiz-option mb-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="mr-2"
                  />
                  {option}
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit Quiz
          </button>
        </>
      ) : (
        <div className="quiz-result">
          <h2 className="text-xl font-bold mb-4">Your Score: {score}%</h2>
          {score >= 80 ? (
            <div className="text-green-500">Congratulations! You passed!</div>
          ) : (
            <div className="text-red-500">Try Again!</div>
          )}
          <button onClick={() => onQuizComplete(null)} className="btn btn-secondary">
            Back to Quiz List
          </button>
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;
