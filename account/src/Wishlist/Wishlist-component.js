import React, { Component } from 'react';
import Product from '../Product/Product-container'

class Wishlist extends Component {
  render() {
    if (this.props.wishlist.length > 0) {
      return (
        <div className="wishlist">
          { this.props.wishlist.map( (id, index) => {
            console.log(id)
            return (
              <Product key={`${index}wishlist-product`} id={id} />
            )
          }) }
        </div>
      );
    }
    return (
      <p className="wishlist-empty">Você não possui produtos na sua lista de desejos.</p>
    );
  }
}

export default Wishlist;
