import React, { Component } from 'react';

export default class SimpleComponent extends Component{

    constructor(){
        super()
        this.state={
            mood : "happy"
        }
    }

    handleClick = () => {
        let moodType = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: moodType
        })
    }

    render() {
            return (
                <div onClick={this.handleClick}>{this.state.mood}</div>
            )
        }
}
