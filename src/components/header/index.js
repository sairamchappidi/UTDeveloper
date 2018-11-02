import React from 'react';
import { withRouter } from 'react-router-dom';

import RouteTo from '../link';
import Button from '../button';

import withAuthentication from "../Session/withAuthentication";
import AuthUserContext from '../Session/AuthUserContext';
import { auth } from '../../firebase';

if(process.env.WEBPACK) require('./index.scss');

const logOut = (history) => {
  auth.doSignOut();
  history.push('');
};

 const Header =  ({ data, match, openLoginModal, openSignUpModal, history }) => <AuthUserContext.Consumer>
   {authUser =>
    <div className='header'>
      <div className='container'>
        <div className='logo_container'>
          <img className ='logo' src='../../assets/logofull.png'/>
        </div>
        <div className='nav_bar'>
        {authUser!=null && console.log(authUser.email)}
          {data.navBar.map((nav, index) => {
            return (<RouteTo selected={match.url == '/'+nav.url ? 'selected': ''} key={index} route={nav.url} label={nav.label}/>);	
          })}
        </div>
        {
          data.loginLabel && authUser==null && <div className='authentication'>
              <Button label={data.loginLabel} handleclick={openLoginModal}/>
              <Button label={data.signUpLabel} handleclick={openSignUpModal}/>
            </div>
        }
        {
          authUser!=null && <div className='authentication'>
            {authUser.email}
            <Button label={data.logoutLabel} handleclick={() => logOut(history)}/>
          </div>
        }
    </div>
  </div>
}
</AuthUserContext.Consumer>;

export default withRouter(withAuthentication(Header));
