import { useEffect, useState } from "react";
import DatePickerOneMonth from "./DatePickerOneMonth";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstAndLastDate,
  DateWorks,
} from "../../features/userDatePickerSlice";
export default function DatePickerTable({ DatePickerData }) {
  const datePickerState = useSelector((state) => state.userDatePicker);
  const theUserDatePickerDispatch = useDispatch();

  useEffect(() => {
    theUserDatePickerDispatch(DateWorks(DatePickerData));
  }, []);
useEffect(()=>{
  console.log(datePickerState.selectedDays);
},[datePickerState.selectedDays]);
  useEffect(() => {}, [datePickerState]);
  if(datePickerState.monthTables.length===0) return <p>loading</p>
  if (datePickerState.monthTables.length > 0) {
    if (datePickerState.monthTables.length>1) {
      return (
        <div dir="rtl" className="flex">
          <DatePickerOneMonth monthData={datePickerState.monthTables[datePickerState.tableIndex]} clickDirection={-1} />
          <DatePickerOneMonth monthData={datePickerState.monthTables[datePickerState.tableIndex+1]}clickDirection={+1}/>
        </div>
      );
    } else {
      return (
        <div className="flex">
             <DatePickerOneMonth monthData={datePickerState.monthTables[datePickerState.tableIndex]} clickDirection={0}/>
        </div>
      );
    }
  } else {
    return <p>Loading</p>;
  }
}
