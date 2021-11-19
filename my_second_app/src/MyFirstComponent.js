import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";


function My(props){

  const {children} = props ;
    return (
     <>
       <h2>I am inside FirstComponent</h2>
       <h2> my name {props.name} and age is {props.age} </h2>
        {children}
        <FirstChild parent = {My}> 
          
          <h3>My first child called from First component</h3>
        </FirstChild>
        <SecondChild parent = {My}>
         <h3>My Second child called from Second component</h3>

        </SecondChild>
        <ThirdChild parent = {My}>

         <h3>My Third child called from Third component</h3>

        </ThirdChild>
        

     </>

    );

}
 export default My;