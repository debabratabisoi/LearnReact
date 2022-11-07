import React, {useEffect} from "react";

export const CongratulationsMessage = ({noOfClicks, threshold, onHide})=>{
    // if(noOfClicks >= threshold)
    // {
    //     return (
    //     <h2>Congratulations! You have reached threshold clicks {threshold}</h2>)
    // }
useEffect(()=>{
    return (console.log("Congratulations Message unmounting!"));
}, []);
    return noOfClicks >= threshold
    ?
    <>
        <h2>Congratulations! You have reached threshold clicks {threshold}</h2>
        <button onClick={onHide}>Hide Congratulations Message</button>
    </>
    : null;
}