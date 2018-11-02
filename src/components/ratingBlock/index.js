import React, {Component} from 'react';
import ReactStars from 'react-stars';

import Button from '../button';
if(process.env.WEBPACK) require('./index.scss');

class RatingBlock extends Component{
    constructor(){
        super();

    }

    handleClick = () => {
        this.setState({
            initialValue: this.state.updateValue,
            updateValue: 0
        });
    }

    ratingChanged = (newRating) => {
        this.setState({
            updateValue: newRating
        });
    }

    render() {
        const {projectName, initialValue} = this.props;
        return(
            <div className='rating_card'>
                <div className='result_container'>
                    <span>{projectName}</span>
                    <span>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#5D8245'}
                            value={initialValue}
                            edit={false}
                            className='result_star'
                        />
                    </span>
                </div>
            </div>
        );
    }
}

export default RatingBlock;