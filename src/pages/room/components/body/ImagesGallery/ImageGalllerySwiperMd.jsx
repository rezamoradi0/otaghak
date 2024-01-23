import React, { useRef, useState } from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./styles.css";
import { ICON_LEFT, ICON_RIGHT } from "../../../../../constant/fontIcons";
import { e2p } from "../../../../../utils/functions/DateFunc";

export default function ImagesGallerySwiperMd({onClick,imageLinks}) {
    const swiperRef=useRef();
    const [indexOfSwiper,setIndexOfSwiper]=useState(1);
  return (
    <div className="w-full aspect-video images-md relative">
  
      <div className="h-full"   onClick={()=>{
            onClick();
        }}>
         {" "}
        <Swiper
        onBeforeInit={(swiper)=>{
            swiperRef.current=swiper;
        }}
        onSlideChange={(swiperData) =>setIndexOfSwiper(swiperData.realIndex+1)}
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="images-md-swiper h-full w-full"
        >
            {imageLinks.map((imageLink,i)=>{
                return <SwiperSlide key={i} className="w-full h-full"><img className="w-full h-full" src={imageLink} alt="" /></SwiperSlide>
            })}
     
        </Swiper>
      </div>
       
        <button  className="z-10  h-full p-2 absolute top-0 right-0 pr-4  pl-8"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <ICON_RIGHT className="text-2xl text-gray-100  fa-regular"/>
        </button>
        <button className= "z-10  h-full p-2 absolute top-0  pl-4 left-0 pr-8"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
        <ICON_LEFT className="text-2xl text-gray-100 fa-regular"/>
        </button>
        <div className="rounded-md absolute left-6 flex flex-row-reverse px-3 py-1 gap-x-2 items-center  bottom-2 z-20 bg-gray-900 bg-opacity-40 text-white font-semibold">
            <span>{e2p(imageLinks?.length)}</span>
            <span> / </span>
            <span>{e2p(indexOfSwiper)}</span>
        </div>
    </div>
  );
}
