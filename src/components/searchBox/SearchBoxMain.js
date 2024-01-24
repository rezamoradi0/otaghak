import { useEffect, useMemo, useState } from "react";
import DatePicker from "../dateBox/DatePicker";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import { useRef } from "react";
import PeopleCounter from "./PeopleCounter";
import DatePickerTable from "./../datePicker/DatePickerTable"
const SearchBoxMain = (props) => {
  const [showDate, setShowDate] = useState(false);
  const popoverRef = useRef(null);
  const [showPeopleCounter,setShowPeopleCounter]=useState(false);
  const [peopleCount,setPeopleCount]=useState(0);
  const popoverPeopleRef = useRef(null);

  const [showSearch, setShowSearch] = useState(false);
  const popoverSearchRef = useRef(null);

  const [distention,setDistention]=useState(null);

  const [showSearchRes,setShowSearchRes]=useState(true);
  const mainState = useSelector((state) => {
    return state.main;
  });
  //should be custom hook 
  useEffect(() => {
    const clickHandle = (event) => {
     // alert("this make Some Delay => and working good");
      // console.log(popoverRef.current);
      // console.log(event.target);
   
      const haveTarget = popoverRef.current.contains(event.target);
      console.log(haveTarget);
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
      console.log("haveTarget "+haveTarget)
     
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
    console.log(mainState.mainData.time);
  }, [mainState]);
 
  return (
    <div
      dir="rtl"
      className=" z-0 w-10/12 h-[110px]   flex  [&>label]:first-of-type:pr-8  [&>label]:py-6  [&>label>label:nth-of-type(2)]:text-black [&>label>label:nth-child(2)]:font-semibold [&>label>label]:text-gray-400 bg-slate-50 rounded-lg [&>label]:justify-center  [&>label>input]:outline-none [&>label>input]:border-none [&>label_input]:bg-transparent [&>label_input]:text-black [&>label>label]:cursor-pointer [&>label>label]:mb-2"
    >
      <label htmlFor="distention" 
        onClick={()=>{
           if(!showSearch) setShowSearch(true);
    

        }}
      
        className="w-1/3 flex flex-col  rounded-s-lg focus-within:bg-gray-200 "
      >
        <label htmlFor="distention" >مقصد</label>
        
     {<div ref={popoverSearchRef}>
        <SearchBox id={"distention"} setShowRes={setShowSearchRes} showRes={showSearchRes} setShow={setShowSearch} show={showSearch} setDis={setDistention} inBox={true} />
        </div>
      
        }
      </label>
      <label
        onClick={() => {
         if(!showDate) setShowDate(true);
        }}
        className={`${showDate&&"bg-gray-200"} w-1/6 flex flex-col relative`}
      >
        <label htmlFor="get-time">تاریخ ورود</label>
        <label htmlFor="get-time" className="bold">
          کی میخوای بری ؟
        </label>
        {showDate && mainState.mainData && (
          <div  ref={popoverRef}>
            {/* <DatePicker time={mainState.mainData.time} /> */}
            {/* <DatePickerTable  time={mainState.mainData.time}/> */}
          </div>
        )}
      </label>
      <label
        onClick={() => {
          if(!showDate) setShowDate(true);
        }}
        className={`${showDate&&"bg-gray-200"} w-1/6 flex flex-col `}
      >
        <label htmlFor="get-time">تاریخ خروج</label>
        <label htmlFor="get-time" className="bold">
          کی میخوای برگردی ؟
        </label>
      </label>
      <label onClick={()=>{setShowPeopleCounter(true)}} className={`${showPeopleCounter&&"bg-gray-200"} relative w-1/6 flex flex-col`}>
        <label htmlFor="get-count">تعداد نفرات</label>
        <label htmlFor="get-count" className="bold">
          {" "}
          {peopleCount==0?"چند نفرید ؟":`${peopleCount} نفر`}
        </label>
          {showPeopleCounter&&<div ref={popoverPeopleRef}>
            <PeopleCounter count={peopleCount} setCount={setPeopleCount}/>
          </div> }
    
      </label>
      <button
        className=" mx-8  w-1/6 h-3/5 flex justify-center items-center my-auto bg-red-500 rounded-md text-white "
        type="button"
      >
        {" "}
        <i className="fa-regular fa-magnifying-glass mx-2 text-gray-50 text-lg my-auto"></i>{" "}
        جستوجو{" "}
      </button>
    </div>
  );
};

export default SearchBoxMain;
