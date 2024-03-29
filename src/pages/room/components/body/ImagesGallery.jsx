import { ROOM_PAGE_TEXT } from "../../../../constant/text";
import { ICON_LEFT } from "../../../../constant/fontIcons";
import { selectGallery } from "../../../../features/userRoomSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addObject } from "../../../../features/domPublicSlice";
import ImagesSwiper from "./ImagesSwiper";
import Popup from "../../../../components/popup/Popup";
import ImagesGalleryHeader from "./ImagesGalleryHeader";
import useDeviceScreenSize from "../../../../utils/customHooks/useDeviceScreenSize";
import { breakPoints } from "../../../../constant/breakPoints";
import ImagesGallerySwiperMd from "./ImagesGallery/ImageGalllerySwiperMd";
import { getOffsetTop } from "../../../../utils/functions/DomFunc";
export default function ImagesGallery({ isExpand, imageLinks,children }) {
  const [showSwiper, setShowSwiper] = useState(false);
  const [swiperRealIndex,setSwiperRealIndex]=useState(0);
  const deviceScreenSize=useDeviceScreenSize();
  const theDispatch = useDispatch();
  const imagesGalleryRef=useRef();
  useEffect(() => {
    if (!isExpand) setShowSwiper(false);
  }, [isExpand]);
  useEffect(()=>{
    theDispatch(addObject({key:ROOM_PAGE_TEXT.header.images.key,value:getOffsetTop (imagesGalleryRef.current),height:imagesGalleryRef.current?.offsetHeight}))
  },[])
  function calcGrid(index) {
    const newIndex = index > 6 ? index % 7 : index;

    switch (newIndex) {
      case 0:
      case 3:
        return "row-span-2 col-span-2";
      case 1:
      case 2:
      case 5:
      case 6:
        return "row-span-1 col-span-1";
      case 4:
        return "row-span-2 col-span-1";
      default:
        return "row-span-1 col-span-2";
    }
  }

  if (isExpand) {
    return (
      <>    <div ref={imagesGalleryRef}
        className={`${"md:w-full relative overflow-hidden w-2/3 grid gap-4 grid-cols-2 grid-flow-row auto-rows-[240px] "}`}
      >
        {imageLinks.map((imgLink, i) => {
          const gridTemp = calcGrid(i);
          return (
            <div
              onClick={() => {
                setShowSwiper(!showSwiper);
              }}
              key={i}
              className={` bg-gray-800 [&_img]:duration-500 [&_img]:transition-all [&_img:hover]:opacity-70 ${gridTemp}`}
            >
              <img
                className="w-full h-full object-cover object-center"
                src={imgLink}
                alt=""
              />
            </div>
          );
        })}
        {showSwiper && (
          <Popup
            header={<ImagesGalleryHeader  swiperRealIndex={swiperRealIndex} swiperIndexes={imageLinks.length}/>}
            setShow={setShowSwiper}
            className="w-full h-screen  bg-gray-950 rounded-none"
            playClassName={" bottom-full"}
            childrenClassName="pt-0"
            headerParentClassName="py-3 border-b-0"
            exitClassName="text-white text-base"
          >
            <div className="images-gallery  w-full h-full flex items-center justify-between flex-col">
              <ImagesSwiper setSwiperRealIndex={setSwiperRealIndex}  images={imageLinks}/>
            </div>
          </Popup>
        )}
      </div>
      {children}
      </>
  
    );
  }
if(deviceScreenSize==breakPoints.md||deviceScreenSize==breakPoints.sm){
  return  <div className="w-full"  ref={imagesGalleryRef}>

    <ImagesGallerySwiperMd imageLinks={imageLinks} onClick={()=>{
       theDispatch(selectGallery());
    }} />
  </div> 
}
else if(deviceScreenSize==breakPoints.xl_2) return (
    <div ref={imagesGalleryRef}
      onClick={() => {
        theDispatch(selectGallery());
      }}
      dir="rtl"
      className=" grid grid-cols-4 mb-6 h-[480px] grid-rows-2 gap-2 [&_img]:h-full  [&_img]:w-full [&_img]:duration-500 [&_img]:transition-all [&_img:hover]:opacity-70 [&_img]:object-cover [&_img]:object-center [&>div]:bg-gray-800 overflow-hidden rounded-lg "
    >
      <div className="col-span-2  row-span-2 h-[480px] [&>div]:h-full">
        <img src={imageLinks[0]} loading="lazy" alt="" />
      </div>
      <div>
        <img src={imageLinks[1]} loading="lazy" alt="" />
      </div>
      <div>
        <img src={imageLinks[2]} loading="lazy" alt="" />
      </div>
      <div>
        <img src={imageLinks[3]} loading="lazy"alt="" />
      </div>
      <div className="relative">
        <img src={imageLinks[4]} loading="lazy" alt="" />{" "}
        <div className="cursor-pointer absolute w-full h-full flex justify-center items-center text-white font-semibold bg-gray-800 bg-opacity-80 top-0 left-0">
          <span>{ROOM_PAGE_TEXT.body.moreGallery} </span>
          <ICON_LEFT className="mx-2" />
        </div>
      </div>
    </div>
  );
  else {
    return <>Loading</>;
  }
}
