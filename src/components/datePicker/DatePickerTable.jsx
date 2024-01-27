import { forwardRef, useEffect, useState } from "react";
import DatePickerOneMonth from "./DatePickerOneMonth";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstAndLastDate,
  DateWorks,
  HasSecondTable,
} from "../../features/userDatePickerSlice";
import { ICON_FLASH } from "../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../constant/text";
import { e2p } from "../../utils/functions/DateFunc";
const DatePickerTable = forwardRef(function DatePickerTable(
  {
    DatePickerData,
    className = "",
    showTagsInfo = true,
    children,
    thisIsSecond = false,
    
  },
  ref
) {
  const datePickerState = useSelector((state) => state.userDatePicker);
  const theUserDatePickerDispatch = useDispatch();

  useEffect(() => {
    console.log(DatePickerData);
    theUserDatePickerDispatch(DateWorks(DatePickerData));
  }, []);
  // useEffect(()=>{
  //    console.log(datePickerState.daysInfo);
  // },[datePickerState.daysInfo]);
  // useEffect(() => {
  //   console.log(datePickerState);
  // }, [datePickerState]);
  if (datePickerState.monthTables.length === 0) return <p>loading</p>;
  if (datePickerState.monthTables.length > 0) {
    if (datePickerState.monthTables.length > 1&&datePickerState.tablesNumber>1) {
      return (
        <div className={className||""} ref={ref}>
          <div dir="rtl" className="flex bg-white">
            <DatePickerOneMonth
              thisIsSecond={thisIsSecond}
              monthData={
                datePickerState.monthTables[datePickerState.tableIndex]
              }
              clickDirection={-1}
            />
            <DatePickerOneMonth
              thisIsSecond={thisIsSecond}
              monthData={
                datePickerState.monthTables[datePickerState.tableIndex + 1]
              }
              clickDirection={+1}
            />
          </div>
          {showTagsInfo && (
            <div className="flex flex-col gap-y-2 text-sm text-gray-600">
              <p>
                <ICON_FLASH className="text-yellow-400 fa-solid" />{" "}
                <span className="mx-2">
                  {ROOM_PAGE_TEXT.body.dateReservationResidence.primeText}
                </span>{" "}
              </p>
              <p>
                <ICON_FLASH className="text-red-400" />{" "}
                <span className="mx-2">
                  {e2p(ROOM_PAGE_TEXT.body.dateReservationResidence.priceText)}
                </span>{" "}
              </p>
            </div>
          )}
          {children}
        </div>
      );
    } else {
     
      return (
        <div className="flex md:justify-center md:flex-col">
          <DatePickerOneMonth
            thisIsSecond={thisIsSecond}
            monthData={datePickerState.monthTables[datePickerState.tableIndex]}
            clickDirection={0}
          />
               {children}
        </div>
      );
    }
  }
});

export default DatePickerTable;
