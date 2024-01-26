import { useState } from "react";
import { ICON_LEFT } from "../constant/fontIcons";
import Popup from "./popup/Popup";
import { twMerge } from "tailwind-merge";

export default function MoreButton({
  text,
  className = "",
  icon = <ICON_LEFT />,
  header,
  PopupBody,
  PopupClassName="",
  PopupPlayClassName=""
 
}) {
  const [show, setShow] = useState(false);
  return (
    <div key={crypto.randomUUID()} onClick={()=>{
        setShow(true);
    }} className={twMerge("my-4 flex items-center gap-x-4 text-blue-600 cursor-pointer w-fit", className)}>
      <span className={`font-semibold `}> {text}</span>
     {icon}
      {show && (
        <Popup header={header} setShow={setShow} className={PopupClassName} playClassName={PopupPlayClassName}>
          {PopupBody}
        </Popup>
      )}
    </div>
  );
}
