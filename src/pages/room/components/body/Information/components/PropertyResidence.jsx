import React from "react";
import MoreButton from "../../../../../../components/MoreButton";
import {
  ICON_BARBECUE,
  ICON_BILLIARDS,
  ICON_DIGITAL_RECEIVER,
  ICON_FOOTBALL,
  ICON_FURNITURE,
  ICON_GAME,
  ICON_GRILL,
  ICON_SOUND_SYSTEM,
  ICON_TV,
} from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";
const limitIconCount = 8;

function Popup_Body({ propertyResidenceData }) {
  return (
    <div className="w-full scroll-none popup-scroll">
      {Object.keys(propertyResidenceData).map((key1, i) => {
        return (
          <>
            <div className="flex flex-col gap-y-3 text-lg">
              <p className="text-xl font-semibold text-gray-600 flex items-center gap-x-2">
                <span> {GetIcon(key1, crypto.randomUUID())} </span>{" "}
                {ROOM_PAGE_TEXT.body.propertyResidence[key1]}
              </p>
              {Object.keys(propertyResidenceData[key1]).map((key2) => {
                return (
                  <p>
                    {GetIcon(key2, crypto.randomUUID())}{" "}
                    {ROOM_PAGE_TEXT.body.propertyResidence[key2]}
                  </p>
                );
              })}
            </div>
            <hr className="my-4"/>
          </>
        );
      })}
    </div>
  );
}
function GetIcon(propertyName, key) {
  const propAndIcon = {
    games: <ICON_GAME />,
    billiards: <ICON_BILLIARDS />,
    footballTable: <ICON_FOOTBALL />,

    amenities: <ICON_GAME />,
    barbecue: <ICON_BARBECUE />,
    grill: <ICON_GRILL />,

    homeAppliances: <ICON_GAME />,
    digitalReceiver: <ICON_DIGITAL_RECEIVER />,
    soundSystem: <ICON_SOUND_SYSTEM />,
    furniture: <ICON_FURNITURE />,
    tv: <ICON_TV />,

    kitchenAppliances: <ICON_GAME />,
  };
  const testIcon = React.cloneElement(
    propAndIcon[propertyName] ?? <ICON_GAME />,
    { key: key }
  );
  return testIcon;
}
export default function PropertyResidence({ propertyResidenceData }) {
  let counter = 0;
  return (
    <div key={crypto.randomUUID()}>
      <p className="text-lg text-gray-600 font-semibold">
        {ROOM_PAGE_TEXT.body.propertyResidence.header}
      </p>
      <div key={crypto.randomUUID()} className=" flex flex-wrap gap-y-4 my-4">
        {Object.keys(propertyResidenceData).map((key1, i) => {
          return Object.keys(propertyResidenceData[key1]).map((key2) => {
            counter++;
            if (counter > limitIconCount) return;
            else
              return (
                <span
                  className="w-1/2 text-lg flex gap-x-2 items-center"
                  key={crypto.randomUUID()}
                >
                  {GetIcon(key2, crypto.randomUUID())}{" "}
                  <span className=" text-gray-700">
                    {" "}
                    {ROOM_PAGE_TEXT.body.propertyResidence[key2]}
                  </span>
                </span>
              );
          });
        })}
      </div>
      <MoreButton
        text={ROOM_PAGE_TEXT.buttons.moreProperty}
        header={ROOM_PAGE_TEXT.body.propertyResidence.header}
        PopupBody={<Popup_Body propertyResidenceData={propertyResidenceData} />}
      />
    </div>
  );
}
