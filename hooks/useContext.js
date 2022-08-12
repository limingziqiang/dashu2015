import React, { createContext, useContext,  useState } from 'react'


// 创造一个上下文
const C = createContext(null);

function App(){
  const [n,setN] = useState(10)
  return(
    // 指定上下文使用范围，使用provider,并传入读数据和写入据
    <C.Provider value={{n,setN}}>
      这是爷爷
      <Baba></Baba>
    </C.Provider>
  )
}

function Baba(){
  return(
    <div>
      这是爸爸
      <Child></Child>
    </div>
  )
}
function Child(){
  // 使用上下文，因为传入的是对象，则接受也应该是对象
  const {n,setN} = useContext(C)
  const add=()=>{
    setN(n=>n+1)
  };
  return(
    <div>
      这是儿子:n:{n}
      <button onClick={add}>+1</button>
    </div>
  )
}

export default App
