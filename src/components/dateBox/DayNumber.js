import { useState } from "react";

const DayNumber = (props) => {
  const dayNumberFa = props.FaNumber;
  const isValid = props.Valid;
  const Number = props.Number;
  const Month = props.Month;
  const Selected = props.Selected;
  const SelectDate = props.SelectFun;
  const Key = props.Key;
  const [thisSelected,setThisSelected]=useState(false);
  // console.log(Selected);
  return (
    <div key={Key}
      onClick={() => {
        if (!isValid) return;
        SelectDate(Key, `${Month}/${Number}`);
        setThisSelected(!thisSelected);
      }}
      className={`${
        isValid
          ? "text-black cursor-pointer hover:bg-gray-200"
          : "text-gray-400   cursor-not-allowed"
      } ${Selected||thisSelected && "bg-gray-200"} text-sm flex justify-center items-center `}
    >
      <span> {dayNumberFa}</span>
      {/* <span>{Key}</span> */}
    </div>
  );
};

export default DayNumber;
