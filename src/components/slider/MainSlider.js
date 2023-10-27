import { useLayoutEffect, useRef, useState } from "react";
import SliderItem from "./SliderItem";

/**
 *
 * @param {"text"} param0
 * @returns
 */
const MainSlider = ({ text, description, url, dataArray }) => {
  const [, setState] = useState(false);
  const usedWidth = 315; //px
  const sliderBodyRef = useRef();
  const sliderScrollDivRef = useRef();
  const selectedWidthIndex = 0;
  const selectedImgHeightIndex = 0;

  useLayoutEffect(() => {
    sliderBodyRef.current.style.width = dataArray.length * usedWidth + "px";
  }, []);
  function onClickSliderButtons(direction) {
    if (direction > 0) {
      sliderScrollDivRef.current.scrollBy(usedWidth, 0);
      setState((p) => {
        return !p;
      });
    } else if (direction < 0) {
      sliderScrollDivRef.current.scrollBy(-usedWidth, 0);
      setState((p) => {
        return !p;
      });
    }
  }
  return (
    <div className="text-right my-16 relative">
      {console.log("Scrolling")}
      {/* {header} */}
      <div className="flex justify-between items-center flex-row-reverse mt-16 mb-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-700 my-2">{text}</h4>

          <p className="text-gray-500 text-sm"> {description}</p>
        </div>
        <a
          href={url}
          className="text-blue-500 flex  items-center justify-between font-semibold"
        >
          <i className="fa-solid fa-angle-left mr-2 text-lg"></i> نمایش همه
        </a>
      </div>

      {/*slider body h-[327px]*/}
      <div
        ref={sliderScrollDivRef}
        className=" overflow-x-scroll scroll-smooth scrollbar-hide  snap-x snap-mandatory w-full"
      >
        <div ref={sliderBodyRef} className="h-full  p-2 flex flex-row-reverse">
          {dataArray.map((itemData) => {
            return <SliderItem data={itemData} />;
          })}
        </div>
      </div>
      <span
        onClick={() => {
          onClickSliderButtons(-1);
        }}
        className="flex items-center p-2 h-4/5 w-8 absolute px-8 left-0 -translate-x-full bottom-0 cursor-pointer "
      >
        {" "}
        <i className=" fa-solid fa-angle-left text-3xl"></i>
      </span>
      <span
        onClick={() => {
          onClickSliderButtons(+1);
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
