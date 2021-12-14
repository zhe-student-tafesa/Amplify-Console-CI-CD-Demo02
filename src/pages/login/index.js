import React, { PureComponent } from 'react';
import   { connect } from 'react-redux';
import { actionCreators}  from './store';

//引入 重定向
import { Navigate } from 'react-router-dom';

import {LoginWrapper,
        LoginBox,
        Input,
        Button


} from './style';


class Login extends PureComponent{ //没有 ()
    render(){
        //console.log(window.location.search.substr(4));// 看 路由
        const { loginStatus }=this.props;
        if(!loginStatus){
            //console.log("login");
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref= {(input)=> {this.account= input}}/>
                        <Input placeholder="密码" ref= {(input)=> {this.password= input}} type= 'password'/>
                        <Button onClick={ ()=>{this.props.login(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Navigate to='/'/>
        }

    }
    componentDidMount(){
       

    }
}


const mapState=(state)=>({// 把登录 状态拿出来
    loginStatus: state.getIn(['login','login'])
});



const mapDispatch=(dispatch)=>({
    
    login(accountElem, passwordElem){
        //console.log(accountElem.value );
        //console.log( passwordElem.value);
        const action= actionCreators.login(accountElem.value, passwordElem.value);
        dispatch(action);
    }
    

    
});


/// export default Detail;
export default connect(mapState,mapDispatch)(Login);