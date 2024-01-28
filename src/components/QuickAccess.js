const QuickAccess = ({data}) => {
    const isFarsi=true;
    const items=data.items;
    function ItemComp({text,url,svgPath}) {
        return <a href={url} className="w-40 h-32 md:w-1/5 border border-zinc-200 md:h-auto md:aspect-square bg-white rounded-md  flex flex-col items-center justify-evenly">
           <img className="w-16 md:w-10" src={svgPath} alt={text}/>
           <div dir="rtl" className="font-semibold text-gray-500 text-sm md:text-xs line-clamp-1 ">
           {text}
           </div>
        </a>;
    }
    return ( <div className="my-0 flex  flex-col ">
            <p className="w-full text-right text-black text-2xl font-semibold my-8">{data.text}</p>
            <div className={`${isFarsi?"flex-row-reverse":"flex-row"} flex gap-3 flex-wrap items-center justify-evenly`}>
            {items.map((item,i)=>{
                return <ItemComp   key={i}  text={item.text} url={item.url} svgPath={item.svg}/>;
            })}
            </div>
    </div> );
}
 
export default QuickAccess;