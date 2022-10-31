import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const img = [
  {
    id: 0,
    type: "?",
    src: "https://media.tenor.com/gvvRMXKAZZMAAAAi/%D9%88%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D8%B1-emoji.gif",
  },
  {
    id: 1,
    type: "2",
    src: "https://media.tenor.com/b6UU7FZ2ZwAAAAAi/%C3%BCzg%C3%BCn.gif",
  },
  {
    id: 2,
    type: "3",
    src: "https://media.tenor.com/lAHy0gqj-5oAAAAi/mad-angry.gif",
  },
  {
    id: 3,
    type: "4",
    src: "https://media.tenor.com/v6LGu6JyAJ8AAAAi/marflrt.gif",
  },
  {
    id: 4,
    type: "5",
    src: "https://media.tenor.com/LG3iEbaEcLYAAAAj/%D0%B1%D1%80%D0%B0%D0%B2%D0%BE.gif",
  },
  {
    id: 5,
    type: "0",
    src: "https://media.tenor.com/OMFw7N6IahYAAAAi/sleepy-zzz.gif",
  },
];
const Modal = ({ grade, show, Close }) => {
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  useEffect(() => {
    if (show) {
      setTotal(grade.length);
      setCorrect(grade.filter((e) => e.check === true).length);
    }
    //eslint-disable-next-line
  }, [show]);
  return (
    <>
      <div
        className={`${
          show ? "inline" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bg-white/50 shadow-md inset-0 flex items-center justify-center`}
      >
        <div className="mx-auto border shadow-xl rounded-lg md:w-1/3 lg:w-1/4 w-5/6 px-auto bg-slate-50">
          <AiOutlineClose
            onClick={() => Close()}
            className="float-right mt-2 mr-2 cursor-pointer"
          />
          <br />
          <img
            className="mx-auto w-[300px]"
            src={
              correct === 0
                ? img[5].src
                : correct === 1
                ? img[0].src
                : correct === 2
                ? img[1].src
                : correct === 3
                ? img[2].src
                : correct === 4
                ? img[3].src
                : img[4].src
            }
            alt=""
          />
          <h1 className="text-center font-semibold text-xl my-4">
            Siznig natijangiz: <span className=" font-bold">{((correct / total) * 100).toFixed(2)}</span>%
          </h1>
        </div>
      </div>
    </>
  );
};

export default Modal;
