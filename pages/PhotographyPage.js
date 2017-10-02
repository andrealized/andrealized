import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

export default class PhotographyPage extends Component {

	render() {
		return (
			<div>
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<div className="photos-page-content">
					<h1>Photography</h1>
					<img src={'/static/images/rail-trail-bridge.jpg'} className="photo" />
					<img src={'/static/images/kennedy.jpg'} className="photo" />
					<img src={'/static/images/horses.jpg'} className="photo" />
					<img src={'/static/images/vegas.jpg'} className="photo" />
					<img src={'/static/images/pier.jpg'} className="photo" />
					<img src={'/static/images/eiffel.jpg'} className="photo" />
					<img src={'/static/images/dc.jpg'} className="photo" />
					<img src={'/static/images/hawaii.jpg'} className="photo" />
				</div>
			</div>
		);
	}
}