import { useState } from "react";

const SearchBox = (props) => {
   const [showSearchBox,setShowSearchBox]=useState(false);
   const  [showList,setShowList]=useState(false);
  
  return (
    <div className={`${!showSearchBox&&"invisible"} relative w-full h-5/6 ml-24  mr-4 border border-gray-800 rounded-full  flex justify-between items-center py-2 pr-6 `}>
      <button
        className="flex items-center p-4 ml-2 hover:bg-gray-200 rounded-full"
        type="button"
      >
        <i className="fa-regular fa-magnifying-glass text-gray-500 text-lg my-auto"></i>
      </button>
      <input
        dir="rtl"
        className="w-full mx-2 outline-none border-none "
        type="text"
        name="searchBox"
        placeholder="کجا می خواهی بری ؟ "
      />
      <div className={`${!showList&&"hidden"} result flex flex-col justify-start absolute border border-red-500 w-full h-full -bottom-4  translate-y-full`}> 
        
      </div>
    </div>
  );
};

export default SearchBox;
