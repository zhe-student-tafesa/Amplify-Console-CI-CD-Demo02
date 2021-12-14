import axios from 'axios';
//import { fromJS } from 'immutable';

//constants
import * as constants from './constants.js';//

const changeDetailData= (result)=> ({//通过 第二个 action 把 类型和数据 传给 reducer
    
    type: constants.CHANGE_DETAIL_DATA ,
    title: result.title ,
    content: result.content 
});

//change_detail_data  异步操作 第一个 action
export const  get_detail_data= (id)=> {
    return (dispatch)=> {
        axios.get('/api/detail.json?id=' + id).then(
                                        (res)=> {
                                            const result=res.data.data;
                                            //console.log(res.data.data);

                                            //拿到数据 后，再发一个 action（ 第二个action ）
                                            const action= changeDetailData(result);
                                            dispatch(action);
                                        }
        )
    };
};