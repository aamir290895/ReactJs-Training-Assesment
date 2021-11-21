import React,{Component} from 'react'
import ChildOne from './ChildOne';

export default class ClassComponent extends Component{
    state = {
        accountBalance : 0,
        
        }



go = ()=>{

    this.setState({
        accountBalance: this.state.accountBalance + 100,
    })
}

expense =()=>{
    if(this.state.accountBalance === 0){
        return;
    }else{
    this.setState({
        accountBalance:  this.state.accountBalance -10,
    })
}
}
render(){



return(
<>
<h1>Family Account</h1>
<button onClick ={this.go} >Family Profit</button>
<button onClick ={this.expense} >Expense</button>
<h2>Balance : {this.state.accountBalance}</h2>


<ChildOne name = {"Member 1"}  accountBalance={this.go}  expense ={this.expense} />

<ChildOne name = {"Member 2"}  accountBalance={this.go}   expense ={this.expense}/>

<ChildOne name = {"Member 3"}  accountBalance={this.go}   expense ={this.expense}/>



</>


);

}

}