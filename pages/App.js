import React, { Component } from 'react';
import Head from 'next/head';
import PhotographyPage from './PhotographyPage';
import CodingPage from './CodingPage';
import DesignPage from './DesignPage';
import AboutPage from './AboutPage';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

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
			content: 'home',
			modal: null
		};
	}

	showContent(content) {
		this.setState({
			content: content
		});
	}

	handleClick(modal) {
		this.setState({modal: modal});
	}

	handleClose() {
		this.setState({modal: null});
	}

	render() {
		let {content} = this.state;

		return (
			<div className="an-body">
				<Head>
					<link rel="stylesheet" href="/static/css/App.css" />
					<meta name="viewport" content-"width=device-width, initial-scale=1" />
				</Head>
				{ /*************** Header ***************/ }
				{ content === 'home' &&
					<div className="header transition">
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
				}

				{ content === 'coding' &&
					<CodingPage onBack={this.showContent.bind(this, 'home')} showModal={this.handleClick.bind(this)} />
				}

				{ content === 'design' &&
					<DesignPage onBack={this.showContent.bind(this, 'home')} showModal={this.handleClick.bind(this)} />
				}

				{ content === 'photography' &&
					<PhotographyPage onBack={this.showContent.bind(this, 'home')} showModal={this.handleClick.bind(this)} />
				}

				{ content === 'about' &&
					<AboutPage onBack={this.showContent.bind(this, 'home')} />
				}

				{ this.state.modal &&
					<div className="preview-modal">
						<ModalContainer onClose={this.handleClose.bind(this)}>
							<ModalDialog onClose={this.handleClose.bind(this)}>
								<h2>{this.state.modal.title}</h2>
								<p>{this.state.modal.description}</p>
							</ModalDialog>
						</ModalContainer>
					</div>
				}

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
