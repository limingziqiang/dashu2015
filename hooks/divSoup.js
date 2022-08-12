const Wrapper = (props) => {
  return props.children;
}

// 带有 Wrapper 组件的 Children
// 每个 React JSX 元素都接收 props 参数
const Child1 = (props) => (
  <Wrapper>
    <h3>I am child 1</h3>
    {/* 在 <Child1> 和 </Child1> 之间传递的任何内容 */}
    {props.children}
  </Wrapper>
);
const Child2 =  (props) => (
  <Wrapper>
    <h3>I am child 2</h3>
    {props.children}
  </Wrapper>
);
const Child3 = (props) => (
  <Wrapper>
    <h3>I am child 3</h3>
    {props.children}
  </Wrapper>
);
const Child4 = () => (
  <Wrapper>
    <h3>I am child 4</h3>
  </Wrapper>
);

// 带有 Wrapper 组件的 Parent
return (
    <Wrapper>
      <h1>This is heading</h1>
      <h2>This is a sub-heading</h2>
      <Child1>
        <Child2>
          <Child3>
            <Child4/>  
          </Child3>
        </Child2>
      </Child1>
    </Wrapper>
  )
