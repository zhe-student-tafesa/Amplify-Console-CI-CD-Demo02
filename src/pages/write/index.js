import React, { PureComponent } from 'react';
import   { connect } from 'react-redux';
//import { actionCreators}  from './store';

//引入 重定向
import { Navigate } from 'react-router-dom';
import cookie from 'react-cookies';//  张哲 1月12

 


class Write extends PureComponent{ //没有 ()
    render(){
        //console.log(window.location.search.substr(4));// 看 路由
        const { loginStatus }=this.props;
        if(loginStatus   ||cookie.load('bfcUser')   ){
            //console.log("login");
            return (
                <div>
                    Start writing......
                </div>
            );
        }else{
            return <Navigate to='/login'/>
        }

    }
    componentDidMount(){
       

    }
}


const mapState=(state)=>({// 把登录 状态拿出来
    loginStatus: state.getIn(['login','login'])
});






/// export default Detail;
export default connect(mapState,null)(Write);