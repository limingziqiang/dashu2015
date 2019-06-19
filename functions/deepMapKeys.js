/**
 * 深层映射对象键
 * 
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 * 
 * 
 const obj = {
   foo: '1',
   nested: {
       child: {
           withArray: [
               {
                   grandChild:['hello']
               }
           ]
       }
   }
 };
 
 const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());

//=>
{
    "FOO":"1",
    "NESTED": {
        "CHILD":{
            "WITHARRAY":[
                {
                    "GRANDCHILD":['hello']
                }
            ]
        }
    }
}
 */

/**
 *  注意：
 *  typeof [] === 'object'  ==> true
 * 
 * 
 * 语法
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
参数
参数	描述
function(total,currentValue, index,arr)	必需。用于执行每个数组元素的函数。
函数参数:
参数	描述
total	必需。初始值, 或者计算结束后的返回值。
currentValue	必需。当前元素
currentIndex	可选。当前元素的索引
arr	可选。当前元素所属的数组对象。
initialValue	可选。传递给函数的初始值
技术细节
返回值:	返回计算结果
JavaScript 版本:	ECMAScript 3
 */


function deepMapKeys(obj, fn) {
    return Array.isArray(obj)
      ? obj.map(function (val) { return deepMapKeys(val, fn); })
      : typeof obj === 'object'
        ? Object.keys(obj).reduce(function (acc, current) {
          var val = obj[current];
          acc[fn(current)] =
            val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : (acc[fn(current)] = val);
          return acc;
        }, {})
        : obj;
}
