// components/quiz/CreateQuiz.tsx
"use client";
import React, { useState } from 'react';

const CreateQuiz = ({ onSaveQuiz }) => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleChange = (index, event) => {
    const updatedQuestions = [...questions];
    if (event.target.name === 'question') {
      updatedQuestions[index].question = event.target.value;
    } else if (event.target.name.startsWith('option')) {
      const optionIndex = parseInt(event.target.name.split('-')[1]);
      updatedQuestions[index].options[optionIndex] = event.target.value;
    } else if (event.target.name === 'correctAnswer') {
      updatedQuestions[index].correctAnswer = event.target.value;
    }
    setQuestions(updatedQuestions);
  };

  const handleTitleChange = (event) => {
    setQuizTitle(event.target.value);
  };

  const handleSubmit = () => {
    const quizData = {
      title: quizTitle,
      questions: questions,
    };
    onSaveQuiz(quizData); // Ensure onSaveQuiz is called correctly
  };

  return (
    <div className="w-full max-w-md  shadow-md rounded p-4 max-h-96 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <input
        type="text"
        name="quizTitle"
        placeholder="Enter Quiz Title"
        value={quizTitle}
        onChange={handleTitleChange}
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
      />
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="question"
            placeholder="Enter question"
            value={q.question}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
          />
          {q.options.map((option, optIndex) => (
            <input
              key={optIndex}
              type="text"
              name={`option-${optIndex}`}
              placeholder={`Option ${optIndex + 1}`}
              value={option}
              onChange={(e) => handleChange(index, e)}
              className="mb-2 p-2 border border-gray-300 rounded-md w-full"
            />
          ))}
          <input
            type="text"
            name="correctAnswer"
            placeholder="Correct answer"
            value={q.correctAnswer}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      ))}
      <button onClick={addQuestion} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
        Add Question
      </button>
      <button onClick={handleSubmit} className="ml-2 bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
        Submit Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
