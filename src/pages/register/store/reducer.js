///reducer.js
import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
//fromJS功能：把js对象转成immutable 对象object


//reducer.js
const defaultState = { //list 保存 搜索AJAX数据   fromJS把普通对象转成 immutable,默认未登录
    reg_state: false,
    message: ''
    


};

export default (state= defaultState, action)=>{//纯 函数
 
    if(action.type=== 'CHANGE_REG'){// 
        //console.log(action);
        const newState= JSON.parse(JSON.stringify(state));
        //console.log(action.reg_state);
        newState.reg_state= action.reg_state;
        newState.message= action.message;
        //console.log(newState);
        return (newState);
        // return state.merge({
        //     reg_state:  (action.reg_state),
        //     message:  (action.message)
        // });
    }

    return state;
};

