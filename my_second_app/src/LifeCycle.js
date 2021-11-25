import React,{Component} from "react";

export default class LifeCycle extends Component {

   constructor(){
     super();
     console.log("constructor");

   }

   state ={
       showText : true,
   }

   handler = ()=>{
       this.setState({
           showText : !this.state.showText,
       })
   }

   render(){
    console.log("render");  
    return(
        <>
          {this.state.showText ? <h2>In LifeCycleUpdated</h2>:<h2>In LifeCycleNotUpdated</h2>}
          <button onClick = {this.handler}>Click</button>
        </>
    );


   }


   componentDidMount(){

    console.log("In ComponentDidMount");


   }

   componentWillUnmount(){


    console.log("like a de-constructor")
   }

}
