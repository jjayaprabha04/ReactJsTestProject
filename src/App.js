// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//class component

import React from 'react';
import AdditionCls, {MulitiplicationCls, SubtractionCls}  from './class';
import Addition, {Subtraction, Multiplication} from "./Function";



class AppCls extends React.Component{

  constructor()
    {
        super();
        this.a=10;
        this.b =20;
    }
  render()
  {
    return(
      <>
      <h1> This is my First class Component</h1>
      <AdditionCls name="Addition" a={this.a} b={this.b} />
      <SubtractionCls name="Subtraction" a={this.a} b={this.b}/> 
      <MulitiplicationCls name="Multiplication" a={this.a} b={this.b}/>     
      </>
    );
  }
}


//function component

function App() {
  let a=12;
  let b=10;
  
     return (
      <>
      <h1>This is my First Function component</h1>
      <Addition name="Addition" a={a} b={b} />
      <Subtraction name="Subtraction" a={a} b={b}/>
      <Multiplication  name="Multiplication" a={a} b={b}/>
      </>
     );
     }
export default App;
export {AppCls};
