缓存是任何一个Web程序都需要重视的内容。受到Redis的启发，我想到开发一个基于HTML5 localStorage的key-value缓存框架，做了一些尝试之后，便有了Smarge这样一个产物。

大家都知道，HTML5的localStorage没有超时的机制，也不能存储数组和对象等类型，更没有命名空间等思想。

这些问题，在Smarge中都得到了解决。

项目地址：https://git.oschina.net/jiusem/Smarge.git

说明：Smarge1.0.js是完整的源代码，以Apache Lisence发布，建议调试时使用；Smarge1.0.min.js是压缩后的代码，建议部署时使用。

存储字符串：

Smarge.set('name','crazymus'); //设置name的值为crazymus
存储数组：

Smarge.set('boys',['crazymus','tom','jim']); //设置boys的值为一个数组
存储对象：

//设置user的值为一个对象
Smarge.set('user',{
    name:'crazymus',
    sex:'boy',
    age:26,
    data:[
        {
            id:1,
            name:'Math'
        }
    ]
});
取回数据：

Smarge.get('name'); //crazymus
Smarge.get('boys');//['crazymus','tom','jim']
Smarge.get('user');//{name:'crazymus',sex:'boy',age:26 ... }
Smarge.get('girls');//undefined
取回的值可能为字符串、数组、对象，这取决于你存入的数据。如果不存在将返回undefined。

设置过期时间：

Smarge.set('name','crazymus',10); //有效期10秒
... 5秒后
Smarge.get('name'); // crazymus
...10秒后
Smarge.get('name'); // undefined
删除数据：

Smarge.set('name','');
选择数据库：

Smarge内置了0-16个数据库，实现了类似于命名空间的功能，因此，你可以在不同的数据库中存储同名的数据，而不会引起冲突。默认使用的是0号数据库

Smarge.use(1); //选择1号数据库
Smarge.set('name','crazymus');
Smarge.get('name'); // crazymus

Smarge.use(0); //选择0号数据库
Smarge.set('name','tom');
Smarge.get('name'); // tom

Smarge.use(1); //再次选择1号数据库
Smarge.get('name'); // crazymus
删除一个数据库中所有数据：

Smarge.drop(1); //删除1号数据库中所有数据
Smarge.get('name'); // undefined
