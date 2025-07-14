const loc = document.location;

const urlBase = loc.origin + '/api/v1/';
// Const urlBase = 'http://127.0.0.1:9000/api/v1/';
const urlBaseWebsocket = 'ws://' + loc.host + '/ws/v1/';
// Const urlBaseWebsocket = 'ws://127.0.0.1:9000/ws/v1/';

export {urlBase, urlBaseWebsocket};
