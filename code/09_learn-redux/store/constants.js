export const ADD_NUMBER = "ADD_NUMBER";
export const SUB_NUMBER = "SUB_NUMBER";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";


/* 
为什么还要特地弄一个constants.js文件来管理呢？
其实和我在做图片缓存的时候很像，同一个变量名称在多个地方被调用，每当我觉得这个变量名称不是很合理时，我会修改，
但是一改，就得全文搜索看下都有哪些地方调用了，然后一个个替换。
类似的，ADD_NUMBER在2个地方被调用了，一个是在reducer.js里，一个是在actionCreatos.js里，
所以项目上要是有这种多个地方调用的，最好是有一个常量文件来统一管理
*/