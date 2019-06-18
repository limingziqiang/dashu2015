/**
 * 深层克隆对象
 *
 * @param obj
 * @returns {*}
 * @example
 *
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = deepClone(a);
 * // => a !== b, a.obj !== b.obj
 */
function deepClone(obj) {
  var clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    function (key) { return (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]); }
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone;
}



/* 个人建议写法，通俗易懂 不装逼格=>

    if(Array.isArray(obj) && obj.length){
        clone.length = obj.length
        return Array.from(clone)
       
    } else {
        if(Array.isArray(obj)){
            return Array.from(obj)
        } else {
            return clone
        }
    }
*/
