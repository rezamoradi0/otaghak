import Label from "../../../../../../components/Label";
import MoreButton from "../../../../../../components/MoreButton";
import { ICON_BROOM_STROKE_IMG, ICON_CHECK_SHIELD, ICON_HOME_STROKE_IMG, ICON_KEY_STROKE_IMG } from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";

export default function Warranty() {
  function PopupBody() {
    return (
      <div className="popup-scroll scroll-none">
        <Label
          className="border-0 mb-2"
          text={"ضمانت تحویل اقامتگاه"}
          icon={<ICON_CHECK_SHIELD className="text-2xl" />}
        />
            <p className="py-2 text-gray-800 text-lg border-b border-gray-300 border-dashed  text-justify">
          {ROOM_PAGE_TEXT.body.warranty.warrantyText}
        </p>
       <div className="flex gap-x-2 mt-4 items-start justify-start">
       <span className="h-24 w-24 mx-2"> <ICON_KEY_STROKE_IMG/> </span>
        <div>
        <p className="text-red-500 text-lg font-semibold">اقامتگاه به مهمان تحویل داده نشده است</p>
        <p className="py-2 text-gray-800 text-sm leading-5 border-b border-gray-300 border-dashed  text-justify">
          {ROOM_PAGE_TEXT.body.warranty.warrantyKeyText}
        </p>
        </div>
       </div>
       <div className="flex gap-x-2 mt-4">
        <span className="h-24 w-24 mx-2"> <ICON_HOME_STROKE_IMG/> </span>
        <div>
        <p className="text-red-500 text-lg font-semibold">اقامتگاه با مشخصات مطابقت ندارد</p>
        <p className="py-2 text-gray-800 text-sm leading-5 border-b border-gray-300 border-dashed  text-justify">
          {ROOM_PAGE_TEXT.body.warranty.warrantyHomeText}
        </p>
        </div>
       </div>
       <div className="flex gap-x-2 mt-4">
       <span className="h-24 w-24 mx-2"> <ICON_BROOM_STROKE_IMG/> </span>
        <div>
        <p className="text-red-500 text-lg font-semibold">اقامتگاه کثیف است و نظافت نشده است</p>
        <p className="py-2 text-gray-800 text-sm  leading-5 border-b border-gray-300 border-dashed  text-justify">
          {ROOM_PAGE_TEXT.body.warranty.warrantyCleanText}
        </p>
        </div>
       </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-4 my-4">
      <p className="font-semibold text-xl text-gray-700 ">
        {" "}
        {ROOM_PAGE_TEXT.body.warranty.header}{" "}
      </p>
      <Label
        text={"ضمانت تحویل اقامتگاه"}
        icon={<ICON_CHECK_SHIELD className="text-2xl" />}
      />
      <p className="text-gray-500">{ROOM_PAGE_TEXT.body.warranty.warrantyText}</p>
      <MoreButton
        PopupBody={<PopupBody />}
        text={"بیشتر بدانید"}
        header={ROOM_PAGE_TEXT.body.warranty.header}
      />
    </div>
  );
}
