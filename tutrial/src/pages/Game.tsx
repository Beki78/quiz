import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import { fetchQuestions } from "../API";
import { Difficulty } from "../API";

const total_question = 10;
const Game = () => {
  const [loading, setLoadig] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(total_question, Difficulty.EASY));
  

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestion={total_question}
        question={questions[number].question}
        answer={questions[0].answers}
        usersAnswer={userAnswer ? userAnswer[number] : undefined}
        callbaack={checkAnswer}
        
      /> */}
    </div>
  );
};

export default Game;
