import React from "react";
import './PeopleListItem.css';

// in non arrow function we need a return statement
// here we need a destruct hence non arrow syntax for rendering the component
export const PeopleListItem = ({person})=>{
    const {name, age, hairColor} = person;
    return(
    <div className="list-item-container">
        <h3>{name}</h3>
        <p>Age : {age}</p>
        <p>Hair Color : {hairColor}</p>
    </div>
    )
}
