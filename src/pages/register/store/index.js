// index.js是这个 文件夹的接口（出口）

import reducer from './reducer';

import * as actionCreators from './actionCreators.js';

import * as constants from './constants.js';

//12/21  开始
import {createStore } from 'redux';

const store =createStore(reducer);
export  default store;
//12/21 结束

export {   reducer, actionCreators } ;