import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';

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

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <CounterButton/>
      </header>
    </div>
  );
}

export default App;
