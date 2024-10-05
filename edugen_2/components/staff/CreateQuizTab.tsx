// app/staff/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import CreateQuiz from '@/components/quiz/CreateQuiz';

const StaffPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes from local storage (or API) on component mount
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);
  }, []);

  const handleSaveQuiz = (quizData) => {
    // Save quiz data to local storage
    let updatedQuizzes = [...quizzes, quizData];
    setQuizzes(updatedQuizzes);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="shadow-md rounded p-4">
          <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
          <CreateQuiz onSaveQuiz={handleSaveQuiz} />
        </div>
      </main>
    </div>
  );
};

export default StaffPage;
