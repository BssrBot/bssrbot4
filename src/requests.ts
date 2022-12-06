import request, { HttpVerb } from 'sync-request';
import { port, url } from './config.json';
const SERVER_URL = `${url}:${port}`;

function requestHelper(method: HttpVerb, path: string, payload: object, headerPayload?: object) {
  let qs = {};
  let json = {};
  let headers = {};
  headers = headerPayload;
  if (['GET', 'DELETE'].includes(method)) {
		// GET/DELETE
    qs = payload;
  } else {
    // PUT/POST
    json = payload;
  }
  const res = request(method, SERVER_URL + path, { qs, json, headers });
  return {
    ret: JSON.parse(res.body as string),
    status: res.statusCode
  };
}




