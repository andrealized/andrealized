import React, { Component } from 'react';
import './App.css';
// import { Image } from 'react-bootstrap';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
// var classNames = require('classnames');
import Gallery from 'react-photo-gallery';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PHOTO_SET = [
  {
	src: img1,
	width: 640,
	height: 640,
	alt: 'code',
	label: 'code'
  },
  {
	src: img2,
	width: 640,
	height: 640,
	alt: 'photography',
	label: 'photography'
  },
  {
	src: img3,
	width: 640,
	height: 640,
	alt: 'design',
	label: 'design'
  },
];

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			content: ''
		};
	}

	showContent(content) {
		console.log('show content for', content);
		this.setState({
			content: content
		});
	}

	render() {
		let {content} = this.state;

		return (
			<div className="an-body">
				{ /*************** Header ***************/ }
				<div class="header">
					<div className="andrea-title" id="andrealized">andrealized</div>
					<div className="andrea-subtitle">andrea yang</div>
					<br />
				</div>


				<div class="gallery">
					<Grid fluid>
				        <Row>
				          <Col xs={12} sm={4} md={4}>
				            <img src={img1} />
				          </Col>
				          <Col xs={12} sm={4} md={4}>
				            <img src={img2} />
				          </Col>
				          <Col xs={12} sm={4} md={4}>
				            <img src={img3} />
				          </Col>
				        </Row>
				      </Grid>
				</div>

				{ /*************** Code ***************/ }
				{ content === 'about' ?
					<div className="an-content" id="content-about">
						about content
					</div>
				: null }

				{ /*************** Photography ***************/ }
				{ content === 'projects' ?
					<div className="an-content" id="content-projects">
						 
					</div>
				: null }
			</div>
		);
	}
}

class Nav extends React.Component {
	render() {
		return (
			<div className="an-nav" onClick={this.props.onClick}>
				{this.props.text}
			</div>
		)
	}
}
