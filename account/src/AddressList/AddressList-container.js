import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import AddressList from './AddressList-component';

const mapStateToProps = (state, ownProps) => ({
  addresses: pathOr([], ['client', 'clientList', '0', 'addresses'], state)
})

export default connect(
  mapStateToProps,
)(AddressList)