/**
 * 科学计数法转化为数值字符串形式
 * @param {number} number
 * @returns {string}
 * @example
 *
 * toNonExponential(3.3e-7);
 * => // "0.00000033"
 *
 * toNonExponential(3e-7);
 * => // "0.0000003"
 *
 * toNonExponential(1.401e10);
 * => // "14010000000"
 *
 * toNonExponential(0.0004);
 * => // "0.0004"
 */
function toNonExponential(num) {
  if (typeof num != "number") {
    throw new TypeError("数据类型必须是 number");
  }
  var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);

  console.log(m,m[1],m[2],(m[1] || "").length,(m[1] || "").length - m[2])
  return num.toFixed(Math.max(0, (m[1] || "").length - m[2]));
}
