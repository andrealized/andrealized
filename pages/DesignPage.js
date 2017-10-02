import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

export default class DesignPage extends Component {

	render() {
		return (
			<div>
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<div className="photos-page-content">
					<h1>Design</h1>
					<img src={'/static/images/totoro.png'} className="photo" />
					<img src={'/static/images/houseplus_bg.png'} className="photo" />
					<img src={'/static/images/tealight.jpg'} className="photo" />
					<img src={'/static/images/cardboardchair.jpg'} className="photo" />
					<img src={'/static/images/baskerville.png'} className="photo" />
				</div>
			</div>
		);
	}
}