// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{
  constructor(){
    super()
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


  changeBitrate = () => {
    // let updatedState = this.state;
    // updatedState.settings.bitrate = 12;
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
      // updatedState
    })
  }

  changeResolution = () => {
    // let updatedState = this.state;
    // updatedState.settings.video.resolution = "720p"
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
      // updatedState
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}