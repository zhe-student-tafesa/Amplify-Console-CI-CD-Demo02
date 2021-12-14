// actionCreators.js 放异步的操作
import axios from 'axios';
import { fromJS } from 'immutable';

//constants
import * as constants from './constants.js';//别名 是constants，使用 时：constants.CHANGE_HOME_DATA

//返回 一个 函数形式的 action
const changeHomeData= (result)=> ({
    
    type: constants.CHANGE_HOME_DATA ,
    articleList: result.articleList ,
    recommendList: result.recommendList ,
    topicList: result.topicList 
});

//addHomeList
const addHomeList= (list,nextPage)=> ({//转成 immutable对象
    
    type: constants.ADD_HOME_LIST ,
    list: fromJS(list),
    nextPage: nextPage
});


export const  getHomeInfo= ()=> {
    return (dispatch)=> {
        axios.get('/api/home.json').then(
                                        (res)=> {
                                            const result=res.data.data;
                                            //console.log(res.data.data);
                                            const action= changeHomeData(result);
                                            dispatch(action);
                                        }
        )
    };
};

//getMoreList
export const  getMoreList= (page)=> {
    return (dispatch)=> {
        //console.log("click");
        axios.get('/api/homeList.json?page=' + page).then(
                                        (res)=> {
                                            const result=res.data.data;
                                            //console.log(result);
                                            const action= addHomeList(result, page+1);
                                            dispatch(action);
                                        }
        )
    }

}

//toggleTopShow
export const toggleTopShow= (show)=> ({//转成 immutable对象
    
    type: constants.TOGGLE_TOP_SHOW ,
    show: show
});