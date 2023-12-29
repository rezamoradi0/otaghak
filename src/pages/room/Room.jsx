import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Room() {
    const theDomPublicState=useSelector((state)=>{
        return state.domPublic.publicDomElements;
    });
    const theParams=useParams();
    useEffect(()=>{console.log("theDomPublicChanged "+theDomPublicState);},[theDomPublicState])
    return <div style={!!theDomPublicState?.header?{marginTop:`${theDomPublicState.header}px`}:{}} className=''></div>
}
export default Room;