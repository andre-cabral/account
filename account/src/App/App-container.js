import { connect } from 'react-redux'
import { pathOr } from 'ramda';
import { getClientById } from '../Client/Client-helpers';
import { fetchClientList } from '../Client/Client-actions'
import { fetchProductList } from '../Product/Product-actions'
import App from './App-component'

const mapStateToProps = (state, ownProps) => ({
  client: getClientById(state, pathOr('', ['match', 'params', 'id'], ownProps)),
  clientId: pathOr('', ['match', 'params', 'id'], ownProps),
  clientList: pathOr([], ['client', 'clientList'], state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchClientList: () => fetchClientList(dispatch),
  fetchProductList: () => fetchProductList(dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)