import React from "react";
// with arrow function syntax
export const Greeting = () =>{
    const isMorning = (new Date()).getHours() < 12;
    
    // return isMorning
    //     ? <h3>Good Morning</h3> 
    //     : <h3>Good Evening</h3>;

    return isMorning
    ? (
        <div>
            <h3>Good Morning!</h3>
            <p> You have 5 new messages</p>
        </div>
    )
    : (
        <div>
            <h3>Good Evening!</h3>
            <p> You have 5 new messages</p>
        </div>
    )

    //with react fragments , it will be cleaner and without div tags

    // return isMorning
    // ? (
    //     <>
    //         <h3>Good Morning!</h3>
    //         <p> You have 5 new messages</p>
    //     </>
    // )
    // : (
    //     <>
    //         <h3>Good Evening!</h3>
    //         <p> You have 5 new messages</p>
    //     </>
    // );
    
}