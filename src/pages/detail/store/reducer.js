///reducer.js
import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
//fromJS功能：把js对象转成immutable 对象


//reducer.js
const defaultState = fromJS({ //list 保存 搜索AJAX数据   fromJS把普通对象转成 immutable
    title: '',
    content: ''


});

export default (state= defaultState, action)=>{//纯 函数
    //input_focus
 
   // CHANGE_DETAIL_DATA
    if(action.type=== constants.CHANGE_DETAIL_DATA){// 
        return state.merge({
            title: fromJS(action.title),
            content: fromJS(action.content)
        });
    }

    return state;
};

