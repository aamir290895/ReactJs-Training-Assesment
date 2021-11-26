import './App.css';
import Controller from './Controller';
import FormComponent from './FormComponent';
import LifeCycle from './LifeCycle';
import MyFirstClassComponent from './MyFirstClassComponent';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import PropsValidate from "./PropsValidate";
import RefsExample from './RefsExample';
import SecondClassComponent from './SecondClassComponent';





function App() {
  const name ="aamir";
  const name1 = "aam"

  
  return (
    <div className="App">



      {/* <h1> Hello {name && name.length? name :"World"}</h1>
      <MyFirstComponent  name ={name} age ={26} parentComponent = {App}>

        <h2>My First Component called from parent</h2>
        </MyFirstComponent>
       <MySecondComponent parentComponent ={App} >

        <h2>My Second Component called from App</h2>

        <ul>
          <li>Food</li>


          <li>Drink</li>
        </ul>
      </MySecondComponent>
      <PropsValidate name ={"aamir"} age={26} renderable ={"renderable"} rollNumber={"ee001"} remarks ={"ss"} array={[1,2,3,4]} mobjects = {{name:"aamir",age:26}}>
        <h2>Hiii i am child of PropsValidate</h2>
      </PropsValidate>
      <MyFirstClassComponent  name ={"aamir"} age = {26} />
      <SecondClassComponent  name={"aamir"}/>
      <SecondClassComponent  name={"Avanash"}/> */ }

      <RefsExample/>  
    </div>
  );
 }

export default App;
