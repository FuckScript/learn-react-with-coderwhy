import store from './store/index.js';

import {
  addAction,
  subAction,
  incAction,
  decAction
} from './store/actionCreators.js';

// 使用node运行index.js就可以看到下面的打印输出
// 打印的时机是每次action被触发的时候
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addAction(10));
store.dispatch(addAction(15));
store.dispatch(subAction(8));
store.dispatch(subAction(5));
store.dispatch(incAction());
store.dispatch(decAction());

