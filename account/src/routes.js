import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import App from './App/App-container';
import Product from './Product/Product-container';
import AddressList from './AddressList/AddressList-container'

export default props => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/product" component={Product} />
      <Route path="/address" component={AddressList} />
    </div>
  </BrowserRouter>
)