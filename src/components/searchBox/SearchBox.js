import { useEffect, useRef, useState } from "react";
import {
  useGetCitiesQuery,
  useGetSearchDefaultQuery,
  useGetSearchTextQuery,
} from "../../api/apiSlice";
import SearchItem from "./SearchItem";
const SearchBox = (props) => {
  const [showSearchBox, setShowSearchBox] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [searchQueryText, setSearchQueryText] = useState(null);
  const timeoutTemp = useRef();
  const timeoutTime = 1200; // ms
  const cityPath = "city/";
  const categoryPath = "landing/";
  //  const {data:citiesData,isSuccess,isLoading,isError,error}=useGetCitiesQuery();
  const {
    data: defaultData,
    isLoading,
    isSuccess: defaultIsSuccess,
    isError,
    error,
  } = useGetSearchDefaultQuery();

  const { data: searchQueryData, isSuccess: isSearchQuerySuccess } =
    useGetSearchTextQuery(searchQueryText);
  function handleSearchText(event) {

    clearTimeout(timeoutTemp.current);
    timeoutTemp.current = setTimeout(AfterTime, timeoutTime);
    setSearchText(event.target.value);
  }
  function AfterTime() {
    if (searchText.length > 1) {
      setSearchQueryText(searchText);
    }
  }
  function fillText(itemText,isCity) {
    setSearchText(itemText)
    props.setShow(false);
    props.setShowRes(false);

   
  }
  useEffect(()=>{},[]);
  function GetSearchResult() {
    if (defaultIsSuccess && searchText.length < 2) {
      if(props.inBox){
        if(!props.show)return <></>;
        return     <div
        dir="rtl"
        className={`
        flex z-50 absolute result  flex-col rounded-s-xl
         justify-start border border-slate-200 bg-white w-full max-h-[50vh] overflow-y-auto p-3 -bottom-7 translate-y-full`}
      >
        <p dir="rtl" className="mb-5  mt-3  text-blue-800 font-bold">
          {defaultData.bestCities.text}
        </p>
        {defaultData.bestCities.cities.map((city) => {
          return (
            <SearchItem
              key={city.id}
              residence={city.residence}
              text={city.text}
              link={city.name}
              path={cityPath}
              img={city.img}
              inBox={props.inBox}
              city={true}
              click={fillText}
            />
          );
        })}
        <p dir="rtl" className="mb-5  mt-3  text-blue-800 font-bold">
          {defaultData.bestCategories.text}
        </p>
        {defaultData.bestCategories.categories.map((category) => {
          return (
            <SearchItem
              key={category.id}
              residence={category.residence}
              text={category.text}
              link={category.name}
              path={categoryPath}
              img={category.img}
              inBox={props.inBox}
              city={false}
              click={fillText}
            />
          );
        })}
      </div>;
      }
     else return (
      <div
      dir="rtl"
      className={`
      hidden group-focus-within:flex z-50 absolute result  flex-col rounded-s-xl
       justify-start border border-slate-200 bg-white w-full max-h-[50vh] overflow-y-auto p-3 -bottom-1 translate-y-full`}
    >
      <p dir="rtl" className="mb-5  mt-3  text-blue-800 font-bold">
        {defaultData.bestCities.text}
      </p>
      {defaultData.bestCities.cities.map((city) => {
        return (
          <SearchItem
            key={city.id}
            residence={city.residence}
            text={city.text}
            link={city.name}
            path={cityPath}
            img={city.img}
            inBox={props.inBox}
          />
        );
      })}
      <p dir="rtl" className="mb-5  mt-3  text-blue-800 font-bold">
        {defaultData.bestCategories.text}
      </p>
      {defaultData.bestCategories.categories.map((category) => {
        return (
          <SearchItem
            key={category.id}
            residence={category.residence}
            text={category.text}
            link={category.name}
            path={categoryPath}
            img={category.img}
          />
        );
      })}
    </div>
      );
    } else if (searchText.length > 1 && isSearchQuerySuccess) {
      if(searchQueryData.length>0)
     {
      return (
        <div
          dir="rtl"
          className={`flex absolute z-50 result  flex-col rounded-s-xl
           justify-start border border-slate-200 bg-white w-full max-h-[50vh] overflow-y-auto p-3 -bottom-1 translate-y-full`}
        >
          { searchQueryData.map((city) => {
            return (
              <SearchItem
                key={city.id}
                residence={city.residence}
                text={city.text}
                link={city.name}
                path={cityPath}
                img={city.img}
              />
            );
          })}
        </div>
      );
     }else{
      return <></>;
     }
    }
  }
   return (
    <div
      className={`${
        !showSearchBox && "invisible"
      }  group z-0 relative w-full h-5/6  scroll-smooth   flex justify-between items-center ${props.inBox?"":"py-2 pr-6 mr-4 ml-24 border border-gray-800 rounded-full"}`}
    >
      <button 
        className={`${props.inBox?"hidden":"flex"}  items-center p-4 ml-2 hover:bg-gray-200 rounded-full`}
        type="button"
      >
        <i className="fa-regular fa-magnifying-glass text-gray-500 text-lg my-auto"></i>
      </button>
      <input
        dir="rtl"
        className={`${props.inBox&&"text-black font-semibold placeholder:text-black placeholder:font-semibold" } z-0 w-full mx-2  outline-none cursor-pointer border-none `}
        type="text"
        name="searchBox"
        id={props.id||crypto.randomUUID()}
        placeholder="کجا می خواهی بری ؟ "
        autoComplete="off"
        value={searchText}
        onChange={(event) => {
          handleSearchText(event);
        }}
        onClick={()=>{
          if(props.inBox) props.setShowRes(true);
        }}
      />

      {(props.showRes||!props.inBox)&& GetSearchResult()}
    </div>
  );
};

export default SearchBox;
