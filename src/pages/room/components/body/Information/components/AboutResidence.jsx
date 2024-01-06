import { e2p } from "../../../../../../components/dateBox/Functions";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";
import React from "react";
export default function AboutResidence({ aboutResidenceData }) {
  function TheRow({ header, text = "", Icon = "" }) {
    return (
      <div className="flex gap-x-4 items-center my-4">
        {React.cloneElement(Icon, { className: "text-2xl text-gray-600" })}
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-semibold  text-gray-600">{header}</p>
          <p className="text-gray-500">{e2p(text)}</p>
        </div>
      </div>
    );
  }
  return (
    <>
    <div>
      <p className="text-xl text-gray-600 font-semibold">
        {ROOM_PAGE_TEXT.body.aboutResidence.about}
      </p>
      <TheRow
        header={
          aboutResidenceData.shutter
            ? ROOM_PAGE_TEXT.body.aboutResidence.shutter.yes
            : ROOM_PAGE_TEXT.body.aboutResidence.shutter.no
        }
        Icon={ROOM_PAGE_TEXT.body.aboutResidence.shutter.icon}
      />
      <TheRow
        header={ROOM_PAGE_TEXT.body.aboutResidence.mainInfo.text}
        Icon={ROOM_PAGE_TEXT.body.aboutResidence.mainInfo.icon}
        text={aboutResidenceData.mainInfo}
      />
      <TheRow
        header={ROOM_PAGE_TEXT.body.aboutResidence.capacity.text}
        Icon={ROOM_PAGE_TEXT.body.aboutResidence.capacity.icon}
        text={aboutResidenceData.capacity}
      />
      <TheRow
        header={ROOM_PAGE_TEXT.body.aboutResidence.bedService.text}
        Icon={ROOM_PAGE_TEXT.body.aboutResidence.bedService.icon}
        text={aboutResidenceData.bedRoom}
      />
      <TheRow
        header={ROOM_PAGE_TEXT.body.aboutResidence.bathRoom.text}
        Icon={ROOM_PAGE_TEXT.body.aboutResidence.bathRoom.icon}
        text={aboutResidenceData.bathRoom}
      />
    
        <TheRow
        header={ROOM_PAGE_TEXT.body.aboutResidence.view.text}
        Icon={ROOM_PAGE_TEXT.body.aboutResidence.view.icon}
        text={aboutResidenceData.view}
      />
    </div>
    
    </>
  );
}
