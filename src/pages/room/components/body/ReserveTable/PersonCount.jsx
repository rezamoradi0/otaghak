import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPersonCount } from "../../../../../features/userDatePickerSlice";
import {
  ICON_FLASH,
  ICON_GROUP,
  ICON_LEFT,
} from "../../../../../constant/fontIcons";
import { RESERVE_TABLE_TEXT } from "../../../../../constant/text";
import { e2p } from "../../../../../utils/functions/DateFunc";
export default function PersonCount({ capacity, maxGuests = 0,isOpen,setIsOpen }) {
  const [theText, setTheText] = useState("");
  const datePickerPersonState = useSelector((state) => {
    return state.userDatePicker.personCount;
  });
  const theDispatch = useDispatch();
  const personCountList = useMemo(() => {
    return Array(capacity + maxGuests)
      .fill()
      .map((_, index) => {
        const countOfPersons = index + 1 > capacity ? capacity : index + 1;
        const moreOfPersons = index + 1 > capacity ? index + 1 - capacity : 0;
        return (
          <div
            className="text-gray-600 cursor-pointer hover:bg-gray-100 p-1"
            onClick={() => {
              theDispatch(
                setPersonCount({ count: countOfPersons, more: moreOfPersons })
              );
              setIsOpen(false);
            }}
            key={index}
          >
            {e2p(index + 1)} نفر{" "}
            {moreOfPersons > 0
              ? `(${e2p(countOfPersons)} نفر + ${e2p(moreOfPersons)} اضافه)`
              : ``}
          </div>
        );
      });
  }, [capacity, maxGuests]);
  useEffect(() => {
    setTheText(
      <>
        {e2p(datePickerPersonState.count + datePickerPersonState.more)} نفر{" "}
        {datePickerPersonState.more > 0
          ? `(${e2p(datePickerPersonState.count)} نفر + ${e2p(
              datePickerPersonState.more
            )} اضافه)`
          : ``}
      </>
    );
  }, [datePickerPersonState]);

  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsOpen((lastState) => !lastState);
        }}
        className={`${
          datePickerPersonState.count > 0
            ? " border-gray-700 text-gray-800"
            : ""
        } border my-4 rounded-md min-h-[50px] flex items-center justify-between px-4 text-gray-400`}
      >
        <span>
          <ICON_GROUP className="mx-2" />
          {datePickerPersonState.count > 0
            ? theText
            : RESERVE_TABLE_TEXT.personCount}
        </span>
        <span>
          <ICON_LEFT className="mt-1" />{" "}
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full bg-white bottom-0 translate-y-full max-h-[240px] overflow-y-scroll">
          <div
            className="text-gray-600 cursor-pointer hover:bg-gray-100 p-1"
            onClick={() => {
              theDispatch(setPersonCount({ count: 0, more: 0 }));
              setIsOpen(false);
            }}
          >
            {RESERVE_TABLE_TEXT.personCount}
          </div>
          {personCountList}
        </div>
      )}
    </div>
  );
}
