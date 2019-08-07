// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
          video: {
            resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        bitrate: 12,
          video: {
            resolution: '1080p'
        }
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
          video: {
            resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>resolution</button>
      </div>
      )
  }
}