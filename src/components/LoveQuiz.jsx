import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LoveQuiz.css';

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What was our first movie together?",
      options: ["Romance Movie", "Action Movie", "Comedy Movie", "Horror Movie"],
      correctAnswer: 3
    },
    {
      question: "What's my favorite color?",
      options: ["Black", "Red", "Purple", "Pink"],
      correctAnswer: 0
    },
    {
      question: "What's my favorite food that you cook?",
      options: ["Pasta", "Pizza", "Biryani", "Chocolate Cake"],
      correctAnswer: 2
    },
    {
      question: "The Place we first time met?",
      options: ["Bhubaneswar", "Cuttuck", "Daspalla", "Baliguda"],
      correctAnswer: 3
    },
    {
      question: "How many times we had sex 🤣?",
      options: ["05", "10", "15", "So many times"],
      correctAnswer: 3
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = () => {
    if (score === questions.length) {
      return "Perfect Score! You know me so well, Kaju! 💝";
    } else if (score >= questions.length * 0.7) {
      return "Amazing! Your love shines through! ❤️";
    } else if (score >= questions.length * 0.5) {
      return "Not bad! We have more lovely memories to make! 💕";
    } else {
      return "Let's make more memories together! 💖";
    }
  };

  return (
    <section className="quiz-section section">
      <h2 className="section-title">Love Quiz</h2>
      
      <motion.div 
        className="quiz-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="question-container"
            >
              <h3>Question {currentQuestion + 1} of {questions.length}</h3>
              <p className="question">{questions[currentQuestion].question}</p>
              
              <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswer(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="result-container"
            >
              <h3>Quiz Complete!</h3>
              <p className="score">Your Score: {score}/{questions.length}</p>
              <p className="result-message">{getResultMessage()}</p>
              <motion.button
                className="reset-button"
                onClick={resetQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again ❤️
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default LoveQuiz;
