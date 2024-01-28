import { useEffect, useState } from "react";
import useDeviceScreenSize from "../../utils/customHooks/useDeviceScreenSize";
import {e2p,GetDate} from "./../dateBox/Functions"
import { Swiper, SwiperSlide } from "swiper/react";
import { breakPoints } from "../../constant/breakPoints";
const CustomSlider = ({  data }) => {
  const deviceSizeScreen=useDeviceScreenSize();
  const [slidesPerViewState,setSlidesPerViewState]=useState(data?.item?.length||4);

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
  return <>
  <p className="my-4 text-right font-bold text-gray-700 text-xl">{data.header}</p>
  <Swiper slidesPerView={slidesPerViewState} spaceBetween={16}>
    {data.items.map((item,i)=>{
     const dateInfoFa=GetDate(item.date);
        return  <SwiperSlide key={i} >
            <div className=" rounded-xl border hover:cursor-pointer text-right overflow-hidden border-gray-300 flex flex-col">
             <a className="block" href={item.url} > <img className="h-44 w-full object-cover object-center" src={item.img} alt={item.header} /></a>
             <div dir="rtl" className="px-3 text-justify">
             <a href={item.url}  className="block font-semibold text-base text-gray-800 my-2">{item.header}</a> 
               <p className="font-thin   leading-5  line-clamp-3	 text-gray-500 text-xs my-2">{item.text}</p>
               <div className="flex justify-between items-center flex-nowrap text-gray-500 font-semibold text-sm py-3">
                <span className="flex items-center justify-between gap-x-2"> <i className="fa-light fa-user text-lg "></i> <span>{item.author}</span></span>
                <span className="flex items-center justify-between gap-x-2 flex-nowrap"><i className="fa-light fa-calendar text-lg"></i><span>{`${dateInfoFa.day} `}</span> <span>{dateInfoFa.monthTitle} </span> <span>{dateInfoFa.year} </span></span>
               </div>
             </div>
                          </div>
        </SwiperSlide>;
    }).reverse()}
  </Swiper>;</>
};

export default CustomSlider;
