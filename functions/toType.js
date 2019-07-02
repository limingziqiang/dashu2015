/**
 *  获取数据类型
 */
 
Object.toType = (function toType(global) {
  return function(obj) {
    if (obj === global) {
      return 'global'
    }
    return {}.toString
      .call(obj)
      .match(/\s([a-z|A-Z]+)/)[1]
      .toLowerCase()
  }
})(this)


