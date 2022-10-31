import React from "react";  
import { useState, useEffect } from "react";

const Left = ({ item, permission, QuizFunction,check }) => {
  const [left, setLeft] = useState(false);
  //   const [collour, setCollour] = useState({ use: true, collour: "" });
  const Left = async () => {
    if (permission.left) {
      setLeft(!left);
    }
  };
  useEffect(() => {
    QuizFunction({ left, item });
    //eslint-disable-next-line
  }, [left]);

  return (
    <div>
      <h1
        onClick={() => Left()}
        className={`border-2 p-2 md:p-3 cursor-pointer shadow-md md:min-h-[112px] lg:min-h-[85px]  min-h-[160px] text-lg rounded-2xl m-2 lg:m-4 ${
          left ? "bg-yellow-400/60" : "bg-white hover:bg-yellow-500/20 hover:shadow-lg"
        } ${
          check
            ? item.check === false
              ? "border-red-600"
              : "border-green-500"
            : null
        }`}
      >
        {item.question}
      </h1>
    </div>
  );
};

export default Left;
