import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 


class Hello extends Component {


  render() {

    function tellSomething(){
      return new Date().toLocaleTimeString();
    }

    return (
     <div className="hello-world">
       Hello, the current time is {tellSomething()}
     </div>
    );
  }
}





export default Hello;
