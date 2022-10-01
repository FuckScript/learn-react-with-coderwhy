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



/* 
09_learn_redux这个文件夹应该这么来读：
首先是仅看basic_index.js文件，这个文件是简单将redux如何使用，但项目上肯定不会把所有store全写在一个文件里，
所以我们在看除了basic_redux.js之外的其它所有文件，根目录下的index.js文件相当于是我们写业务逻辑的地方，
写业务逻辑的地方会用到redux，因此我们导入了store/index.js，
在store文件夹里，首先看index.js，先导入redux，而创建一个createStore必须传入一个reducer，
然后我们看reducer.js，
而由于一个action变量在2个地方使用，所以我们又要有一个常量管理文件constants.js文件，
最后actionCreators.js是什么，它是定义一个箭头函数返回一个action对象


项目上一般redux的结构就是这样，首先有store文件夹，文件夹里有4个文件：
actionCreator.js
constants.js
index.js
reducer.js
*/