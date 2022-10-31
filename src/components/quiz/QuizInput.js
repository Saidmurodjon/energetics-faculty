import React from "react";

const QuizInput = ({ index, item, QuizFunction, check }) => {
  return (
    <div className="">
      <form
        action=""
        className="lg:w-4/5 w-[95%] mx-auto md:p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          className="cursor-pointer font-medium text-[20px] md:text-[25px]"
          htmlFor={item.id}
        >
          {index + 1}. {item.question}
        </label>
        <br />
        <input
          id={item.id}
          type="text"
          value={item.ans}
          className={`my-3 pl-1 h-10 md:h-12 border-2 rounded-md outline-none w-full text-[20px] md:text-[25px] shadow-sm ${
            check
              ? item.check === true
                ? "border-green-500"
                : "border-red-600"
              : item.ans?"border-yellow-300/60":""
          }`}
          onChange={(e) => QuizFunction({ id: item.id, value: e.target.value })}
        />
      </form>
    </div>
  );
};

export default QuizInput;
