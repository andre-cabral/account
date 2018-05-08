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
  return fetch('http://localhost:3333/clients')
    .then(response => response.json())
    .then(json => dispatch(setClientList({
      type: 'FETCH_CLIENT_LIST', payload: json
    })));
}

export function updateClientList(dispatch, payload, id) {
  return fetch(`http://localhost:3333/clients/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: 'UPDATED_CLIENT_LIST', payload: payload
  }));
}

export function updateClientName(dispatch, client, name, id) { 
  
  console.log(name)
  const newClient = {
    ...client,
    name    
  };
  console.log(newClient)
  if(client){
    updateClientList(dispatch, newClient, id);
  }
}