import MoreButton from "../../../../../../components/MoreButton";
import { e2p } from "../../../../../../components/dateBox/Functions";
import { ICON_LEFT } from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";

function Popup_body({descriptionResidenceData}) {
  return (
    <div className="text-gray-600 text-lg popup-scroll scroll-none">
      <p className="my-4 text-lg font-semibold text-gray-600">
        {e2p(descriptionResidenceData.header)}
      </p>
      <p className="text-gray-500 line-clamp-3">
        {e2p(descriptionResidenceData.text)}
      </p>
      <div className="mt-4">
        <p>{ROOM_PAGE_TEXT.body.descriptionResidence.property}</p>
        <ul>
            {descriptionResidenceData.propertyList.map((property,i)=>{
                return <li className="" key={i}>- {e2p(property)}</li>
            })}
        </ul>
      </div>

         <div className="mt-4">
        <p>{ROOM_PAGE_TEXT.body.descriptionResidence.access}</p>
        <ul>
            {descriptionResidenceData.accessList.map((access,i)=>{
                return <li className="" key={i}>- {e2p(access)}</li>
            })}
        </ul>
         </div>
    </div>
  );
}
export default function DetailResidence({ descriptionResidenceData }) {
  return (
    <div>
      <p className="my-4 text-lg font-semibold text-gray-600">
        {e2p(descriptionResidenceData.header)}
      </p>
      <p className="text-gray-500 line-clamp-3">
        {descriptionResidenceData.text}
      </p>
      <MoreButton
        text={ROOM_PAGE_TEXT.buttons.moreDetail}
        icon={<ICON_LEFT />}
        header={ROOM_PAGE_TEXT.body.descriptionResidence.header}
        PopupBody={<Popup_body descriptionResidenceData={descriptionResidenceData}/>}
      />
    </div>
  );
}
