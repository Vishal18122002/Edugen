// app/components/quiz/ManageQuizzes.tsx
import React, { useEffect, useState } from 'react';

const ManageQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [editQuizIndex, setEditQuizIndex] = useState(null);
  const [editedQuiz, setEditedQuiz] = useState(null);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);
  }, []);

  const handleDeleteQuiz = (quizIndex) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes.splice(quizIndex, 1);
    setQuizzes(updatedQuizzes);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
  };

  const handleEditQuiz = (quizIndex) => {
    setEditQuizIndex(quizIndex);
    setEditedQuiz({ ...quizzes[quizIndex] });
  };

  const handleCloseEditModal = () => {
    setEditQuizIndex(null);
    setEditedQuiz(null);
  };

  const handleSaveChanges = (event) => {
    event.preventDefault();
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[editQuizIndex] = editedQuiz;
    setQuizzes(updatedQuizzes);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
    handleCloseEditModal();
  };

  const handleQuizChange = (event) => {
    const { name, value } = event.target;
    setEditedQuiz({
      ...editedQuiz,
      [name]: value,
    });
  };

  const handleQuestionChange = (questionIndex, event) => {
    const updatedQuestions = [...editedQuiz.questions];
    const { name, value } = event.target;
    updatedQuestions[questionIndex][name] = value;
    setEditedQuiz({
      ...editedQuiz,
      questions: updatedQuestions,
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const updatedQuestions = [...editedQuiz.questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setEditedQuiz({
      ...editedQuiz,
      questions: updatedQuestions,
    });
  };

  return (
    <div className="shadow-md rounded p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Quizzes</h1>
      <div className="grid gap-4 text-black">
        {quizzes.map((quiz, index) => (
          <div key={index} className="bg-gray-200 rounded p-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">{quiz.title}</h2>
            <div>
              <button
                onClick={() => handleEditQuiz(index)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteQuiz(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Quiz Modal */}
      {editQuizIndex !== null && editedQuiz && (
        <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full relative mt-20"> {/* Adjust margin-top */}
            <h1 className="text-2xl text-black font-bold mb-4">Edit Quiz</h1>
            <form onSubmit={handleSaveChanges}>
              <label className="block mb-2">
                Quiz Title:
                <input
                  type="text"
                  name="title"
                  value={editedQuiz.title}
                  onChange={handleQuizChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
              {editedQuiz.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="mb-4">
                  <input
                    type="text"
                    name="question"
                    value={question.question}
                    onChange={(e) => handleQuestionChange(questionIndex, e)}
                    className="border border-gray-300 rounded-md p-2 w-full mb-2"
                    placeholder={`Question ${questionIndex + 1}`}
                  />
                  {question.options.map((option, optionIndex) => (
                    <input
                      key={optionIndex}
                      type="text"
                      name={`option-${optionIndex}`}
                      value={option}
                      onChange={(e) => handleOptionChange(questionIndex, optionIndex, e)}
                      className="border border-gray-300 rounded-md p-2 w-full mb-2"
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                  ))}
                  <input
                    type="text"
                    name="correctAnswer"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(questionIndex, e)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Correct Answer"
                  />
                </div>
              ))}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleCloseEditModal}
                  className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
            {/* Close Modal Button */}
            <button
              onClick={handleCloseEditModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageQuizzes;
