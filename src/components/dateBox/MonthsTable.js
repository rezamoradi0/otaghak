import React, { useMemo } from "react";
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
import DayNumber from "./DayNumber";

const MonthsTable = (props) => {
    const [daySelected, setDaySelected] = useState([]);
    const [firstMonthDives,setFirstMonthDives]=useState([])
    const [enterDay,setEnterDay]=useState(null);
    const [exitDate,setExitDate]=useState(null);

    let dayCounter = 0;
    const todayDate=props.Date;
  
 
    let dayWeekNumber = 0;
    dayWeekNumber = dayNameToNumber(todayDate.dayWeek);
    const dayNumber = Number(p2e(todayDate.day));
    const monthNumber = Number(p2e(todayDate.month));
    const monthDays = GetMonthDays(monthNumber);
    const firstDayOfMonth = getFirstDay(dayNumber, dayWeekNumber);
    const yearNumber=Number(p2e(todayDate.year));
    
    //==========================================================

    const nextStartDay = getNextMonthFirstDay(
      dayNumber,
      dayWeekNumber,
      monthDays
    );
    const nextMonthDays = GetMonthDays(p2e(todayDate.month) + 1);
    

    function CreateAllMonthDives(firstDayOfMonth,monthDays,nexMonth=false){
        let daysDiv = [
            <div  className="text-center text-xs">
              شنبه
            </div>,
            <div  className="text-center text-xs">
              {e2p(1)}شنبه
            </div>,
            <div  className="text-center text-xs">
              {e2p(2)}شنبه
            </div>,
            <div  className="text-center text-xs">
              {e2p(3)}شنبه
            </div>,
            <div  className="text-center text-xs">
              {e2p(4)}شنبه
            </div>,
            <div  className="text-center text-xs">
              {e2p(5)}شنبه
            </div>,
            <div  className="text-center text-xs">
              جمعه
            </div>,
          ];
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysDiv.push(<div></div>);
          }
      
          for (let dayNum = 1; dayNum <= monthDays; dayNum++) {
            daysDiv.push(
            
              <DayNumber
                key={dayCounter}
                Key={dayCounter}
                SelectFun={SelectingDate}
                // Selected={daySelected[dayCounter]}
                Valid={nexMonth||dayNum >= dayNumber}
                Number={dayNum}
                FaNumber={e2p(dayNum)}
                Month={!nexMonth?monthNumber:GetNextMonth(monthNumber)}
              />
            );
            dayCounter++;
          }
          const allDives=daysDiv.map((div) => {
            // console.log("bad div : ", div);
            return div;
          });
          return allDives;
    }
    

    function SelectingDate(key, test) {
        //  setDaySelected([...daySelected, { id: key, status: true }]);
      }

  // return (CreateThisMonth(props.Date) );
  return (
    <>
 
      <div
        key={crypto.randomUUID()}
        className="w-1/2  bg-white h-full grid  overflow-hidden grid-cols-7 grid-rows-12"
      >
        <div  key={crypto.randomUUID()} className="row-span-2 col-span-full  text-center text-2xl flex items-center justify-center">
          <span>{monthNumberToName(monthNumber)}  {e2p(yearNumber)} </span>
        </div>
        {useMemo(()=>{return  CreateAllMonthDives(firstDayOfMonth,monthDays);},[exitDate])}
      
        <div key={crypto.randomUUID()} className="row-span-2 col-span-full self-end row-start-11 text-2xl py-4">
          X پاک کردن
        </div>
      </div>
      <div
        key={crypto.randomUUID()}
        className="w-1/2  bg-white h-full grid  overflow-hidden grid-cols-7 grid-rows-12"
      >
        <div  key={crypto.randomUUID()} className="row-span-2 col-span-full  text-center text-2xl flex items-center justify-center">
          <span> {monthNumberToName(GetNextMonth(monthNumber))}  {GetNextMonth(monthNumber)==1?e2p(yearNumber+1):e2p(yearNumber)}</span>
        </div>
        {useMemo(()=>{return  CreateAllMonthDives(nextStartDay,nextMonthDays,true);},[exitDate])}
   
      </div>
    </>
  );
};

export default MonthsTable;
