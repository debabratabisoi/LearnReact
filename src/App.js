import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
import { useState } from 'react';

/*let peopleList = [
  {
    name:"John",
    age:34,
    hairColor:"Brown"
  },
  {
    name:"Soumya",
    age:35,
    hairColor:"Red"
  },
  {
    name:"Deba",
    age:35,
    hairColor:"Black"
  }
];*/

// const OnClick = ()=>{
//   alert("Hello");
// }

const people = {
  name: "Deba",
  noOfMessages: 15
}

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = ()=>{setNumberOfClicks(numberOfClicks + 1);}
  /*We can also use traditional function syntax, but better to go for ES6 Arrow Syntax */
    // function increment(){
    //     setNumberOfClicks(numberOfClicks + 1);
    // };
  const [hideMessage, setHideMessage] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
        ? null
        : <CongratulationsMessage 
                threshold={5} 
                noOfClicks={numberOfClicks}
                onHide={()=> setHideMessage(true)}/> }
        <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}/>
        <Greeting person={people}/>
        {/*Here we want to use the numberOfClicks inside CongratulationsMessage, but as React has a unidiretional data flow from Parent to Child componenets, we can't achieve that.
        So the solution would be to hoisting the state to the Parent component. In our case the numberOfClcks & increment function */}
      </header>
    </div>
  );
}

export default App;
