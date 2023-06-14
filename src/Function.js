function Addition(props) //function name should be in Caps
{ 
    return(
        <>
        <div> {props.name}  of {props.a} + {props.b}= {props.a+ props.b} </div>
        </>
    );
}

function Subtraction(props)
{    
    return(
        <>
        <div> {props.name}  of {props.a} - {props.b}= {props.a- props.b} </div>
        </>
    );
}

function Multiplication(props)
{   
    return(
        <>
        <div> {props.name}  of {props.a} * {props.b}= {props.a* props.b} </div>
            <Division name="Division" a={props.a} b={props.b}/> 
            {/* nested component or child component no need declaration or export */}
        </>
    );
}
function Division(props)
{
    return(
        <>
        <div> {props.name}  of {props.a} / {props.b}= {props.a/ props.b} </div>
        </>
    );
}


export default Addition;
export {Subtraction, Multiplication};