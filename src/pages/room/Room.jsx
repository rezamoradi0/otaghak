import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImagesGallery from "./components/body/ImagesGallery";
import { fetchRoom } from "../../features/userRoomExtraSlice";
import MainInformation from "./components/body/Information/MainInformation";
import ReserveTable from "./components/body/ReserveTable";
import DefaultSlider from "../../components/swiperSlider/sliders/DefaultSlider";
import { SLIDER_COMPONENT_TEXT } from "../../constant/text";
import OtherResidenceLinks from "./components/body/Information/components/OtherResidenceLinks";
import { setNullObjForScroll } from "../../features/domPublicSlice";
import { selectTab } from "../../features/userRoomSlice";
import { breakPoints } from "../../constant/breakPoints";
import { createPortal } from "react-dom";
import { setTablesNumber } from "../../features/userDatePickerSlice";
import useDeviceScreenSize from "../../utils/customHooks/useDeviceScreenSize";

function Room() {
  const theParams = useParams();
  const RoomId = theParams.roomId;
  const theDispatch_Room = useDispatch();
  const _marginTop = 16;
  const deviceScreenSize=useDeviceScreenSize();
  const theRoomState = useSelector((state) => {
    return state.userRoom;
  });
  const theRoomExtraState = useSelector((state) => {
    return state.userRoomExtra;
  });
  const theDomPublicState = useSelector((state) => {
    return state.domPublic.publicDomElements;
  });
  const theSelectedObjectToScroll = useSelector((state) => {
    return state.domPublic.publicSelectedObjForScroll;
  });
  useEffect(()=>{
    if(deviceScreenSize==breakPoints.md){
      theDispatch_Room(setTablesNumber(1));
    }


  },[deviceScreenSize])
  useEffect(() => {
    // console.log(theSelectedObjectToScroll);

    if (!theSelectedObjectToScroll) return;
   
    window.scrollTo({
      top:
        theDomPublicState[theSelectedObjectToScroll].value -
        theDomPublicState["header"].value,
      behavior: "smooth",
    });
  }, [theSelectedObjectToScroll, theRoomState.selectedTab, theDomPublicState]);
  useEffect(() => {
    theDispatch_Room(fetchRoom(RoomId));
  
  }, []);

  useEffect(() => {
    function onScrollHandler() {
      //  console.log(window.scrollY);
      theDispatch_Room(setNullObjForScroll());
      let sortedListOfDom = [];
      // console.log(theDomPublicState);
      for (const domObj of Object.entries(theDomPublicState)) {
        // console.log(domObj);
        sortedListOfDom.push([domObj[0], domObj[1].value, domObj[1].height]);
      }

      sortedListOfDom.sort((a, b) => {
        return a[1] - b[1];
      });
      for (const [tag, value, height] of sortedListOfDom) {
        const topValue =
          value + height - theDomPublicState["header"].height - 100;

        if (
          sortedListOfDom.length > 1 &&
          sortedListOfDom[sortedListOfDom.length - 1][1] < window.scrollY
        ) {
          theDispatch_Room(
            selectTab(sortedListOfDom[sortedListOfDom.length - 1][0])
          );
          break;
        } else if (topValue >= window.scrollY && tag != "header") {
          theDispatch_Room(selectTab(tag));
          break;
        }
      }
    }
    document.addEventListener("scrollend", () => {
      onScrollHandler();
    });
    document.addEventListener("touchmove", () => {
      onScrollHandler();
    });
    return () => {
      document.removeEventListener("scrollend", onScrollHandler);
      document.removeEventListener("touchmove", onScrollHandler);

    };
  }, [theDomPublicState]);

  useEffect(() => {
    if (!theRoomExtraState.data) return;
    document.title=`${theRoomExtraState.data.text} | ${theRoomExtraState.data.residenceName  } | ${theRoomExtraState.data.cityName}`
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [theRoomExtraState]);
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
          ? { marginTop: `${theDomPublicState.header.value + _marginTop}px` }
          : {}
      }
      className={`${
        theRoomState.selectedGallery
          ? " flex flex-row gap-x-6"
          : "flex flex-col"
      } px-10 min-h-screen scroll-smooth overflow-x-clip md:px-0`}
    >
      <ImagesGallery
        isExpand={theRoomState.selectedGallery}
        imageLinks={theRoomExtraState.data.images}
      >
        {" "}
        {theRoomState.selectedGallery && (
          <ReserveTable
            className="md:hidden"
            parentMarginTop={_marginTop}
            data={theRoomExtraState.data}
          />
        )}
      </ImagesGallery>

      <div
        className={`${
          theRoomState.selectedGallery ? "hidden" : ""
        } flex relative gap-x-12 w-full overflow-x-clip md:px-10`}
      >
        <MainInformation className="md:w-full" data={theRoomExtraState.data} />
     
        {deviceScreenSize == breakPoints.md ? (
          createPortal(
            // <ReserveTable
            //   className="md:fixed md:left-0 md:bottom-0 md:bg-white md:w-full "
            //   pinToBottom={true}
            //   parentMarginTop={_marginTop}
            //   data={theRoomExtraState.data}
            // />,
            <></>,
            document.body
          )
        ) : (
          <ReserveTable
          className="md:fixed md:left-0 "
        
          parentMarginTop={_marginTop}
          data={theRoomExtraState.data}
        />
        )}
      </div>

      <div className={` ${theRoomState.selectedGallery ? "hidden" : ""} mt-4 md:px-10`}>
        <DefaultSlider
          SliderItemsData={theRoomExtraState.data.otherResidences}
          Header={SLIDER_COMPONENT_TEXT.otherRooms}
          hasSlider={true}
        />

        <hr className="my-10" />
        <OtherResidenceLinks
          linksData={theRoomExtraState.data.otherResidenceLinks}
        />
      </div>
    </div>
  );
}
export default Room;
