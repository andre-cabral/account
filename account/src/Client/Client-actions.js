import { path } from 'ramda'

export function setClientName(action) {
  return {
    type: 'SET_CLIENT_NAME',
    payload: action.payload
  }
}

function setClientList(action) {
  return {
    type: 'FETCH_CLIENT_LIST',
    payload: action.payload
  }
}

export function fetchClientList(dispatch) {
  return fetch('/clients.json')
    .then(response => response.json())
    .then(json => dispatch(setClientList({
      type: 'FETCH_CLIENT_LIST', payload: path(['clients'], json)
    })));
}
