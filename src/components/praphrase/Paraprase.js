import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Data from "../../components/data/Data";

const Paraprase = () => {
  const [questions, setQuestions] = useState(Data.questionsParaphrasa);
  const [access, setAccess] = useState({
    left: false,
    right: false,
  });
  const [id, setId] = useState({ left: Number, right: Number });
  const [check, setCheck] = useState(false);
  const [permission, setPermission] = useState({ left: true, right: true });
  const [show, setShow] = useState(false);

  const changeHandler = ({ item, right, left }) => {
    setCheck(false);
    if (left && !access.left) {
      setAccess({ ...access, left: true, leftId: item.id });
      setPermission({ ...permission, left: false });
      setId({ ...id, left: item.id });
    }
    if (right && !access.right) {
      setAccess({ ...access, right: true, rightId: item.id });
      setPermission({ ...permission, right: false });
      setId({ ...id, right: item.id });
    }
  };
  useEffect(() => {
    if (access.left && access.right) {
      setPermission({ ...permission, left: true, right: true });
      setAccess({ ...access, left: false, right: false });
      if (id.left === id.right) {
        const index = questions.findIndex((object) => {
          return object.id === id.left;
        });
        console.log(index);

        setQuestions(
          Object.values({
            ...questions,
            // eslint-disable-next-line
            [index]: {
              ...questions[index],
              ans: "",
              check: true,
            },
          })
        );
        setId({ ...access, left: -1, right: -1 });
      }
    }
    // console.log(questions);
    //eslint-disable-next-line
  }, [access]);

  const Check = () => {
    setCheck(true);
    setShow(true);
  };

  const Close = () => {
    setShow(false);
  };
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    //eslint-disable-next-line
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  // console.log(shuffle(questions));
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-3 py-4">
        <div className="">
          {questions.map((e) => (
            <Left
              QuizFunction={changeHandler}
              key={e.id}
              item={e}
              permission={permission}
              check={check}
            />
          ))}{" "}
        </div>
        <div className=" col-span-2">
          {shuffle(questions).map((e) => (
            <Right
              QuizFunction={changeHandler}
              key={e.id}
              item={e}
              permission={permission}
              check={check}
            />
          ))}
        </div>
      </div>
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
  );
};

export default Paraprase;
