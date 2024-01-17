import { ICON_FLASH } from "../../../constant/fontIcons";
import { twMerge } from "tailwind-merge";
import { e2p } from "../../../utils/functions/DateFunc";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDay,
  addDay,
  clearDay,
} from "../../../features/userDatePickerSlice";
import { useEffect, useState } from "react";
import { DATE_COMPONENT_TEXT } from "../../../constant/text";
export default function DatePickerDay({
  value = "",
  dayNumber,
  data,
  day,
  dayRealNumber,
  monthIndex,
  monthName,
  year,
  thisIsSecond
}) {
 
  const [dynamicStyle, setDynamicStyle] = useState(null);
  const theDispatch = useDispatch();
  const selectedDaysInfoState = useSelector((state) => {
    return state.userDatePicker.daysInfo;
  });

  const clickHandler = () => {
    if ((dayRealNumber >= day && data.available) || (!day && data.available)) {
      theDispatch(selectDay({ monthIndex, day: dayRealNumber }));
    }
  };
  const addDayHandler = (monthName, dayRealNumber, year) => {
    if(thisIsSecond)return;
    const monthNumber = DATE_COMPONENT_TEXT.monthNumber[monthName];
    const day = data.discount
      ? {
          year: year,
          month: monthNumber,
          day: dayRealNumber,
          dayName:DATE_COMPONENT_TEXT.dayNames[(dayNumber-1)%7],
          discountedPrice: data.discountedPrice,
          price: data.price,
        }
      : {
          year: year,
          month: monthNumber,
          dayName:DATE_COMPONENT_TEXT.dayNames[(dayNumber-1)%7],
          day: dayRealNumber,
          price: data.price,
        };

    theDispatch(addDay(day));
  };
  const clearDayHandler = () => {
    theDispatch(clearDay());
  };
  useEffect(() => {
    if (
      (selectedDaysInfoState.enterDay.day === dayRealNumber &&
        selectedDaysInfoState.enterDay.monthIndex === monthIndex) ||
      (selectedDaysInfoState.exitDay.day === dayRealNumber &&
        selectedDaysInfoState.exitDay.monthIndex === monthIndex)
    ) {
      //first Day Selected or Last Day Selected
      if (
        selectedDaysInfoState.exitDay.day === dayRealNumber ||
        selectedDaysInfoState.exitDay.day
      ) {
        // if selected second or finished and adding first
        addDayHandler(monthName, dayRealNumber, year);
      } else {
        clearDayHandler();
      }
      //checking for weekend => red text
      dayNumber % 7 === 0
        ? setDynamicStyle(" bg-gray-700  [&>span:nth-child(3)]:text-white")
        : setDynamicStyle(" bg-gray-700 text-white [&>*]:text-white");
    } else if (
      selectedDaysInfoState.enterDay.day &&
      selectedDaysInfoState.exitDay.day &&
      data?.available
    ) {
      //selected Two Days
      if (
        selectedDaysInfoState.enterDay.monthIndex ===
        selectedDaysInfoState.exitDay.monthIndex
      ) {
        //One Month selected
        if (
          selectedDaysInfoState.enterDay.day < dayRealNumber &&
          dayRealNumber < selectedDaysInfoState.exitDay.day &&
          monthIndex === selectedDaysInfoState.exitDay.monthIndex
        ) {
          setDynamicStyle(" bg-gray-200 ");
          addDayHandler(monthName, dayRealNumber, year);
        }
      } else {
        // Two Month selected
        if (
          monthIndex === selectedDaysInfoState.enterDay.monthIndex &&
          dayRealNumber > selectedDaysInfoState.enterDay.day
        ) {
          setDynamicStyle(" bg-gray-200 ");
          addDayHandler(monthName, dayRealNumber, year);
        } else if (
          monthIndex === selectedDaysInfoState.exitDay.monthIndex &&
          dayRealNumber < selectedDaysInfoState.exitDay.day
        ) {
          setDynamicStyle(" bg-gray-200 ");
          addDayHandler(monthName, dayRealNumber, year);
        }
      }
    } else if (dynamicStyle) {
      setDynamicStyle(null);
    }
  }, [selectedDaysInfoState]);
  if (!data) {
    return (
      <div
        className={`col-span-1 row-span-1 m-[1px] rounded-md text-xs text-gray-500 text-center flex flex-col justify-center items-center  w-3/4  min-h-[50px]`}
        key={crypto.randomUUID()}
      >
        <span> {value}</span>
      </div>
    );
  }

  let _classNames = "";
  if (dayNumber) {
    _classNames += " text-lg ";
  }
  if (dayRealNumber == day) {
    _classNames += " rounded-md border border-black ";
  }
  if (value && dayNumber) {
    _classNames += dayNumber % 7 === 0 ? " text-red-500 " : " ";
  }
  return (
    <div
      onClick={() => {
        clickHandler();
      }}
      className={twMerge(
        `col-span-1 row-span-1 m-[2px] rounded-md ${dynamicStyle} text-xs text-gray-500 text-center flex flex-col justify-center items-center relative   w-3/4   min-h-[50px] `,
        _classNames
      )}
      key={crypto.randomUUID()}
    >
      {(day && dayRealNumber < day) || !data.available ? (
        <>
          {" "}
          <span className=" -my-2"> {value} </span>
          <span
            className={`${
              dayNumber % 7 === 0 ? "bg-red-500" : "bg-black"
            } w-full max-w-[22px] top-1/2 -rotate-45    h-[1px] absolute`}
          ></span>
        </>
      ) : (
        <>
          <span className="ml-auto mr-1 -my-2">
            {data.isPrime ? (
              <ICON_FLASH className="fa-solid text-yellow-400 text-[10px]" />
            ) : (
              <ICON_FLASH className={"text-transparent text-[10px] "} />
            )}
          </span>

          <span className="-my-2"> {value}</span>
          {data.discount ? (
            <>
              <span className="text-[8px] text-gray-600 -my-[10px] line-through decoration-red-500">
                {e2p(data.price.toLocaleString().slice(0, -4))}
              </span>
              <span className="text-[10px] -my-2">
                {e2p(data.discountedPrice.toLocaleString().slice(0, -4))}
              </span>
            </>
          ) : (
            <>
              <span className="text-[8px] -my-[10px] ">&nbsp;</span>
              <span className="text-[10px] -my-2">
                {e2p(data.price.toLocaleString().slice(0, -4))}
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
}
