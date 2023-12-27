import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
const SwiperSliderTest = () => {
    return ( <div>  
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={()=>{console.log("Changed");}}
        onSwiper={(swiper)=>{console.log(swiper);}}
      
        >
        <SwiperSlide>
        <div className="h-40 border border-red-500"  >test</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="h-40 border border-red-500" >test</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="h-40 border border-red-500" >test</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="h-40 border border-red-500" >test</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="h-40 border border-red-500" >test</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="h-40 border border-red-500" >test</div>
        </SwiperSlide>

        </Swiper>

    </div> );
}
 
export default SwiperSliderTest;