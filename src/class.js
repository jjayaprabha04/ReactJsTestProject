import React from "react";
class AdditionCls extends React.Component{
    constructor(props) //props will bring the arguments from the function call and it is Read-only
    {
        super(props);        
    }
    render()
    {
        return(
            <>
            <div> {this.props.name}  of {this.props.a} + {this.props.b}= {this.props.a+this.props.b} </div>
            </>
        );
    }
}
class SubtractionCls extends React.Component
{
    constructor(props)
    {
        super(props);        
    }
    render()
    {
        return(
            <>
            <div> {this.props.name}  of {this.props.a} - {this.props.b}= {this.props.a-this.props.b} </div>
            </>
        );
    }
}

class MulitiplicationCls extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
            <>
            <div> {this.props.name} of {this.props.a} * {this.props.b}= {this.props.a*this.props.b} </div>
            <DivisionCls name="Division" a={this.props.a} b={this.props.b}/>
            </>
        );
    }
}

class DivisionCls extends React.Component
{
    constructor(props)
    {
        super(props);        
    }
    render()
    {
        return(
            <>
            <div> Division of {this.props.a} / {this.props.b}= {this.props.a/this.props.b} </div>
            
            </>
        );
    }
}

// class SubtractionCls extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.a=1;
//         this.b =1;
//     }
//     render()
//     {
//         return(
//             <>
//             <div> Subtraction  of {this.a} - {this.b}= {this.a-this.b} </div>
//             </>
//         );
//     }
// }

// class MulitiplicationCls extends React.Component
// {
//     constructor()
//     {
//         super();
        
//     }
//     render()
//     {
//         return(
//             <>
//             <div> Mulitiplication of {this.a} * {this.b}= {this.a*this.b} </div>
//             <DivisionCls />
//             </>
//         );
//     }
// }

// class DivisionCls extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.a=1;
//         this.b =1;
//     }
//     render()
//     {
//         return(
//             <>
//             <div> Division of {this.a} / {this.b}= {this.a/this.b} </div>
            
//             </>
//         );
//     }
// }

export default AdditionCls;
export { SubtractionCls, MulitiplicationCls} ;//optional export