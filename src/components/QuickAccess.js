const QuickAccess = ({data}) => {
    const isFarsi=true;
    const items=data.items;
    function ItemComp({text,url,svgPath}) {
        return <a href={url} className="w-40 h-32 bg-white rounded-md  flex flex-col items-center justify-evenly">
           <img className="w-16" src={svgPath} alt={text}/>
           <div className="font-semibold text-gray-500 text-sm">
           {text}
           </div>
        </a>;
    }
    return ( <div className="my-0 flex flex-col ">
            <p className="w-full text-right text-black text-2xl font-semibold my-8">{data.text}</p>
            <div className={`${isFarsi?"flex-row-reverse":"flex-row"} flex  flex-wrap items-center justify-evenly`}>
            {items.map((item,i)=>{
                return <ItemComp   key={i}  text={item.text} url={item.url} svgPath={item.svg}/>;
            })}
            </div>
    </div> );
}
 
export default QuickAccess;