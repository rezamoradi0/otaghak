import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const transitionDurationMs = 1000;
export default function Popup({ header, children, setShow }) {
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
      <div
        ref={backgroundRef}
        className=" absolute  bg-gray-500 w-screen h-screen top-0 left-0 bg-opacity-20"
      ></div>

      {createPortal(
        <div
          dir="rtl"
          style={{ transitionDuration: `${transitionDurationMs}ms` }}
          className={`${
            playAnimation && "  bottom-[95%]  "
          } [&>*]:px-12 z-50 h-min fixed rounded-xl
          transition-all  -bottom-0 translate-y-full left-1/2 -translate-x-1/2  bg-white pb-8 w-1/2`}
        >
          <p className="flex items-center gap-x-6 border-b  border-b-gray-400 py-8 text-xl font-semibold text-gray-600">
            {" "}
            <span
              ref={closeRef}
              className="text-2xl transition-all duration-300 cursor-pointer hover:text-red-600"
            >
              {" "}
              X{" "}
            </span>{" "}
            {header}
          </p>
          <div className="py-8"> {children}</div>
        </div>,
        document.body
      )}
    </>
  );
}
