// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {
    constructor() {
        super()
        this.state = {mood: 'happy'}
    }

    handleClick = () => {
        const inverse = { 'happy' : 'sad', 'sad' : 'happy'}
        this.setState({mood: inverse[this.state.mood]})
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }

}
