import React ,{Component}from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../button';
import Input from '../input';
import {validate} from './validation';

if(process.env.WEBPACK) require('./index.scss');

class SignUp extends Component{
    handleClick = (values) => {
		console.log(this.props);
    }
    
    render() {
        const {data, closeModal, handleSubmit, submitting} = this.props;
        return(
            <div className='signUp'>
                <form onSubmit={handleSubmit(values => this.handleClick(values))}>
                    <button className='close_button' onClick={closeModal}>x</button>
                    {data.fields.map((field, index) => {
                        return (
                            <Field
                            name={field.label}
                            component={Input}
                            inputType={field.type}
                            label={field.label}
                            placeHolder={field.placeHolder}
                            key={index}
                            inputId={index+field.label}
                        />
                        );
                    })}
                    <div className='signUp_buttons'>
                        <Button label={data.label} submittin={submitting}/>
                        <a className='forget_label' href=''>{data.forgetLabel}</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
	form: 'SignUp', // a unique identifier for this form
	validate,
  })(SignUp);