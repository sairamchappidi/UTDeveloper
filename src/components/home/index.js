import React, { Component } from 'react';
import Modal from 'react-modal';
import Header from '../header';
import Login from '../login';
import data from './data.json';
import SignUp from '../signUp';
import Footer from '../footer';
import { auth } from '../../firebase';

if(process.env.WEBPACK) require('./index.scss');

const customStyles = {
	content : {
	  top                   : '50%',
	  left                  : '50%',
	  right                 : 'auto',
	  bottom                : 'auto',
	  marginRight           : '-50%',
	  transform             : 'translate(-50%, -50%)'
	}
  };
class Home extends Component {
	constructor() {
		super();
	 
		this.state = {
		  loginModal: false,
		  signUpModal: false
		};
	}
	
	openLoginModal = () => {
		this.setState({loginModal: true});
	}

	closeLoginModal = () => {
		this.setState({loginModal: false});
	}

	openSignUpModal = () => {
		this.setState({signUpModal: true});
	}

	logOut = () => {
		auth.doSignOut();
	}

	closeSignUpModal = () => {
		this.setState({signUpModal: false});
	}

	componentWillMount() {
		Modal.setAppElement('body');
	}

	render() {
		const {match} = this.props;
		return (
			<div className='home'>
				<Header data={data} match={match} openLoginModal={this.openLoginModal} openSignUpModal={this.openSignUpModal} logOut={this.logOut}/>
				<Modal
				isOpen={this.state.loginModal}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeLoginModal}
				style={customStyles}
				contentLabel="loginModal"
				>
					<Login data={data.loginModal} closeModal={this.closeLoginModal}/>
				</Modal>
				<Modal
				isOpen={this.state.signUpModal}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeSignUpModal}
				style={customStyles}
				contentLabel="signUpModal"
				>
					<SignUp data={data.signUpModal} closeModal={this.closeSignUpModal} email={this.userEmail} password={this.userPassword}/>
				</Modal>
				<div className='content'>
					<div className='container'>
						<div className='text_region'>
							<h2>Welcome to UT Developers</h2>
							<h1>Collaborate . Create . Innovate </h1>
							<p>
								UTDev community primarily focuses on design and development of software projects and ideas from UTD students. You can join
								any on-going projects or can bring your own idea and ask people to join for the same. Projects are open
								to everyone.
							</p>
						</div>
						<div className='image_region'>
							<img src="../../assets/banner.png" />
					</div>
					</div>
				</div>
				<Footer data={data.footer}/>
			</div>
		);
	}
}

export default Home;