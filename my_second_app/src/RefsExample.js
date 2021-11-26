import React, { Component } from "react";

export default class RefsExample extends Component{

    constructor() {
        super();
        this.inputRef = React.createRef();
        // this.inputRef = null;      // ...........old method
    
    }
    do = () => {
        console.log(this.inputRef.value);
    }

    render() {
        
        return (

            <div>
                
                <input type="text" ref={this.inputRef}></input>
              {/* <input  type= "text"  ref={ (ref)=> {
               this.inputRef = ref;
              }}></input> */}

              <button onClick={this.do} >click</button>



           </div>



        );
       

    }


    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();

    }
}