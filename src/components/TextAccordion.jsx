import { useRef, useState } from "react";

const TextAccordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef();
  return (
    <div dir="rtl">
      <p className="text-xl font-semibold my-6  text-gray-700">{data.header}</p>
      <p
        ref={textRef}
        className={`${
          isOpen ? "overflow-clip" : "line-clamp-4"
        } transition-all text-gray-500 h-fit`}
      >
        {data.text}
      </p>
      <button
       className="flex justify-between items-center gap-x-5 py-4  text-blue-600"
        onClick={() => {
          setIsOpen((prev) => {
            return !prev;
          });
        }}
        type="button"
      >
        
        {isOpen ? "نمایش کمتر" : "نمایش بیشتر"}
        <span><i className={`${isOpen?"rotate-180":""} text-blue-700 text-xl  relative translate-y-1/4 transition-all fa-solid fa-chevron-down`}></i></span>
      </button>
    </div>
  );
};

export default TextAccordion;
