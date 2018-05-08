import React, { Component } from 'react';
import { pathOr } from 'ramda';
import logo from '../logo.svg';
import './App.css';

class AppNoId extends Component {
  constructor(props) {
    super(props);
    this.props.fetchClientList();
    this.props.fetchProductList();  
  }

  render() {
    const noClientId = this.props.clientId === '';
    console.log( this.props.clientId )
    console.log(this.props.ownProps)
    if (noClientId) {
      return (
        <div key={noClientId} className="App">
          <header className="App-top">
            <img src={logo} className="App-logo" alt="logo" />
            {this.props.clientList.map( (client, index) => {
              return (
                <div key={`userselect${index}`} >
                  <h1>
                    <a href={`/${pathOr('', ['id'], client)}/address/`}>{pathOr('', ['name'], client)}</a>
                  </h1>
                </div>
              );
            } )}
          </header>
        </div>
      );
    }

    return(
      <div></div>
    );
  }
}

export default AppNoId;
