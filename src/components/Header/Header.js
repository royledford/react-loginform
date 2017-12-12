import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import HeaderTitle from './HeaderTitle'
import HeaderVenue from './HeaderVenue'
import HeaderUser from './HeaderUser'
import { black } from 'material-ui/styles/colors'

import './Header.css'

export default class Header extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    currentUsername: PropTypes.string.isRequired,
    venueName: PropTypes.string.isRequired,
  }

  render() {
    const { onLogout, currentUsername, venueName } = this.props

    return (
      <div className="header-wrap" style={{ backgroundColor: black }}>
        <div className="header-left">
          <HeaderLogo />
          <HeaderTitle />
        </div>
        <div className="header-right">
          <HeaderVenue value={venueName} />
          <HeaderUser username={currentUsername} onLogout={onLogout} />
        </div>
      </div>
    )
  }
}
