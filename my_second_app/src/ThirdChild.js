export default (props)=>{
    const {children} = props;
    return(
     < >
        <h1>Third Child</h1>
        {children}
     </>
    );
}