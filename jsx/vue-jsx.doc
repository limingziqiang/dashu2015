在vue中使用jsx语法
什么是JSX?
JSX就是Javascript和XML结合的一种格式。React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析.

我为什么要在vue中用JSX?
想折腾一下呗,开玩笑.最开始是因为近期在学习react,在里面体验了一把jsx语法,发现也并没有别人说的很难受的感觉啊,于是就想尝试在vue中也试下,废话不多说,先来用代码来看下两者的区别吧.

ps:vue中大部分场景是不需要用render函数的,还是用模板更简洁直观.

使用template
// item.vue
<template>
 <div>
   <h1 v-if="id===1">
     <slot></slot>
   </h1>
   <h2 v-if="id===2">
     <slot></slot>
   </h2>
   <h3 v-if="id===3">
     <slot></slot>
   </h3>
   <h4 v-if="id===4">
     <slot></slot>
   </h4>
 </div>
</template>

<script>
   export default {
       name: "item",
       props:{
         id:{
           type:Number,
           default:1
         }
       }
   }
</script>
复制代码
item组件中就是接收父组件传过来的id值来显示不同的h标签,v-if可以说用到了"极致",而且写了很多个冗余的slot

使用render函数和jsx
// item.vue
<script>
   export default {
       name: "item",
       props:{
         id:{
           type:Number,
           default:1
         }
       },
     render(){
         const hText=`
                       <h${this.id}>${this.$slots.default[0].text}</h${this.id}>
                     `
       return <div domPropsInnerHTML={hText}></div>
     }
   }
</script>
复制代码
再加上父组件来控制props的值。父组件不做对比还用传统的template格式，

// list.vue
<template>
 <div>
   <h-title :id="id">Hello World</h-title>
   <button @click="next">下一个</button>
 </div>
</template>

<script>
 import Title from './item'

 export default {
   name: "list",
   data() {
     return {
       id:1
     }
   },
   components: {
     "h-title":Title
   },
   methods:{
     next(){
       ++this.id
     }
   }
 }
</script>
复制代码
运行后页面就渲染出了h1 or h2 or h3标签，同时slot也只有一个，点击切换props的值，也会显示不同的h标签。第二种写法虽然不是很直接，但是省去了很多冗余代码，页面一下清爽了很多。

没了v-if,v-for,v-model怎么办？
不要着急，这些指令只是黑魔法，用js很容易实现。

v-if
  render(){
       return (
         <div>
           {this.show?'你帅':'你丑'}
         </div>
       )
     }
复制代码
写三元表达式只能写简单的，那么复杂的还得用if/else

   render(){
        let ifText
        if(this.show){
            ifText=<p>你帅</p>
        }else{
            ifText=<p>你丑</p>
        }
        return (
          <div>
            {ifText}
          </div>
        )
      }

复制代码
v-for
     data(){
        return{
          show:false,
          list:[1,2,3,4]
        }
      },
      render(){
        return (
          <div>
            {this.list.map((v)=>{
              return <p>{v}</p>
            })}
          </div>
        )
      }
复制代码
在jsx中｛｝中间是没办法写if/for语句的只能写表达式，所以就用map来当循环，用三元表达式来当判断了

v-model

最近在帮公司面试招人发现v-model很多人都不知道语法糖是什么？然后有些人说我可以用原生js实现，但是他们竟然不知道在vue中怎么实现，好吧，两个点：传值和监听事件改变值。

    <script>
    export default {
        name: "item",
      data(){
        return{
          show:false,
          list:[1,2,3,4],
          text:'',
        }
      },
      methods:{
        input(e){
          this.text=e.target.value
        }
      },
      render(){
        return (
          <div>
            <input type="text" value={this.text} onInput={this.input}/>
            <p>{this.text}</p>
          </div>
        )
      }
    }
</script>
复制代码
怎么用自定义组件？
很简单，只需要导入进来，不用再在components属性声明了，直接写在jsx中比如

<script>
  import HelloWolrd from './HelloWorld'
    export default {
      name: "item",
      render(){
        return (
            <HelloWolrd/>
        )
      }
    }
</script>
复制代码
事件，class,style,ref等等怎么绑定？
来看下面的写法

render (h) {
  return (
    <div
      // normal attributes or component props.
      id="foo"
      // DOM properties are prefixed with `domProps`
      domPropsInnerHTML="bar"
      // event listeners are prefixed with `on` or `nativeOn`
      onClick={this.clickHandler}
      nativeOnClick={this.nativeClickHandler}
      // other special top-level properties
      class={{ foo: true, bar: false }}
      style={{ color: 'red', fontSize: '14px' }}
      key="key"
      ref="ref"
      // assign the `ref` is used on elements/components with v-for
      refInFor
      slot="slot">
    </div>
  )
}
复制代码
上面有个地方需要注意，当给自定义组件绑定事件时用nativeOnClick,而模板格式是用 @click.native，另外当用到给函数式组件绑定事件时就有点小坑了下面说。

JSX中的函数式组件
函数式组件无状态，无this实例，下面是vue文档中提到的一段话：

因为函数式组件只是一个函数，所以渲染开销也低很多。然而，对持久化实例的缺乏也意味着函数式组件不会出现在 Vue devtools 的组件树里。

