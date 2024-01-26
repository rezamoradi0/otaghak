import { useRef, useState, useEffect, useMemo } from "react";
import { RESERVE_TABLE_TEXT, ROOM_PAGE_TEXT } from "../../../../../constant/text";
import { useSelector } from "react-redux";
import MoreButton from "../../../../../components/MoreButton";
import ReserveTable from "../ReserveTable";
import { e2p } from "../../../../../utils/functions/DateFunc";

export default function StickyReserveTable({data}) {
  const btnRef=useRef();
  const [btnTextState, setBtnTextState] = useState(
    () => RESERVE_TABLE_TEXT.selectDate
  );
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [btnState, setBtnState] = useState(0);
  const [startDayDiscount, setStartDayDiscount] = useState(0);
  const datePickerState = useSelector((state) => {
    return state.userDatePicker;
  });
 
  const ReserveTableObj=useMemo(()=>{return <ReserveTable
    className="w-full "
    data={data}
    pinToBottom={true}
    getDiscountJsx={setStartDayDiscount}
  />;},[])
  useEffect(() => {
    if (datePickerState.selectedDays.length == 0) {
      setBtnState(0);
      setShowPriceInfo(false);
      setBtnTextState(RESERVE_TABLE_TEXT.selectDate);
    } else if (datePickerState.personCount.count === 0) {
      setBtnState(1);
      setShowPriceInfo(false);

      setBtnTextState(RESERVE_TABLE_TEXT.selectPersons);
    } else {
      setBtnState(2);
      setShowPriceInfo(true);
      setBtnTextState(RESERVE_TABLE_TEXT.reserveRequest);
    }
  }, [datePickerState.selectedDays, datePickerState.personCount]);
  return (
    <div className=" bg-white z-50 w-full border px-2 py-3  fixed bottom-0 left-0 flex justify-between">
   
     { useMemo(()=>{
         return   <MoreButton 
             className=" py-2  text-center justify-center  px-3 h-[50px] text-base w-5/12 border-red-600 bg-red-500 rounded-md  text-white"
             icon={<></>}
             header={btnTextState}
             text={btnTextState}
             PopupBody={ReserveTableObj}
             PopupPlayClassName="bottom-full rounded-none"
          
     
           />
      },[])}

  
     
<p dir="rtl" className="text-gray-500 my-4 flex flex-wrap justify-between items-center">
        <span>
          {" "}
          <span>{RESERVE_TABLE_TEXT.fromPrice} </span>{" "}
          <span className="text-gray-700 text-xl font-semibold">
            {
            datePickerState.selectedDays.length > 0 &&
            datePickerState.selectedDays[0].discountedPrice
              ? e2p(
                  datePickerState.selectedDays[0].discountedPrice
                    .toLocaleString()
                    .replaceAll(",", "،")
                )
              : e2p(
                  data.availablePrice.price
                    .toLocaleString()
                    .replaceAll(",", "،")
                )}
          </span>{" "}
          <span>{ROOM_PAGE_TEXT.price}</span>
        </span>
        <span>
          {(datePickerState.selectedDays.length > 0 &&
            datePickerState.selectedDays[0].discountedPrice &&
            startDayDiscount) ||
            ""}
        </span>
      </p>
    </div>
  );
}
