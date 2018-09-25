import React from 'react';
import Button from '../button';
import Input from '../input';
if(process.env.WEBPACK) require('./index.scss');

export default () => (
	<div className='login'>
		<h3>Login</h3>
		<Input inputName='' label='username'/>
		<Input inputName='' label='password' inputType='password'/>
		<Button label={'Login'}/>
	</div>
);
