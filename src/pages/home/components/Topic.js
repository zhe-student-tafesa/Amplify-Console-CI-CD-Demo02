//组件Topic.js
import React, { PureComponent } from 'react';

import   { connect } from 'react-redux';//与 store 连接
//TopicWrapper
import { TopicWrapper,TopicItem }  from '../style.js';

class Topic extends PureComponent{ //没有 ()
    render(){
        return (
            <TopicWrapper>
                {this.props.list.map(
                    (item)=> {
                        return(
                            <TopicItem key= {item.get('id')}>
                                <img 
                                    src= {item.get('imgUrl')} alt="migrants"
                                    className= 'topic-pic'
                                />
                                {item.get('title')}
                            </TopicItem>
                        );
                    }
                )}
            </TopicWrapper>
        );
    }
}

//mapState指的是从 store 拿数据
const mapState= (state)=> (//是一个 函数，返回 一个 对象
    {
        list: state.get('home').get('topicList')
    }
);

export default connect(mapState, null)(Topic);