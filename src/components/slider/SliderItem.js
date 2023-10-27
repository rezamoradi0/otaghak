import { e2p } from "../dateBox/Functions";
import { GetFarsiPrice } from "../dateBox/Functions";
const SliderItem = ({ widthIndex, imgHeightIndex, data }) => {
  //   const sliderWidths = { 0: "315px" };
  //   ${sliderWidths[widthIndex]}
  //   const sliderHeight={0:"236px"}
  return (
    <div
      className={`w-[315px] ml-2 p-1 relative snap-end rounded-xl overflow-hidden  border-blue-500`}
    >
      <button
        type="button"
        className="absolute left-2 top-2 text-white text-xl p-2 cursor-pointer"
      >
        <i className="fa-sharp fa-regular fa-heart"></i>
      </button>
      <img
        className="h-[236px] w-full rounded-xl object-cover object-center"
        src={data.img}
        alt={data.text}
      />
      <p className="text-base text-gray-700 font-semibold my-2"> {data.text}</p>

      <div className="flex flex-row-reverse flex-wrap text-sm justify-between  my-1">
        <span className="text-gray-700">
          {" "}
          {data.position}{" "}
          <span className="text-black align-text-bottom">•</span> تا{" "}
          {e2p(data.maxCapacity)} مهمان{" "}
          <span className="text-black align-text-bottom">•</span>{" "}
          {e2p(data.bedRooms)} خوابه
        </span>

        <span dir="rtl">
          <span className="text-black text-sm ">
            <i className="text-xs fa-solid fa-star-sharp"></i>{" "}
            <span className="font-semibold"> {e2p(data.stars)}</span>
          </span>
          <span className="mx-2 text-gray-500">{`(${e2p(data.userVotes)} نظر)`}</span>
        </span>
      </div>

      <div className="flex flex-row-reverse flex-wrap text-sm justify-between my-1">
        <span className="text-gray-400" dir="rtl">
          {`هر شب از `}{" "}
          <span className="font-semibold text-base text-black">
            {data.discounted
              ? GetFarsiPrice(data.discountedPrice)
              : GetFarsiPrice(data.price)}
          </span>{" "}
          تومان
        </span>
        <span> {data.discounted ? <span className="inline-flex items-center">
            <span className="bg-red-500 text-white rounded-lg mx-2 p-1">{e2p(data.discountPercent)}%</span>
            <span className="line-through decoration-red-500 text-gray-400 font-medium mx-2">{GetFarsiPrice(data.price)}</span>
        </span> : <></>}</span>
      </div>
    </div>
  );
};

export default SliderItem;
