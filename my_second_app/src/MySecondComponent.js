import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";


function Second(props){

    const { children} = props ;

    return(
        <div>
        <h2>I am inside MySecondComponent</h2>
        {/* <h2> i am {props.name} and age{props.age} </h2> */}
        {children}
        <FirstChild parentComponent = {Second}>
            <h2>My First child called from Second Component</h2>
        </FirstChild>
        <SecondChild parentComponent ={Second}>
        <h2>My Second child called from Second Component</h2>


        </SecondChild>
        <ThirdChild parentComponent = {Second}>

        <h2>My Third child called from Second Component</h2>

        </ThirdChild>
        
        </div>
    );

}

export default Second;