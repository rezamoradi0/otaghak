const SearchItem = (props) => {

  function cityLongToShortName(name){
    return name.slice(0,name.indexOf(" در "));
  }

  if(props.inBox){
    if(props.city){
      return (<div
        onClick={()=>{
          const newText= (cityLongToShortName(props.text));
          props.click(newText,true);
        }}
        className="flex cursor-pointer min-h-12 items-center gap-x-2 my-1 py-1 transition-all duration-700 delay-100 hover:bg-slate-50 text-sm text-gray-700 font-semibold"
        dir="rtl"
        
      >
        <img className="max-h-12 h-12 rounded-lg" src={props.img} alt="" />
        <div className="flex flex-col gap-y-2">
          <p>{props.text}</p>
          <p>{props.residence}+ اقامتگاه</p>
        </div>
      </div>);
    }
    else{ return (<div
      onClick={()=>alert("catecory")}
      className="flex cursor-pointer min-h-12 items-center gap-x-2 my-1 py-1 transition-all duration-700 delay-100 hover:bg-slate-50 text-sm text-gray-700 font-semibold"
      dir="rtl"
      
    >
      <img className="max-h-12 h-12 rounded-lg" src={props.img} alt="" />
      <div className="flex flex-col gap-y-2">
        <p>{props.text}</p>
        <p>{props.residence}+ اقامتگاه</p>
      </div>
    </div>);
  }
    }
   
  return (
    <a
      className="flex min-h-12 items-center gap-x-2 my-1 py-1 transition-all duration-700 delay-100 hover:bg-slate-50 text-sm text-gray-700 font-semibold"
      dir="rtl"
      href={props.path+props.link}
    >
      <img className="max-h-12 h-12 rounded-lg" src={props.img} alt="" />
      <div className="flex flex-col gap-y-2">
        <p>{props.text}</p>
        <p>{props.residence}+ اقامتگاه</p>
      </div>
    </a>
  );
};

export default SearchItem;
