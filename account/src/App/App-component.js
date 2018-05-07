import React, { Component } from 'react';
import { pathOr } from 'ramda';
import logo from '../logo.svg';
import './App.css';

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
          <h1 className="App-title">{ pathOr('', ['client', 'name'], this.props) }</h1>
        </header>
      </div>
    );
  }
}

export default App;
