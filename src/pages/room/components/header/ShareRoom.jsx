import { useState } from "react";
import Popup from "../../../../components/popup/Popup";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";
import { ICON_SHARE, ICON_WHATSAPP ,ICON_TELEGRAM ,ICON_LINK} from "../../../../constant/fontIcons";
import { setClipboard } from "../../../../utils/functions/LinkFunc";
import { LINK_SHARE_TELEGRAM, LINK_SHARE_WHATSAPP } from "../../../../constant/address";
export default function ShareRoom() {
  const [show, setShow] = useState(false);
  const onClickBtnHandler = () => {
    setShow(!show);
    console.log("HERE");
  };
  const MyComp = () => {
    return (
      <div className="[&>p:last-of-type]:border-b-0 [&>a]:p-2 [&>p]:p-2" >
        <p className="text-xl">
          {" "}
          <ICON_SHARE /> {ROOM_PAGE_TEXT.popups.share.bodyHeader}
        </p>
        <a href={LINK_SHARE_WHATSAPP+window.location.href} target="_blank"className=" text-lg border-b border-dashed border-b-gray-700 flex items-center gap-x-4">
          <ICON_WHATSAPP className="text-green-500 text-5xl" /> ارسال با واتساپ
        </a>
        <a href={LINK_SHARE_TELEGRAM+window.location.href} target="_blank" className=" text-lg border-b border-dashed border-b-gray-700 flex items-center gap-x-4">
          {" "}
         <ICON_TELEGRAM  className="text-blue-500 text-5xl"/> ارسال با تلگرام
        </a>
        <p onClick={()=>{
          setClipboard("Test")
        }} className="cursor-pointer text-lg border-b border-dashed border-b-gray-700 flex items-center gap-x-4">
          {" "}
         <ICON_LINK className="text-4xl" /> کپی کردن لینک
        </p>
      </div>
    );
  };
  return (
    <div>
      <button
        onClick={onClickBtnHandler}
        className="cursor-pointer flex items-center gap-x-2"
      >
        {" "}
        <ICON_SHARE className={"text-2xl"} /> اشتراک گذاری
      </button>
      {show && (
        <Popup header={ROOM_PAGE_TEXT.popups.share.header} setShow={setShow}>
          <MyComp />
        </Popup>
      )}
    </div>
  );
}
