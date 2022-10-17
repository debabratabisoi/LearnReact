import React from "react";

export const PeopleList = ({people})=>{
    return people.map(p=>(
        <div>
             <h3>{p.name}</h3>
             <p>Age : {p.age}</p>
             <p>Hair Color : {p.hairColor}</p>
        </div>
    ))
    
}