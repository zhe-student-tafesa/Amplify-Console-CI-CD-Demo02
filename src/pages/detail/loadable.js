//loadable.js
import Loadable from 'react-loadable';
import React from 'react';
 

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return <div>正在 加载</div>
  }
});

export default ()=> <LoadableComponent/>