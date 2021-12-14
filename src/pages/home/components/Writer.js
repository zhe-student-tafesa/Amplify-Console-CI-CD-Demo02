//组件 Writer 
import React, { PureComponent } from 'react';
import { WriterWrapper  }  from '../style.js';
import   { connect } from 'react-redux';//与 store 连接


class Writer extends PureComponent{ //没有 ()
    render(){
        return (
            <WriterWrapper>
                Advertisement
            </WriterWrapper>
        );
    }
}
export default Writer;