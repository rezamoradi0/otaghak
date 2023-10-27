import { useEffect } from "react";
import Header from "../../components/Header";
import MainSlice, { fetchMain } from "../../redux/mainSlice";
import { useSelector, useDispatch } from "react-redux";
import MainLoading from "../loading/MainLoading";
import HomeError from "./HomeError";
import SearchBoxMain from "../../components/searchBox/SearchBoxMain";
import QuickAccess from "../../components/QuickAccess";
import Banners from "../../components/Banners";
import MainSlider from "../../components/slider/MainSlider";
const HomePage = () => {
  const mainState = useSelector((state) => {
    return state.main;
  });
  const mainDispatch = useDispatch();
  useEffect(() => {
    mainDispatch(fetchMain());
  }, []);
  console.log(mainState);
  if (mainState.loading) {
    return <MainLoading />;
  } else if (mainState.errorMessage !== null) {
    return <HomeError Error={mainState.errorMessage} />;
  } else {
    return (
      <div className="bg-gray-50">
        <div className="py relative">
          <Header HeaderObj={mainState.mainData.header} />
          <section className="w-full pt-36 flex flex-col items-center bg-blend-difference justify-center h-[100vb] bg-center bg-no-repeat bg-cover bg-[url('http://localhost:3000/images/main-page/1280.jpg')]">
            <h1 className="w-full text-center mb-12 text-3xl font-bold text-gray-50">
              اجاره ویلا و سوییت در سراسر ایران
            </h1>
            <SearchBoxMain />
          </section>
        </div>
        <main className="px-28 ">
          <QuickAccess data={mainState.mainData.quickAccess} />
          <Banners data={mainState.mainData.banners} />
          {mainState.mainData.mainSections.map((mainSliderData) => {
            if (mainSliderData.type === "slider") {
              return (
                <MainSlider
                  text={mainSliderData.text}
                  description={mainSliderData.description}
                  url={mainSliderData.url}
                  dataArray={mainSliderData.items}
                />
              );
            } else {
              <></>;
            }
          })}
        </main>
      </div>
    );
  }
};
export default HomePage;
