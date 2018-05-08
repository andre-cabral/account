import { pathOr } from 'ramda';

export function getProductById (state, id) {
  const productList = pathOr([], ['product', 'productList'], state);
  return productList.find(function(element) {
    return element.id === id;
  });
}