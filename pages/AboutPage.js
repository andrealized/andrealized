import React, { Component } from 'react';
var LeftArrow = require('react-icons/lib/ti/arrow-left');

export default class AboutPage extends Component {

	render() {
		return (
			<div>
				<div className="content-page-header">
					<LeftArrow className="nav-icon" onClick={this.props.onBack}/>
				</div>
				<div className="about-page-body">
					<div className="bio-container">
						<h1>About Me</h1>

						Hi, I'm Andrea. I grew up in Potomac, Maryland and currently live in Lehi, Utah. You might ask - how in 
						the world did I end up in Utah? Well, a number of factors. My dream company, Adobe, has 
						a breathtaking campus on the Wasatch front. I was recruited for a position at Adobe that aligned with 
						my passions in both front-end engineering and data analysis. I love embracing the unknown, and Utah 
						is a state where none of my friends have lived before. Last but not least, I fell in love with the 360 
						degree mountain views, numerous ski resorts within an hour's drive, and the "Best Snow on Earth". That's 
						in quotes because that's what it literally says on Utah license plates. While living in Utah, I also 
						picked up mountain biking and rock climbing. A few of my other hobbies include playing the piano and 
						practicing calligraphy.
					</div>
					
					<img src="/static/images/myphoto.png" className="bio-photo" />
					
				</div>
			</div>
		);
	}
}