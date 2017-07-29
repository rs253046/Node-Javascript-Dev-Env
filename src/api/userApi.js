import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
export function getUser() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

const baseUrl = getBaseUrl();

function get(url) {
  console.info('url', url);
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.info(error); //eslint-disable-line no-console
}
