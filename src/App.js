import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import logo from './logo.svg';
import Header from './components/Header.js';
import Footer from './components/Footer';
import './App.css';


export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      title: 'Welcome',
    }
  }


  changeTitle(title){
    this.setState({title});
  }


  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <div className="row content-wrapper">
               {this.props.children}
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}


//export default App;
