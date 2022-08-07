import redux from 'redux';

import reducer from './reducer.js';

// 创建store时必须传入reducer对象
const store = redux.createStore(reducer);

export default store;
