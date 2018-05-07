import { connect } from 'react-redux';
import { path } from 'ramda';
import { getClientById, getAddressByClientId } from '../Client/Client-helpers';
import AddressList from './AddressList-component';

const mapStateToProps = (state, ownProps) => ({
  client: getClientById(state, path(['match', 'params', 'id'], ownProps)),
  addresses: getAddressByClientId(state, path(['match', 'params', 'id'], ownProps))
})

export default connect(
  mapStateToProps,
)(AddressList)