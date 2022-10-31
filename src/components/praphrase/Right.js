import React from "react";
import { useState, useEffect } from "react";

const Right = ({ item, QuizFunction, permission, check }) => {
  //   const [click, setClick] = useState({right:false});
  const [right, setRight] = useState(false);
  const Click = () => {
    if (permission.right) {
      //   setClick({...click,right:true})
      setRight(!right);
    }
  };
  useEffect(() => {
    QuizFunction({ right, item });
    //eslint-disable-next-line
  }, [right]);
  return (
    <div className="">
      <h1
        onClick={() => Click()}
        className={`border-2 p-2  shadow-md  cursor-pointer md:min-h-[112px] lg:min-h-[85px] min-h-[160px] text-lg rounded-2xl m-2 lg:m-4 ${
          right
            ? "bg-red-400/60"
            : "bg-white hover:shadow-lg hover:bg-red-500/20"
        } ${
          check
            ? item.check === false
              ? "border-red-600"
              : "border-green-500"
            : null
        }`}
      >
        {item.key}
      </h1>
    </div>
  );
};

export default Right;
