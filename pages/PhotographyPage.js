import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

const images = [
	{
		key: 'rail-trail-bridge',
		src: '/static/images/rail-trail-bridge.jpg',
		title: 'Lehi Historic Rail Trail',
		description: 'During one of my morning runs I stopped to take a picture of the warm glow of the sun against the underside of a bridge.'
	}, {
		key: 'kennedy',
		src: '/static/images/kennedy.jpg',
		title: 'Kennedy Center',
		description: 'My family loves to visit the Kennedy Center for concerts and musicals. I was inspired by the Center\'s magnificent architecture.'
	}, {
		key: 'horses',
		src: '/static/images/horses.jpg',
		title: 'Horse-Drawn Carriage at Fontainebleau',
		description: 'This photo is actually unedited. The natural sunlight performed its magic on this.' 
	}, {
		key: 'vegas',
		src: '/static/images/vegas.jpg',
		title: 'Las Vegas Premium Outlets',
		description: 'Playing with contrast and perspective is especially fun in black and white.'
	}, {
		key: 'pier',
		src: '/static/images/pier.jpg',
		title: 'Reykjavik Harbor Sunset',
		description: 'I took this photo through a window inside Harpa Concert Hall. Harpa is probably the most beautiful building I have ever seen.'
	}, {
		key: 'eiffel',
		src: '/static/images/eiffel.jpg',
		title: 'Eiffel Tower',
		description: 'I did some editing on this to create an old-fashioned postcard vibe. The Eiffel Tower is such a beautiful structure!'
	}, {
		key: 'dc',
		src: '/static/images/dc.jpg',
		title: 'City Center, Washington, D.C.',
		description: 'Whenever I visit D.C., I love to see what ever-changing decorations the City Center has to offer.'
	}, {
		key: 'hawaii',
		src: '/static/images/hawaii.jpg',
		title: 'Ko Olina Lagoon',
		description: 'I would wait for the sunset every day in hopes of capturing a cool sunset picture, but this one turned out nice too.'
	}
];

export default class PhotographyPage extends Component {

	render() {
		return (
			<div>
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<div className="photos-page-content">
					<h1>Photography</h1>
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