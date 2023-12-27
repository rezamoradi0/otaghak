import React from "react";
import { useParams } from "react-router-dom";
const City = () => {
    let theParams=useParams();
    return ( <>City : {theParams.cityName}</> );
}   
 
export default City;