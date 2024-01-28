import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SliderItem from "./SliderItem";
import UseSliderMovement from "./UseSliderMovement";
import {Swiper,SwiperSlide} from "swiper/react"
import useDeviceScreenSize from "../../utils/customHooks/useDeviceScreenSize";
import { breakPoints } from "../../constant/breakPoints";

/**
 *
 * @param {"text"} param0
 * @returns
 */
const MainSlider = ({ text, description, url, dataArray, bg_color }) => {
  const deviceSizeScreen=useDeviceScreenSize();
  const [slidesPerViewState,setSlidesPerViewState]=useState(dataArray?.length||4);

  useEffect(()=>{
    if(deviceSizeScreen<=breakPoints.sm){
      setSlidesPerViewState(1);
    }
   else if(deviceSizeScreen<=breakPoints.md){
      setSlidesPerViewState(2);
    }else {
      setSlidesPerViewState(4);
    }

  },[deviceSizeScreen])
  return (
    <div
      className="text-right my-4 relative"
      style={
        bg_color && {
          backgroundColor: "#" + bg_color,
          boxShadow: `0 0 0 100vmax #` + bg_color,
          clipPath: "inset(0 -100vmax)",
        }
      }
    >
      {/* {header} */}
      <div
        dir="ltr"
        className="flex justify-between items-center flex-row-reverse my-0 pt-6"
      >
        <div>
          <h4 className="text-xl font-semibold text-gray-700 my-2">{text}</h4>

          {description && (
            <p className="text-gray-500 text-sm"> {description}</p>
          )}
        </div>
        <a
          href={url}
          className="text-blue-500 flex  items-center justify-between font-semibold"
        >
          <i className="fa-solid fa-angle-left mr-2 text-lg"></i> نمایش همه
        </a>
      </div>

      {/*slider body h-[327px]*/}
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerViewState}
        dir="rtl"
        >
              {dataArray.map((itemData,i) => {
            return <SwiperSlide key={i} >
              <SliderItem data={itemData} />
            </SwiperSlide>;
          }).reverse()}
          </Swiper>


      <span
        
        className="md:-right-6 flex items-center p-2 h-4/5 w-8 absolute px-8 left-0 -translate-x-full bottom-0 cursor-pointer "
      >
        {" "}
        <i className=" fa-solid fa-angle-left text-3xl"></i>
      </span>
      <span
    
        className="md:-left-6 flex items-center p-2 h-4/5 w-8 absolute px-8 right-0 translate-x-full bottom-0 cursor-pointer   "
      >
        {" "}
        <i className=" fa-solid fa-angle-right text-3xl"></i>
      </span>
    </div>
  );
};

export default MainSlider;
