export const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } 
    if (!values.password) {
        errors.password = 'Required';
    } 
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.ConfirmPassword) {
      errors.age = 'Required';
    } else if (values.ConfirmPassword !== values.password) {
      errors.ConfirmPassword = 'Password should match';
    }
    return errors;
  }

