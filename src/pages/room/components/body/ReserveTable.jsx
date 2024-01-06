import { useSelector } from "react-redux";
export default function ReserveTable({parentMarginTop=0}) {
    const theDomPublicState = useSelector((state) => {
        return state.domPublic.publicDomElements;
      });
    return  <div  style={
        !!theDomPublicState?.header
          ? { top: `${theDomPublicState.header + parentMarginTop}px` }
          : {}
      } className="w-1/3 flex  h-fit  rounded-lg min-h-[200px] border border-red-500 sticky "> </div>
    ;
}