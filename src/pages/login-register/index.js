import { useState } from 'react';
import { Grid, Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core';

import LoginForm from './forms/login-form';
import RegisterForm from './forms/register-form';

import withStyles from './styles';

const LoginRegister = ({ classes }) => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <Grid className={classes.container} container justify='center' alignItems='center'>
            <Grid item xs={2}>
                <Card raised>
                    <CardHeader title={isRegister ? 'Sign Up' : 'Sign In'} />
                    <CardContent>
                        {isRegister ? <RegisterForm /> : <LoginForm />}
                        <Grid container>
                            <Grid item xs={12} className={classes.toggle}>
                                {isRegister ? <Typography>Already have an account? <Link color="secondary" onClick={() => setIsRegister(!isRegister)}>Sign in</Link></Typography> : <Typography>Don't have an account? <Link color="secondary" onClick={() => setIsRegister(!isRegister)}>Sign up</Link></Typography>}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};

export default withStyles(LoginRegister);