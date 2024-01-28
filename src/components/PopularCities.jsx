import { e2p } from "./dateBox/Functions";
const residencesText = "اقامتگاه";
const gridTemp = {
  1: "col-span-2",
  2: "col-span-3",
  3: "col-span-2",
  4: "col-span-3",
  5: "col-span-3",
  6: "col-span-2",
  7: "col-span-3",
  8: "col-span-2",
};

const PopularCities = ({ data }) => {

    return (
    
    <div className={`py-6` }  style={
        data.bg_color && {
          backgroundColor: "#"+data.bg_color,
          boxShadow: `0 0 0 100vmax #`+data.bg_color,
          clipPath: "inset(0 -100vmax)",
        }
      }>
      <p className="w-full text-right my-6 text-xl font-semibold">{data.text}</p>
    <div dir="rtl" className="w-full overflow-x-scroll">
    <div dir="ltr" className="w-full md:w-[900px]  grid grid-cols-10 grid-rows-2 gap-3   rounded-lg ">
        {data.items.map((cityData, i) => {
          return (
            <a
              key={i}
              className={
                gridTemp[i + 1] + "  relative md:h-40 h-60 overflow-hidden rounded-lg"
              }
              href={cityData.url}
            >
              <span className="absolute flex bg-gradient-to-t from-black from-5% to-transparent to-35% h-full w-full"></span>
              <img
                className="w-full h-full object-cover object-center"
                src={cityData.img}
                alt={cityData.text}
              />

              <span className="absolute bottom-2 right-3 text-white font-semibold text-sm">
                {cityData.text}
              </span>
              <span className="absolute bottom-2 left-3 text-white text-sm">
                <span className="font-thin" dir="rtl">
                  {residencesText}
                </span>{" "}
                <span className="px-2 font-semibold">
                  {e2p(cityData.residences)}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default PopularCities;
