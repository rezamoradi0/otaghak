import { Swiper, SwiperSlide } from "swiper/react";
import DefaultSlide from "../slides/DefaultSlide";
import { Link } from "react-router-dom";
import { SLIDER_COMPONENT_TEXT } from "../../../constant/text";
import { ICON_LEFT } from "../../../constant/fontIcons";
import { useState } from "react";

export default function DefaultSlider({ SliderItemsData, Header, hasSlider }) {
  const [screenSize] = useState(() => {
    if(window.innerWidth>1000) return 4;
    else if(window.innerWidth>750) return 3;
    else if(window.innerWidth>550) return 2;
    else return 1;
  });

  return (
    <>
      <div className="flex justify-between items-center ">
        <p className="my-6 text-lg font-bold text-gray-700 ">{Header}</p>
        <Link className="flex items-center gap-x-4 text-blue-500" to={"/"}>
          <span>{SLIDER_COMPONENT_TEXT.allBtn} </span> <ICON_LEFT />{" "}
        </Link>
      </div>
      <div className="[&>.swiper]:h-fit">
        <Swiper spaceBetween={10} slidesPerView={screenSize} dir="rtl">
          {SliderItemsData.items
            .map((itemData, i) => {
              return (
                <SwiperSlide key={i} style={{ width: "fit-content" }}>
                  <DefaultSlide SlideData={itemData} hasSlider={hasSlider} />
                </SwiperSlide>
              );
            })
            .reverse()}
        </Swiper>
      </div>
    </>
  );
}
