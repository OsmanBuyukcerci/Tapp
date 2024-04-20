import { useEffect, useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Card from "./components/Card";

type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  tags: string[];
  question: string;
  question_id: string;
  question_no: number;
};

function App() {
  const [category, setCategory] = useState<string>("music");
  const [score, setScore] = useState<number>(0);
  const [question, setQuestion] = useState<Question>({
    correct_answer: "",
    incorrect_answers: [],
    tags: [],
    question: "",
    question_id: "",
    question_no: 0,
  });

  const getCategory = (category: string) => {
    setCategory(category);
  };

  const getScore = (scr: number) => {
    setScore(score + scr);
  };

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetch(
        "https://the-trivia-api.com/v2/questions?categories=" + category
      );
      const json = await data.json();

      setQuestion({
        ...question,
        correct_answer: json[question.question_no].correctAnswer,
        incorrect_answers: json[question.question_no].incorrectAnswers,
        tags: json[question.question_no].tags,
        question: json[question.question_no].question.text,
        question_id: json[question.question_no].id,
      });
    };
    getQuestions();
  }, [category, question.question_no]);

  return (
    <div className="flex relative">
      <StartScreen onClick={getCategory} />
      <Card
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
        nextQuestionClick={() => {
          setQuestion({
            ...question,
            question_no: question.question_no + 1,
          });
        }}
        getScore={getScore}
        question={question.question}
        question_id={question.question_id}
      />
    </div>
  );
}

export default App;
