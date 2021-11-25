import React,{Component} from "react";
import LifeCycle from "./LifeCycle";

export default class Controller extends Component {
page1 =()=>{
   
<LifeCycle/>

}


page2 =()=>{




}

render(){

   return(
     <>

      <button onClick ={this.page1}>Enter in page 1</button>
      <button onClick ={this.page2}>Enter in page 2</button>





     </>
   );



}





}