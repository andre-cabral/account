import { connect } from 'react-redux'
import { fetchClientList } from '../Client/Client-actions'
import { fetchProductList } from '../Product/Product-actions'
import App from './App-component'

const mapStateToProps = (state, ownProps) => ({
  clientName: state.clientName
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchClientList: () => fetchClientList(dispatch),
  fetchProductList: () => fetchProductList(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)