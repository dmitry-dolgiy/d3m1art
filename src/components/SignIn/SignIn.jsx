import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import { Field } from 'redux-form';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import CommonSnackBarContent from '../SnackbarContent/SnackbarContent';
import withStyles from '@material-ui/core/styles/withStyles';

const renderTextField = ({ type, input, meta: { touched } }) =>
  (<Input type={ type } error={ !input.value && touched } { ...input } />);

const renderCheckBox = ({ input: { value, onChange }, label }) =>
  (<Checkbox label={ label } checked={ value } onChange={ onChange } />);

class SignIn extends Component {

  hideSignInErrorMessage = () => {
    this.props.hideAuthenticatedError();
  };

  render() {
    const { classes, signInAction, errorMessage, history } = this.props;
    return (
      <main className={ classes.main }>
        <CssBaseline />

        <Paper className={ classes.paper }>
          <Avatar className={ classes.avatar }>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <div className={ classes.form }>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Field component={ renderTextField } type='text' id="email" name="email" autoComplete="email"
                     autoFocus />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field component={ renderTextField } type='password' name="password" id="password" />
            </FormControl>

            <FormControlLabel
              control={ <Field component={ renderCheckBox } name="remember" color="primary" /> }
              label="Remember me" />

            <Button
              onClick={ this.props.handleSubmit(values => signInAction(values, history)) }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={ classes.submit }>
              Sign in
            </Button>

            <Snackbar
              anchorOrigin={ { vertical: 'bottom', horizontal: 'left' } }
              open={ Boolean(errorMessage) }
              autoHideDuration={ 5000 }
              onClose={ this.hideSignInErrorMessage }>
              <CommonSnackBarContent
                variant="error"
                message={ errorMessage }
                onClose={ this.hideSignInErrorMessage } />
            </Snackbar>
          </div>
        </Paper>
      </main>
    );
  }
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#0D82E4',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    backgroundColor: '#04A9E4',
    '&:hover': {
      backgroundColor: '#1D7FE4',
    },
    marginTop: theme.spacing.unit * 3,
  },
});

export default reduxForm({ form: 'signIn' })(withStyles(styles)(SignIn));
