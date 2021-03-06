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
import { brandcolor } from '../../styles/colors'
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
        borderColor: brandcolor,
      },
      labelStyle: {
        color: brandcolor,
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
        fill: brandcolor,
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
                tabindex={1}
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
                tabindex={2}
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
                tabindex={3}
              />
              <div className="signup-buttons">
                <RaisedButton
                  label="Cancel"
                  style={styles.button}
                  containerElement={<Link to="/login" tabindex={6} />}
                />
                <RaisedButton
                  label="Sign Up"
                  type="submit"
                  style={styles.button}
                  backgroundColor={brandcolor}
                  labelColor="#FFF"
                  onClick={onSubmit}
                  tabindex={5}
                />
              </div>
              <Checkbox
                label={tosLabel}
                onCheck={onTermsChange}
                checked={termsAgreed}
                style={errorTermsAgreed ? styles.checkboxError : styles.checkbox}
                iconStyle={errorTermsAgreed ? styles.checkboxIconError : styles.checkboxIcon}
                labelStyle={{ zIndex: 3 }}
                tabindex={4}
              />
            </form>
          </div>
        </Paper>
        <Snackbar
          open={showSnack}
          message={snackMessage}
          autoHideDuration={3000}
          onRequestClose={onSnackClosed}
          bodyStyle={{ backgroundColor: brandcolor }}
        />
      </div>
    )
  }
}
