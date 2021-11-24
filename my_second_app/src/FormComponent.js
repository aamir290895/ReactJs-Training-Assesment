import React,{Component} from "react";

export default class FormComponent extends Component {

state = {


    name: "",
    age : 0,
    mobile:0,

    list : [this.name ,this.age,this.mobile],

}




onChange =(event)=>{
this.setState({
    [event.target.name] :event.target.value,
})

}





  onSubmit = (event)=>{
      event.preventDefault();  //to prevent from reset the form
      console.log(this.state);

      const myListCopy = this.state.list;
      myListCopy.push(event.target.value);
      this.setState({
          list : myListCopy,
      })



  }



    render(){
        return(


              <div>
                <h1> Form Tag</h1>
                <form onSubmit = {this.onSubmit}>
                    <label>Name </label> 
                   <input name={'name'} type = "text" value = {this.state.name}   onChange ={this.onChange}></input>
                   <br/>
                   <br/>
                   <label>age</label>
                   <input name ={'age'} value ={this.state.age}    onChange = {this.onChange}></input>
                    <br/>
                    <br/>
                     <label>Mobile </label>
                    <input name ={'mobile'} value ={this.state.mobile}    onChange = {this.onChange}></input>

                    <br/>

                   <button  onClick ={this.onAdd}  type ="submit">Submit</button>    
          


                </form>



               {this.state.list .map((element ,index) => (
            
               <div id ={index} >
               <h2>Hiii i am {this.state.name} , I am {this.state.age} years old</h2>
              
              </div>
              ))}



              </div>
















        );
     
    
   


    }
}