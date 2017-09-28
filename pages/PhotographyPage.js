import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

const PHOTO_SET = [
  {
	src: '/static/images/img1.jpg',
	width: 640,
	height: 640,
	alt: 'code',
	label: 'code'
  },
  {
	src: '/static/images/img2.jpg',
	width: 640,
	height: 640,
	alt: 'photography',
	label: 'photography'
  },
  {
	src: '/static/images/img3.jpg',
	width: 640,
	height: 640,
	alt: 'design',
	label: 'design'
  },
];

export default class PhotographyPage extends Component {

	render() {
		return (
			<div className="content-page">
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<img src={PHOTO_SET[0].src} className="photo" />
				<img src={PHOTO_SET[1].src} className="photo" />
				<img src={PHOTO_SET[2].src} className="photo" />
				<img src={PHOTO_SET[0].src} className="photo" />
				<img src={PHOTO_SET[1].src} className="photo" />
				<img src={PHOTO_SET[2].src} className="photo" />
			</div>
		);
	}
}