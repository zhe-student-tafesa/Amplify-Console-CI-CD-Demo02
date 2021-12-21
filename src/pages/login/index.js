import React, { PureComponent } from 'react';
import   { connect } from 'react-redux';
import { actionCreators}  from './store';

//引入 重定向
import { Navigate } from 'react-router-dom';

import {LoginWrapper,
        LoginBox,
        Input,
        Button,
        ButtonBig


} from './style';


class Login extends PureComponent{ //no ()
    render(){
        //console.log(window.location.search.substr(4));// 看 路由
        const { loginStatus, loginMessage }=this.props;
        if(!loginStatus){
            //console.log("login");
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="User Name" ref= {(input)=> {this.account= input}}/>
                        <Input placeholder="Password" ref= {(input)=> {this.password= input}} type= 'password'/>
                        <Button onClick={ ()=>{this.props.login(this.account,this.password)}}>Login</Button>
                        
                        {loginMessage? <ButtonBig className='active' >{loginMessage}</ButtonBig>: 
                             null }


                        <Button onClick={ ()=>{window.location.href="/register"} }>Register</Button>
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
    loginStatus: state.getIn(['login','login']),
    loginMessage: state.getIn(['login','message'])
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