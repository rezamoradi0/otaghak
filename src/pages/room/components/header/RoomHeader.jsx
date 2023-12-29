import { useLocation } from "react-router-dom";
import { e2p } from "../../../../components/dateBox/Functions";
import { ROOM_PATH } from "../../../../constant/address";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";
import { selectTab } from "../../../../features/userRoomSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import ShareRoom from "./ShareRoom";
import AddFavorite from "./AddFavorite";
export default function RoomHeader() {
  const tabRefs = useRef([]);
  const theLocation = useLocation();
  const theDispatch = useDispatch();
  const tabState = useSelector((state) => {
    return state.userRoom.selectedTab;
  });

  return (
    <div dir="rtl" className="bg-white w-full py-4 px-12 flex justify-between">
      <div className="mx-12">
        {ROOM_PAGE_TEXT.header.id} :{" "}
        {e2p(theLocation.pathname.replace(`/${ROOM_PATH}/`, ""))}
      </div>
      <div className="flex gap-x-6 ml-auto">
        {Object.values(ROOM_PAGE_TEXT.header).map((value, i) => {
          if (i == 0) return;
          return (
            <div
              style={tabState == i ? { color: "black" } : {}}
              key={i}
              onClick={() => {
                console.log(i);
                theDispatch(selectTab(i));
              }}
              className="font-semibold text-gray-400 "
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-x-12 px-2 [&>*]:font-bold [&>*]:text-gray-600">
        <ShareRoom />
          <AddFavorite/>
      </div>
    </div>
  );
}
