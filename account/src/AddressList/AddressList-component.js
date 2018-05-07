import React, { Component } from 'react';

class AddressList extends Component {
  render() {
    return (
      <div className="address">
        { this.props.addresses.map( (address, index) => {
          return (
            <p key={`${index}address`} className='address-text'>{address.address}</p>
          )
        }) }
      </div>
    );
  }
}

export default AddressList;
