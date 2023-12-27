
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import userLayoutSlice,{fetchUserLayout} from "../redux/userLayoutSlice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
const Layout = () => {
 const  userLayoutDispatch =useDispatch();
  const userLayoutState = useSelector((state) => {
    return state.userLayout;
  });
  useEffect(()=>{
   userLayoutDispatch(fetchUserLayout());
  },[]);

  if(!userLayoutState.userLayoutData){
   return <>Loading . . . ....</>
  }
  return (
    <div>
    <Header HeaderObj={userLayoutState.userLayoutData.header} />
      <Outlet />
      <Footer FooterObj={userLayoutState.userLayoutData.footer}  HeaderObj={userLayoutState.userLayoutData.header}/>
    </div>
  );
};
export default Layout;
