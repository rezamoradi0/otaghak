import { ICON_HEART } from "../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../constant/text";

export default function AddFavorite() {
    
    return <div className="flex items-center gap-x-2 cursor-pointer">
        <ICON_HEART className="text-xl "/> {ROOM_PAGE_TEXT.buttons.addFavorite}
    </div>
}