import React, { Component } from 'react'

export class ticker extends Component {
  
  
  render() {
    return (
      <div>
        <h1>{this.props.obj.title}</h1>
        <h2>{this.props.obj.count}</h2>
        <button onClick={()=>{this.props.func.counter(this.props.obj,this.props.pointer,1)}}>+1</button>
        <button onClick={()=>{this.props.func.counter(this.props.obj,this.props.pointer,-1)}}>-1</button>
        <button onClick={()=>{this.props.func.delete(this.props.obj,this.props.pointer)}}>Delete</button>
      </div>
    )
  }
}

export default ticker
