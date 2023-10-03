import React, { useEffect } from "react";
import logo from "./../assets/img/otaghakLogoComplete.svg";
import SearchBox from "./searchBox/SearchBox";
const Header = (props) => {
  const headerNav = () => {
    return (      <div className="flex  justify-between h-[100px] w-full items-stretch  py-3 px-12">
      <nav className=" h-full w-1/2 flex justify-between items-center [&_i]:mx-2 [&_i]:text-xl [&>a]:inline-flex [&>a]:items-center [&>a]:justify-between  [&>a]:px-0 [&>a]:py-2 [&>a>span]:mx-1 text-gray-500 font-semibold text-sm">
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
  return (
    <header className="w-full border   flex flex-col justify-start items-center" >
      <div className="h-16 w-full bg-red-500">
      </div>
      {headerNav()}
     
    </header>
  );
};
export default Header;
