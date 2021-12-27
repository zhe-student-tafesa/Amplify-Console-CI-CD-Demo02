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
        ButtonBig,
        Lable


} from './style';


class Register extends PureComponent{ //no ()
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.register=this.register.bind(this);
        this.loginNow= this.loginNow.bind(this);
        this.validateErrors= this.validateErrors.bind(this);
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
                        
                        
                        <Input placeholder="First Name" ref= {(input)=> {this.firstName= input}}
                        />

                        <Input placeholder="Last Name"  ref= {(input)=> {this.lastName= input}}/>

                        <Input placeholder="Email"      ref= {(input)=> {this.email= input}}
                            id="email"              
                            type= 'email'
                            title="                   email:me@example.com" 
                            pattern="^\w{3,}(\.\w{0,}){0,}@[A-z0-9]{1,}\.[A-z]{2,5}(\.[A-z]{2,5}){0,1}$" required
                            name="email"
                            
                            onBlur={()=>{this.validateErrors('email','emailError')}}
                        />
                        <span id="emailError" style={{display:'none'}} > </span>


                        <Input placeholder="Phone"      ref= {(input)=> {this.phone= input}}/>
               

                        <Input placeholder="Password"     
                                id="password"              
                                ref= {(input)=> {this.password= input}} type= 'password'
                                title="at least eight symbols containing at least one number, one lower, and one upper letter" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
                                name="password"
                                
                                onBlur={()=>{this.validateErrors('password','passwordError')}}
                        />
                        <span id="passwordError" style={{display:'none'}} > </span>


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
    validateErrors(formField, errorField) {
        const theField = document.getElementById(formField);
        //create a variable for the form field 
        const theError = document.getElementById(errorField);
        //create a variable for the error field 


        var thePattern = new RegExp("^" + theField.pattern + "$"); //////////正则表达式
        //create a new pattern by reading in pattern from HTML and adding delimiters 
        if (!thePattern.test(theField.value)) { //如果 不合法
          //test data in field against regex pattern from HTML 
          theField.style.background = '#FF9999';
          //sets field background to red 
          theError.style.display = "block";
          //displays the <span> containing the error msg 
          theError.innerHTML = theField.title;
          //displays the error message by reading the HTML title and writing it to the 
          //span 
          theField.focus();
          //set focus to field 
          return false;
        } else { //如果  合法
          theField.style.background = '#CCFFCC';
          //sets field background to green

          theError.style.display = "none";
          //removes error message 
          return true;
        }
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