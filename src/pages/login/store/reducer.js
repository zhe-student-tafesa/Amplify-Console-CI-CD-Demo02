///reducer.js
import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
//fromJS功能：把js对象转成immutable 对象


//reducer.js
const defaultState = fromJS({ //list 保存 搜索AJAX数据   fromJS把普通对象转成 immutable,默认未登录
    login: false
    


});

export default (state= defaultState, action)=>{//纯 函数
 
    if(action.type=== constants.CHANGE_LOGIN){// 
        return state.merge({
            login: fromJS(action.login)
        });
    }
    //constants.LOGOUT
    if(action.type=== constants.LOGOUT){// 
        return state.merge({
            login: fromJS(action.login)
        });
    }
    return state;
};

