import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';

let peopleList = [
  {
    name:"John",
    age:34,
    hairColor:"Brown"
  }
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      {/* <Greeting name="Deba" noOfMessages={10}/> */}
      {/* <Greeting person={{name:"Deba",noOfMessages:10}}/> */}
      <Greeting person={{noOfMessages:10}}/>
      <PeopleList people={peopleList}/>  
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          This is so {adjective}
          {greetingElement}// this is old JS syntax
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
