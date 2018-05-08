import React, { Component } from 'react';
import { pathOr } from 'ramda';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <p className="product-name">
          { pathOr('', ['name'], this.props.product) }
        </p>
        <p className="product-description">
          { pathOr('', ['description'], this.props.product) }
        </p>
        {  pathOr([], ['imagesUrls'], this.props.product).map( imageUrl => {
          return (
            <img src={imageUrl} alt={pathOr('', ['name'], this.props.product)} />
          )
        } ) }
      </div>
    );
  }
}

export default Product;
