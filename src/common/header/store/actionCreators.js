//actionCreators.js
import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法

const changeList = (data)=>({//内部 用，不需要导出
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil( data.length/ 10)
});

export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type: constants.SEARCH_BLUR
});

//mouseEnter
export const mouseEnter = ()=>({
    type: constants.MOUSE_ENTER
});

//mouseEnter
export const mouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
});

//changePage
export const changePage = (page)=>({
    type: constants.CHANGE_PAGE,
    page: page
});
// logout
// export const logout = ()=>({
//     type: constants.LOGOUT,
//     login: false
// });



//使用 thunk 可以 返回 一个 函数 ，函数里发送 异步请求
export const getList = ()=>{
    //console.log('123');
    return (dispatch)=>{
        axios.get('./api/headerList.json')
        .then(
            (res)=> {
                        //console.log(res.data)
                        const data = res.data;
                        const action= changeList(data.data);
                        dispatch(action);


                    }
         )
        .catch(
            ()=> {console.log('加载失败， 请刷新 重试');}
         )

    };
};