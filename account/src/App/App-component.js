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
    const name = pathOr('', ['client', 'name'], this.props);
    return (
      <div key={ name === '' } className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{ name }</h1>
          <nav>
            <a className="menu-item" href={`/`} >Trocar de usuário</a>
            <a className="menu-item" href={`/${this.props.clientId}/client`} >Atualizar nome</a>
            <a className="menu-item" href={`/${this.props.clientId}/address`} >Endereços</a>
            <a className="menu-item" href={`/${this.props.clientId}/orders`} >Pedidos</a>
            <a className="menu-item" href={`/${this.props.clientId}/wishlist`} >Lista de desejos</a>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
