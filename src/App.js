import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import logo from './logo.svg';
import Header from './components/Header';
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

    const { location } = this.props;

    //console.log(this.props.location.pathname);
    return (
      <div>
        <Header location = {location}/>
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
