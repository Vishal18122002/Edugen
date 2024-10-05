import React, { useState } from 'react';
import Confetti from 'react-confetti';

const Quiz = ({ quiz, finishQuiz }) => {
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [score, setScore] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

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

    if (scorePercentage >= 80) {
      setShowCelebration(true); // Show celebration if score is 80% or higher
    }

    finishQuiz(scorePercentage);
  };

  return (
    <div className="quiz">
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
      <button onClick={handleSubmit} className="btn btn-primary">Submit Quiz</button>

      {/* Conditional rendering based on score */}
      {showCelebration && (
        <div className="celebration">
          <Confetti />
          <h2 className="text-xl font-bold mb-4">Congratulations! You passed!</h2>
        </div>
      )}
      {score !== null && score < 80 && (
        <div className="quiz-result">
          <h2 className="text-xl font-bold mb-4">Your Score: {score}%</h2>
          <div className="text-red-500">Sorry, you did not pass this time.</div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
