///reducer.js
import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
//fromJS功能：把js对象转成immutable 对象


//reducer.js
const defaultState = fromJS({ //list 保存 搜索AJAX数据
    focused : false,
    mouseIn : false,
    list:[],
    page: 1,
    totalPage:1

});

export default (state= defaultState, action)=>{//纯 函数
    //input_focus
    if(action.type=== constants.SEARCH_FOCUS){
        // const newState=JSON.parse(JSON.stringify(state));
        // newState.focused=true;
        // return newState; 
        //*****immutable对象的set方法，会结合之前immutable对象的值
        //***和设置的值，返回一个 全新的对象
        return state.set('focused', true);
    }
    if(action.type=== constants.SEARCH_BLUR){
        // const newState=JSON.parse(JSON.stringify(state));
        // newState.focused=false;
        // return newState;
        return state.set('focused', false);
    }
    if(action.type=== constants.CHANGE_LIST){// AJAX 成功
        // const newState=JSON.parse(JSON.stringify(state));
        // newState.focused=false;
        // return newState;
        //console.log('test');
        return state.set('list', action.data).set('totalPage', action.totalPage);//保存  AJAX的数据到 state.list（都是immutable）
    }
    if(action.type=== constants.MOUSE_ENTER){// 
        return state.set('mouseIn', true);//
    }
    if(action.type=== constants.MOUSE_LEAVE){// 
        return state.set('mouseIn', false);//
    }
    //constants.CHANGE_PAGE
    if(action.type=== constants.CHANGE_PAGE){// 
        return state.set('page', action.page);//action.page是新页码
    }

    return state;
};

