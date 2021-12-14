import React, { PureComponent } from 'react';

import   { connect } from 'react-redux';
import List  from './components/List.js';
import  Recommend  from './components/Recommend.js';
import Topic  from './components/Topic.js';
import Writer  from './components/Writer.js';
import { actionCreators}  from './store';
//import axios from 'axios';
import { HomeWrapper,
         HomeLeft,
         HomeRight ,
         BackTop
} from './style.js'

class Home extends PureComponent{ //没有 ()
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>  
                    <img className= 'banner-img' src="https://learn.tafesa.edu.au/pluginfile.php/895153/theme_snap/coverimage/1598248446/course-image.jpg" alt="flo"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                
                {this.props.showScroll? <BackTop onClick= {this.handleScrollTop}>回到顶部</BackTop>: null}
            </HomeWrapper>
        );
    }
    componentDidMount(){// 发送 AJAX请求
        this.props.change_home_data();
        this.bindEvents();// 绑定 一些 事件 

    }
    //事件 解绑 //事件 解绑
    componentWillUnmount(){ 
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }


    bindEvents(){// 监听 Window scroll 事件,发生时 调用 changeScrollTopShow
        window.addEventListener('scroll', this.props.changeScrollTopShow);

    }
   

    handleScrollTop(){
        window.scrollTo(0,0);// 左侧 是0，顶部是 0
    }
}

const mapState= (state)=> {//   参数是state
    return {
        showScroll: state.getIn(['home','showScroll'])
    };
}

const mapDispatch= (dispatch)=> {
    return {
        change_home_data(){
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScrollTopShow(){
            //console.log(e);
            if(document.documentElement.scrollTop> 100){// y方向 大于400时 显示
                const action1 = actionCreators.toggleTopShow(true);
                dispatch(action1);

            }else{
                const action2 = actionCreators.toggleTopShow(false);
                dispatch(action2);

            }
        }

    };

}
export default connect(mapState,mapDispatch)(Home);
