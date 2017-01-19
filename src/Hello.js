
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 


class Hello extends React.Component {

  constructor() {
    super();

    this.state = {
      title: "Welcome",
      time: new Date().toLocaleTimeString()
    }
  }


  changeTitle(title){
    this.setState({title});
  }



  // tellSomething(){
  //     return new Date().toLocaleTimeString();
  // }


  handleChange(e){
   const title = e.target.value;
   this.props.changeTitle(title);
  }

  render() {

    setInterval(() => {
    this.setState({time: new Date().toLocaleTimeString()});
    }, 1000);

    const name = "Sid";
    return (
     <div className="hello-world">
       {this.changeTitle.bind(this)}, My name is {name} and the current time is {this.state.time}
      <input onChange={this.handleChange.bind(this)} />
     </div>
    );
  }
}






export default Hello;
