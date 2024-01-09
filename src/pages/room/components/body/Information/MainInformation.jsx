import { Link } from "react-router-dom";
import {
  ICON_LEFT,
  ICON_KEY,
  ICON_CIRCLE,
  ICON_USER,
  ICON_RULER,
  ICON_BEDROOM,
  ICON_MANAGER,
  ICON_STAR,
  ICON_CORRECT,
} from "../../../../../constant/fontIcons";
import { PROVINCE_PATH, CITY_PATH } from "../../../../../constant/address";
import { ROOM_PAGE_TEXT } from "../../../../../constant/text";
import { e2p } from "../../../../../components/dateBox/Functions";
import { GetSuccessRents } from "../../../../../utils/functions/RoomFunc";
import Warranty from "./components/Warranty";
import AboutResidence from "./components/AboutResidence";
import DetailResidence from "./components/DetailResidence";
import PropertyResidence from "./components/PropertyResidence";
import TimeRegulationsResidence from "./components/TimeRegulationsResidence";
import CommentsResidence from "./components/CommentsResidence";

export default function MainInformation({ data }) {
  return (
    <div dir="rtl" className="flex  w-2/3 flex-col">
      <p className="flex gap-x-3 items-center text-gray-400">
        {" "}
        <Link to={"/"} className="text-sm">
          {data.residenceTypesName}
        </Link>{" "}
        <ICON_LEFT className="text-xs" />
        <Link to={`/${PROVINCE_PATH}/${data.residence}`} className="text-sm">
          {data.residenceName}
        </Link>{" "}
        <ICON_LEFT className="text-xs" />
        <Link to={`/${CITY_PATH}/${data.city}`} className="text-sm">
          {data.cityName}
        </Link>{" "}
      </p>
      <h2 className=" my-2 text-2xl font-semibold text-gray-700">
        {data.text} , {ROOM_PAGE_TEXT.body.in} {data.cityName}
      </h2>
      <p className="flex my-4 items-center gap-x-4 text-gray-500 font-semibold">
        <span>
          <ICON_KEY />{" "}
          {data.shutter
            ? ROOM_PAGE_TEXT.body.shutter
            : ROOM_PAGE_TEXT.body.non_shutter}
        </span>{" "}
        <ICON_CIRCLE className="text-[7px]" />
        <span>
          <ICON_RULER /> {e2p(data.metres)} {ROOM_PAGE_TEXT.body.meter}
        </span>{" "}
        <ICON_CIRCLE className="text-[7px]" />
        <span>
          <ICON_USER /> {e2p(data.maxGuests)} {ROOM_PAGE_TEXT.body.guests}
        </span>{" "}
        <ICON_CIRCLE className="text-[7px]" />
        <span>
          <ICON_BEDROOM /> {e2p(data.bedRooms)} {ROOM_PAGE_TEXT.body.bedroom}
        </span>{" "}
      </p>
      <div className="flex  my-5 justify-between items-center w-full">
        <div className="flex gap-x-4">
          <span className="bg-gray-200 rounded-full  flex h-14 w-14">
            {data.managerInfo.image ? (
              <img
                className=" h-14 w-14 rounded-full"
                src={data.managerInfo.image}
                alt=""
              />
            ) : (
              <ICON_MANAGER className="text-3xl" />
            )}
          </span>
          <div className="flex flex-col justify-between">
            <span className="text-xl font-semibold text-gray-600">{`${data.managerInfo.firstNama} ${data.managerInfo.lastName}`}</span>
            <span className="text-gray-600">
              {e2p(data.managerInfo.experience)}
            </span>
          </div>
        </div>

        <div dir="rtl" className="flex flex-col min-w-fit ">
          <p className="flex justify-between items-center gap-x-2">
            <span className="text-lg font-semibold ">
              <ICON_STAR className="text-xs text-gray-600" />{" "}
            </span>{" "}
            <span className="text-xl font-semibold"> {e2p(data.roomRate)}</span>
            {data.comments.length > 0 && (
              <span className="text-gray-500">
                {" "}
                ({e2p(data.comments.length)} {ROOM_PAGE_TEXT.body.comment})
              </span>
            )}
          </p>
          <p className="flex justify-between items-center gap-x-2">
            <span>
              {" "}
              <ICON_CORRECT className="text-gray-600" />
            </span>
            <span className="text-gray-500">
              {e2p(GetSuccessRents(data.managerInfo.successRent))}+
            </span>
            <span className="text-gray-500">
              {ROOM_PAGE_TEXT.body.successRents}
            </span>
          </p>
        </div>
      </div>
      {data.tags.length > 0 && (
        <div className="flex flex-col gap-y-4 mb-4">
          {" "}
          {data.tags.map((tagId, i) => {
            return (
              <div key={i} className="flex items-center gap-x-4">
                <span className="text-3xl">
                  {ROOM_PAGE_TEXT.body.tags[tagId].icon}
                </span>
                <div className="flex flex-col gap-y-1 ">
                  <span className="text-lg font-bold text-gray-600">
                    {ROOM_PAGE_TEXT.body.tags[tagId].text}
                  </span>
                  {ROOM_PAGE_TEXT.body.tags[tagId].desc && (
                    <span className="text-gray-600">
                      {ROOM_PAGE_TEXT.body.tags[tagId].desc}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* {End Of First Information} */}
      <hr className="bg-red-500 my-4" />
      {/* {End Of First Information} */}
      <Warranty />
      <hr className="bg-red-500 my-4" />
      <AboutResidence aboutResidenceData={data.aboutResidence} />
      <hr className="bg-red-500 my-4" />
      <DetailResidence descriptionResidenceData={data.descriptionResidence} />
      <hr className="bg-red-500 my-4" />
      <PropertyResidence propertyResidenceData={data.propertyResidence}/>
      <hr className="bg-red-500 my-4" />
      <TimeRegulationsResidence  TimeRegulationsResidenceData={data.residenceTimeRegulations}/>
      <hr className="bg-red-500 my-4" />
      <CommentsResidence commentRatesData={data.rating} commentsData={data.comments}/>
      <hr className="bg-red-500 my-4" />

    </div>
  );
}
