import { path } from 'ramda'

function setProductList(action) {
  return {
    type: 'FETCH_PRODUCT_LIST',
    payload: action.payload
  }
}

export function fetchProductList(dispatch) {
  return fetch('/products.json')
    .then(response => response.json())
    .then(json => dispatch(setProductList({
      type: 'FETCH_PRODUCT_LIST', payload: path(['products'], json)
    })));
}