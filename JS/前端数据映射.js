import React, { Component } from 'react'
import _ from 'lodash'

// 模拟后台数据
const result = [
  {
    id: 1,
    title: '小花',
    xxx: 12000,
    bbb: '男',
    ccc:null,
    cb: v => `@${v}`,
  },
  {
    id: 2,
    title: '小白',
    xxx: 27000,
    bbb: '女',
    ccc:[1,2,3,4],
    cb: v => `@${v}`,
  },
]

export default class App extends Component {
  render() {

    // 数据映射一般都写在 redux 里面，或者单独的 js 文件
    // 这里使用的是 lodash 工具库的 get 方法
    // _.get(object, path, [defaultValue])
    // 根据对象的path路径获取值，如果解析 value 是 undefined 会以 defaultValue 取代
    const checkDefault = (v, def) => v == null ? def : v;

    const data = result.map(item => ({
      id: _.get(item, 'id', ''),
      name: checkDefault(_.get(item, 'title'), ''),
      //name: _.get(item, 'title', ''),
      price: _.get(item, 'xxx', ''),
      sex: _.get(item, 'bbb', ''),
      ccc: checkDefault(_.get(item, 'ccc'), []),
      cb: v => `@${v}`
    }))

    return (
      <div className="pages-cart">
        <h1>cart</h1>　　　　　
        // 映射后的数据进行渲染
        {
          data.map(({name, id, price, sex, ccc, cb}) => {
            return <p key={id}>{cb(name)}-{cb(price)}-{sex}-3333-{ccc.length}---{Array.isArray(ccc) ? 'arr' : 'xxx'}</p>
          })
        }
      </div>
    )
  }
}
