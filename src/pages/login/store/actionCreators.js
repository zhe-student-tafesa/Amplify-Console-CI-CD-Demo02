import axios from 'axios';
//import { fromJS } from 'immutable';

//constants
import * as constants from './constants.js';//

const changeLogin= (result)=> ({//通过 第二个 action 把 类型和数据 传给 reducer
    
    type: constants.CHANGE_LOGIN ,
    login:true
});

//login  异步操作 第一个 action
export const  login= (account, password)=> {
    return (dispatch)=> {// 应该用post 更安全
        axios.get('/api/login.json?account='+ account+'&password='+ password).then(
                                        (res)=> {
                                            const result=res.data.data;
                                            //console.log(res.data.data);

                                            //拿到数据 后，再发一个 action（ 第二个action ）
                                            //如果 密码ze 修改state里的登录状态
                                            if(result){
                                                const action= changeLogin(result);
                                                dispatch(action);
                                            }else{
                                                console.log('登录失败');
                                            }
                                            
                                        }
        )
    };
};

//logout
export const logout = ()=>({
    type: constants.LOGOUT,
    login: false
});