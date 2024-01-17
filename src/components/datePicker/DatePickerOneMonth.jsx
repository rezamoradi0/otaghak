import DatePickerMonthHeader from "./components/DatePickerMonthHeader";
import { DATE_COMPONENT_TEXT } from "../../constant/text";
import { nextMonth,pervMonth } from "../../features/userDatePickerSlice";
import { useDispatch, useSelector } from "react-redux";
import DatePickerMonthBody from "./components/DatePickerMonthBody";
export default function DatePickerOneMonth({
  monthData,
  clickDirection = null,
  thisIsSecond
}) {
  const canNext = useSelector((state) => state.userDatePicker.canNext);
  const canPerv = useSelector((state) => state.userDatePicker.canPerv);
  const theDispatch = useDispatch();
  if (clickDirection === -1) {
    return (
      <div className="py-4 px-2 my-1 w-[450px] min-h-[400px] flex flex-col">
        <DatePickerMonthHeader
          monthName={monthData.monthName}
          yearNumber={monthData.year}
          className={"max-w-md"}
          PervIcon={true}
          PervOnClick={() => {
            theDispatch(pervMonth());
          }}
          canPerv={canPerv}
        />
       <DatePickerMonthBody thisIsSecond={thisIsSecond} monthData={monthData}/>
      </div>
    );
  }
  if (clickDirection === 1) {
    return (
      <div className="py-4 px-2 my-1 w-[450px]  min-h-[400px] flex flex-col">
        <DatePickerMonthHeader
          monthName={monthData.monthName}
          yearNumber={monthData.year}
          className={"max-w-md"}
          NextIcon={true}
          NextOnClick={() => {
            theDispatch(nextMonth());
          }}
          canNext={canNext}
        />
            <DatePickerMonthBody  thisIsSecond={thisIsSecond} monthData={monthData}/>
      </div>
    );
  }
  if (clickDirection === 0) {
    return (
      <div className="py-4 px-2 my-2 w-[450px]  min-h-[400px] flex flex-col">
        <DatePickerMonthHeader
          monthName={monthData.monthName}
          yearNumber={monthData.year}
          className={"max-w-md"}
          NextIcon={true}
          PervIcon={true}
          PervOnClick={() => {
            theDispatch(pervMonth());
          }}
          NextOnClick={() => {
            theDispatch(nextMonth());
          }}
          canPerv={canPerv}
          canNext={canNext}
        />
            <DatePickerMonthBody  thisIsSecond={thisIsSecond} monthData={monthData}/>
      </div>
    );
  }
  return (
    <div className="py-4 px-2 my-2 w-[450px]  min-h-[400px] flex flex-col">
      <DatePickerMonthHeader
        monthName={monthData.monthName}
        yearNumber={monthData.year}
        className={"max-w-md"}
      />
         <DatePickerMonthBody monthData={monthData}/>
    </div>
  );
}
