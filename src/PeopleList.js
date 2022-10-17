import React from "react";
import { PeopleListItem } from "./PeopleListItem";

export const PeopleList = ({people})=>(
    // with arrow function syntax, replaced the {} with ()
    <>
        {people.map(p=>
            <PeopleListItem person={p}  key={p.name}/>
        )}
    </>
// this will give you an error in devtool console saying "Each child in a list should have a unique "key" prop"
//React wants us to add a unique key, in this case we don't have a key, we can use name as key

);