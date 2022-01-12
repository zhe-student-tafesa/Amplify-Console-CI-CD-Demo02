import React,{ Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store  from './store/index.js';// 为了 使用 redux
import { Provider } from 'react-redux';///Provider 把 store 提供给 他的 子元素

import Home  from './pages/home/index.js';
//import Detail  from './pages/detail/index.js';同步
import Detail  from './pages/detail/loadable.js';//异步 加载
import Login  from './pages/login/index.js';
import Write  from './pages/write/index.js';
import Register  from './pages/register/index.js';//register

//import {connect}  from 'react-redux';//使用connect 连接 store与 todolist
import  { GlobalStyle } from './style.js';   //import GlobalStyle
import  { GlobalStyleIcon } from './statics/iconfont/iconfont.js';   //导入GlobalStyle  <GlobalStyleIcon/>
import Header  from './common/header/index.js';
import cookie from 'react-cookies';//  张哲 1月12

class App extends Component{
  constructor(props){
      super(props);//调用父类的构造函数  inputValue:'',//保存输入  list[]//保存TODOlist
      //通过bind(this)对 函数的指向做一个修改

      this.readCookie=this.readCookie.bind(this);/////1111111111111在构造函数 绑定this


  }


  render(){
    return (
      <div className="App">
          <GlobalStyle/>
          <GlobalStyleIcon/>
          <Provider store = { store }>
            <div>
            <Header/>
            
              <Routes>
                <Route path='/'       exact element={<Home />}    /> 
                <Route path='/detail' exact element={<Detail />}  />  
                <Route path='/login'  exact element={<Login />}  /> 
                <Route path='/write'  exact element={<Write />}  />  
                <Route path='/register'  exact element={<Register />}  />  
              </Routes>
            
            </div>
          </Provider>
      </div>
    );

  }

  readCookie(){ 
    cookie.load('bfcUser');
    
  }
}


export default App;
