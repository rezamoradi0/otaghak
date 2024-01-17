import { DATE_COMPONENT_TEXT } from "../../../constant/text";
import { e2p } from "../../../utils/functions/DateFunc";
import DatePickerDay from "./DatePickerDay";


export default function DatePickerMonthBody({ monthData ,thisIsSecond}) {
  // console.log(monthData);
  return (
    <div className="grid-cols-7 grid  grid-rows-7  grid-flow-row place-items-center h-full">
      {Object.values(DATE_COMPONENT_TEXT.dayNames).map((value, i) => {
        return <DatePickerDay key={i} value={value} />;
      })}
      {Array(monthData.dayStartIndex)
        .fill()
        .map((_, index) => (
          <DatePickerDay key={index} />
        ))}
      {Array(monthData.dayCount)
        .fill()
        .map((_, index) => (
          <DatePickerDay
            value={e2p(index + 1)}
            key={index}
            dayNumber={monthData.dayStartIndex + index + 1}
            data={monthData.daysInfo.days[index]}
            dayRealNumber={index + 1}
            day={monthData.day}
            monthIndex={monthData.monthIndex}
            monthName={monthData.monthName}
            year={monthData.year}
            thisIsSecond={thisIsSecond}
          />
        ))}
    </div>
  );
}
