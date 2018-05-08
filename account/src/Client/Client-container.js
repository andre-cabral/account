import { connect } from 'react-redux'
import { fetchClientList } from './Client-actions'
import Client from './Client-component'

const mapStateToProps = (state, ownProps) => ({
  clientList: state.clientList
})

export default connect(
  mapStateToProps
)(Client)