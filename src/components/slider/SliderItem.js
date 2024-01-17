import { e2p } from "../dateBox/Functions";
import { GetFarsiPrice } from "../dateBox/Functions";
import { GetPath } from "../../constant/address";
import { Link } from "react-router-dom";

const SliderItem = ({ widthIndex, imgHeightIndex, data }) => {

  const linkPath= GetPath(data.type)+data.id;

  return (
    <>
    <Link  to={linkPath} dir="ltr"
     draggable={false} className={`w-[300px] block  p-1 relative snap-end rounded-xl overflow-hidden  border-blue-500`}
    >

      <span className="absolute right-2 top-2 text-white text-xs p-2 flex gap-x-2">
        {data.tags.length>0&&data.tags.map(tag=>{return   <span key={crypto.randomUUID()} className="bg-gray-50 bg-opacity-70 rounded-md text-black p-1">{tag}</span>})}
      </span>
      <img
      draggable={false} 
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
    </Link>
          <button
          type="button"
          className="absolute left-2 top-2 text-white text-xl p-2 cursor-pointer"
          onClick={()=>{console.log("Heart");}}
        >
          <i className="fa-sharp fa-regular fa-heart"></i>
        </button>
       </>
  );
};

export default SliderItem;
