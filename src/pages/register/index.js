import React, { PureComponent } from 'react';
import   { connect } from 'react-redux';
import { actionCreators}  from './store';

import store from './store';

//引入 重定向
import { Navigate } from 'react-router-dom';

import {LoginWrapper,
        LoginBox,
        Input,
        Button,
        ButtonBig


} from './style';


class Register extends PureComponent{ //no ()
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.register=this.register.bind(this);
        this.loginNow= this.loginNow.bind(this);
        //console.log(this.state.get('reg_state'));
        //console.log(this.state.get('message'));
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange(){
        this.setState(store.getState());
        console.log(this.state.reg_state);
        console.log(this.state.message);
    }

    render(){
        //console.log(window.location.search.substr(4));// 看 路由
        //const { loginStatus }=this.props;
        if(true){
            //console.log("login");
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="First Name" ref= {(input)=> {this.firstName= input}}/>
                        <Input placeholder="Last Name"  ref= {(input)=> {this.lastName= input}}/>
                        <Input placeholder="Email"      ref= {(input)=> {this.email= input}}/>
                        <Input placeholder="Phone"      ref= {(input)=> {this.phone= input}}/>
               
                        <Input placeholder="Password"                   ref= {(input)=> {this.password= input}} type= 'password'/>
                        <Input placeholder="Enter the password again"   ref= {(input)=> {this.rePassword= input}} type= 'password'/>
                        <Button onClick={ ()=>{this.register(this.firstName,this.lastName, this.email  , this.phone   ,this.password,this.rePassword)}}>
                            Register
                        </Button>
                        {this.state.reg_state? <ButtonBig   onClick={  ()=>{window.location.href="/login"} }>Registration succeeded, click to log in</ButtonBig>: 
                                                <ButtonBig className=' active'>{this.state.message}</ButtonBig>}
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Navigate to='/'/>
        }

    }
    componentDidMount(){
       

    }
    loginNow(){

    }
    register(firstNameElem, lastNameElem, emailElem  , phoneElem   ,passwordElem,rePasswordElem){
        actionCreators.register(firstNameElem.value,lastNameElem.value, emailElem.value , phoneElem.value ,passwordElem.value , rePasswordElem.value);

    }

}


// const mapState=(state)=>({// 把登录 状态拿出来
//     loginStatus: state.getIn(['login','login'])
// });



// const mapDispatch=(dispatch)=>({
    
//     register(firstNameElem, lastNameElem, emailElem  , phoneElem   ,passwordElem,rePasswordElem){
//         // console.log(firstNameElem.value );
//         // console.log( lastNameElem.value);
//         // console.log( emailElem.value);
//         // console.log(phoneElem.value );
//         // console.log( passwordElem.value);
//         // console.log( rePasswordElem.value);

//         const result= actionCreators.register(firstNameElem.value,lastNameElem.value, emailElem.value , phoneElem.value ,passwordElem.value , rePasswordElem.value);
//         //console.log(result);

//     }
    

    
// });


/// export default Detail;
export default  Register ;