import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import './HeaderUser.css'

export default class HeaderLoginButton extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }
  static defaultProps = {
    username: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuOpen = event => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      menuOpen: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      menuOpen: false,
    })
  }

  render() {
    const { username, onLogout } = this.props

    return (
      <div style={{ height: 37 }}>
        <p className="headeruser" onClick={this.handleMenuOpen}>
          {username}&nbsp;<FaCaretDown style={{ fontsize: 18 }} />
        </p>
        <Popover
          open={this.state.menuOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Log Out" onClick={onLogout} />
          </Menu>
        </Popover>
      </div>
    )
  }
}
