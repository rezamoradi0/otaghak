import { e2p } from "../../../../../../components/dateBox/Functions";
import DatePickerOneMonth from "../../../../../../components/datePicker/DatePickerOneMonth";
import DatePickerTable from "../../../../../../components/datePicker/DatePickerTable";
import { ICON_USER } from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";

export default function DateReservation({DateReservationData,className=""}) {
   return <div className={className}>
        <p className="text-lg font-semibold  my-2 text-gray-700">{ROOM_PAGE_TEXT.body.dateReservationResidence.header}</p>

        <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2 my-2">
          <span className="flex items-center justify-center h-12 w-12 rounded-full "> <ICON_USER className=" text-2xl"/> </span>
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-semibold text-gray-700">
           {ROOM_PAGE_TEXT.body.dateReservationResidence.childrenPrice} 
          </p>
          <p className="text-gray-600">{DateReservationData.childrenRole}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-2 my-2">
          <span className="flex items-center justify-center h-12 w-12 rounded-full "> <ICON_USER className=" text-2xl"/> </span>
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-semibold text-gray-700">
           {ROOM_PAGE_TEXT.body.dateReservationResidence.additionalPrice} 
          </p>
            <p className="text-gray-600">{e2p(DateReservationData.additionalPrice.toLocaleString())} {ROOM_PAGE_TEXT.price} ( {ROOM_PAGE_TEXT.body.dateReservationResidence.forPerson} {e2p(DateReservationData.maxGuests)} {ROOM_PAGE_TEXT.body.dateReservationResidence.person} )</p>
        </div>
      </div>
        </div>

    <DatePickerTable DatePickerData={DateReservationData.dates}/>
    

    </div>
}