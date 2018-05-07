import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Client from '../Client/Client-container'

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchClientList();
    this.props.fetchProductList();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
      </div>
    );
  }
}

export default App;
