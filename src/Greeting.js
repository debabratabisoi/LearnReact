import React from "react";
// with arrow function syntax, param would be same as argument name
export const Greeting = ({person}) =>{
    const {name, noOfMessages} = person;
    // retur null if no name was passed
    if(!name) return null;
    //const {name, noOfMessages} = props; // the destructing name should be exactly as it is defined inside the greeting component from App.js
    //alternatively we can declare the arguments inside the function call in array method syntax
    // or we can pass an object and destruct that and use the members
    const isMorning = (new Date()).getHours() < 12;
    //change the greeting header
    let greetingHeader = isMorning
        ? <h3>Good Morning {name}!</h3> 
        : <h3>Good Evening {name}!</h3>;
    
    //one way is to with the <div>
    // return isMorning
    //     ? <h3>Good Morning</h3> 
    //     : <h3>Good Evening</h3>;

    // return isMorning
    // ? (
    //     <div>
    //         <h3>Good Morning Deba!</h3>
    //         <p> You have 5 new messages</p>
    //     </div>
    // )
    // : (
    //     <div>
    //         <h3>Good Evening!</h3>
    //         <p> You have 5 new messages</p>
    //     </div>
    // )

    //with react fragments , it will be cleaner and without div tags

    return isMorning
    ? (
        <>
            <h3>{greetingHeader}</h3>
            <p> You have {noOfMessages} new messages</p>
        </>
    )
    : (
        <>
            <h3>Good Evening {person.name}!</h3>
            <p> You have {person.noOfMessages} new messages</p>
        </>
    );
    
}