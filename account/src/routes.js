import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import AppNoId from './App/AppNoId-container';
import App from './App/App-container';
import AddressList from './AddressList/AddressList-container'
import Client from './Client/Client-container'
import Orders from './Orders/Orders-container'
import Wishlist from './Wishlist/Wishlist-container'

export default props => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={AppNoId} />
      <Route path="/:id" component={App} />
      <Route path="/:id/address" component={AddressList} />
      <Route path="/:id/client" component={Client} />
      <Route path="/:id/orders" component={Orders} />
      <Route path="/:id/wishlist" component={Wishlist} />
    </div>
  </BrowserRouter>
)