import React from "react";



export default class Contact extends React.Component {
	constructor() {
		super();
	}

	render(){
		console.log(this.props.params.name);
		return(
			<p>Its Contact</p>
		);
	}

}