import React,{Component} from "react";

export default class FormComponent extends Component {

state = {

    name: "",
    age : 0,

}




onNameChange =(event)=>{
this.setState({
    name :event.target.value,
})

}




onAgeChange =(event)=>{
  this.setState({
      age : event.target.value,
  })
  
  }



  onSubmit = (event)=>{
      event.preventDefault();  //to prevent from reset the form
      console.log(this.state);
  }

    render(){
        return(


              <div>
                <h1> Form Tag</h1>
                <form onSubmit = {this.onSubmit}>
                    <label>Name </label> 
                   <input type = "text" value = {this.state.name}   onChange ={this.onNameChange}></input>
                   <br/>
                   <br/>
                   <label>age</label>
                   <input  value ={this.state.age}    onChange = {this.onAgeChange}></input>
                    <br/>
                    <br/>
                    <br/>

                   <button  onClick = {this.onAdd}  type ="submit">Submit</button>    
          


                </form>







              </div>
















        );
     
    
   


    }
}