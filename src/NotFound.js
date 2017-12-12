import React from 'react'
import broken from './img/broken.gif'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import logo from './img/s-logo-cs5-white.svg'

import './NotFound.css'

const NotFound = () => {
  return (
    <div className="page-container notfound-wrap">
      <div className="bg" style={{ backgroundImage: 'url(' + broken + ')' }} />
      <div className="notfound-header">
        <img src={logo} style={{ width: 50, height: 50 }} />
        <Link to="/">
          <FlatButton label="Merchant Portal" type="submit" labelStyle={{ color: 'white' }} />
        </Link>
      </div>
      <div className="notfound-copy">
        <h1 style={{ color: 'white', fontSize: 75 }}>There&#39;s nothing here. </h1>
        <p className="notfound-body">
          Whatever you were looking for doesn't currently exist at this address. Unless you were looking for this error
          page, in which case: Congrats! You totally found it.
        </p>
      </div>
    </div>
  )
}

export default NotFound
