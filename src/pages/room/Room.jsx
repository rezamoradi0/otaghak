import React from 'react';
import { useParams } from 'react-router-dom';
function Room() {
    const theParams=useParams();
    return <>Room id : {theParams.roomId}</>
}
export default Room;