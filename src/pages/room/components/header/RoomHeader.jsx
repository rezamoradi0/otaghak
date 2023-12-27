import { useLocation } from "react-router-dom"
import { e2p } from "../../../../components/dateBox/Functions";
import { ROOM_PATH } from "../../../../constant/address";
export default function RoomHeader(){
    const theLocation=useLocation();

    return  <div dir="rtl" className="bg-white w-full px-12 flex">
        <div>
            شناسه :  {e2p(theLocation.pathname.replace(`/${ROOM_PATH}/`,""))}
        </div>
        <div className="flex">
        <div className="font-semibold text-gray-600 "></div>
        </div>
    </div>
}