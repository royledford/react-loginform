import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Logo extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
  }
  static defaultProps = {
    width: 50,
    height: 50,
  }

  render() {
    const { width, height, className } = this.props
    return (
      <div className={className}>
        <svg id="SpeedETabLogo" width={width} height={height} viewBox="0 0 1000 1000">
          <title>SpeedETab Logo</title>
          <path
            fill="#37d7b7"
            d="M879.49,1000h-759C54.23,1000,0,945.77,0,879.49V713H420a92.37,92.37,0,1,0,0-92.36H0V120.51C0,54.23,54.23,0,120.51,0h759C945.77,0,1000,54.23,1000,120.51v167.7H580a92.35,92.35,0,1,0,0,92.36h420V879.49C1000,945.77,945.77,1000,879.49,1000Z"
          />
        </svg>
      </div>
    )
  }
}