我个人理解因为没了状态(data)，少了很多响应式的处理，还有生命周期等过程会提高速度和减少内存占用吧？

函数式组件也可以在模板格式中用只需要这样

<template functional>

</template
复制代码
那jsx中的函数式组件呢？也很简单只需增加配置functional: true就可以了 那函数式组件没有了this 实例怎么绑定事件怎么获取props呢？

组件需要的一切都是通过上下文传递，包括：

props : 提供所有 prop 的对象
children: VNode 子节点的数组
slots: 返回所有插槽的对象的函数
data：传递给组件的数据对象，并将这个组件作为第二个参数传入 createElement
上面我只列举了部分属性，这些是非函数式组件的东西，对于函数式组件 vue 增加了context对象，需要作为render(h,context) 第二个参数传入，this.$slots.default更新为context.children props原本是直接挂在this上的，现在变为context.props挂在了context.props上。this.data变为了context.data

需要注意的是对于函数式组件，没有被定义为prop的特性不会自动添加到组件的根元素上,意思就是需要我们手动添加到组件根元素了，看个例子吧

//父组件
 ...省略无关代码
 render(){
      return (
        <Item data={this.data} class="large"/>
      )
    }
//Item.vue组件
export default {
    functional:true,
      name: "item",
      render(h,context){
        return (
          <div class="red" >
            {context.props.data}
          </div>
        )
      }
    }
复制代码
上面代码期待的是.large类名传入到了Item的根元素上，但是其实没有。我们需要增加点东西

// Item.vue
export default {
    functional:true,
      name: "item",
      render(h,context){
        return (
          <div class="red" {...context.data}>
            {context.props.data}
          </div>
        )
      }
    }
复制代码
注意到，通过展开运算符把所有的属性添加到了根元素上，这个context.data就是你在父组件给子组件增加的属性，他会跟你在子元素根元素的属性智能合并，现在.large类名就传进来了。这个很有用，当你在父组件给子组件绑定事件时就需要这个了。下面说一个关于绑定事件的小坑

向 createElement 通过传入 context.data 作为第二个参数，我们就把 my-functional-button 上面所有的特性和事件监听器都传递下去了。事实上这是非常透明的，那些事件甚至并不要求 .native 修饰符

上面是vue官网的一段话，然而我看了一遍就忽略了一句很重要的话，就是最后一句，他说不需要.native修饰符了？好先看代码

// 父组件
 methods:{
      show(){
        alert('你好')
      }
    },
    render(){
      return (
        <Item data={this.data} onNativeClick={this.show} class="large"/>
      )
    }
复制代码
上面代码乍一看没毛病，自定义组件用onNativeClick嘛，结果就是不会弹窗。唉，最后读了几遍刚才vue文档中的解释，才发现原来函数式组件不需要.native修饰符，对于template格式肯定一下就反应过来了，但是jsx的话，好吧，把上面的onNativeClick重新改为onClick就好了。

现有项目哪些功能可以用jsx代替呢？
这个其实跟最开始我例举的例子很像。我在项目中用它来干掉了满屏的v-if/v-else 由于我的业务是pad上的，需求是一套试卷有几十道题目，要求一屏只显示一道题目，点击下一题显示下一个题，思路也比较简单：

用一个num变量表示当前正在展示的题目索引
每次点击下一题按钮时num++
用v-if来判断 num===1，num===2这样来决定展示哪个。
这一写，模板里面好多啊，由于我们的题目每道题的模板可能都不一样，所以没办法循环，只能手写全部。之前考虑过用动态组件来切换，但是放弃了，因为没有if直观啊。

下面看怎么用jsx优化一下

//父组件
  export default {
    name: "list",
    data() {
      return {
       data:'我是函数式组件',
        id:1,
         tests:{
          1:<div><span>第一道题</span></div>,
          2:<div><section>第二道题</section></div>,
          3:<div><p>第三道题</p></div>
        }
      }
    },
    methods:{
      next(){
        ++this.id
      }
    },
    render(){
      return (
       <div>
         <Item data={this.tests[this.id]} class="large"/>
         <button onClick={this.next}>下一题</button>
       </div>
      )
    }
  }
复制代码
上面每道题目的结构都不一致

 //子组件,只接受数据展示，用函数式组件
<script>
  export default {
  functional:true,
    name: "item",
    render(h,context){
      return (
        <div class="red" {...context.data}>
          {context.props.data}
        </div>
      )
    }
  }
</script>
复制代码
上面没有用任何if/else判断就完成了功能，这里用jsx我觉得比较合适，不知道各位大佬有什么其他思路？

最后
总结一下吧，我们平时开发还是多用temlate因为直观简洁，各种指令用着很方便，等你觉得用template写出的代码看着很冗余，或者想自己控制渲染逻辑比如循环，判断等等时可以考虑用JSX。另外推荐大家多用函数式组件提高性能。

第一次写文章，希望各位花时间看了的大佬觉得哪个说的不太严谨还需多多包涵，提出意见我都接受。

参考资料
vue 渲染函数&jsx

babel-plugin-transform-vue-jsx
