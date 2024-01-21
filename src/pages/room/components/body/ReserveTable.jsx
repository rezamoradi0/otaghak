import { useSelector, useDispatch } from "react-redux";
import { RESERVE_TABLE_TEXT, ROOM_PAGE_TEXT } from "../../../../constant/text";
import { e2p } from "../../../../utils/functions/DateFunc";
import { ICON_AMENITIES } from "../../../../constant/fontIcons";
// import DateReservation from "./Information/components/DateReservation";
import DatePickerTable from "../../../../components/datePicker/DatePickerTable";
import { useEffect, useRef, useState } from "react";
import MoreButton from "../../../../components/MoreButton";
import EnterExitDate from "./ReserveTable/EnterExitDate";
import PersonCount from "./ReserveTable/PersonCount";
import PriceInfo from "./ReserveTable/PriceInfo";
export default function ReserveTable({ parentMarginTop = 20, data }) {
  const datePickerRef = useRef();
  const datePickerBgRef = useRef();
  //useReducer is Better
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [openedHeight, setOpenedHeight] = useState(0);
  const [btnState, setBtnState] = useState(0);
  const [btnTextState, setBtnTextState] = useState(
    () => RESERVE_TABLE_TEXT.selectDate
  );
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [startDayDiscount,setStartDayDiscount]=useState(0);
  const theDomPublicState = useSelector((state) => {
    return state.domPublic.publicDomElements;
  });

  const datePickerState = useSelector((state) => {
    return state.userDatePicker;
  });

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
  function BtnSelectDate() {
    setIsOpenDatePicker(true);
  }
  function MainBtnHandler() {
    switch (btnState) {
      case 0:
        setIsOpenDatePicker(true);
        break;
      case 1:
        setIsOpen(true);
        break;
      //GetReservation Here
      default:
        break;
    }
  }
  useEffect(() => {
    const ExitDatePicker = () => {
      console.log("CLICKED");
      setIsOpenDatePicker(false);
    };
    if (isOpenDatePicker) {
      setOpenedHeight(
        datePickerRef.current?.offsetHeight / 2 + parentMarginTop * 5
      );
      datePickerBgRef.current?.addEventListener("click", ExitDatePicker, true);
    } else {
      setOpenedHeight(10);
      datePickerBgRef.current?.removeEventListener(
        "click",
        ExitDatePicker,
        true
      );
    }
    return () => {
      datePickerBgRef.current?.removeEventListener(
        "click",
        ExitDatePicker,
        true
      );
    };
  }, [isOpenDatePicker]);
  return (
    <div
      style={
        !!theDomPublicState?.header
          ? {
              top: `${theDomPublicState.header.value + parentMarginTop -15}px`,
              marginBottom: `${openedHeight}px`,
            }
          : {}
      }
      className={`w-1/3 flex flex-col   h-fit  rounded-3xl min-h-[200px] border border-gray-100 p-2  sticky shadow-xl `}
    >
      <p className="text-gray-500 my-4 flex flex-wrap justify-between">
        <span>
          {" "}
          <span>{RESERVE_TABLE_TEXT.fromPrice} </span>{" "}
          <span className="text-gray-700 text-xl font-semibold">
            {startDayDiscount?e2p(datePickerState.selectedDays[0].discountedPrice.toLocaleString().replaceAll(",","،")): e2p(
              data.availablePrice.price.toLocaleString().replaceAll(",", "،")
            )}
          </span>{" "}
          <span>{ROOM_PAGE_TEXT.price}</span>
        </span>
          <span>
          {startDayDiscount||""}
            </span>
      </p>
      <EnterExitDate
        onClick={() => {
          BtnSelectDate();
        }}
        isVertical={true}
      />
      <PersonCount
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        capacity={data.capacity}
        maxGuests={data.maxGuests}
      />
      <p className="text-gray-500 my-2">{e2p(RESERVE_TABLE_TEXT.kidsRoles)}</p>
      <PriceInfo
        display={showPriceInfo}
        morePricePerPerson={data.reservation.additionalPrice}
        setStartDayDiscount={setStartDayDiscount}
      />
      <hr className="my-2" />
      <button
        onClick={() => {
          MainBtnHandler();
        }}
        className="py-2 px-6 min-h-[60px] w-full border-red-600 bg-red-500 rounded-md text-xl text-white"
      >
        {btnTextState}
      </button>

      {isOpenDatePicker && (
        <>
          <div
            ref={datePickerRef}
            className="absolute top-0 z-10 bg-white left-0  border rounded-xl  px-5 "
          >
            <EnterExitDate isVertical={false}>
              {RESERVE_TABLE_TEXT.datePickerJourney}
            </EnterExitDate>
            <DatePickerTable
              showTagsInfo={false}
              thisIsSecond={true}
              DatePickerData={data.reservation.dates}
            >
              <hr className=" w-full text-red-400" />
              <div className="flex items-center justify-between z-50 py-1">
                <MoreButton
                  icon={<></>}
                  text={
                    <>
                      <ICON_AMENITIES /> {RESERVE_TABLE_TEXT.datePickerGuide}
                    </>
                  }
                />
                <button
                  onClick={() => {
                    setIsOpenDatePicker(false);
                  }}
                  className="py-2 bg-gray-700 text-gray-100 rounded-lg px-5"
                >
                  {" "}
                  تایید تاریخ
                </button>
              </div>
            </DatePickerTable>
          </div>
          <div
            ref={datePickerBgRef}
            className="absolute z-0 h-screen w-screen  -top-8  left-0 "
          ></div>
        </>
      )}
    </div>
  );
}
