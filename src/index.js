import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; //12/09

//import  { GlobalStyle } from './style.js';   //导入GlobalStyle
import App from './App';
//import  { GlobalStyleIcon } from './statics/iconfont/iconfont.js';   //导入GlobalStyleIcon

ReactDOM.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>
    ,document.getElementById('root') );


