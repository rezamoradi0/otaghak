import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

export default function Popup({
  header,
  children,
  setShow,
  className = "",
  playClassName = "",
  childrenClassName = "",
  headerParentClassName="",
  exitClassName=""
}) {
  const transitionDurationMs = 1000;
  const [playAnimation, setPlayAnimation] = useState(false);
  const backgroundRef = useRef();
  const closeRef = useRef();
  useEffect(() => {
    let theTimeout;
    setPlayAnimation(true);
    const bornEvent = () => {
      setPlayAnimation(false);
      theTimeout = setTimeout(() => {
        setShow(false);
      }, transitionDurationMs);
    };
    backgroundRef.current.addEventListener("click", bornEvent, true);
    closeRef.current.addEventListener("click", bornEvent, true);
    return () => {
      backgroundRef.current?.removeEventListener("click", bornEvent, true);
      closeRef.current?.removeEventListener("click", bornEvent, true);
      clearTimeout(theTimeout);
    };
  }, []);

  return (
    <>
  

      {createPortal(<>
        <div
        ref={backgroundRef}
        className={`fixed z-50 bg-gray-500 w-screen h-screen top-0 left-0 bg-opacity-20`}
      ></div>
       <div
          dir="rtl"
          style={{ transitionDuration: `${transitionDurationMs}ms` }}
          className={`${playAnimation && twMerge("bottom-[95%] ", playClassName)}
              ${twMerge(
                " md:w-full md:h-full [&>*]:px-12 z-50 h-min fixed rounded-xl transition-all overflow-x-clip  -bottom-0 translate-y-full left-1/2 -translate-x-1/2  bg-white pb-8 w-1/2",
                className
              )}
            `}
        >
          <div className={twMerge("flex items-center gap-x-6 border-b  border-b-gray-400 pt-4 pb-3 text-xl font-semibold text-gray-600",headerParentClassName)}>
            {" "}
            <span
              ref={closeRef}
              className={twMerge("text-2xl transition-all duration-300 cursor-pointer hover:text-red-600",exitClassName)}
            >
              {" "}
             X{" "}
            </span>{" "}
            {header||<></>}
          </div>
          <div className={`py-8 flex ${childrenClassName}`}> {children}</div>
        </div>
      </>
       ,
        document.body
      )}
    </>
  );
}
