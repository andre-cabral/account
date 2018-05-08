import { connect } from 'react-redux'
import { pathOr } from 'ramda';
import { getClientById } from '../Client/Client-helpers';
import { updateClientName } from './Client-actions'
import Client from './Client-component'

const mapStateToProps = (state, ownProps) => ({
  clientList: state.clientList,
  client: getClientById(state, pathOr('', ['match', 'params', 'id'], ownProps))
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  updateClientName: (client, name) => updateClientName(dispatch, client, name, pathOr('', ['match', 'params', 'id'], ownProps))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Client)