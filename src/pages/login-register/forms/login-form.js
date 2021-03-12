import { reduxForm, Form, Field } from 'redux-form';
import { TextField, Button } from '@material-ui/core';

const LoginForm = ({ handleSubmit }) => {
    const renderInput = ({ input, label, ...custom }) => (
        <TextField label={label} {...input} fullWidth InputLabelProps={{ shrink: true }} {...custom} />
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Field name="email" label="Email" component={renderInput} />
            <Field name="password" label="Password" component={renderInput} className="mt-2" />
            <Button type='submit' className="mt-2" color="secondary" variant="contained" fullWidth>Sign In</Button>
        </Form>
    )
};

const handleSubmit = values => {
    console.log('LOGIN', values)
}

export default reduxForm({ form: 'login', onSubmit: handleSubmit })(LoginForm)