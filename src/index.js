import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './App.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import './index.css';


const app = document.getElementById('root');

/*ReactDOM.render(
  <App name="demo property" />,
  app
);*/

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path = "/" component = {App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" name="about" component={About}></Route>
			<Route path="contact" name="contact" component={Contact}></Route>
		</Route>
	</Router>
	, app);
