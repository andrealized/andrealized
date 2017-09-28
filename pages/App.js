import React, { Component } from 'react';
import Head from 'next/head';
import PhotographyPage from './PhotographyPage';
var Camera = require('react-icons/lib/ti/camera-outline');
var Mail = require('react-icons/lib/ti/mail');
var BusinessCard = require('react-icons/lib/ti/business-card');
var Briefcase = require('react-icons/lib/ti/briefcase');
var Desktop = require('react-icons/lib/ti/device-desktop');
var Laptop = require('react-icons/lib/ti/device-laptop');
var Paintbrush = require('react-icons/lib/ti/brush');

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			content: 'photography'
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
				<Head>
					<link rel="stylesheet" href="/static/css/App.css" />
				</Head>
				{ /*************** Header ***************/ }
				{ content === 'home' ?
					<div className="header">
						<div>
							<div className="andrea-title" id="andrealized">andrealized</div>
							<div className="andrea-subtitle">andrea yang</div>
							<br />
						</div>

						<div className="nav-container">
							<Laptop className="nav-icon" onClick={this.showContent.bind(this, 'coding')} />
							<Paintbrush className="nav-icon" onClick={this.showContent.bind(this, 'design')} />
							<Camera className="nav-icon" onClick={this.showContent.bind(this, 'photography')} />
							<BusinessCard className="nav-icon" onClick={this.showContent.bind(this, 'about')} />
						</div>
					</div>
				: null }

				{ /*************** Code ***************/ }
				{ content === 'about' ?
					<div></div>
				: null }

				{ /*************** Photography ***************/ }
				{ content === 'photography' ?
					<PhotographyPage onBack={this.showContent.bind(this, 'home')} />
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
