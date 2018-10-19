import React from 'react';
import RouteTo from '../link';
import Button from '../button';
if(process.env.WEBPACK) require('./index.scss');

 const Header =  ({ data, match, openLoginModal, openSignUpModal }) => (
    <div className='header'>
      <div className='container'>
        <div className='logo_container'>
          <img className ='logo' src='../../assets/logofull.png'/>
        </div>
        <div className='nav_bar'>
          {data.navBar.map((nav, index) => {
            return (<RouteTo selected={match.url == '/'+nav.url ? 'selected': ''} key={index} route={nav.url} label={nav.label}/>);	
          })}
        </div>
        {
          data.loginLabel && <div className='authentication'>
              <Button label={data.loginLabel} handleclick={openLoginModal}/>
              <Button label={data.signUpLabel} handleclick={openSignUpModal}/>
            </div>
        }
        {
          data.userDetails && <div className='user_details'>
            <span className='user_name'> {data.userDetails.name}</span>
          </div>
        }
    </div>
  </div>
);

export default Header;
