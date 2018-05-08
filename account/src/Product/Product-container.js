import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import Product from './Product-component';
import { getProductById } from './Product-helpers';

const mapStateToProps = (state, ownProps) => ({
  product: getProductById(state, pathOr('', ['id'], ownProps))
})

export default connect(
  mapStateToProps
)(Product)