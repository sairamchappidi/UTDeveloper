import React ,{Component}from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import Button from '../button';
import Input from '../input';
import {validate} from './validation';
import { auth } from '../../firebase';

if(process.env.WEBPACK) require('./index.scss');

class SignUp extends Component{
    handleClick = (values) => {
        console.log(values);
        var email = values["username"];
		var password = values["password"];
		auth.doCreateUserWithEmailAndPassword(email, password)
		.then(() => {
			console.log("logged in");
		})
		.catch(error=>{
			alert(error.message);
			console.log(error);
		})
    }
    
    render() {
        const {data, closeModal, handleSubmit, submitting} = this.props;
        return(
            <div className='signUp'>
                <Form onSubmit={handleSubmit(values => this.handleClick(values))}>
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
                </Form>
            </div>
        );
    }
}

export default reduxForm({
	form: 'SignUp', // a unique identifier for this form
	validate,
  })(SignUp);