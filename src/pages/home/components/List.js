//List 组件
import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore }  from '../style.js';

import   { connect } from 'react-redux';//与 store 连接
import {actionCreators} from '../store';
import   { Link } from 'react-router-dom';// 路由



class List extends PureComponent{ //没有 ()
    render(){
        return (
            <div>
            {this.props.list.map(
                (item, index)=>{ 
                    return(
                        <Link key= { index } to={'./detail?id='+ item.get('id') }>
                        <ListItem >
                            <img className='list_pic' src= {item.get('imgUrl')}  alt="mask"/>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                        </Link>
                    )
                }
            )}
            <LoadMore onClick= { ()=> this.props.getMoreList(this.props.page) }>更多</LoadMore>
 
            </div>
        );
    }
}
 
//mapState指的是从 store 拿数据
const mapState= (state)=> (//是一个 函数，返回 一个 对象
    {
        list: state.get('home').get('articleList'),
        page: state.get('home').get('acticlePage')
    }
);

const mapDispatch= (dispatch)=> ( 
    {
        getMoreList(page){
            const action= actionCreators.getMoreList(page);
            dispatch(action);

        }
    }
);

export default connect(mapState, mapDispatch)(List);