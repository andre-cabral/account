import { pathOr } from 'ramda';

export function getClientById (state, id) {
  const clientList = pathOr([], ['client', 'clientList'], state);

  return clientList.find(function(element) {
    return element.id === id;
  });
}

export function getAddressByClientId (state, id) {
  const clientList = pathOr([], ['client', 'clientList'], state);

  const client = clientList.find(function(element) {
    return element.id === id;
  });

  return pathOr([], ['addresses'], client);
}

export function getOrdersByClientId (state, id) {
  const clientList = pathOr([], ['client', 'clientList'], state);

  const client = clientList.find(function(element) {
    return element.id === id;
  });

  return pathOr([], ['orders'], client);
}

export function getWishlistByClientId (state, id) {
  const clientList = pathOr([], ['client', 'clientList'], state);

  const client = clientList.find(function(element) {
    return element.id === id;
  });

  return pathOr([], ['wishlistProductsIds'], client);
}