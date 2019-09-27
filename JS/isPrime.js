//何为质数: 只能被1 和 自身 整除的数;
//方法: 利用js中求模, 看是否有余数. ---> 3%2 = 1; 5%2 = 3.........

export default const isPrime = (n)=>{
   // 判断一个数是否能被自身小的正整数(除开1和自身)整除.如果能整除则不是质数,否则反之.
   for(var k = 2; i < n; k++){
    if(n % k == 0){
      return false;
    }
   }
   return true
}
