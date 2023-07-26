import React, { Component } from 'react'

export class CFunctionClick extends Component {

ClickEvent(){
    console.log("class button clicked")
}

  render() {

    const numbers = this.props.numbers;
    return (
      <button onClick={this.ClickEvent}>click button 2</button>
      
    )
  }
}

export default CFunctionClick