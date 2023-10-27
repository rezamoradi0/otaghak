import { useState } from "react";
import {
  GetDate,
  GetMonthDays,
  GetNextMonth,
  dayNameToNumber,
  dayNumberToName,
  e2p,
  getFirstDay,
  getNextMonthFirstDay,
  monthNumberToName,
  p2e,
} from "./Functions";
import MonthsTable from "./MonthsTable";
const DatePicker = (props) => {
  const [date, setDate] = useState(GetDate(props.time));
  if (!date) return <></>;
  return (
    <div  className=" flex w-[800px] h-96 bg-slate-200 absolute bottom-0 translate-x-1/3 translate-y-full">
      <MonthsTable Date={date}/>
    </div>
  );
};

export default DatePicker;
