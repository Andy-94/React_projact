import React, { Component } from 'react';

export default class reduxPage extends Component {
  myRef= React.createRef()
  increment =()=>{
    const value = this.myRef.current.value
    // const number = this.state.number
    // this.setState({number:number+value*1})
    this.props.increment(value*1)
  }
  decrement =()=>{
    const value = this.myRef.current.value
    // const number = this.state.number
    // this.setState({number:number-value*1})
    this.props.decrement(value*1)
  }
  incrementOdd =()=>{
    const value = this.myRef.current.value
    // const number = this.state.number
    // if(number % 2 === 0) return this.setState({number:number+value*1})
    if(this.props.number % 2 === 0) return this.props.increment(value*1)
  }
  incrementAsync =()=>{
    const value = this.myRef.current.value
    // const number = this.state.number
    setTimeout(() => {
      this.props.increment(value*1)
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>This is React-redux example:</h1>
        <h2>当前计数为:{this.props.number}</h2>
        <select ref={this.myRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}