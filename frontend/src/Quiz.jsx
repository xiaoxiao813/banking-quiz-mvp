import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }

    // 延迟 1 秒后跳转到下一题或显示结果
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <div className="result">
        <h2>答题完成！</h2>
        <p>你答对了 {score}/{questions.length} 题！</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress">
        第 {currentQuestionIndex + 1}/{questions.length} 题
      </div>
      <div className="question">
        {currentQuestion.question}
      </div>
      <div className="options">
        {currentQuestion.options.map((option, index) => {
          let className = 'option';
          if (isAnswered) {
            if (option === currentQuestion.answer) {
              className += ' correct';
            } else if (option === selectedOption) {
              className += ' incorrect';
            }
          } else if (option === selectedOption) {
            className += ' selected';
          }

          return (
            <div
              key={index}
              className={className}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;