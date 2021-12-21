import axios from 'axios';
//import { fromJS } from 'immutable';
import store from './';

//constants
import * as constants from './constants.js';//

const changeLogin= (result)=> ({//通过 第二个 action 把 类型和数据 传给 reducer
    
    type: constants.CHANGE_LOGIN ,
    login:true
});

//register  异步操作 第一个 action   12/21  Frank
export const  register= (firstName, lastName, email  , phone   ,password,rePassword)=> {
    let formData= new FormData();
    let result='';
                    //same with post
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("repassword", rePassword);
    const url="http://localhost:80/5ewd/BFC/register.php";
    //formData.append("text","AAAAABBB");
    //const url="http://localhost:80/react-backend/index2.php";
    //console.log(formData);


    //axios.post(url,formData)
    //return (dispatch)=> {// 应该用post 更安全
        //e.preventDefault();
        axios.post(url,formData)
        .then(res=> {//console.log(res.data);
                    result=res.data;
                    const action= {
                        type:'CHANGE_REG',
                        reg_state: result.success,
                        message:  result.message
                    };
                    
                    store.dispatch(action);
                    
                    })
        .catch(err=> console.log(err))
    //};

    
};

//logout
export const logout = ()=>({
    type: constants.LOGOUT,
    login: false
});