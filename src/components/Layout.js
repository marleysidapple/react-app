import React from "react";



export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "sid";
	}

	render(){
		return(
			<p>Its {this.name} and I am getting this value from property {this.props.class}</p>
		);
	}

}