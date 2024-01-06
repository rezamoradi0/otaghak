import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SliderItem from "./SliderItem";
import UseSliderMovement from "./UseSliderMovement";
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
/**
 *
 * @param {"text"} param0
 * @returns
 */
const MainSlider = ({ text, description, url, dataArray, bg_color }) => {
  // const [, setState] = useState(false);
  const usedWidth = 315; //px
  const sliderBodyRef = useRef();
  const sliderScrollDivRef = useRef();
  const [scrollValue, setMouseIsDown, setMousePosition, mouseIsDown] =
    UseSliderMovement(usedWidth);
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
        slidesPerView={"auto"}
        dir="rtl"
        >
              {dataArray.map((itemData,i) => {
            return <SwiperSlide key={i} style={{width:"fit-content"}}>
              <SliderItem data={itemData} />
            </SwiperSlide>;
          }).reverse()}
          </Swiper>


      {/* <div
        dir="rtl"
    
        // scroll-smooth   snap-x snap-mandatory
        className={`${
          mouseIsDown ? "" : "scroll-smooth "
        } snap-mandatory   overflow-x-scroll scrollbar-hide w-full`}
      >
        <div
          dir="ltr"
          ref={sliderBodyRef}
          className="h-full  p-2 flex flex-row"
        >
          {dataArray.map((itemData) => {
            return <SliderItem data={itemData} />;
          })}
        </div>
      </div> */}
      <span
        onClick={() => {
          // onClickSliderButtons(-1);
        }}
        onTouchEnd={() => {
          // onClickSliderButtons(-1);
        }}
        className="flex items-center p-2 h-4/5 w-8 absolute px-8 left-0 -translate-x-full bottom-0 cursor-pointer "
      >
        {" "}
        <i className=" fa-solid fa-angle-left text-3xl"></i>
      </span>
      <span
        onClick={() => {
          // onClickSliderButtons(+1);
        }}
        onTouchEnd={() => {
          // onClickSliderButtons(+1);
        }}
        className="flex items-center p-2 h-4/5 w-8 absolute px-8 right-0 translate-x-full bottom-0 cursor-pointer   "
      >
        {" "}
        <i className=" fa-solid fa-angle-right text-3xl"></i>
      </span>
    </div>
  );
};

export default MainSlider;
