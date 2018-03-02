import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from './store'

class App extends Component {
  render() {
    const { state, actions } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{state.count}</p>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
      </div>
    )
  }
}

export default connect(['count'])(App)
