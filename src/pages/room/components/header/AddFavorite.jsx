import { ICON_HEART } from "../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";
import { twMerge } from "tailwind-merge";
export default function AddFavorite({className}) {
    
    return <div className={twMerge("flex items-center gap-x-2 cursor-pointer text-base",className)}>
        <ICON_HEART className="text-xl "/> {ROOM_PAGE_TEXT.buttons.addFavorite}
    </div>
}