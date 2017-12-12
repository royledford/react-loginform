import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// ----------------------------------------------------------
// This is required by material-ui as some components
// use tapEvents due to onclick being to slow..
// See https://www.npmjs.com/package/material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'
// ----------------------------------------------------------

import PrivateRoute from './PrivateRoute'
import LoginContainer from './Components/Login/LoginContainer'
import SignupContainer from './Components/Login/SignupContainer'
import TermsOfService from './Components/Login/TermsOfService'
import PrivacyPolicy from './Components/Login/PrivacyPolicy'
import ForgotPasswordContainer from './Components/Login/ForgotPasswordContainer'
import NotFound from './NotFound'

// ----------------------------------------------------------
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
// ----------------------------------------------------------

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/forgot-password" component={ForgotPasswordContainer} />

            {/* <PrivateRoute path="/venue/new/" component={VenueCreateContainer} /> */}

            <Route component={NotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
