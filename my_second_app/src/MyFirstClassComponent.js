import React ,{Component} from 'react';

export default class MyFirstClassComponent extends Component{
  render(){
      const {age} = this.props;
      return ( <h1> My class component _{this.props.name} + {age}</h1>);
  }
}

