///reducer.js
import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
//fromJS功能：把js对象转成immutable 对象


//reducer.js
const defaultState = fromJS({ //list 保存 搜索AJAX数据   fromJS把普通对象转成 immutable
    topicList:[ ],
    articleList:[ ],
    recommendList:[ ],
    acticlePage: 1,
    showScroll: false

});

export default (state= defaultState, action)=>{//纯 函数
    //input_focus
 
    // change_home_data
    if(action.type=== constants.CHANGE_HOME_DATA){// 
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList)
        });
    }

    //ADD_HOME_LIST
    if(action.type=== constants.ADD_HOME_LIST){//   如何 拼串
        return state.merge({
            
            articleList: state.get('articleList').concat(action.list),
            acticlePage: action.nextPage
        });

        //state.set('articleList', state.get('articleList').concat(action.list) );
    }
    //TOGGLE_TOP_SHOW
    if(action.type=== constants.TOGGLE_TOP_SHOW){//   如何 拼串
        return state.set('showScroll', action.show);
    }




    return state;
};

