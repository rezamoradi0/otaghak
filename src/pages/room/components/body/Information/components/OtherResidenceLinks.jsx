import { Link } from "react-router-dom";
import { ICON_LEFT } from "../../../../../../constant/fontIcons";
import { LINKS_TEXT } from "../../../../../../constant/text";

export default function OtherResidenceLinks({ linksData }) {
  return (
    <div>
      <p>{LINKS_TEXT.searchOtherRooms}</p>
      <div className="flex items-center gap-x-2 my-4 flex-wrap">
        {linksData.map((linkObj,i) => {
          return (
            <Link
                key={i}
              to={linkObj.path}
              className="px-4 py-2 gap-x-2 flex flex-nowrap items-center border border-gray-300 rounded-full text-gray-600"
            >
              <span> {linkObj.text} </span> <ICON_LEFT />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
