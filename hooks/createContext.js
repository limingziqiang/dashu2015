import React  from 'react';

//创建context
const numberContext = React.createContext();
//它返回一个具有两个值的对象
//{Provider ， Consumer}
function App(){
  //使用Provider为所有子孙提供value值
  return (
    <numberContext.Provider value={12}>
        <div>
        <ShowAn />
        </div>
    </numberContext.Provider>
  )
}

function ShowAn(){
  //使用Consumer从上下文获取value
  return(
    <numberContext.Consumer>
      {value=><div>the answer is {value}</div>}
    </numberContext.Consumer>
  )
}
export default App;
