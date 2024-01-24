import { useEffect } from "react";
import  { fetchMain } from "../../redux/mainSlice";
import { useSelector, useDispatch } from "react-redux";
import MainLoading from "../loading/MainLoading";
import HomeError from "./HomeError";
import SearchBoxMain from "../../components/searchBox/SearchBoxMain";
import QuickAccess from "../../components/QuickAccess";
import Banners from "../../components/Banners";
import MainSlider from "../../components/slider/MainSlider";
import PopularCities from "../../components/PopularCities";
import StaticSlider from "../../components/slider/StaticSlider";
import BannerSlide from "../../components/slider/BannerSlide";
import CustomSlider from "../../components/slider/CustomSlider";
import TextAccordion from "../../components/TextAccordion";
const HomePage = () => {
  const mainState = useSelector((state) => {
    return state.main;
  });
  const mainDispatch = useDispatch();
  useEffect(() => {
    mainDispatch(fetchMain());
  }, []);
  if (mainState.loading) {
    return <MainLoading />;
  } else if (mainState.errorMessage !== null) {
    return <HomeError Error={mainState.errorMessage} />;
  } else {
    return (
      <div className="bg-gray-50">
        <div className="py relative">
          <section style={{backgroundImage:`url(${mainState.mainData.header.bgImage})`||{}}} className={`w-full pt-36 flex flex-col items-center bg-blend-difference justify-center h-[100vb] bg-center bg-no-repeat bg-cover ]`}>
            <h1 className="w-full text-center mb-12 text-3xl font-bold text-gray-50">
              اجاره ویلا و سوییت در سراسر ایران
            </h1>
            <SearchBoxMain />
          </section>
        </div>
        <main className="px-28 md:px-5">
          <QuickAccess data={mainState.mainData.quickAccess} />
          <Banners data={mainState.mainData.banners} />
          {mainState.mainData.mainSections.map((sliderData,i) => {
            if (sliderData.type === "slider") {
              return (
                <MainSlider
                key={i}
                  text={sliderData.text}
                  description={sliderData.description}
                  url={sliderData.url}
                  dataArray={sliderData.items}
                  bg_color={sliderData.bg_color}
                />
              );
            } else if (sliderData.type==="popularCites"){
             return <PopularCities  key={i} data={sliderData} />
            }
            else if(sliderData.type==="staticSlider"){
              return <StaticSlider  key={i} data={sliderData}/>;
            }
            else if(sliderData.type==="banner"){
              return <BannerSlide  key={i} data={sliderData}/>;
            }else if (sliderData.type==="customSlider"){
              return <CustomSlider  key={i} data={sliderData}/>;
            }else if(sliderData.type==="text"){
              return  <TextAccordion  key={i} data={sliderData}/>;
            }
            else {
              <></>
            }
          })}
        </main>
      </div>
    );
  }
};
export default HomePage;
