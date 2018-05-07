import { connect } from 'react-redux'
import { fetchClientList } from './Client-actions'
import Client from './Client-component'

const mapStateToProps = (state, ownProps) => ({
  clientName: state.clientName
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchClientList: () => fetchClientList(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Client)