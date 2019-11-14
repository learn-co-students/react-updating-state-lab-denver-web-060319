import React, { Component } from 'react';

export default class Digital extends Component {
    state = {
        timesClicked: 0,
    }
    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
    // handleClick = () => {
    //     this.setState(previousState => {
    //         return {
    //             timesClicked: previousState.timesClicked + 1
    //         }
    //     })
    // }
    render() {
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
}