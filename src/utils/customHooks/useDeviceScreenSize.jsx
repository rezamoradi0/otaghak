import { useEffect, useState } from "react";
import { breakPoints } from "../../constant/breakPoints";

export default function useDeviceScreenSize() {
  const [deviceScreenSize, setDeviceScreenSize] = useState();
  useEffect(()=>{
    if(window.innerWidth<=breakPoints.md){
      setDeviceScreenSize(breakPoints.md);

    }else {
      setDeviceScreenSize(breakPoints.xl_2);
    }
  

  },[]);

  return deviceScreenSize;
}
