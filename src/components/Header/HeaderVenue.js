import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { grey500 } from 'material-ui/styles/colors'

import './HeaderVenue.css'

export default class HeaderVenue extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }
  static defaultProps = {
    value: '',
  }

  render() {
    const { value } = this.props
    return (
      <div style={{ height: 37 }}>
        <div className="headervenue-spacer" style={{ borderColor: grey500 }}>
          <h4 className="headervenue" style={{ color: grey500, borderRightColor: grey500 }}>
            {value}
          </h4>
        </div>
      </div>
    )
  }
}
