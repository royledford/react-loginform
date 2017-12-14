# React Login / Signup Form

This is a basic structure for a login/signup flow in react. The UI components are from the material-ui library and routing is handled with react-router v4.

## Prerequistes

* react
* react-router-dom
* material-ui
* axios

## Overview

This includes the following forms and components to make up a basic login flow.

* Login form
* Signup form
* Forgot password form
* Privacy policy
* Terms of service
* Notfound (404) page

Authentication is handled via `./src/Services/AuthService.js` and uses axios.js to handle http requests and assumes you will be recieving a `JWT` back from the authentication API. The JWT is added to local storage.

## To run the project locally

This is meant to be copied into a new or existing project to provide a base for creating the login flow. As such it is not a really a working project.

> But, you can clone and run the project locally to get a feel for how the forms work.

```bash
git clone https://github.com/royledford/react-loginform.git
cd react-loginform
yarn start
```

## To add to an existing project

Clone this project locally

```bash
git clone https://github.com/royledford/react-loginform.git
```

Copy the following into your project.

* `./react-loginform/src/components/Common`
* `./react-loginform/src/components/Login`
* `./react-loginform/src/components/helpers`
* `./react-loginform/src/components/img`
* `./react-loginform/src/components/Services`
* `./react-loginform/src/components/styles`
* `./react-loginform/src/components/vendor`

Add the following to you App.js (or wherever the routing is happening).

```javascript
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Login/SignupContainer'
import TermsOfService from './components/Login/TermsOfService'
import PrivacyPolicy from './components/Login/PrivacyPolicy'
import ForgotPasswordContainer from './components/Login/ForgotPasswordContainer'
import NotFound from './NotFound'

import './vendor/normalize.css'
import './vendor/reset.css'
import './styles/base.css'
import './styles/vars.css'

/* add the routes */

  <Route path="/login" component={LoginContainer} />
  <Route path="/signup" component={SignupContainer} />
  <Route path="/terms-of-service" component={TermsOfService} />
  <Route path="/privacy-policy" component={PrivacyPolicy} />
  <Route path="/forgot-password" component={ForgotPasswordContainer} />
```

Update `./src/components/Services/AuthService.js` to use the correct Api or authentication for you app.

The logo is located in `./src/components/Common` and is an inline svg. Update to the logo for the app.

Background image for the NotFound component is located in `./src/components/img/broken.gif`. You can update the gif and the contents of `./src/components/NotFound.js` to customize for your app.

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
