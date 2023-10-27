const PeopleCounter = (props) => {
  return (
    <div className="absolute items-center flex justify-between px-4 bottom-0 right-0 translate-y-full p-2 bg-white w-full [&>button]:p-3">
        <div className="text-black">
        {props.count!=0?`${props.count} نفر`:"تعداد نفرات"}  
        </div>
   <div className="flex justify-around">
   <button  className="rounded-md w-8 h-8 border-2 font-semibold border-black mx-1"  type="button" onClick={()=>{props.setCount(props.count+1)}}>+</button>
    <button className="rounded-md w-8 h-8 border-2 font-semibold border-black mx-1"   type="button"  onClick={()=>{if(props.count!=0) props.setCount(props.count-1)}}>-</button>
   </div>
    </div>
  );
};

export default PeopleCounter;
