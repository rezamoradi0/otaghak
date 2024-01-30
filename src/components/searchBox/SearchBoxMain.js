import { useEffect, useMemo, useState } from "react";
import DatePicker from "../dateBox/DatePicker";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import { useRef } from "react";
import PeopleCounter from "./PeopleCounter";
import DatePickerTable from "./../datePicker/DatePickerTable";
import { e2p } from "../../utils/functions/DateFunc";
const SearchBoxMain = (props) => {
  const [showDate, setShowDate] = useState(false);
  const popoverRef = useRef(null);
  const [showPeopleCounter, setShowPeopleCounter] = useState(false);
  const [peopleCount, setPeopleCount] = useState(0);
  const popoverPeopleRef = useRef(null);

  const [showSearch, setShowSearch] = useState(false);
  const popoverSearchRef = useRef(null);

  const [distention, setDistention] = useState(null);

  const [showSearchRes, setShowSearchRes] = useState(true);

  const datePickerRef = useRef();
  const mainState = useSelector((state) => {
    return state.main;
  });
  const datePickerState=useSelector((state)=>{
    return state.userDatePicker.selectedDays;
  })

  //should be custom hook
  useEffect(() => {
    const clickHandle = (event) => {
      // alert("this make Some Delay => and working good");
      // console.log(popoverRef.current);
      // console.log(event.target);

      const haveTarget = popoverRef.current.contains(event.target);
      // console.log(haveTarget);
      if (popoverRef.current && !haveTarget) {
        setShowDate(false);
      }
    };
    if (showDate) {
      document.addEventListener("mousedown", clickHandle);
    }

    return () => {
      document.removeEventListener("mousedown", clickHandle);
    };
  }, [popoverRef, showDate]);
  useEffect(() => {
    const clickHandle2 = (event) => {
      const haveTarget = popoverPeopleRef.current.contains(event.target);
      console.log(haveTarget);
      if (popoverPeopleRef.current && !haveTarget) {
        setShowPeopleCounter(false);
      }
    };
    if (showPeopleCounter) {
      document.addEventListener("mousedown", clickHandle2);
    }

    return () => {
      document.removeEventListener("mousedown", clickHandle2);
    };
  }, [popoverPeopleRef, showPeopleCounter]);
  useEffect(() => {
    const clickHandle = (event) => {
      // alert("this make Some Delay => and working good");
      // console.log(popoverRef.current);
      // console.log(event.target);

      const haveTarget = popoverSearchRef.current.contains(event.target);
      console.log("haveTarget " + haveTarget);

      if (popoverSearchRef.current && !haveTarget) {
        setShowSearch(false);
        setShowSearchRes(false);
      }
    };
    if (showSearch) {
      document.addEventListener("mousedown", clickHandle);
    }

    return () => {
      document.removeEventListener("mousedown", clickHandle);
    };
  }, [popoverSearchRef, showSearch]);

  useEffect(() => {
    // console.log(mainState.mainData.time);
  }, [mainState]);
useEffect(()=>{
  console.log(datePickerState);
},[datePickerState])
  return (
    <div
      dir="rtl"
      className=" md:flex-col md:w-fit md:h-fit md:my-6 md:[&>label]:py-2 md:[&>label]:w-full  z-0 w-10/12 h-[110px]   flex  [&>label]:first-of-type:pr-8  [&>label]:py-6  [&>label>label:nth-of-type(2)]:text-black [&>label>label:nth-child(2)]:font-semibold [&>label>label]:text-gray-400 bg-slate-50 rounded-lg [&>label]:justify-center  [&>label>input]:outline-none [&>label>input]:border-none [&>label_input]:bg-transparent [&>label_input]:text-black [&>label>label]:cursor-pointer [&>label>label]:mb-2"
    >
      <label
        htmlFor="distention"
        onClick={() => {
          if (!showSearch) setShowSearch(true);
        }}
        className="w-1/3 flex flex-col  rounded-s-lg focus-within:bg-gray-200 "
      >
        <label htmlFor="distention">مقصد</label>

        {
          <div className="z-50" ref={popoverSearchRef}>
            <SearchBox
              id={"distention"}
              setShowRes={setShowSearchRes}
              showRes={showSearchRes}
              setShow={setShowSearch}
              show={showSearch}
              setDis={setDistention}
              inBox={true}
            />
          </div>
        }
      </label>
      <label
        onClick={() => {
          if (!showDate) setShowDate(true);
        }}
        className={`${showDate && "bg-gray-200"} w-1/6 flex flex-col relative`}
      >
        <label htmlFor="get-time">تاریخ ورود</label>
        <label htmlFor="get-time" className="bold">
        {datePickerState[0] ? (
            <div>
              {" "}
              <span className="font-semibold">{datePickerState[0]?.dayName}</span>
              <span dir="rtl" className="font-normal">
                {` ${e2p(datePickerState[0]?.year)}/${e2p(
                  datePickerState[0]?.month
                )}/${e2p(datePickerState[0]?.day)}`}
              </span>
            </div>
          ):
          <span>
            
             کی میخوای بری ؟
          </span>
          }
       
        </label>
        {showDate && mainState.mainData && (
          <div
            className="mx-auto [&>div:first-of-type]:bg-white [&>div:first-of-type]:z-50  h-fit [&>div:first-of-type]:absolute [&>div:first-of-type]:w-fit [&>div:first-of-type]:right-0 [&>div:first-of-type]:top-28 md:[&>div:first-of-type]:translate-x-[20%] md:[&>div:first-of-type>div:first-of-type]:flex-col"
            ref={popoverRef}
          >
            {/* <DatePicker time={mainState.mainData.time} /> */}
            {console.log(mainState.mainData.time)}
            <DatePickerTable
              DatePickerData={{
                date: mainState.mainData.time,
                months: mainState.mainData.months,
              }}
              ref={datePickerRef}
            >
              <div
                className=" hover:bg-teal-600 text-center bottom-0 hover:cursor-pointer text-lg px-3 mx-16 mb-8 py-2 rounded-md  bg-zinc-600 text-white"
                onClick={(e) => {
                  console.log("CLICKED CLOSE");
                  setShowDate(false);
                }}
              >
                {" "}
                تایید
              </div>
            </DatePickerTable>
          </div>
        )}
      </label>
      <label
        onClick={() => {
          if (!showDate) setShowDate(true);
        }}
        className={`${showDate && "bg-gray-200"} w-1/6 flex flex-col `}
      >
        <label htmlFor="get-time">تاریخ خروج</label>
        <label htmlFor="get-time" className="bold">
        {datePickerState[datePickerState.length - 1] ? (
            <div>
              {" "}
              <span className="font-semibold">
                {datePickerState[datePickerState.length - 1]?.dayName}
              </span>
              <span dir="rtl" className="font-normal">
                {` ${e2p(
                  datePickerState[datePickerState.length - 1]?.year
                )}/${e2p(
                  datePickerState[datePickerState.length - 1]?.month
                )}/${e2p(datePickerState[datePickerState.length - 1]?.day)}`}
              </span>
            </div>
          ):
          <span>
               کی میخوای برگردی ؟
            </span>}
        </label>
      </label>
      <label
        onClick={() => {
          setShowPeopleCounter(true);
        }}
        className={`${
          showPeopleCounter && "bg-gray-200"
        } relative w-1/6 flex flex-col`}
      >
        <label htmlFor="get-count">تعداد نفرات</label>
        <label htmlFor="get-count" className="bold">
          {" "}
          {peopleCount == 0 ? "چند نفرید ؟" : `${peopleCount} نفر`}
        </label>
        {showPeopleCounter && (
          <div ref={popoverPeopleRef}>
            <PeopleCounter count={peopleCount} setCount={setPeopleCount} />
          </div>
        )}
      </label>
      <button
        className=" mx-8 md:justify-evenly md:mx-auto md:w-1/2 md:p-2 md:my-2 w-1/6 h-3/5 flex justify-center items-center my-auto bg-red-500 rounded-md text-white "
        type="button"
      >
        {" "}
        <i className="fa-regular fa-magnifying-glass mx-2 text-gray-50 text-lg my-auto"></i>{" "}
   <span>     جستوجو</span>
      </button>
    </div>
  );
};

export default SearchBoxMain;
