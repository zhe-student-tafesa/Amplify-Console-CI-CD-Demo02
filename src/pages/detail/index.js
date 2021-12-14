import React, { PureComponent } from 'react';
import   { connect } from 'react-redux';
import { actionCreators}  from './store';

import {DetailWrapper,
    Header,
    Content

} from './style';


class Detail extends PureComponent{ //没有 ()
    render(){
        //console.log(window.location.search.substr(4));// 看 路由
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML= {{__html: this.props.content}}>

                </Content>
            </DetailWrapper>
        );
    }
    componentDidMount(){
        this.props.get_detail_data(window.location.search.substr(4)); // 哪一页

    }
}


const mapState=(state)=>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});



const mapDispatch=(dispatch)=>({
    get_detail_data(id ){
        const action = actionCreators.get_detail_data(id ); //异步操作 第一个 action
        dispatch(action);

    }
    
});


/// export default Detail;
export default connect(mapState,mapDispatch)(Detail);