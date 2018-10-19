import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import data from './data.json';
if(process.env.WEBPACK) require('./index.scss');

class DashBoard extends Component {
    render() {
        const {match} = this.props;

        return (
            <div className='dashboard'>
                <Header data={data} match={match}/>
                <div className='content'>
                    <div className='container'>
                        <div className='user_details'>
                            <span className='user_logo' />
                            <span className='user_name'>{data.userDetails.name}</span>
                            <span className='rating_logo' />
                            <span className='rating_value'>{data.userDetails.rating}</span>
                        </div>
                        <div className='rating_details'>
                            <div className='user_rating'>
                                {data.userDetails.ratings.map((detail, index) => {
                                    return (<span key={index} className='rating_details'>{detail.label}</span>)
                                })}
                            </div>
                            <div className='project_rating'></div>
                        </div>
                    </div>

                </div>
                <Footer data={data.footer}/>
            </div>
        );
    }
}

export default DashBoard;