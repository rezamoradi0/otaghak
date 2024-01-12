// import { useEffect, useRef } from "react";
// import { Map } from "@neshan-maps-platform/ol";

import NeshanMap, {
  NeshanMapRef,
} from "@neshan-maps-platform/react-openlayers";
import { ICON_MAP_MARKER } from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";

export default function PositionResidence({ positionData }) {
  // console.log(positionData);
  return (
    <div>
      <p className="text-lg font-semibold my-3">{ROOM_PAGE_TEXT.body.positionResidence.header}</p>
      <p className="my-3 text-gray-500">{ROOM_PAGE_TEXT.body.positionResidence.text}</p>
      <div
        
        className="flex relative rounded-3xl overflow-hidden"
      >
        <NeshanMap
          style={{ height: "350px", width: "100%" }}
          center={{
            latitude: positionData.latitude,
            longitude: positionData.longitude,
          }}
          zoom={positionData.z}
          mapKey="web.1aa916e53ac64d718fd58457067cfa38"
        ></NeshanMap>
        <span className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-full">
          <ICON_MAP_MARKER className="text-4xl text-red-600" />
        </span>
        <div className="w-full h-full absolute"></div>
      </div>
    </div>
  );
}
