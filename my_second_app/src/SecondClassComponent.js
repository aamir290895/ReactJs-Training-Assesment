import React ,{Component} from 'react';
import ChildOne from './ChildOne';


class SecondClassComponent extends Component{
    state ={
        balance:0,
    };

    click = ()=>{

        this.setState({
            balance : this.state.balance +100,
        })
    }

    go = ()=>{
        console.log("clicked");
        this.setState({
            balance : this.state.balance + 1,
        });
       
    }

    balanceIncrement = (value)=>{
        this.setState({
            balance:this.state.balance +value,
        })
    }

    onProfitClickHandle =()=>{
        this.balanceIncrement(1);
    }

    onDoubleProfitClick =()=>{
        this.balanceIncrement(100);
    }
     render(){

          const{name} = this.props;
          console.log(this.state.balance);
         return(
          
       
             <div>
                 
                  <h2> My name is {this.props.name}</h2>
                  <h2>My acc balance is {this.state.balance}</h2>
                  <button onClick={this.onProfitClickHandle}>Click Me </button>
                  <br></br>
                  <button onClick = {this.onDoubleProfitClick}>Double profit</button>

                  <ChildOne name ={"Ankur"} click={this.click} ></ChildOne>
                  <ChildOne name ={"Ankit"} click={this.click} ></ChildOne>
            </div>
           
         );

         
     }
 } 
 export default SecondClassComponent;