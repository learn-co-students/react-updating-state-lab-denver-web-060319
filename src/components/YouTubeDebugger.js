// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state ={
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

        bitratechanger = () =>{
            this,this.setState({
                settings:{
                    ...this.state.settings, 
                    bitrate: 12
                }
            })
        }

        reschanger = () =>{
            this,this.setState({
                settings:{
                    ...this.state.settings, 
                    video: {
                        ...this.state.settings.video,
                    resolution: '720p'
                    }
                }
            })
        }



    
render(){

    return(
        <div>
            <button onClick = {this.bitratechanger} className = 'bitrate'>change bitrate
            </button>

            <button onClick = {this.reschanger} className = 'resolution'>change resolution
            </button>
        </div>
    )
}
}