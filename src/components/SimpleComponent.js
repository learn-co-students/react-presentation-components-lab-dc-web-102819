// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {

	constructor() {
		super()
		this.state = {
			mood: 'happy'
		}
	}

	updateMood = () => {

		let newMood = (this.state.mood === 'happy' ? 'sad' : 'happy')

		this.setState({
			mood: newMood
			})
		
	}
	render() {
		return <div onClick={this.updateMood}>{this.state.mood}</div>
	}
}