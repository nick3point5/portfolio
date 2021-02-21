import React, { Component } from 'react'
import Ticker from './Ticker'

export default class home extends Component {
  state={
    tickers: []
  }

  componentDidMount(){
    fetch('http://localhost:4000')
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        this.setState({
          tickers: data
        });
      })
  }
  render() {
    const title = this.state.tickers[0] ? this.state.tickers[0].title: ''
    const count = this.state.tickers[0] ? this.state.tickers[0].count: ''
    const lastTick = this.state.tickers[0] ? new Date(this.state.tickers[0].lastTick)+'': ''
    const _id = this.state.tickers[0] ? this.state.tickers[0]._id: ''
    const obj ={
      title,
      count,
      lastTick,
      _id
    }
    
    return (
      <>
        <Ticker 
          obj={obj}
        />
      </>
    )
  }
}
