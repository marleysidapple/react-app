import React from "react";



export default class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			caption: "footer",
		}
	}

	render(){


		return(
			<p>Its {this.state.caption}</p>
		);
	}

}