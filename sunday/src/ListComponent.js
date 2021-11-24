import React,{Component} from "react";

export default class ListComponent extends Component {

state ={
     myList : ["x" , "y" ,"a" , "b" ,"c"],

     inputValue : "",

}
 onAdd = ()=> {

    

    const myListCopy =this.state.myList;
    myListCopy.push(this.state.inputValue);
    this.setState({
        myList : myListCopy,
    })

 }

 onInput = (event)=>{
   
   
 
    this.setState({
          inputValue : event.target.value,
    })


 }

 render(){
  


    return (
        <>
            <button onClick = {this.onAdd} >Click </button>
            <button onClick = {this.onAdd} >Add </button>

            <input value = {this.state.inputValue} onChange = {this.onInput}></input>

            {this.state.myList .map((element ,index) => (
            
            <div key = {index}>
            <h2>List</h2>  
            <div>{element}</div>
            </div>
            ))}

            




     

        </>


    );



 }

}