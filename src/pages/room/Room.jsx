import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImagesGallery from "./components/body/ImagesGallery";
import { fetchRoom } from "../../features/userRoomExtraSlice";

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
    console.log("theDomPublicChanged " + theDomPublicState);
  }, [theDomPublicState]);
  if (!theRoomExtraState.data) {
    console.log("LOADING");
    return <div className="bg-gray-500 min-h-screen min-w-full"> TEST ING </div>
  }
  return (
    <div dir="rtl"
      style={
        !!theDomPublicState?.header
          ? { marginTop: `${theDomPublicState.header + _marginTop}px` }
          : {}
      }
      className="px-10 min-h-screen"
    >
      <ImagesGallery
        isExpand={theRoomState.selectedGallery}
        imageLinks={theRoomExtraState.data.images}
      />
    </div>
  );
}
export default Room;
