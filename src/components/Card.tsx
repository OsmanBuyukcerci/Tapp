import { useEffect, useState } from "react";

interface CardProps {
  correct_answer: string;
  incorrect_answers: string[];
  nextQuestionClick: () => void;
  question: string;
  question_id: string;
}

const Card = ({
  correct_answer,
  incorrect_answers,
  nextQuestionClick,
  question,
  question_id,
}: CardProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isNextButtonVisible, setIsNextButtonVisible] =
    useState<boolean>(false);

  const checkAnswer = (answer: string) => {
    if (answer === correct_answer) return true;
    else return false;
  };
  const but1 = document.getElementById("correct-answer");
  const but2 = document.getElementById("incorrect-answer-1");
  const but3 = document.getElementById("incorrect-answer-2");
  const but4 = document.getElementById("incorrect-answer-3");
  const next_question_button = document.getElementById("next-question-button");
  if (but1 && but2 && but3 && but4 && next_question_button) {
    but1.addEventListener("click", () => {
      if (checkAnswer(but1.innerText)) but1.style.backgroundColor = "green";
      else but1.style.backgroundColor = "red";
      setIsDisabled(true);
      setIsNextButtonVisible(true);
    });
    but2.addEventListener("click", () => {
      if (checkAnswer(but2.innerText)) but2.style.backgroundColor = "green";
      else {
        but2.style.backgroundColor = "red";
        but1.style.backgroundColor = "green";
      }
      setIsDisabled(true);
      setIsNextButtonVisible(true);
    });
    but3.addEventListener("click", () => {
      if (checkAnswer(but3.innerText)) but3.style.backgroundColor = "green";
      else {
        but3.style.backgroundColor = "red";
        but1.style.backgroundColor = "green";
      }
      setIsDisabled(true);
      setIsNextButtonVisible(true);
    });
    but4.addEventListener("click", () => {
      if (checkAnswer(but4.innerText)) but4.style.backgroundColor = "green";
      else {
        but4.style.backgroundColor = "red";
        but1.style.backgroundColor = "green";
      }
      setIsDisabled(true);
      setIsNextButtonVisible(true);
    });
  }
  const handleNextQuestionClick = () => {
    const but1 = document.getElementById("correct-answer");
    const but2 = document.getElementById("incorrect-answer-1");
    const but3 = document.getElementById("incorrect-answer-2");
    const but4 = document.getElementById("incorrect-answer-3");
    if (next_question_button && but1 && but2 && but3 && but4) {
      but1.style.backgroundColor = "black";
      but2.style.backgroundColor = "black";
      but3.style.backgroundColor = "black";
      but4.style.backgroundColor = "black";
      setIsNextButtonVisible(false);
    }
    nextQuestionClick();
    setIsDisabled(false);
  };
  useEffect(() => {
    const randomAnswers = () => {
      const correct_answer = document.getElementById("correct-answer");
      const incorrect_answer_1 = document.getElementById("incorrect-answer-1");
      const incorrect_answer_2 = document.getElementById("incorrect-answer-2");
      const incorrect_answer_3 = document.getElementById("incorrect-answer-3");
      if (
        correct_answer &&
        incorrect_answer_1 &&
        incorrect_answer_2 &&
        incorrect_answer_3
      ) {
        let random1 = 0,
          random2 = 0,
          random3 = 0,
          random4 = 0;
        do {
          random1 = Math.ceil(Math.random() * 4);
          random2 = Math.ceil(Math.random() * 4);
          random3 = Math.ceil(Math.random() * 4);
          random4 = Math.ceil(Math.random() * 4);
        } while (
          random1 == random2 ||
          random1 == random3 ||
          random1 == random4 ||
          random2 == random3 ||
          random2 == random4 ||
          random3 == random4
        );
        correct_answer.style.gridRowStart = random1.toString();
        incorrect_answer_1.style.gridRowStart = random2.toString();
        incorrect_answer_2.style.gridRowStart = random3.toString();
        incorrect_answer_3.style.gridRowStart = random4.toString();
      }
    };

    randomAnswers();
  }, []);
  useEffect(() => {
    const next_question_button = document.getElementById(
      "next-question-button"
    );

    if (next_question_button) {
      if (isNextButtonVisible) next_question_button.style.display = "inline";
      else next_question_button.style.display = "none";
    }
  }, [isNextButtonVisible]);
  return (
    <div
      id="screen"
      className="h-screen w-screen absolute bg-black flex flex-col items-center justify-center"
    >
      <div id="header" className="mb-8">
        <span className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Tapp
        </span>
      </div>
      <div
        id="card"
        className="relative h-auto w-5/6 bg-gradient-to-br from-pink-500/50 to-violet-500/50 rounded flex flex-col gap-4 justify-center items-center text-white p-4"
      >
        <div id="question">
          <span className="text-xl font-bold">{question}</span>
        </div>
        <div
          id="answers"
          className="grid grid-cols-1 w-full gap-4 text-lg font-semibold"
        >
          <button
            id="correct-answer"
            className="answer_item flex items-center justify-center w-full h-12 rounded bg-black"
            disabled={isDisabled}
          >
            {correct_answer}
          </button>
          <button
            id="incorrect-answer-1"
            className="answer_item flex items-center justify-center w-full h-12 rounded bg-black"
            disabled={isDisabled}
          >
            {incorrect_answers[0]}
          </button>
          <button
            id="incorrect-answer-2"
            className="answer_item flex items-center justify-center w-full h-12 rounded bg-black"
            disabled={isDisabled}
          >
            {incorrect_answers[1]}
          </button>
          <button
            id="incorrect-answer-3"
            className="answer_item flex items-center justify-center w-full h-12 rounded bg-black"
            disabled={isDisabled}
          >
            {incorrect_answers[2]}
          </button>
        </div>
      </div>
      <div id="question-id" className="mt-4">
        <small className="font-bold bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-violet-500">
          ID: {question_id}
        </small>
      </div>
      <div id="next-question" className="absolute right-4 bottom-4">
        <button
          id="next-question-button"
          onClick={handleNextQuestionClick}
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-white"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
