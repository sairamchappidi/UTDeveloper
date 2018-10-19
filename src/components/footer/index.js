import React from 'react';
if(process.env.WEBPACK) require('./index.scss');

const Footer = ({data}) => {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className="footer_blocks">
                    <h3>{data.contactLabel}</h3>
                    <i>{data.mailId}</i>
                </div>
                <div className="footer_blocks">
                    <h3>{data.usefulLinkLabel}</h3>
                    <a href=''>{data.mailId}</a>
                </div>
                <div className="footer_blocks">
                    <h3>{data.socialLabel}</h3>
                    <div className='logo_container'>
                    {data.socialLinks.map((social, index) => {
                        return(<a href={social.url} key={index}><span className={`${social.logo} logo`} /></a>);
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;