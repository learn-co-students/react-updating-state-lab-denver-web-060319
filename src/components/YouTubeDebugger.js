import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p',
                },
            }
        }
    }

    setBitrate = () => {
        this.setState({
            settings: { ...this.state.settings, bitrate: 12},
        })
    }

    setResolution = () => {
        this.setState({
            settings: { ...this.state.settings, video: {
                ...this.state.settings.video, resolution: "720p"}
            },
        })
    }

    render(){
        return(
            <div className="you-tube-debugger">
                <button onClick={this.setBitrate} className="bitrate">Set Bitrate</button>
                <button onClick={this.setResolution} className="resolution">Set Resolution</button>
            </div>
        );
    }
}
