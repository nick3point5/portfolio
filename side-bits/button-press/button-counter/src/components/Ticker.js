import React, { Component } from 'react'

export class ticker extends Component {
  state = this.props.obj;

  handlePlus=()=>{
    const newCount =  +this.state.count+1
    this.setState({
      title: this.state.title,
      count: newCount
    })

    fetch(`http://localhost:4000/${this.props._id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        count: this.state.count
        }),
    })
      .then(res=>{
        console.log(res);
      })
      .catch((err) => console.log(err));
  }



  render() {

    return (
      <div>
        <h1>{this.props.obj.title}</h1>
        <h2>{this.props.obj.count}</h2>
        <h3>{this.props.obj.lastTick}</h3>
        <button onClick={this.handlePlus}>+1</button>
      </div>
    )
  }
}

export default ticker
