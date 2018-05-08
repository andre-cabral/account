import React, { Component } from 'react';
import Product from '../Product/Product-container'

class Orders extends Component {
  render() {
    return (
      <div className="orders">
        { this.props.orders.map( (order, index) => {
          return (
            <div key={`${index}address`} className='orders'>
              <p className='order-date'>{order.date}</p>
              { order.productsIds.map( (id, index) => {
                return (
                  <Product key={`${index}${order.date}product`} id={id} />
                )
              }) }
            </div>
          )
        }) }
      </div>
    );
  }
}

export default Orders;
