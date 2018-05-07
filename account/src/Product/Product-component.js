import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProductList();
  }

  render() {
    return (
      <div className="product">
        <p className="product-name">

        </p>
      </div>
    );
  }
}

export default Product;
