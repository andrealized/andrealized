import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

export default class CodingPage extends Component {

	render() {
		return (
			<div>
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<div className="photos-page-content">
					<h1>Coding</h1>
					Coming soon
				</div>
			</div>
		);
	}
}