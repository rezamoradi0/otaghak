import { Link } from "react-router-dom";
const BannerSlide = ({data}) => {
    return ( <div className="w-full h-80 my-12">
      <Link className="w-full h-full"  to={data.url}>
      <img className="w-full h-full rounded-2xl object-cover object-center" src={data.img } alt="banner" />
      </Link>
    </div> );
}
 
export default BannerSlide;