import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './HeaderLogo.css'

export default class HeaderLogo extends Component {

  render () {
    return (
       <Link to="/" className="headerlogo">SpeedETab</Link>
    )
  }
}

