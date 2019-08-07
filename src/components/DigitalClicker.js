// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementTimesClicked = () => {
    let newTimesClicked = this.state.timesClicked + 1
    this.setState ({
      timesClicked: newTimesClicked
    })
  }  

  render() {
    return(
      <button id='digitalClicker' onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
    )
  }
}