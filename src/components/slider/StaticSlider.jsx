const StaticSlider = ({data}) => {

    return ( <div dir="rtl" className="flex justify-between gap-x-4 my-12">
        {data.items.map((item)=>{
            return  <div className="flex gap-y-3 flex-col border border-gray-300 rounded-lg overflow-hidden p-4">
              <div className="flex items-center ">
                <img className="ml-2" src={item.img} alt={item.header} />
                <p className="font-semibold text-lg text-gray-800">{item.header}</p>
              </div>
              <p className="text-gray-600">{item.text}</p>
            </div>;
        })}
    </div> );
}
 
export default StaticSlider;