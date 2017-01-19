import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import logo from './logo.svg';
import Hello from './Hello.js';
import Layout from './components/Layout';
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
      <div className="App">
        <div className="App-header">
          <Hello changeTitle={this.changeTitle.bind(this)} />
          <Layout class="holder"/>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          {this.state.title}, To get started, edit <code>src/App.js</code> and save to reload. I am rendering props using { this.props.name }.
        </p>


        <div className="main-holder">
          My Main content belongs here
        </div>


        <Footer />


      </div>
    );
  }
}


//export default App;
