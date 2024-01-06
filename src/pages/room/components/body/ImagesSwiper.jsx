import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "./styles.css"
// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

export default function ImagesSwiper({images,setSwiperRealIndex}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    useEffect(()=>{
      setSwiperRealIndex(0)
    },[])
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        pagination={{dynamicBullets:true}}
        spaceBetween={400}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        onSlideChange={(swiperData) =>setSwiperRealIndex(swiperData.realIndex)}
        modules={[FreeMode, Navigation, Thumbs,Pagination]}
        className="mySwiper2"
      >
         { images.map((image,i)=>{
          
        return <SwiperSlide key={i}> <img src={image} alt="" /></SwiperSlide>
       })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       { images.map((image,i)=>{
        return <SwiperSlide key={i}> <img src={image} alt="" /></SwiperSlide>
       })}
      </Swiper>
    </>
  );
}
