// index.js是这个 文件夹的接口（出口）
import reducer from './reducer';

//actionCreators.js
import * as actionCreators from './actionCreators.js';

//constants
import * as constants from './constants.js';

export { reducer, actionCreators } ;
