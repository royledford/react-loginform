import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from '../Common/Logo'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import LinearProgress from 'material-ui/LinearProgress'
import './Login.css'

export default class Login extends Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    errorEmail: PropTypes.string,
    errorPassword: PropTypes.string,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onEmailBlur: PropTypes.func.isRequired,
    onPasswordBlur: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    snackMessage: PropTypes.string,
    showSnack: PropTypes.bool,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
    snackMessage: '',
    showSnack: '',
    loading: false,
  }

  render() {
    const speedGreen = '#54C0A0'
    const {
      email,
      password,
      errorEmail,
      errorPassword,
      onEmailChange,
      onPasswordChange,
      onEmailBlur,
      onPasswordBlur,
      onSubmit,
      snackMessage,
      showSnack,
      onSnackClosed,
      loading,
    } = this.props

    const styles = {
      textfield: {
        width: 328,
      },
      button: {
        marginTop: 36,
        width: 328,
      },
      underlineStyle: {
        borderColor: speedGreen,
      },
      labelStyle: {
        color: speedGreen,
      },
    }

    return (
      <div className="login-wrap">
        <Paper style={{ width: 370, height: 450 }} zDepth={1}>
          {loading && <LinearProgress mode="indeterminate" />}
          <div className="login-column">
            <Logo height="92" width="92" className="login-logo" />

            <form onSubmit={onSubmit} className="login-column">
              <TextField
                hintText="Enter your email"
                floatingLabelText="Email"
                type="text"
                style={styles.textfield}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.labelStyle}
                value={email}
                onChange={onEmailChange}
                errorText={errorEmail}
                onBlur={onEmailBlur}
              />
              <TextField
                hintText="Enter password"
                floatingLabelText="Password"
                type="password"
                style={styles.textfield}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.labelStyle}
                value={password}
                onChange={onPasswordChange}
                errorText={errorPassword}
                onBlur={onPasswordBlur}
              />
              <RaisedButton
                label="Sign In"
                type="submit"
                style={styles.button}
                backgroundColor={speedGreen}
                labelColor="#FFF"
                onClick={onSubmit}
              />
            </form>

            <p className="login-copy">
              Don’t have a SpeedETab account?{' '}
              <Link to="/signup" className="login-signup">
                Sign Up
              </Link>
            </p>
            <Link className="login-link" to="/forgot-password">
              Forgot password
            </Link>
          </div>
        </Paper>

        <Snackbar
          open={showSnack}
          message={snackMessage}
          autoHideDuration={3000}
          onRequestClose={onSnackClosed}
          bodyStyle={{ backgroundColor: speedGreen }}
        />
      </div>
    )
  }
}
