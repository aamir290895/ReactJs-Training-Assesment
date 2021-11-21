import React,{Component} from "react";

export default class extends Component {
state = {
    showText : true,

}

change = ()=>{
  this.setState({
      showText : !this.state.showText,
  }) 

}



render(){




return (
<>


{this.state.showText ? <h1>Condition is Shown</h1> : <h1>Condition is hided</h1>}

<button onClick = {this.change} >{ this.state.showText  ?  "Hide" : "Show" }</button>




</>

);


}

}
