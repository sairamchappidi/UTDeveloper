import React, {Component} from 'react';

import Header from '../header';
import Footer from '../footer';
import data from './data.json';
import Button from '../button';
import RatingCard from '../ratingCard';

if(process.env.WEBPACK) require('./index.scss');

class Rating extends Component {
    constructor(){
        super();

        this.state = {
            leadersRating: true,
            membersRating: false
        };
    }
    
    switchToMember = () => {
        this.setState({
            membersRating: true,
            leadersRating: false
        });
    }
    switchToLeader = () => {
        this.setState({
            membersRating: false,
            leadersRating: true
        });
    }

    render() {
        const {match} = this.props;
        const {leadersRating, membersRating} = this.state;
        return(
            <div className='rating'>
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
                            <div className='switch_container'>
                                <Button label='Project Leaders' buttonClass={`switch_button ${leadersRating ? 'selected' : 'unselected'}`} handleclick={this.switchToLeader}/>
                                <Button label='Project Members' buttonClass={`switch_button ${membersRating ? 'selected' : 'unselected'}`} handleclick={this.switchToMember}/>
                            </div>
                            <div className={`leader_rating_container ${leadersRating ? 'active': 'inactive'}`}>
                                {data.projectRating.map((project, index) => {
                                    return(
                                        <RatingCard projectMember={project.name}  projectName={project.label} key={index}/>
                                    );
                                })}
                            </div>
                            <div className={`member_rating_container ${membersRating ? 'active': 'inactive'}`}>
                            {data.userRating.map((project, index) => {
                                    return(
                                        <RatingCard projectMember={project.name}  projectName={project.label} key={index}/>
                                    );
                                })}                     
                            </div>
                        </div>
                    </div>
                </div>
                <Footer data={data.footer}/>
            </div>
        );
    }
}

export default Rating;