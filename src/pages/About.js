import React from "react";



export default class About extends React.Component {
	constructor() {
		super();
		this.state = {
			caption: "footer",
		}
	}

	render(){
		return(
			<p>Its About</p>
		);
	}

}