import React, { Component } from 'react'
import Ticker from './Ticker'
import NewForm from './NewForm'

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

  handleChange=(event)=>{
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleNew=(event)=>{
    event.preventDefault();
    const obj = {
      title: this.state.title,
      count: 0
    }
    
    fetch(`http://localhost:4000/`,{
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          obj
        ),
      })
        .then(res=>{
          return res.json();
        })
        .then(data=>{
          const newState = this.state.tickers
          newState.push(data)
          console.log(newState);
          
          this.setState(
            newState
          );
        })
        .catch((err) => console.log(err));
  }

  handleCounter=(obj,pointer,increment)=>{
    const newCount =  obj.count+increment
    const updateObj = {
      ...obj,
      count: newCount
    }
    

    fetch(`http://localhost:4000/${obj._id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        updateObj
      ),
    })
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        const newState = this.state.tickers
        newState[pointer]=updateObj
        this.setState({
          tickers: newState
        });
      })
      .catch((err) => console.log(err));
  }

  handleDelete=(obj,pointer)=>{
    fetch(`http://localhost:4000/${obj._id}`,{
      method: 'DELETE'
    })
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        const newState = this.state.tickers.filter(ticker=>ticker._id !== obj._id)
        this.setState({
          tickers: newState
        });
      })
  }

  render() {
    const getObj=(i)=>{
      const title = this.state.tickers[i] ? this.state.tickers[i].title: ''
      const count = this.state.tickers[i] ? this.state.tickers[i].count: ''
      const _id = this.state.tickers[i] ? this.state.tickers[i]._id: ''
      return {
        title,
        count,
        _id
      }
    }

    const counterFunc = {
        counter: this.handleCounter,
        delete: this.handleDelete
    }

    const newFunc ={
      handleNew: this.handleNew,
      handleChange: this.handleChange
    }

    
    return (
      <>
        <NewForm 
          func = {newFunc}
        />
        {this.state.tickers.map((ticker,i)=>{
          const obj = getObj(i)
          return  (
            <Ticker
              pointer={i}
              obj={obj}
              func={counterFunc}
            />
          )
        })}
      </>
    )
  }
}
