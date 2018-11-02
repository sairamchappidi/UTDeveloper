import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import data from './data.json';
import RatingBlock from '../RatingBlock';

import withAuthorization from '../Session/withAuthorization';

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
                            <RatingBlock projectName='Webscrapping - C#' initialVlaue={4.5}/>
                            <RatingBlock projectName='Webscrapping - Python' initialVlaue={3}/>
                        </div>
                    </div>

                </div>
                <Footer data={data.footer}/>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(DashBoard);

export default DashBoard;