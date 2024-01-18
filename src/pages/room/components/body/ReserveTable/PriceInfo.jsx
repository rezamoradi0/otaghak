import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  RESERVE_TABLE_TEXT,
  ROOM_PAGE_TEXT,
} from "../../../../../constant/text";
import { ICON_AMENITIES, ICON_FLOWER } from "../../../../../constant/fontIcons";
import { e2p } from "../../../../../utils/functions/DateFunc";

export default function PriceInfo({ display = false, morePricePerPerson = 0 }) {
  const [priceTable, setPriceTable] = useState(null);
  const userDatePickerSelectedDaysState = useSelector((state) => {
    return state.userDatePicker.selectedDays;
  });
  const userDatePickerPersonCountState = useSelector((state) => {
    return state.userDatePicker.personCount;
  });
  useEffect(() => {
    if (
      !userDatePickerSelectedDaysState ||
      !userDatePickerSelectedDaysState.length
    )
      return;

    let priceTable = {
      priceArray: [],
      allDiscount: 0,
      morePrice: 0,
      morePriceForAllDaysForOnePerson: 0,
    };
    Object.values(userDatePickerSelectedDaysState.slice(0, -1)).forEach(
      (value) => {
        const thisPrice = value.discountedPrice
          ? value.discountedPrice
          : value.price;
        const thisDiscount = value.discountedPrice
          ? value.price - value.discountedPrice
          : 0;
        const priceIndex = priceTable.priceArray.findIndex(
          (item) => item.price === thisPrice
        );

        if (priceIndex < 0) {
          priceTable.priceArray[priceTable.priceArray.length] = {
            count: 1,
            price: thisPrice,
          };
        } else {
          priceTable.priceArray[priceIndex].count += 1;
        }
        priceTable.allDiscount += thisDiscount;
        // priceTable.priceObjList.push({price:thisPrice,discount:thisDiscount});
      }
    );
    priceTable.morePrice =
      userDatePickerPersonCountState.more * morePricePerPerson;
    priceTable.morePriceForAllDaysForOnePerson =
      priceTable.morePrice * (userDatePickerSelectedDaysState.length - 1);
    setPriceTable(priceTable);
  }, [userDatePickerSelectedDaysState, userDatePickerPersonCountState]);
  return (
    <div className={`${display ? "flex" : "hidden"} flex-col`}>
      <p className="mb-3 mt-2 text-gray-500">
        <span>
          <ICON_FLOWER />
        </span>{" "}
        {RESERVE_TABLE_TEXT.bill}{" "}
      </p>
      {priceTable && (
        <div className="flex flex-col gap-y-2">
          {priceTable.priceArray.map((priceList) => {
            return (
              <p className="flex justify-between items-center">
                <span className="text-gray-500">
                  {e2p(priceList.count)} {RESERVE_TABLE_TEXT.oneNight} ×{" "}
                  {e2p(priceList.price.toLocaleString().replaceAll(",", "،"))}{" "}
                  {ROOM_PAGE_TEXT.price}
                </span>
                <span className="font-semibold text-gray-600">
                  {e2p(
                    (priceList.count * priceList.price)
                      .toLocaleString()
                      .replaceAll(",", "،")
                  )}{" "}
                  {ROOM_PAGE_TEXT.price}
                </span>
              </p>
            );
          })}
          {!!userDatePickerPersonCountState.more && (
            <p className="text-gray-500 flex justify-between items-center">
              <span>
                {" "}
                {e2p(userDatePickerPersonCountState.more)}
                <span>
                  {" "}
                  {RESERVE_TABLE_TEXT.morePerson} ×{" "}
                  {e2p(
                    (
                      (userDatePickerSelectedDaysState.length - 1) *
                      morePricePerPerson
                    )
                      .toLocaleString()
                      .replaceAll(",", "،")
                  )}{" "}
                  {ROOM_PAGE_TEXT.price}{" "}
                </span>
              </span>
              <span className="text-gray-600 font-semibold">
                {e2p(
                  priceTable.morePriceForAllDaysForOnePerson
                    .toLocaleString()
                    .replaceAll(",", "،")
                )}{" "}
                {ROOM_PAGE_TEXT.price}
              </span>
            </p>
          )}
          {priceTable.allDiscount && (
            <p className="text-red-500 flex items-center justify-between">
              <span>
                {RESERVE_TABLE_TEXT.allDiscounts}{" "}
                <ICON_AMENITIES className="mx-2" />
              </span>{" "}
              <span className="font-semibold text-red-400">
                {e2p(
                  priceTable.allDiscount.toLocaleString().replaceAll(",", "،")
                )}{" "}
                {ROOM_PAGE_TEXT.price}
              </span>
            </p>
          )}
          <div className="border-dashed-custom h-1 my-2"></div>
        </div>
      )}
    </div>
  );
}
