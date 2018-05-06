import React, { Component } from 'react';

class Client extends Component {
  componentDidMount() {
    console.log(this.props)
    //this.props.setUserName('test');
  }

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
