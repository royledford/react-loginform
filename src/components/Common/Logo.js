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
        <svg id="logo" width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Generic Logo</title>
          <rect fill="#ccc" width="100" height="100" />
          <g fill="#f2f2f2">
            <path d="M10.23,31.59h5.22V52.08H27.93v4.5H10.23Z" transform="translate(0)" />
            <path
              d="M46.46,54.32q-2.34,2.88-7.11,2.88t-7.1-2.88a10.72,10.72,0,0,1-2.34-7,10.75,10.75,0,0,1,2.34-6.92c1.56-2,3.93-2.93,7.1-2.93s5.55,1,7.11,2.93a10.75,10.75,0,0,1,2.34,6.92A10.72,10.72,0,0,1,46.46,54.32Zm-3.87-2.67a7,7,0,0,0,1.14-4.29,6.93,6.93,0,0,0-1.14-4.27,3.84,3.84,0,0,0-3.25-1.5,3.87,3.87,0,0,0-3.27,1.5,6.93,6.93,0,0,0-1.14,4.27,7,7,0,0,0,1.14,4.29,3.87,3.87,0,0,0,3.27,1.5A3.84,3.84,0,0,0,42.59,51.65Z"
              transform="translate(0)"
            />
            <path
              d="M61.4,38.08a5.82,5.82,0,0,1,2.84,2.68V38.1H69V55.63A9.85,9.85,0,0,1,67.75,61q-2.07,3.12-7.93,3.12A10.91,10.91,0,0,1,54,62.75a5.14,5.14,0,0,1-2.47-4.16h5.25a2.13,2.13,0,0,0,.67,1.22,4,4,0,0,0,2.62.67c1.74,0,2.91-.59,3.5-1.75A8.94,8.94,0,0,0,64.17,55V53.78a5.8,5.8,0,0,1-1.49,1.78,6,6,0,0,1-3.75,1.1,7.06,7.06,0,0,1-5.68-2.5,10.08,10.08,0,0,1-2.13-6.77,11.41,11.41,0,0,1,2.05-6.93,6.75,6.75,0,0,1,5.8-2.8A6.44,6.44,0,0,1,61.4,38.08ZM63,51.33a5.92,5.92,0,0,0,1.17-4.08,6.25,6.25,0,0,0-1.11-4,3.62,3.62,0,0,0-3-1.37,3.5,3.5,0,0,0-3.5,2.39,8.68,8.68,0,0,0-.5,3.14,7.19,7.19,0,0,0,.54,2.86,3.52,3.52,0,0,0,3.51,2.34A3.73,3.73,0,0,0,63,51.33Z"
              transform="translate(0)"
            />
            <path
              d="M88.87,54.32q-2.34,2.88-7.1,2.88t-7.1-2.88a10.72,10.72,0,0,1-2.34-7,10.75,10.75,0,0,1,2.34-6.92c1.55-2,3.92-2.93,7.1-2.93s5.54,1,7.1,2.93a10.75,10.75,0,0,1,2.34,6.92A10.72,10.72,0,0,1,88.87,54.32ZM85,51.65a7.09,7.09,0,0,0,1.13-4.29A7,7,0,0,0,85,43.09a4.29,4.29,0,0,0-6.52,0,6.87,6.87,0,0,0-1.15,4.27,7,7,0,0,0,1.15,4.29,4.29,4.29,0,0,0,6.52,0Z"
              transform="translate(0)"
            />
          </g>
        </svg>
      </div>
    )
  }
}
