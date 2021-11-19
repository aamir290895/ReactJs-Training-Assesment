import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';

function App() {
  const name ="aamir";
  const name1 = "aam"
  return (
    <div className="App">



      <h1> Hello {name && name.length? name :"World"}</h1>
      <MyFirstComponent  name ={name} age ={26} parentComponent = {App}>

        <h2>My First Component called from parent</h2>
        </MyFirstComponent>
      <MySecondComponent parentComponent ={App} >

        <h2>My Second Component called from App</h2>
{/* 
        <ul>
          <li>Food</li>


          <li>Drink</li>
        </ul> */}
      </MySecondComponent>
      
    </div>
  );
}

export default App;
