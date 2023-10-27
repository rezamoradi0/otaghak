const Banners = ({ data }) => {
  const defaultAlt = "تصویر";
  const Row_Spans={
    1:"row-span-1",
    2:"row-span-2"
  }
  const Col_Spans={
    1:"col-span-1",
    2:"col-span-2",
    3:"col-span-3",
    4:"col-span-4",
    5:"col-span-5"
  }
  function Banner({ text, imgPath, url, row, col }) {
   
   
    return (
      <a href={url} className={` ${Col_Spans[col]} ${Row_Spans[row]} w-full h-full rounded-3xl overflow-hidden`}>
        <img className="w-full h-full object-cover  " src={imgPath} alt={text} />
      </a>
    );
  }
  return (
    // {MainDIV}
    <div className="w-full h-[420px] grid grid-cols-11 grid-rows-2 grid-flow-col gap-4  my-16 items-center justify-between">
      {data.map((banner ,i ) => {
        let divCols = 1;
        let divRows = 2;
        
        switch (i) {
          case 0:
            divCols = 4;
            divRows = 2;
            break;
          case 1:
            divCols = 2;
            divRows = 1;
            break;
            case 2:
              divCols = 2;
              divRows = 1;
              break;
          case 3:
            divCols = 5;
            divRows = 2;
            break;
          default:
            break;
        }
        return (
          <Banner
            text={banner.text || defaultAlt}
            imgPath={banner.img}
            url={banner.url}
            row={divRows}
            col={divCols}
          />
        );
      })}
    </div>
  );
};

export default Banners;
