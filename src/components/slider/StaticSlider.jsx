import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { breakPoints } from "../../constant/breakPoints";
import useDeviceScreenSize from "../../utils/customHooks/useDeviceScreenSize";
const StaticSlider = ({ data }) => {

  const deviceScreenSize=useDeviceScreenSize();
  const [bottomSwiperSliderPerView,setBottomSwiperSliderPerView]=useState(4)

  useEffect(()=>{
 
    if(deviceScreenSize==breakPoints.md||deviceScreenSize==breakPoints.sm){
  
      setBottomSwiperSliderPerView(1);
    }
  },[deviceScreenSize])
  return (
    <div dir="rtl" className="flex  justify-between gap-x-4 my-12 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-1000   [&_.swiper-pagination-bullet-active]:transition-all [&_.swiper-pagination-bullet-active]:w-4  [&_.swiper-pagination-bullet-active]:rounded-lg">
      <Swiper 
       spaceBetween={16}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={bottomSwiperSliderPerView}
      >
        {data.items.map((item, i) => {
          return (
            <SwiperSlide>
              <div
                key={i}
                className="flex h-full gap-y-3 flex-col border border-gray-300 rounded-lg overflow-hidden p-4"
              >
                <div className="flex items-center ">
                  <img className="ml-2" src={item.img} alt={item.header} />
                  <p className="font-semibold text-lg text-gray-800">
                    {item.header}
                  </p>
                </div>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StaticSlider;
