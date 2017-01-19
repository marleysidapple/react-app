import React from "react";



export default class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			caption: "footer",
		}
	}

	render(){

		setTimeout(() => {
			this.setState({caption: 'new footer'});
		}, 3000);

		return(
			<p>Its {this.state.caption}</p>
		);
	}

}