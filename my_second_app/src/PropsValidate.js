import PropTypes from "prop-types";
function PropsValidate(props){
    const {name ,age ,children  , renderable ,rollNumber,remarks ,array,mobject} = props;
    return(
     <>
         <h2>Name : {name}</h2>
         <h2>Age  : {age} </h2>
         <h2>After 5 years : {age + 5}</h2>
         <h2>{rollNumber}</h2>
         <h2>{renderable}</h2>
         <h2>{remarks}</h2>
         <h2>{rollNumber} <br></br> {array}</h2>
         
         {children}
     </>

    );
}

PropsValidate.propTypes ={
    name :PropTypes.string,
    age  : PropTypes.number.isRequired,
    children : PropTypes.element.isRequired,
    renderable : PropTypes.node,
    rollNumber : PropTypes.oneOfType([PropTypes.number ,PropTypes.string]),
    remarks : PropTypes.any,
    array :PropTypes.arrayOf(PropTypes.number),
    mobject :PropTypes.shape({name : PropTypes.string,age:PropTypes.number}),
}
export default PropsValidate;