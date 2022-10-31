import React from "react";
import { useState } from "react";
// This example is to save the state of the button click
// use the useState hook for state manipulation
export const CounterButton = () =>{
    //numberOfClicks: current value of the state , setNumberOfClicks : changed value of the state (method to set the click counter)
    // 0: initial counter
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const increment = ()=>{
        setNumberOfClicks(numberOfClicks + 1);
    }

    // if we use let instead of const what happens, it works
    // let [numberOfClicks, setNumberOfClicks] = useState(0);
    // let increment = ()=>{
    //     setNumberOfClicks(numberOfClicks + 1);
    // }
    // but if we don't use state what happens? it won't reflect in UI as React won't render the component as none of its components & hooks got modified
    /*console.log('rendering counter butoon');
    let numberOfClicks = 0;
    const increment =()=>{
        numberOfClicks= numberOfClicks + 1;
        console.log(numberOfClicks);
    }*/

    return(
        <>
            <p>You have clicked the counter button {numberOfClicks} times</p>
            <button onClick={increment}>Click Me!</button>
        </>
    )
}