import React from "react";
import QuizInput from "../../components/quiz/QuizInput";
import Button from "../../components/button/Button";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Navbar from "../../components/navbar/Navbar";
import Data from "../../components/data/Data";
import Footer from "../../components/footer/Footer";
const Quiz = () => {
  const [questions, setQuestions] = useState(Data.questionsQuiz);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  //   console.log(questions[Math.random()]);
  const Check = () => {
    setCheck(true);
    setShow(true);
  };
  const Close = () => {
    setShow(false);
  };
  const changeHandler = ({ id, value }) => {
    setCheck(false);
    const index = questions.findIndex((object) => {
      return object.id === id;
    });

    console.log(value);
    setQuestions(
      Object.values({
        ...questions,
        // eslint-disable-next-line
        [index]: {
          ...questions[index],
          ans: value,
          check: questions[index].key.includes(value.toLowerCase())
            ? true
            : false,
        },
      })
    );
  };
  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        {questions.map((e, index) => (
          <div key={e.id} className="">
            <QuizInput
              item={e}
              index={index}
              QuizFunction={changeHandler}
              check={check}
            />
          </div>
        ))}
    
        <div className="flex justify-between sm:justify-end">
        <Button
          name={"Qayta urinish"}
          ButtonFunction={async () => {
            await setQuestions([]);
            setQuestions(Data.questionsParaphrasa);
          }}
          styles={"lg:mr-4 m-2"}
        />

        <Button
          name={"Tekshirish"}
          ButtonFunction={Check}
          styles={"lg:mr-4 m-2"}
        />
      </div>
        <Modal grade={questions} show={show} Close={Close} />
      </div>
      <Footer/>
    </div>
  );
};

export default Quiz;
