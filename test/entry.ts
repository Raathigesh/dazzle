import { jsdom } from 'jsdom';
const globalAny:any = global;
;
globalAny.document = jsdom('<!doctype html><html><body></body></html>');
globalAny.window = document.defaultView;
const windowAny:any = globalAny.window;
globalAny.navigator = globalAny.window.navigator;
windowAny.localStorage = windowAny.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};
