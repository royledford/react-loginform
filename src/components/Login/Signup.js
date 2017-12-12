import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from '../Common/Logo'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import Snackbar from 'material-ui/Snackbar'
import LinearProgress from 'material-ui/LinearProgress'
import { red700 } from 'material-ui/styles/colors'
import './Signup.css'

export default class Login extends Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirm: PropTypes.string,
    termsAgreed: PropTypes.bool,

    errorEmail: PropTypes.string,
    errorPassword: PropTypes.string,
    errorPasswordConfirm: PropTypes.string,
    termsAgreedError: PropTypes.bool,

    onEmailChange: PropTypes.func.isRequired,
    onEmailBlur: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onPasswordConfirmChange: PropTypes.func.isRequired,
    onPasswordBlur: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,

    snackMessage: PropTypes.string,
    showSnack: PropTypes.bool,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    email: '',
    password: '',
    passwordConfirm: '',

    errorEmail: '',
    errorPassword: '',
    errorPasswordConfirm: '',
    errorTermsAgreed: false,

    termsAgreed: false,
    snackMessage: '',
    showSnack: '',
    loading: false,
  }

  render() {
    const speedGreen = '#54C0A0'
    const {
      email,
      password,
      passwordConfirm,
      termsAgreed,

      errorEmail,
      errorPassword,
      errorPasswordConfirm,
      errorTermsAgreed,

      onEmailChange,
      onEmailBlur,
      onPasswordChange,
      onPasswordBlur,
      onPasswordConfirmChange,
      onPasswordConfirmBlur,
      onTermsChange,
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
        width: 128,
      },
      underlineStyle: {
        borderColor: speedGreen,
      },
      labelStyle: {
        color: speedGreen,
      },
      checkbox: {
        margin: '32px 0 16px 0',
        width: 328,
        borderBottom: 'none',
      },
      checkboxError: {
        margin: '32px 0 16px 0',
        width: 328,
        borderBottom: `2px solid ${red700}`,
      },
      checkboxIcon: {
        fill: speedGreen,
      },
      checkboxIconError: {
        fill: red700,
      },
    }

    // Label for TOS checkbox
    const tosLabel = (
      <span className="signup-copy">
        I agree to the&nbsp;
        <Link to="/terms-of-service" className="signup-link">
          Terms of Service
        </Link>
        {' and '}
        <Link to="/privacy-policy" className="signup-link">
          Privacy Policy
        </Link>
      </span>
    )

    return (
      <div className="signup-wrap">
        <Paper style={{ width: 370, height: 530 }} zDepth={1}>
          {loading && <LinearProgress mode="indeterminate" />}
          <div className="signup-column">
            <Logo height="92" width="92" className="signup-logo" />
            <form onSubmit={onSubmit} className="signup-column">
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
              <TextField
                hintText="Retype password"
                floatingLabelText="Password Confirmation"
                type="password"
                style={styles.textfield}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.labelStyle}
                value={passwordConfirm}
                onChange={onPasswordConfirmChange}
                errorText={errorPasswordConfirm}
                onBlur={onPasswordConfirmBlur}
              />
              <div className="signup-buttons">
                <RaisedButton label="Cancel" style={styles.button} containerElement={<Link to="/login" />} />
                <RaisedButton
                  label="Sign Up"
                  type="submit"
                  style={styles.button}
                  backgroundColor={speedGreen}
                  labelColor="#FFF"
                  onClick={onSubmit}
                />
              </div>
              <Checkbox
                label={tosLabel}
                onCheck={onTermsChange}
                checked={termsAgreed}
                style={errorTermsAgreed ? styles.checkboxError : styles.checkbox}
                iconStyle={errorTermsAgreed ? styles.checkboxIconError : styles.checkboxIcon}
                labelStyle={{ zIndex: 3 }}
              />
            </form>
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
