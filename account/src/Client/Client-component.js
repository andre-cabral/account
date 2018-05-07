import React, { Component } from 'react';

class Client extends Component {
  render() {
    return (
      <div className="client">
        <p className="client-name">
          { this.props.clientName }
        </p>
      </div>
    );
  }
}

export default Client;
