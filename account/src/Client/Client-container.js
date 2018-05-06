import { connect } from 'react-redux'
import { setClientName } from './Client-actions'
import Client from './Client-component'

const mapStateToProps = (state, ownProps) => ({
  clientName: state.clientName
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setClientName: (clientName) => dispatch(setClientName(clientName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Client)