import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImagesGallery from "./components/body/ImagesGallery";
import { fetchRoom } from "../../features/userRoomExtraSlice";
import MainInformation from "./components/body/Information/MainInformation";
import ReserveTable from "./components/body/ReserveTable";
import DefaultSlider from "../../components/swiperSlider/sliders/DefaultSlider";
import { ROOM_PAGE_TEXT, SLIDER_COMPONENT_TEXT } from "../../constant/text";
import OtherResidenceLinks from "./components/body/Information/components/OtherResidenceLinks";
import { addObject,setNullObjForScroll } from "../../features/domPublicSlice";
import { getOffsetTop } from "../../utils/functions/DomFunc";
import { selectTab } from "../../features/userRoomSlice";
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
  const theSelectedObjectToScroll=useSelector((state)=>{
    return  state.domPublic.publicSelectedObjForScroll;
  })

  
  useEffect(()=>{
    if(!theSelectedObjectToScroll) return;


    window.scrollTo({
     top: (theDomPublicState[theSelectedObjectToScroll].value-theDomPublicState["header"].value),
     behavior:"smooth"
    })

  },[theSelectedObjectToScroll,theRoomState.selectedTab]);
  useEffect(() => {
    theDispatch_Room(fetchRoom(RoomId));
  }, []);

  useEffect(()=>{
    function onScrollHandler(event) {
      // console.log(window.scrollY);
      theDispatch_Room(setNullObjForScroll());
      let sortedListOfDom=[];
      // console.log(theDomPublicState);
      for (const domObj of Object.entries(theDomPublicState)) {
        // console.log(domObj);
        sortedListOfDom.push([domObj[0],domObj[1].value,domObj[1].height]);
      }
    
      sortedListOfDom.sort((a,b)=>{
        return a[1] - b[1];
      })
      let thisSelectedTab=false;
    for (const [tag,value,height] of sortedListOfDom){
      
      const topValue=value+height-theDomPublicState["header"].height-100;
  
      if(topValue>=window.scrollY&&tag!="header"){
        theDispatch_Room(selectTab(tag));
        // console.log(theDomPublicState[tag]);
        thisSelectedTab=true;
        // console.log(thisSelectedTab);
        break;
      }

    }
    if(!thisSelectedTab){
      theDispatch_Room(selectTab(sortedListOfDom[sortedListOfDom.length-1][0]));
    }
   
    }
    document.addEventListener("scrollend",(event)=>{
      onScrollHandler(event);
    });

    return ()=>{
      document.removeEventListener("scrollend",onScrollHandler);

    }
  },[])


  useEffect(()=>{
    if(!theRoomExtraState.data)return;
    window.scrollTo({top:0,behavior:"smooth"});


  },[theRoomExtraState])
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
      className="px-10 min-h-screen scroll-smooth"
    >
      <ImagesGallery
        isExpand={theRoomState.selectedGallery}
        imageLinks={theRoomExtraState.data.images}
      />
      <div className="flex relative gap-x-12 w-full overflow-x-clip">
        <MainInformation  data={theRoomExtraState.data} />
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
