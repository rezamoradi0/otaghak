import React, { useEffect, useRef } from "react";
import logo from "./../assets/img/otaghakLogoComplete.svg";
import SearchBox from "./searchBox/SearchBox";
import { useLocation } from "react-router-dom";
import RoomHeader from "../pages/room/components/header/RoomHeader";
import { ROOM_PATH } from "../constant/address";
import { useDispatch } from "react-redux";
import { addObject } from "../features/domPublicSlice";
const Header = (props) => {
  const theLocation =useLocation();
  const theDispatch=useDispatch();
  const headerRef=useRef();

  const headerNav = () => {
    return (      <div className="flex  bg-white justify-between h-[80px] w-full items-stretch  py-3 px-12">
      <nav className=" h-full w-5/12 flex justify-between items-center [&_i]:mx-1 [&_i]:text-2xl [&>a]:inline-flex [&>a]:items-center [&>a]:justify-between  [&>a]:px-0 [&>a]:py-2 [&>a>span]:mx-1 text-gray-500 font-semibold text-sm">
        <a  href="#"><span>{props.HeaderObj.login.text}</span> <span><i className="fa-regular fa-user-hair"></i></span></a>
        <a href={props.HeaderObj.application.url}><span>{props.HeaderObj.application.text} </span> <span><i className="fa-regular fa-mobile"></i></span></a>
        <a href={`tel:${props.HeaderObj.support.tel}`}><span>{props.HeaderObj.support.text}</span> <span>{props.HeaderObj.support.tel.replace("+98","0")}</span> <span>< i className="fa-sharp fa-regular fa-comment-dots"> </i></span></a>
        <button className="px-6 py-2 rounded-3xl border border-green-800 text-green-800" type="button">{props.HeaderObj.host.text} </button>
      </nav>
        <div className="w-1/2 h-full  flex flex-row-reverse justify-end items-center">
        <img src={logo} alt="site-logo" width="100" className="h-full"/>
      <SearchBox/>
        </div>
         </div>
    );
  };
  function headerAdditional(){
   if(theLocation.pathname=="/") return <></>;
   else if(theLocation.pathname.startsWith(`/${ROOM_PATH}/`)){
    return <RoomHeader/>
   }
  }
  useEffect(()=>{
    theDispatch(addObject({key:"header",value:headerRef.current.offsetHeight}))
  },[])
  return (
    <header ref={headerRef} className="w-full z-10 border fixed top-0  flex flex-col justify-start items-center" >
      {/* <div className="h-16 w-full bg-red-500">
      </div> */}
      {headerNav()}
      {headerAdditional()}
    </header>
  );
};
export default Header;
