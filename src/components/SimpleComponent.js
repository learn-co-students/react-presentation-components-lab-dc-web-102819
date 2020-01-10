import React from 'react'

class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    // let mood = 
    this.setState({mood: this.state.mood === 'happy' ? 'sad' : 'happy' })
  }
  render(){
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponent
