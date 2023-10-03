import { useEffect } from "react";
import Header from "../../components/Header";
import { fetchMain } from "../../redux/mainSlice";
import { useSelector, useDispatch } from "react-redux";
import MainLoading from "../loading/MainLoading";
import HomeError from "./HomeError";
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
      <main className="py">
        <Header HeaderObj={mainState.mainData.header} />
      </main>
    );
  }
};
export default HomePage;
