import { reduxForm, Form, Field } from 'redux-form';
import { TextField, Button } from '@material-ui/core';

const RegisterForm = ({ handleSubmit }) => {
    const renderInput = ({ input, label, ...custom }) => (
        <TextField label={label} {...input} InputLabelProps={{ shrink: true }}  {...custom} />
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Field name="email" label="Email" fullWidth component={renderInput} />
            <Field name="password" label="Password" fullWidth component={renderInput} className="mt-2" />
            <Field name="confirmPassword" label="Confirm Password" fullWidth component={renderInput} className="mt-2" />
            <Button type='submit' variant="contained" color='secondary' fullWidth className="mt-2" >Sign Up</Button>
        </Form>
    )
};

const handleSubmit = values => {
    console.log('REGISTER', values)
}

export default reduxForm({ form: 'register', onSubmit: handleSubmit })(RegisterForm);