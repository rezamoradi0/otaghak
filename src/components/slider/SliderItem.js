const SliderItem = ({ widthIndex, imgHeightIndex, data }) => {
//   const sliderWidths = { 0: "315px" };
//   ${sliderWidths[widthIndex]}
//   const sliderHeight={0:"236px"}
  return <div className={`w-[315px] ml-2  border border-blue-500`}>
    <img className="h-[236px] w-full object-cover object-center" src={data.img} alt={data.text}/>
    {data.text}
  </div>;
};

export default SliderItem;
