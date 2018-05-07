import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import App from './App/App-container';
import Product from './Product/Product-container';
import AddressList from './AddressList/AddressList-container'

export default props => (
  <BrowserRouter>
    <div>
      <Route path="/:id" component={App} />
      <Route path="/product" component={Product} />
      <Route path="/:id/address" component={AddressList} />
    </div>
  </BrowserRouter>
)