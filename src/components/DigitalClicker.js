// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0,
        };
    }

    increment = () => {
       this.setState(times =>({
           timesClicked: times.timesClicked+1
       }))
    }

    render(){
        return (
            <div className = "digital-clicker">
                <button onClick = {this.increment}>{this.state.timesClicked}</button>
            </div>
        )
    }
}