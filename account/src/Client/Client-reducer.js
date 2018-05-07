const initialState = {
  clientName: ''
}

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT_NAME':
      return {
        ...state, 
        clientName: action.payload
      }
    case 'FETCH_CLIENT_LIST':
      return {
        ...state,
        clientList: action.payload
      }
    default:
      return state
  }
}

export default ClientReducer