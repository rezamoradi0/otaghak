import React, { useEffect, useRef } from "react";
import logo from "./../assets/img/otaghakLogoComplete.svg";
import SearchBox from "./searchBox/SearchBox";
import { useLocation } from "react-router-dom";
import RoomHeader from "../pages/room/components/header/RoomHeader";
import { ROOM_PATH } from "../constant/address";
import { useDispatch } from "react-redux";
import { addObject } from "../features/domPublicSlice";
import { ICON_CORRECT } from "../constant/fontIcons";
const Header = (props) => {
  const theLocation =useLocation();
  const theDispatch=useDispatch();
  const headerRef=useRef();

  const headerNav = () => {
    return (      <div className="flex  lg:flex-col-reverse lg:gap-y-2 md:hidden bg-white justify-between min-h-[80px] w-full flex-wrap-reverse items-stretch  py-3 px-12">
      <nav className=" w-fit  min-w-fit max-w-[50%]  h-full  flex justify-between items-center [&_i]:mx-1 [&_i]:text-2xl [&>a]:inline-flex [&>a]:items-center [&>a]:justify-between  [&>a]:px-0 [&>a]:py-2 [&>a>span]:mx-1 text-gray-500 font-semibold text-sm">
     
        <a  href="#"><span>{props.HeaderObj.login.text}</span> <span><i className="fa-regular fa-user-hair"></i></span></a>
        <a href={`tel:${props.HeaderObj.support.tel}`}><span>{props.HeaderObj.support.text}</span> <span>< i className="fa-sharp fa-regular fa-comment-dots"> </i></span></a>
        <a href={props.HeaderObj.application.url}><span>{props.HeaderObj.application.text} </span> <span><i className="fa-regular fa-mobile"></i></span></a>
        <a className="  text-green-800" href={props.HeaderObj.application.url}><span>{props.HeaderObj.host.text} </span> <span><ICON_CORRECT/></span></a>

      </nav>
        <div  className=" w-1/2  lg:w-full md:hidden h-full   gap-x-4 flex-row-reverse flex justify-start items-center">
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
    theDispatch(addObject({key:"header",value:headerRef.current.offsetHeight,height:headerRef.current.offsetHeight}))
  },[])
  return (
    <header ref={headerRef} className="w-full z-10 md:border-0 border fixed top-0  flex flex-col justify-start items-center" >
      {/* <div className="h-16 w-full bg-red-500">
      </div> */}
      {headerNav()}
      {headerAdditional()}
    </header>
  );
};
export default Header;
