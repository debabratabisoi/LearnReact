import React from "react";
import { PeopleListItem } from "./PeopleListItem";
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid white;
    padding: 10px;
`;

export const PeopleList = ({people})=>(
    // with arrow function syntax, replaced the {} with ()
    // use the Wrapper created to style the div
    <Wrapper>
        {people.map(p=>
            <PeopleListItem person={p}  key={p.name}/>
        )}
    </Wrapper>
// this will give you an error in devtool console saying "Each child in a list should have a unique "key" prop"
//React wants us to add a unique key, in this case we don't have a key, we can use name as key

);