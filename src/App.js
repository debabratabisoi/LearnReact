import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      {/* <Greeting name="Deba" noOfMessages={10}/> */}
      <Greeting person={{name:"Deba",noOfMessages:100}}/>
        
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
