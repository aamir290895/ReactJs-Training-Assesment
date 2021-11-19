export default (props)=>{

    const {children} = props;
    return(
     < >
        <h1>Second Child</h1>
        {children}

     </>
    );
}