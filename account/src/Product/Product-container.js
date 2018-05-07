import { connect } from 'react-redux'
import { fetchProductList } from './Product-actions'
import Product from './Product-component'

const mapStateToProps = (state, ownProps) => ({
  productList: state.productList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProductList: () => fetchProductList(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)