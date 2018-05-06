const initialState = {
  clientName: ''
}

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT_NAME':
      return Object.assign({}, state, {
        clientName: action.clientName
      })
    default:
      return state
  }
}

export default ClientReducer