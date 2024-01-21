import { useLocation } from "react-router-dom";
import { e2p } from "../../../../components/dateBox/Functions";
import { ROOM_PATH } from "../../../../constant/address";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";
import { selectTab } from "../../../../features/userRoomSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectGallery } from "../../../../features/userRoomSlice";
import ShareRoom from "./ShareRoom";
import AddFavorite from "./AddFavorite";
import { useEffect } from "react";
import { setObjForScroll } from "../../../../features/domPublicSlice";
export default function RoomHeader() {
  const theLocation = useLocation();
  const theDispatch = useDispatch();


  const tabState = useSelector((state) => {

    return state.userRoom.selectedTab;
  });
  const selectedGalleryState = useSelector((state) => {
    return state.userRoom.selectedGallery;
  });


  const closeImagesGalleryHandler=()=>{
    theDispatch(selectGallery());
  }
  // useEffect(()=>{console.log(tabState);},[tabState])
 
  return (
    <div dir="rtl" className="bg-white w-full py-4 px-12 flex justify-between">
      {selectedGalleryState ? (
        <div className="px-5 font-semibold text-gray-600 cursor-pointer"  onClick={closeImagesGalleryHandler}>
         <span className="mx-3">X</span> {ROOM_PAGE_TEXT.body.imagesGallery}
        </div>
      ) : (
        <>
          <div className="mx-12">
            {ROOM_PAGE_TEXT.header.id.text} :{" "}
            {e2p(theLocation.pathname.replace(`/${ROOM_PATH}/`, ""))}
          </div>
          <div className="flex gap-x-6 ml-auto">
            {Object.values(ROOM_PAGE_TEXT.header).map((value, i) => {
              if (i == 0) return;
        
              return (
                <div
              
             
                  key={i}
                  onClick={() => {
                 
                    theDispatch(selectTab(value.key));
                    theDispatch(setObjForScroll(value.key));

                  }}
                  className={`${tabState==value.key?"text-black border-b-2  border-b-gray-900":" text-gray-400"} font-semibold `}
                >
                  {value.text}
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="flex items-center gap-x-12 px-2 [&>*]:font-bold [&>*]:text-gray-600">
        <ShareRoom  className="text-white"/>
        <AddFavorite className="text-white"/>
      </div>
    </div>
  );
}
