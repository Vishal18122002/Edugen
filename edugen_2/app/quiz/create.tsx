// pages/quiz/create.tsx
"use client";
import React from 'react';
import CreateQuiz from '@/components/quiz/CreateQuiz';

const CreateQuizPage = () => {
  const handleSaveQuiz = (quizData) => {
    // Handle save quiz logic here (e.g., send quiz data to the server)
    console.log('Quiz data saved:', quizData);
  };

  return (
    <div>
      <h1>Create a New Quiz</h1>
      <CreateQuiz onSaveQuiz={handleSaveQuiz} />
    </div>
  );
};

export default CreateQuizPage;
