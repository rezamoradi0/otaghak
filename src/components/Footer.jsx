import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { e2p } from "./dateBox/Functions";
import logo from "./../assets/img/otaghakLogoComplete.svg";
const blogPath = "/blog";

const Footer = ({ FooterObj,HeaderObj }) => {
  const location = useLocation();
  if (!FooterObj) {
    return <></>;
  }
  if (location.pathname.toLocaleUpperCase().includes("/blog")) {
  } else {
    return (
      <div className="bg-gray-50 py-8 px-28 flex flex-col items-center justify-between">
        <div className="flex gap-x-8">
          <div className="w-1/3 flex flex-col items-center justify-start">
            <p className="text-lg font-semibold">
              {FooterObj.getApp.text}
            </p>
            <div className="flex flex-wrap justify-between gap-y-3 p-3">
              {FooterObj.getApp.links.map((link) => {
                return (
                  <a
                    className="w-5/12 block text-right px-2 py-3 text-[17px]  font-normal text-gray-800 bg-white rounded-lg"
                    href={link.link}
                    target="_blank"
                    key={crypto.randomUUID()}
                  >
                    {link.text}{" "}
                  </a>
                );
              })}
            </div>

            <p className="text-center my-2 bg-red-500 text-white p-4 w-full rounded-lg">
              {" "}
              <a href={`tel:${HeaderObj.support.tel}`}>
                {e2p(FooterObj.support.tel.replace("+98", "0"))}{" "}
                {FooterObj.support.text}
              </a>{" "}
            </p>
            <p className="text-center my-2 text-xl font-bold text-gray-600">
              {FooterObj.slogan}{" "}
            </p>
            <div className="flex flex-col my-8">
              <div className="flex items-center justify-center">
                <img
                  className="h-16"
                  src={FooterObj.awards.img}
                  alt={FooterObj.awards.text}
                />{" "}
                <p> {FooterObj.awards.text} </p>{" "}
              </div>
              <div className="flex justify-between my-8 items-center">
                {" "}
                {FooterObj.awards.items.map((item) => {
                  return (
                    <a
                      className="block  w-1/6"
                      href={item.link}
                      target="_blank"
                      key={crypto.randomUUID()}
                    >
                      <img className="w-full h-full" src={item.img} alt="" />
                    </a>
                  );
                })}{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-2/3 items-end">
            <img className="h-16" src={logo} alt="logo" />
            <p dir="rtl" className=" py-2 text-justify">
              {FooterObj.text}
            </p>
            <div dir="rtl" className="flex gap-x-12 w-full ">
              <div className="w-1/2 flex flex-col">
                <p className="my-6 font-semibold text-gray-700">
                  {FooterObj.useableLinks.text}
                </p>
                <ul className="w-full flex  gap-y-3 flex-wrap justify-between [&>li]:w-1/2">
                  {FooterObj.useableLinks.links.map((linkInfo) => {
                    return (
                      <Link
                        className="w-5/12 font-semibold text-gray-600"
                        to={linkInfo.link}
                        key={crypto.randomUUID()}
                      >
                        {" "}
                        {linkInfo.text}{" "}
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="my-6 font-semibold text-gray-700">
                  {FooterObj.trendTargets.text}
                </p>
                <ul className="w-full flex  gap-y-3 flex-wrap justify-between [&>li]:w-1/2">
                  {FooterObj.trendTargets.links.map((linkInfo) => {
                    return (
                      <Link
                        className="w-5/12  text-gray-600"
                        to={linkInfo.link}
                        key={crypto.randomUUID()}
                      >
                        {" "}
                        {linkInfo.text}{" "}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12">
          {e2p(` کلیه حقوق معنوی و انتشار محتوای این وب‌سایت متعلق به شرکت «گردشگر گستر
          خانه ما» است 1402`)}
        </p>
      </div>
    );
  }
};

export default Footer;
