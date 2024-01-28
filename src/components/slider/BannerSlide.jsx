import { Link } from "react-router-dom";
const BannerSlide = ({data}) => {
    return ( <div className="w-full h-80 md:h-96 my-12">
      <Link className="w-full h-full"  to={data.url}>
      <img className="w-full h-full md:hidden rounded-2xl object-cover object-center " src={data.img } alt="banner" />
      <img className="md:inline-block hidden w-full h-full rounded-2xl object-cover object-right-top md:object-cover" src={data.imgMd } alt="banner" />
      </Link>
    </div> );
}
 
export default BannerSlide;