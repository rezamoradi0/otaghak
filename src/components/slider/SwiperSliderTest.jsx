import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
const SwiperSliderTest = () => {
    return ( <div className="main-slider">  
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
      
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