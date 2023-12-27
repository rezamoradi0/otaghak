import React, { useEffect, useRef, useState } from "react";
const UseSliderMovement = (usedWidth) => {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [mousePosition, setMousePosition] = useState(null);
  const lastMousePosX = useRef(null);
  const scrollSpeed = 2;


  useEffect(() => {
    setMousePosition(null);
    lastMousePosX.current = null;
    setScrollValue(0);
   if(!mouseIsDown){
     setScrollValue(Math.sign(scrollValue)*usedWidth/2);
   }
  }, [mouseIsDown]);
  useEffect(() => {
    if (mouseIsDown && mousePosition != null && lastMousePosX.current != null) {
      const newValue = lastMousePosX.current - mousePosition;
      lastMousePosX.current = mousePosition;
      setScrollValue(newValue * scrollSpeed);
    } else if (lastMousePosX.current == null) {
      lastMousePosX.current = mousePosition;
    }
  }, [mousePosition]);
  return [scrollValue, setMouseIsDown, setMousePosition,mouseIsDown];
};

export default UseSliderMovement;
