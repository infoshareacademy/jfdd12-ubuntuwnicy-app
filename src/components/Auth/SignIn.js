import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signIn } from '../../services/AuthService';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    function onClickSignIn(event, email, password) {
        event.preventDefault()
        debugger

        signIn(users => {
            users.filter(user => {
                if (user.email === email && user.password === password) {

                    console.log('zalogowany')
                    props.onLogin(user.uniqueId)
                }else{
                    alert('Nieprawidłowe dane użytkownika.')
                }
            })
        })


    }

    return (<>
        { props.isLoggedIn ? null :
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={state.email}
                        onChange={event => setState({
                            ...state,
                            email: event.target.value
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={state.password}
                        onChange={event => setState({
                            ...state,
                            password: event.target.value
                        })}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"

                        className={classes.submit}
                        onClick={event => onClickSignIn(event, state.email, state.password)}
                    >
                        Zaloguj Się
          </Button>
                    <Grid container>
                    </Grid>
                </form>
            </div>
        </Container>}
    </>);
}