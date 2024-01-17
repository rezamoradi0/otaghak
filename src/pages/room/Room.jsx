import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImagesGallery from "./components/body/ImagesGallery";
import { fetchRoom } from "../../features/userRoomExtraSlice";
import MainInformation from "./components/body/Information/MainInformation";
import ReserveTable from "./components/body/ReserveTable";
import DefaultSlider from "../../components/swiperSlider/sliders/DefaultSlider";
import { SLIDER_COMPONENT_TEXT } from "../../constant/text";
import OtherResidenceLinks from "./components/body/Information/components/OtherResidenceLinks";

function Room() {
  const theParams = useParams();
  const RoomId = theParams.roomId;
  const theDispatch_Room = useDispatch();
  const _marginTop = 16;
  const theRoomState = useSelector((state) => {
    return state.userRoom;
  });
  const theRoomExtraState = useSelector((state) => {
    return state.userRoomExtra;
  });
  const theDomPublicState = useSelector((state) => {
    return state.domPublic.publicDomElements;
  });

  useEffect(() => {
    theDispatch_Room(fetchRoom(RoomId));
  }, []);
  useEffect(() => {
    // console.log("theDomPublicChanged " + theDomPublicState);
  }, [theDomPublicState]);
  if (!theRoomExtraState.data) {
    return (
      <div className="bg-gray-500 min-h-screen min-w-full">Loading... </div>
    );
  }
  return (
    <div
      dir="rtl"
      style={
        !!theDomPublicState?.header
          ? { marginTop: `${theDomPublicState.header + _marginTop}px` }
          : {}
      }
      className="px-10 min-h-screen "
    >
      <ImagesGallery
        isExpand={theRoomState.selectedGallery}
        imageLinks={theRoomExtraState.data.images}
      />
      <div className="flex relative gap-x-12 w-full overflow-x-clip">
        <MainInformation data={theRoomExtraState.data} />
        <ReserveTable parentMarginTop={_marginTop} data={theRoomExtraState.data}/>
      </div>
   
      <div className="mt-4">
        <DefaultSlider
          SliderItemsData={theRoomExtraState.data.otherResidences}
          Header={SLIDER_COMPONENT_TEXT.otherRooms}
          hasSlider={true}
        />

        <hr className="my-10"/>
      <OtherResidenceLinks  linksData={theRoomExtraState.data.otherResidenceLinks}/>
      </div>
    </div>
  );
}
export default Room;
