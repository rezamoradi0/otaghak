import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESERVE_TABLE_TEXT } from "../../../../../constant/text";
import { ICON_FLOWER } from "../../../../../constant/fontIcons";
import { e2p } from "../../../../../utils/functions/DateFunc";
import {clearData} from "../../../../../features/userDatePickerSlice";
export default function EnterExitDate({ isVertical = true, children,onClick }) {
  const datePickerState = useSelector((state) => {
    return state.userDatePicker.selectedDays;
  });
  const theDispatch=useDispatch();
  // useEffect(() => {
  //   // console.log(datePickerState);
  //   // console.log(datePickerState[0]);
  // }, [datePickerState]);
  return (
    <div

      className="flex  justify-between gap-x-4 pt-2 items-center"
    >
      {children && (
        <div className="font-semibold text-gray-600">{children}</div>
      )}
      <div className="relative grow border border-gray-300 rounded-md min-h-[50px] flex flex-col justify-center px-2">
        <div onClick={onClick}
          className={`${
            datePickerState.length > 1 ? "text-gray-900 " : "text-gray-400 "
          } font-semibold flex  cursor-pointer  gap-x-2 ${isVertical?"flex-col items-start justify-start p-2 gap-y-2":"items-center"}`}
        >
          {" "}
          <span className="flex items-center gap-x-2">
            {" "}
            <ICON_FLOWER className="mt-1 text-lg" />{" "}
            {RESERVE_TABLE_TEXT.enterTime}{" "}
          </span>
          {datePickerState[0] && (
            <div>
              {" "}
              <span className="font-normal">{datePickerState[0]?.dayName}</span>
              <span dir="rtl" className="font-normal">
                {` ${e2p(datePickerState[0]?.year)}/${e2p(
                  datePickerState[0]?.month
                )}/${e2p(datePickerState[0]?.day)}`}
              </span>
            </div>
          )}
        </div>
        { datePickerState.length > 1&& <span onClick={()=>{theDispatch(clearData())}} className="hover:text-red-500 absolute cursor-pointer left-0 top-0 bottom-0  text-lg p-2 ">x</span>}

      </div>
      <div className="relative grow border border-gray-300 rounded-md min-h-[50px] flex flex-col justify-center px-2">
        <div  onClick={onClick} 
          className={`${
            datePickerState.length > 1 ? "text-gray-900 " : "text-gray-400 "
          } font-semibold flex cursor-pointer   gap-x-2 ${isVertical?"flex-col items-start justify-start p-2 gap-y-2":"items-center"}`}
        >
          {" "}
          <span className="flex items-center gap-x-2">
            {" "}
            <ICON_FLOWER className="mt-1  text-lg" />{" "}
            {RESERVE_TABLE_TEXT.exitTime}{" "}
          </span>
          {datePickerState[datePickerState.length - 1] && (
            <div>
              {" "}
              <span className="font-normal">
                {datePickerState[datePickerState.length - 1]?.dayName}
              </span>
              <span dir="rtl" className="font-normal">
                {` ${e2p(
                  datePickerState[datePickerState.length - 1]?.year
                )}/${e2p(
                  datePickerState[datePickerState.length - 1]?.month
                )}/${e2p(datePickerState[datePickerState.length - 1]?.day)}`}
              </span>
            </div>
          )}
          
        </div>
        { datePickerState.length > 1&& <span onClick={()=>{theDispatch(clearData())}} className="hover:text-red-500 absolute cursor-pointer left-0 top-0 bottom-0  text-lg p-2 ">x</span>}
      </div>
    </div>
  );
}
