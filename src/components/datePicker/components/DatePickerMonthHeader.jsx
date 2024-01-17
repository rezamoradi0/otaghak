import { twMerge } from "tailwind-merge";
import { e2p } from "../../../utils/functions/DateFunc";

import { ICON_LEFT,ICON_RIGHT } from "../../../constant/fontIcons";
export default function DatePickerMonthHeader({
  monthName,
  yearNumber,
  NextIcon,
  PervIcon,
  className,
  PervOnClick,
  NextOnClick,
  canNext,
  canPerv
}) {
  return (
    <div className={twMerge(`flex items-center  justify-between `, className)}>
      {PervIcon ? <ICON_RIGHT className={`${canPerv?"cursor-pointer":"text-gray-400 cursor-not-allowed"}`} onClick={PervOnClick}/> : <span></span>}
      <div className="flex gap-x-4 font-semibold text-lg text-gray-700">
        <span>{monthName}</span>
        <span>{e2p(yearNumber)}</span>
      </div>
      {NextIcon ? <ICON_LEFT className={`${canNext?"cursor-pointer":"text-gray-400 cursor-not-allowed"}`} onClick={NextOnClick}/> : <span></span>}
    </div>
  );
}
