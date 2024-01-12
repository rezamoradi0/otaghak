import { twMerge } from "tailwind-merge";
import { DATE_COMPONENT_TEXT } from "../../../constant/text";
import { e2p } from "../../../utils/functions/DateFunc";
import { ICON_FLASH } from "../../../constant/fontIcons";

function DayDiv({ value = "", dayNumber, data }) {
  let _classNames = "";
  if (dayNumber) {
    _classNames += "text-lg";
  }
  if (value && dayNumber) {
    _classNames += dayNumber % 7 === 0 ? " text-red-500 " : " ";
  }
  return (
    <div
      className={twMerge(
        `col-span-1 row-span-1 text-xs text-gray-500 text-center flex flex-col justify-center items-center`,
        _classNames
      )}
      key={crypto.randomUUID()}
    >
      
      {data ? <>
        {<span className="ml-auto mr-3">{data.isPrime?<ICON_FLASH className="fa-solid text-yellow-400 text-[10px]"/>:<ICON_FLASH className={"text-transparent text-[10px]"}/>}</span>}
        <span className="-my-2"> {value}</span>
        <span className="text-[10px] -my-2">{e2p(data.price.toLocaleString().slice(0, -4))}</span> 
      </>:
      <span> {value}</span>}
    </div>
  );
}
export default function DatePickerMonthBody({ monthData }) {
  return (
    <div className="grid-cols-7 grid  grid-rows-6 grid-flow-row h-full">
      {Object.values(DATE_COMPONENT_TEXT.dayNames).map((value, i) => {
        return <DayDiv key={i} value={value} />;
      })}
      {Array(monthData.dayStartIndex)
        .fill()
        .map((_, index) => (
          <DayDiv key={index} />
        ))}
      {Array(monthData.dayCount)
        .fill()
        .map((_, index) => (
          <DayDiv
            value={e2p(index + 1)}
            key={index}
            dayNumber={monthData.dayStartIndex + index + 1}
            data={monthData.daysInfo.days[index]}
          />
        ))}
    </div>
  );
}
