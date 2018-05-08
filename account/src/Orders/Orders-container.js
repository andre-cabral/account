import { connect } from 'react-redux';
import { path } from 'ramda';
import { getOrdersByClientId } from '../Client/Client-helpers';
import Orders from './Orders-component';

const mapStateToProps = (state, ownProps) => ({
  orders: getOrdersByClientId(state, path(['match', 'params', 'id'], ownProps))
})

export default connect(
  mapStateToProps,
)(Orders)