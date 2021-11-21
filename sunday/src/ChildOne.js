import React,{Component} from "react";

export default class ChildOne extends Component{
state={
    balance : 0,
    personalBalance:0,
}
profitChild = ()=>{
    this.setState({
        balance :this.state.balance +100,
        personalBalance:this.state.personalBalance +100,
    })
}


expenseChild = ()=>{
    if(this.state.balance === 0){
        return;
    }
    this.setState({
        personalBalance: this.state.personalBalance -100,
    })
}


expenseContributed = ()=>{
    if(this.state.balance === 0){
        return;
    }
    this.setState({
        balance: this.state.balance -100,
    })
}




render(){
const {name ,accountBalance ,expense} = this.props;

const onProfitClick = ()=>{
   this.profitChild();
   accountBalance();
};

const onExpense = ()=>{

    expense();
    this.expenseContributed();
}
return(
<>




 <h1>{name} : Personal Balance :{this.state.personalBalance}  </h1>
 <h1>{name} : Contributed Balance :{this.state.balance}  </h1>


 <button onClick ={onProfitClick}>Profit</button>
 <button onClick ={onExpense}>Family Expense</button>

 <button onClick ={this.expenseChild}>Personal Expense</button>









</>

);




}

}