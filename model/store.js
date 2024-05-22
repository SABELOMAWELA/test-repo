// import {getstate,dispatch}from"./model/store.js";
// import {addTask,changeSort , toggleAdd}from"./model/actions.js"

dispatch(toggleAdd());
dispatch(toggleAdd());
dispatch(toggleAdd());
dispatch(addTask({title: "hello"}));
dispatch(addTask({title: "world"}));
dispatch(ChangeSort({Sorting: "Z-A"}));
dispatch(toggleAdd());

console.log(getState())