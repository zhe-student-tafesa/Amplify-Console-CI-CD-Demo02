import React, { Component } from 'react';

import  { connect } from 'react-redux';
//import  { GlobalStyleIcon } from '../../statics/iconfont/iconfont.js';   //导入GlobalStyleIcon <GlobalStyleIcon/>
//HeaderWrapper，

import { CSSTransition } from 'react-transition-group';
import   { Link } from 'react-router-dom';// 路由

//导入 所有 内容
//import  * as actionCreators  from './store/actionCreators';
import    { actionCreators }  from './store/index.js';
//导入login的actionCreators
import    { actionCreators as loginActionCreators }  from '../../pages/login/store';

import { HeaderWrapper,
         Logo,
         Nav,
         NavItem,
         NavSearch,
         Addition,
         Button,
         SearchWrapper,
         SearchInfo,
         SearchInfoTitle,
         SearchInfoSwitch,
         SearchInfoList,
         SearchInfoItem
       }  from './style.js';



class Header extends Component{
    
              // AJAX的数据项 不能 重复
    getListArea(show){// 定义一个方法，1.决定是否 显示 搜索框， 2.显示 AJAX的数据
        const {page , mouseIn , totalPage, handleChangePage } = this.props;
        const newList= this.props.list.toJS();// 转为普通js对象
        const pageList= [];
        if(newList.length){//防止 初始化 时走 for 循环，此时newList 为空，newList[i]为 undefine
            for(let i= (page-1)*10 ; i<(page-0)*10; i++){
                pageList.push(<SearchInfoItem key= { newList[i] }>{ newList[i] }</SearchInfoItem>)
            }
        }

        if(show || mouseIn){
            return (
                <SearchInfo onMouseEnter= {this.props.handleMouseEnter}
                            onMouseLeave= {this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick= {()=> handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon = icon}}  className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {
                                pageList
                            }
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            );
        }else{
            return null;
        }
    }

    render(){
        //list
        const { list, login, logout } = this.props;
        return(
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {login? <NavItem className='right' onClick={logout}>退出</NavItem>: 
                            <Link to= '/login'><NavItem className='right'>登录</NavItem></Link> }
                    
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={this.props.focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={ this.props.focused? 'focused' : ''}
                                onFocus={  ()=> {this.props.handleInputFocus(list)} }
                                onBlur={ this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={ this.props.focused? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe637;</span>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition> 
                    <Link to='/write'>
                        <Button className='writting'>
                            <span className="iconfont">&#xe708;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>


        );

    }
}

//     // handleInputFocus(){
//     //     //console.log("haha");
//     //     this.setState({
//     //         focused : true
//     //     });
//     // }

//     // handleInputBlur(){
//     //     //console.log("haha");
//     //     this.setState({
//     //         focused : false
//     //     });
//     // }

// }

const mapStateToProps=(state)=>{//由于 拆分 reducer，导致多了一层header.
    return {//因为immutable，所有修改: get('focused')
        focused : state.get('header').get('focused'),//把tate.focused 映射 到Props的 focused上
        list : state.get('header').get('list'),
        page : state.get('header').get('page'),//获取 页码
        totalPage : state.get('header').get('totalPage'),//获取 总页码
        mouseIn : state.get('header').get('mouseIn'),
        login : state.get('login').get('login')//是否登录
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus( list ){
            //console.log('aaa');
            if(list.size=== 0){
                //AJAX
                const action2= actionCreators.getList();// //使用 thunk action可以 返回 一个 函数
                dispatch(action2);

            }
            const action= actionCreators.searchFocus();
            dispatch(action);

        },

        handleInputBlur(){//input_blur
            const action= actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter(){
           const action= actionCreators.mouseEnter();
           dispatch(action); 
        },
        logout(){//点击 退出时 ，需要 用login 的 actionCreators
            const action= loginActionCreators.logout();
            dispatch(action); 
        },
        
        handleMouseLeave(){
           const action= actionCreators.mouseLeave();
           dispatch(action); 
        },
        handleChangePage(page, totalPage, spin){
            //console.log(spin);
            let originalDeg= spin.style.transform.replace(/[^0-9]/ig,'');
            if(originalDeg){
                originalDeg=parseInt(originalDeg,10);
            }else{//第一次0
                originalDeg= 0;
            }

            originalDeg= originalDeg+360;
            spin.style.transform = 'rotate(' + originalDeg + 'deg)';

            if( page< totalPage ){
                const action= actionCreators.changePage(page+1);
                dispatch(action); 
            }else{
                const action= actionCreators.changePage( 1 );
                dispatch(action);    
            }

        }
        
    };
};

export default connect( mapStateToProps , mapDispatchToProps)(Header);