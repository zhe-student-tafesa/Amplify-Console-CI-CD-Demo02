///reducer.js
import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
// fromJS功能：把js对象转成immutable 对象
import cookie from 'react-cookies';//  张哲 1月12

//reducer.js
const defaultState = fromJS({ //list 保存 搜索AJAX数据   fromJS把普通对象转成 immutable,默认未登录
    login: false,
    message:''
    


});

export default (state= defaultState, action)=>{//纯 函数
 
    if(action.type=== constants.CHANGE_LOGIN){// 
        //如果有cookie则设置 login和 登录
        if(cookie.load('bfcUser')){
            return state.merge({
                login: fromJS(action.login),
                message: fromJS(action.message)

            });

        }else{//如果没有cookie，则增加cookie
            cookie.save('bfcUser','perfectTrue',{path:"/"});
            return state.merge({
                login: fromJS(action.login),
                message: fromJS(action.message)

            });

        }
        

    }
    //constants.LOGOUT
    if(action.type=== constants.LOGOUT){// 
        return state.merge({
            login: fromJS(action.login),
            message: fromJS(action.message)
        });
    }
    return state;
};

