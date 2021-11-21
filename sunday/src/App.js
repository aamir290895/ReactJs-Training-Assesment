import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import TrueComponent from './TrueComponent';
import FalseComponent from './FalseComponent';
import ConditionalComponent from './ConditionalComponent';

function App() {

  const name = "aamir";

  return (
    <div className="App">
      {/* {name === "aamir" ? <TrueComponent/> :<FalseComponent/>}

      {name === "aamir" && <TrueComponent/>}
      {name === "aamir" || <TrueComponent/>}
      {name === "aam"   || <TrueComponent/>} */}


      {/* <button>   </button> */}

    {/* <ClassComponent/> */}
    <ConditionalComponent/>
    </div>
  );
}

export default App;
