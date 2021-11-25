import React,{Component} from "react";

export default class FormComponent extends Component {

state = {


    name: "",
    age : 0,
    mobile:0,

    list : [],

}




onChange =(event)=>{
this.setState({
    [event.target.name] :event.target.value,
})

}





  onSubmit = (event)=>{
      event.preventDefault();  //to prevent from reset the form
      console.log(this.state);


    this.setState({
        list   :  [...this.state.list ,{name : this.state.name ,age : this.state.age}]
    })

  }
 

  onDelete =(index)=>{
   const listCopy = this.state.list;
   listCopy.splice(index ,1);
   this.setState({
       list : listCopy,
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



               {this.state.list .map((list,index) => (
            
               <div key ={index} >
               {<h2>name {list.name } age {list.age}</h2>}
               <button onClick = {()=>{
                 this.onDelete(index);

               }}>Delete{index}</button>
              </div>
              ))}



              </div>


        );

    }
}