// app/student/page.tsx

"use client";
import React, { useState } from 'react';
import QuizList from '@/components/quiz/QuizList';
import TakeQuiz from '@/components/quiz/TakeQuiz';
import Header from '@/components/Header';

const StudentPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(null);

  const handleTakeQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setScore(null);
  };

  const handleQuizComplete = (score) => {
    setScore(score);
  };

  const handleBackToList = () => {
    setSelectedQuiz(null);
    setScore(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
        <h1>Available Quizzes</h1>
        {selectedQuiz ? (
          score !== null ? (
            <div className="quiz-result">
              <h2 className="text-xl font-bold mb-4">Your Score: {score}%</h2>
              {score >= 80 ? (
                <div className="text-green-500">Congratulations! You passed!</div>
              ) : (
                <div className="text-red-500">Try Again!</div>
              )}
              <button onClick={handleBackToList} className="btn btn-secondary mt-4">
                Back to Quiz List
              </button>
            </div>
          ) : (
            <TakeQuiz quiz={selectedQuiz} onQuizComplete={handleQuizComplete} />
          )
        ) : (
          <QuizList onTakeQuiz={handleTakeQuiz} />
        )}
      </main>
    </div>
  );
};

export default StudentPage;