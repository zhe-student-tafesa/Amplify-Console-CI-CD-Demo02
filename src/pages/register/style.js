import styled from 'styled-components';


//给登录界面 一个 背景bg color
export const LoginWrapper= styled.div`
    z-index: 0;//为了 让 搜索 能够 出现 在上 层
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;

    background: #eee;
`;

export const LoginBox= styled.div`
    width: 600px;
    height: 400px;
    margin: 100px auto;// 左右居中
    background: #fff;
    box-shadow: 0 0 8px rgb(0,0,0,0.1);
    padding-top: 20px;
`;


export const Lable= styled.label`
    //display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #777;
    margin: 10px 10px;//Lable

`;

export const Span= styled.span`
    //display: block;
    width: 400px;
    height: 60px;
    text-align:center;//居中显示
    line-height: 30px;
    //padding: 0 10px;
    color: #777;
    margin: 10px auto;//Lable

`;

export const Input= styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #777;
    margin: 10px auto;//Input在 LoginBox中 居中

`;

export const Button= styled.div`
    
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    //padding: 0 10px;
    margin: 15px auto;
    text-align: center;

`;
export const ButtonBig= styled.div`
    
    //width: 330px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    //padding: 0 10px;
    margin: 15px auto;
    text-align: center;
    &.active {background: #fff; 
              color: red;}

`;


