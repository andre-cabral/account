import React, { Component } from 'react';
import { pathOr } from 'ramda';

class Client extends Component {
  render() {
    const name = pathOr('', ['name'], this.props.client);
    console.log(pathOr('', ['name'], this.props.client))
    return (
      <div className="client">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Nome:
            <input key={name === ''} type="text" ref="clientName" defaultValue={pathOr('', ['name'], this.props.client)} />
          </label>
          <input type="submit" value="Atualizar" />
        </form>
      </div>
    );
  }

  handleSubmit(evt) {
    this.props.updateClientName(this.props.client, this.refs.clientName.value);
    evt.preventDefault();
  }
}

export default Client;
