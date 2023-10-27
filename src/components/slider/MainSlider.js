import { useLayoutEffect, useRef } from "react";
import SliderItem from "./SliderItem";

/**
 *
 * @param {"text"} param0
 * @returns
 */
const MainSlider = ({ text, description, url, dataArray }) => {
    const sliderBodyRef=useRef();
   const selectedWidthIndex=0;
   const selectedImgHeightIndex=0;
    useLayoutEffect(()=>{
        console.log(sliderBodyRef.current.offsetWidth   );
        sliderBodyRef.current.style.width ="3000px";
        console.log(sliderBodyRef.current.offsetWidth   );

    },[])
  return (
    <div  className="text-right my-16">
    {/* {header} */}
   <div className="flex justify-between items-center flex-row-reverse mt-16 mb-4">
   <div>
        <h4 className="text-xl font-semibold text-gray-700 my-2">{text}</h4>

        <p className="text-gray-500 text-sm"> {description}</p>
      </div>
      <a  href={url} className="text-blue-500 flex  items-center justify-between font-semibold">
      <i className="fa-solid fa-angle-left mr-2 text-lg"></i> نمایش همه 
      </a>
   </div>

   {/*slider body */}
  <div className="h-[327px] overflow-x-scroll w-full border border-red-500">
  <div ref={sliderBodyRef} className="h-full flex flex-row-reverse">
    {dataArray.map((itemData)=>{
        return <SliderItem  data={itemData}/>;
    })}
   </div>
  </div>
    </div>
  );
};

export default MainSlider;
