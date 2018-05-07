import React, { Component } from 'react';

class AddressList extends Component {
  render() {
    return (
      <div className="client">
        <p className="client-name">
          { this.props.addresses.map(address => {
            return (
              <p className='address'>{address.address}</p>
            )
          }) }
        </p>
      </div>
    );
  }
}

export default AddressList;
