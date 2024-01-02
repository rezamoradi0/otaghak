import { useState } from "react";
import Popup from "../../../../components/popup/Popup";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";
import { ICON_SHARE } from "../../../../constant/fontIcons";
import ShareRoomBody from "./ShareRoomBody";
export default function ShareRoom({ className = "", bodyClassName = "" }) {
  const [show, setShow] = useState(false);
  const onClickBtnHandler = () => {
    setShow(!show);
  };

  return (
    <div className={className}>
      <button
        onClick={onClickBtnHandler}
        className="cursor-pointer flex items-center gap-x-2 text-base"
      >
        {" "}
        <ICON_SHARE className={"text-2xl"} />{ROOM_PAGE_TEXT.buttons.share}
      </button>
      {show && (
        <Popup header={ROOM_PAGE_TEXT.popups.share.header} setShow={setShow}>
          <ShareRoomBody className={bodyClassName} />
        </Popup>
      )}
    </div>
  );
}
