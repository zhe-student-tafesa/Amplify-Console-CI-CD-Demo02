//组件Recommend
import React, { PureComponent } from 'react';
import { RecommendItem, RecommendWrapper  }  from '../style.js';

import   { connect } from 'react-redux';//与 store 连接

class Recommend extends PureComponent{ //没有 ()
    render(){
        return (
            <RecommendWrapper>
            {
                this.props.recommendList.map(
                    (item)=>{
                        return (
                            <RecommendItem imgUrl={item.get('imgUrl')} key= { item.get('id')}/>
                        );
                    }
                )
            }

            </RecommendWrapper>
        );
    }
}
//export default Recommend;
//mapState指的是从 store 拿数据
const mapState= (state)=> (//是一个 函数，返回 一个 对象
    {
        recommendList: state.get('home').get('recommendList')
    }
);

export default connect(mapState, null)(Recommend);
