import { setClipboard } from "../../../../utils/functions/LinkFunc";
import { LINK_SHARE_TELEGRAM, LINK_SHARE_WHATSAPP } from "../../../../constant/address";
import { ICON_SHARE, ICON_WHATSAPP ,ICON_TELEGRAM ,ICON_LINK} from "../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";

import { twMerge } from "tailwind-merge";
export default function ShareRoomBody({className}) {
    return (
      <div className={twMerge( "[&>p:last-of-type]:border-b-0 [&>a]:p-2 [&>p]:p-2 w-full ",className)} >
        <p className="text-xl">
          {" "}
          <ICON_SHARE /> {ROOM_PAGE_TEXT.popups.share.bodyHeader}
        </p>
        <a href={LINK_SHARE_WHATSAPP+window.location.href} target="_blank"className=" text-lg border-b border-dashed border-b-gray-700 flex items-center gap-x-4">
          <ICON_WHATSAPP className="text-green-500 text-5xl" /> {ROOM_PAGE_TEXT.buttons.shareWithWhatsapp}
        </a>
        <a href={LINK_SHARE_TELEGRAM+window.location.href} target="_blank" className=" text-lg border-b border-dashed border-b-gray-700 flex items-center gap-x-4">
          {" "}
         <ICON_TELEGRAM  className="text-blue-500 text-5xl"/> {ROOM_PAGE_TEXT.buttons.shareWithTelegram}
        </a>
        <p onClick={()=>{
          setClipboard("Test")
        }} className="cursor-pointer text-lg border-b border-dashed border-b-gray-700 flex items-center gap-x-4">
          {" "}
         <ICON_LINK className="text-4xl" /> {ROOM_PAGE_TEXT.buttons.copyLink}
        </p>
      </div>
    );
  };