import { Link } from "react-router-dom";
import { ROOM_PATH } from "../../../constant/address";
import { e2p } from "../../../utils/functions/DateFunc";
import { SLIDER_COMPONENT_TEXT } from "../../../constant/text";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { ICON_LEFT, ICON_RIGHT } from "../../../constant/fontIcons";

  // const imageHeight="200px";
  // const imageHeightHalf="100px";
export default function DefaultSlide({ SlideData, hasSlider }) {
  const linkPath = "/" + ROOM_PATH + "/" + SlideData.id;

  const swiperRef = useRef();
  return (
    <>
      <Link
        to={linkPath}
        dir="ltr"
        draggable={false}
        className={` block  p-1 relative snap-end rounded-xl overflow-hidden  border-blue-500`}
      >
        <span className="absolute right-2 top-2 text-white text-xs p-2 flex gap-x-2"></span>
        <div>
          {hasSlider ? (
            <SwiperSlide   className="">

              <Swiper
   
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                direction="horizontal"
                className={`h-[200px] overflow-hidden rounded-md `}
                spaceBetween={0}
                slidesPerView={1}
                dir="rtl"
          
              >
                {SlideData.images.map((imageLink, i) => {
                  return (
                    <SwiperSlide
                      className="h-"
                      key={i}
                      style={{ width: "fit-content" }}
                    >
                      <img loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src={imageLink}
                        alt=""
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SwiperSlide>
          ) : (
            <img
            loading="lazy"
              draggable={false}
              className="h-[236px] w-full rounded-xl object-cover object-center"
              src={SlideData.img}
              alt={SlideData.text}
            />
          )}
        </div>

        <div className="flex flex-row-reverse flex-wrap text-sm justify-between  my-1">
          <p className="text-base w-full text-gray-700 font-semibold my-2 flex justify-between">
            {" "}
            <span dir="rtl">
              <span className="text-black text-sm ">
                <i className="text-xs fa-solid fa-star-sharp"></i>{" "}
                <span className="font-semibold"> {e2p(SlideData.stars)}</span>
              </span>
              <span className="mx-2 text-gray-500">{`(${e2p(
                SlideData.userVotes
              )} نظر)`}</span>
            </span>
            <span
              dir="rtl"
              className="w-3/5 line-clamp-1 text-gray-600 text-sm leading-6"
            >
              {SlideData.text}
            </span>
          </p>
          <span className="text-gray-700">
            {" "}
            {SlideData.position}{" "}
            <span className="text-black align-text-bottom">•</span> تا{" "}
            {e2p(SlideData.maxCapacity)} مهمان{" "}
            <span className="text-black align-text-bottom">•</span>{" "}
            {e2p(SlideData.bedRooms)} خوابه
          </span>
        </div>
        <div className="text-right">
          {SlideData.tags.length > 0 && (
            <p
              dir="rtl"
              key={crypto.randomUUID()}
              className="bg-gray-50 bg-opacity-70 rounded-md text-black p-1"
            >
              <span> {SLIDER_COMPONENT_TEXT.tags[SlideData.tags[0]].icon}</span>
              <span> {SLIDER_COMPONENT_TEXT.tags[SlideData.tags[0]].text}</span>
              <span className="text-xs text-gray-500">
                {" "}
                {SLIDER_COMPONENT_TEXT.tags[SlideData.tags[0]].description}
              </span>
            </p>
          )}
        </div>
        <div className="flex flex-row-reverse flex-wrap text-sm justify-between my-1">
          <span className="text-gray-400" dir="rtl">
            {`هر شب از `}{" "}
            <span className="font-semibold text-base text-black">
              {SlideData.discounted
                ? e2p(
                    SlideData.discountedPrice
                      .toLocaleString()
                      .replaceAll(",", "،")
                  )
                : e2p(SlideData.price.toLocaleString().replaceAll(",", "،"))}
            </span>{" "}
            تومان
          </span>
          <span>
            {" "}
            {SlideData.discounted ? (
              <span className="inline-flex items-center">
                <span className="bg-red-500 text-white rounded-lg mx-2 p-1">
                  {e2p(SlideData.discountPercent)}%
                </span>
                <span className="line-through decoration-red-500 text-gray-400 font-medium mx-2">
                  {e2p(SlideData.price.toLocaleString().replaceAll(",", "،"))}
                </span>
              </span>
            ) : (
              <></>
            )}
          </span>
        </div>
      </Link>
      <button
        type="button"
        className="absolute left-2 top-2 text-white text-xl p-2 cursor-pointer"
        onClick={() => {
          console.log("Heart");
        }}
      >
        <i className="fa-sharp fa-regular fa-heart"></i>
      </button>
        <button  className="p-2 absolute top-[100px] right-2"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <ICON_RIGHT className="text-2xl text-gray-100  fa-thin"/>
        </button>
        <button className="p-2 absolute top-[100px] left-2"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
        <ICON_LEFT className="text-2xl text-gray-100 fa-thin"/>
        </button>
    </>
  );
}
