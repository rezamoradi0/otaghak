import {ICON_LEFT, ICON_USER} from "../../../../../../constant/fontIcons"
import {e2p} from "../../../../../../components/dateBox/Functions"
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";
import { Link } from "react-router-dom";
import { PROFILE_PATH } from "../../../../../../constant/address";
export default function ManagerResidence({ managerData }) {
  return (
    <div className="flex flex-col py-2  gap-y-2">
      <div className="flex items-center gap-x-2">
        {managerData.image ? (
          <img className="h-16 w-16 rounded-full" src={managerData.image} alt="managerProfile" />
        ) : (
            <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100"> <ICON_USER className=" text-2xl"/> </span>
            )}
        <div>
          <p className="text-lg font-semibold text-gray-700">
            {managerData.firstName} {managerData.lastName}
          </p>
          <p className="text-gray-600">{e2p(managerData.experience)}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
          <span className="flex items-center justify-center h-12 w-12 rounded-full "> <ICON_USER className=" text-2xl"/> </span>
        <div>
          <p className="text-lg font-semibold text-gray-700">
           {ROOM_PAGE_TEXT.body.managerResidence.responseTime}
          </p>
          <p className="text-gray-600">{e2p(managerData.responseTime)}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
          <span className="flex items-center justify-center h-12 w-12 rounded-full "> <ICON_USER className=" text-2xl"/> </span>
        <div>
          <p className="text-lg font-semibold text-gray-700">
           {ROOM_PAGE_TEXT.body.managerResidence.acceptRate}
          </p>
          <p className="text-gray-600">{ROOM_PAGE_TEXT.body.managerResidence.range} {e2p(managerData.acceptRate)} {ROOM_PAGE_TEXT.body.managerResidence.percent}</p>
        </div>
      </div>
            <Link className="text-blue-500 flex items-center gap-x-2 my-2 w-fit px-3" to={`/${PROFILE_PATH}/${managerData.managerId}`}>
           
            <span className="font-semibold">     {ROOM_PAGE_TEXT.body.managerResidence.profileBtn}</span>
            <ICON_LEFT/>
            </Link>
    
    </div>
  );
}
