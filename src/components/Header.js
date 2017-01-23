import React from "react";
import { Link } from "react-router";


export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		}
	}

	toggleClass(e){	
		console.log(e.target.dataset.id);
		if (this.state.isOpen === false){
			this.setState({isOpen: true});
		} else {
			this.setState({isOpen: false});
		}
	}

	hideDropdown(e){
		this.setState({isOpen: false});
	}

	render(){
		return(
			 <nav className="navbar navbar-default navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="#">Football</a>
		        </div>
		        <div id="navbar" className="navbar-collapse collapse">

		          <ul className="nav navbar-nav">
		            <li> <Link to='/' onClick={this.hideDropdown.bind(this)} activeClassName="active">Home</Link></li>
		           <li> <Link to='about' onClick={this.hideDropdown.bind(this)} activeClassName="active">About</Link></li>
		           <li> <Link to='contact' onClick={this.hideDropdown.bind(this)} activeClassName="active">Contact</Link></li>
		           <li className={this.state.isOpen === true ? 'dropdown open' : 'dropdown'}>
		              <a onClick={this.toggleClass.bind(this)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
		              <ul className="dropdown-menu">
		                <li><a href="#">Action</a></li>
		                <li><a href="#">Another action</a></li>
		                <li><a href="#">Something else here</a></li>
		                <li role="separator" className="divider"></li>
		                <li className="dropdown-header">Nav header</li>
		                <li><a href="#">Separated link</a></li>
		                <li><a href="#">One more separated link</a></li>
		              </ul>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		);
	}

}