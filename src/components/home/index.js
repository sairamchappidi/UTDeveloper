import React, { Component } from 'react';
import RouteTo from '../link';
if(process.env.WEBPACK) require('./index.scss');

const Home = () => (    
	<div className='home'>
		<div className='container'>
			<div className='logo_container'>
				<img className ='logo' src='../../assets/logo_fill.png'/>
				<h3 className='title'>UTDevelopers</h3>
			</div>
			<div className='authentication'>
				<RouteTo route='login' label='login'/>	
				<RouteTo route='signup'label='sign up'/>	
			</div>
		</div>
	</div>
);

export default Home;