import React from "react";
import { Link } from "react-router";
import CompetitionStore from "../stores/CompetitionStore";

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			competitionList : CompetitionStore.getAll(),
		}
	}





	toggleClass(e){	
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

		//console.log(this.props);
		//console.log(this.state.competitionList);
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
		              <a onClick={this.toggleClass.bind(this)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Leagues <span className="caret"></span></a>
		              <ul className="dropdown-menu">
		                {
			                this.state.competitionList.map((competition) => {
			                	return <li key={competition.id}><a href="">{competition.title}</a></li>
			                })
			            }
		             
		              </ul>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		);
	}

}