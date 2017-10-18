import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

const images = [
	{
		key: 'ghibli',
		src: '/static/images/totoro.png',
		title: 'Studio Ghibli Visual Book',
		description: 'Comb bound book containing five illustrated pages, a front cover, and a back cover. Made in Illustrator.'
	}, {
		key: 'houseplus',
		src: '/static/images/houseplus_bg.png',
		title: 'House+ App Icon',
		description: 'Designed an icon using Illustrator for the multi award-winning House+ app.'
	}, {
		key: 'tealight',
		src: '/static/images/tealight.jpg',
		title: 'Tea Light Holder',
		description: 'Handmade tea light holder made of paper. Iterated and prototyped before arriving at this final design.'
	}, {
		key: 'cardboardchair',
		src: '/static/images/cardboardchair.jpg',
		title: 'Cardboard Chair',
		description: 'Handmade cardboard chair created using an ergonomic pentagon-like shape.'
	}, {
		key: 'baskerville',
		src: '/static/images/baskerville.png',
		title: 'Baskerville Typeface Research',
		description: 'Poster describing the origins of Baskerville. Made with InDesign.'
	}
];

export default class DesignPage extends Component {

	render() {
		return (
			<div>
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<div className="photos-page-content">
					<h1>Design</h1>
					{ images.map((image, idx) => {
						return (
							<img src={image.src} className="photo" onClick={this.props.showModal.bind(this, image)} key={idx} />
						);
					})}
				</div>

			</div>
		);
	}
}