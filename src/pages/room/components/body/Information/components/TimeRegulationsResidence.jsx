import { e2p } from "../../../../../../components/dateBox/Functions";
import { ICON_GAME } from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";

export default function TimeRegulationsResidence({
  TimeRegulationsResidenceData,
}) {
  // console.log(
  //   "TimeRegulationsResidenceData = > ",
  //   TimeRegulationsResidenceData
  // );
  return (
    <div className="flex flex-col">
      <p className="text-lg font-semibold  text-gray-800 my-4">
        {ROOM_PAGE_TEXT.body.timeRegulationsResidence.header}
      </p>
      <div className="flex gap-x-4 ">
        <div className="flex flex-col gap-y-2 border border-gray-200 w-fit  min-w-[220px] py-2 px-4 rounded-xl">
          <span className="text-lg text-gray-500 ">
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.enterTime}
          </span>
          <span className="text-lg text-black font-semibold ">
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.time}{" "}
            {e2p(TimeRegulationsResidenceData.enterTime)}
          </span>
        </div>
        <div className="flex flex-col gap-y-2 border border-gray-200 w-fit  min-w-[220px] py-2 px-4 rounded-xl">
          <span className="text-lg text-gray-500 ">
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.exitTime}
          </span>
          <span className="text-lg text-black font-semibold ">
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.time}{" "}
            {e2p(TimeRegulationsResidenceData.exitTime)}
          </span>
        </div>
      </div>
      <p className="text-lg font-semibold  text-gray-800 my-4">
        {ROOM_PAGE_TEXT.body.timeRegulationsResidence.roleHeader}
      </p>

      <div className="flex flex-col gap-y-2">
        <p className="flex items-center gap-x-2">
          <ICON_GAME
            className={`text-xl ${
              TimeRegulationsResidenceData.animals ? "" : "text-gray-300 "
            }`}
          />
          <span
            className={`text-gray-500 ${
              TimeRegulationsResidenceData.animals
                ? ""
                : "line-through decoration-red-600 decoration-1"
            }`}
          >
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.animals}{" "}
          </span>
        </p>

        <p className="flex items-center gap-x-2">
          <ICON_GAME
            className={`text-xl ${
              TimeRegulationsResidenceData.party ? "" : "text-gray-300 "
            }`}
          />
          <span
            className={`text-gray-500 ${
              TimeRegulationsResidenceData.party
                ? ""
                : "line-through decoration-red-600 decoration-1"
            }`}
          >
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.party}{" "}
          </span>
        </p>

        <p className="flex items-center gap-x-2">
          <ICON_GAME
            className={`text-xl ${
              TimeRegulationsResidenceData.withShoes ? "" : "text-gray-300 "
            }`}
          />
          <span
            className={`text-gray-500 ${
              TimeRegulationsResidenceData.withShoes
                ? ""
                : "line-through decoration-red-600 decoration-1"
            }`}
          >
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.withShoes}{" "}
          </span>
        </p>

        <p className="flex items-center gap-x-2">
          <ICON_GAME
            className={`text-xl ${
              TimeRegulationsResidenceData.smoke ? "" : "text-gray-300 "
            }`}
          />
          <span
            className={`text-gray-500 ${
              TimeRegulationsResidenceData.smoke
                ? ""
                : "line-through decoration-red-600 decoration-1"
            }`}
          >
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.smoke}{" "}
          </span>
        </p>

        <p className="flex items-center gap-x-2">
          <ICON_GAME
            className={`text-xl  ${
              TimeRegulationsResidenceData.yard ? "" : "text-gray-300"
            }`}
          />
          <span
            className={`text-gray-500 ${
              TimeRegulationsResidenceData.yard
                ? ""
                : "line-through decoration-red-600 decoration-1"
            }`}
          >
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.yard}{" "}
          </span>
        </p>

        <p className="flex items-center gap-x-2">
          <ICON_GAME
            className={`text-xl ${
              TimeRegulationsResidenceData.coupleIds ? "" : "text-gray-300 "
            }`}
          />
          <span
            className={`text-gray-500 ${
              TimeRegulationsResidenceData.coupleIds
                ? ""
                : "line-through decoration-red-600 decoration-1"
            }`}
          >
            {ROOM_PAGE_TEXT.body.timeRegulationsResidence.coupleIds}{" "}
          </span>
        </p>
      </div>
      <div className="my-4">
        <p className="text-lg font-semibold ">
          {" "}
          {ROOM_PAGE_TEXT.body.timeRegulationsResidence.hostRoles}
        </p>
        <p className="my-4 flex items-center gap-x-2">
          {" "}
          <ICON_GAME className={`text-xl`} />{" "}
          {TimeRegulationsResidenceData.hostRoles}
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-700">
          {ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelHeader}
        </p>
        <p className="text-lg font-semibold text-gray-700 my-4">
          {
            ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
              TimeRegulationsResidenceData.cancelType
            ].header
          }{" "}
        </p>
        <p className="text-gray-500 ">
          {e2p(
            ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
              TimeRegulationsResidenceData.cancelType
            ].mainText
          )}
        </p>

        <div className="border-dashed-custom py-2 flex gap-x-4 gap-y-1">
          <ICON_GAME className="text-xl text-green-500 mt-1" />
          <div className="flex flex-col gap-y-1">
            <p className="text-xl text-green-600 ">
              {e2p(
                ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
                  TimeRegulationsResidenceData.cancelType
                ].goodHeader
              )}
            </p>
            <p className="text-gray-600">
              {e2p(
                ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
                  TimeRegulationsResidenceData.cancelType
                ].goodText
              )}
            </p>
          </div>
        </div>
        <div className="border-dashed-custom py-2  flex gap-x-4 justify-start">
          <ICON_GAME className="text-xl text-yellow-500 mt-1" />
          <div className="flex flex-col gap-y-1">
            <p className="text-xl text-yellow-500 ">
              {e2p(
                ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
                  TimeRegulationsResidenceData.cancelType
                ].middleHeader
              )}
            </p>
            <p className="text-gray-600">
              {e2p(
                ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
                  TimeRegulationsResidenceData.cancelType
                ].middleText
              )}
            </p>
          </div>
        </div>
        <div className="border-dashed-custom py-2  flex gap-x-4 justify-start">
          <ICON_GAME className="text-xl text-red-600 mt-1" />
          <div className="flex flex-col gap-y-1">
            <p className="text-xl text-red-600 ">
              {e2p(
                ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
                  TimeRegulationsResidenceData.cancelType
                ].badHeader
              )}
            </p>
            <p className="text-gray-600">
              {e2p(
                ROOM_PAGE_TEXT.body.timeRegulationsResidence.cancelType[
                  TimeRegulationsResidenceData.cancelType
                ].badText
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
