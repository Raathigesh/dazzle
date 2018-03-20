/**
 * https://stackoverflow.com/questions/46859048/jest-setuptestframeworkscriptfile-or-setupfiles-es6-syntax
 * https://stackoverflow.com/a/46628165/1290868
 * 
 */

 // setup.js
 import { configure } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 
 configure({ adapter: new Adapter() });