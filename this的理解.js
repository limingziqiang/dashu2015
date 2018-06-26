

// function Foo(){
//     this.name = '王语嫣';
//     this.year = '1999';

//     这里的this是Foo
//     console.log(this);
// }

// var f1 = new Foo();

//-----------------------------------------------------------------

// function Foo(){
//     this.name = '王语嫣';
//     this.year = '1999';

//     //浏览器的window
//     console.log(this);
// }

// Foo();

//-----------------------------------------------------------------

// var obj = {
//     x: 10,
//     fn:function(){
//         console.log(this);
//         console.log(this.x);
//     }
// }

// obj.fn();


//-----------------------------------------------------------------

// var obj = {
//     x: 10,
//     fn:function(){

//         //window
//         console.log(this);

//         //undefined
//         console.log(this.x);
//     }
// }

// //引用发生了改变
// var f1 = obj.fn;

// f1();

//-----------------------------------------------------------------

// var obj = {
//     x: 10
// }

// var fn = function(){

//     //obj
//     console.log(this);

//     //10
//     console.log(this.x);
// }

// fn.call(obj);



//-----------------------------------------------------------------


// var x = 10;
// var fn = function(){
//     //window
//     console.log(this);
//     //10
//     console.log(this.x);
// }

// fn();


//-----------------------------------------------------------------


// //再次印证谁调用的this就是谁
// var obj = {
//     x : 10, 
//     fn: function(){
//         function f(){
//             // window
//             console.log(this);
//             //undefined
//             console.log(this.x);
//         }
//         f();
//     }
// };

// obj.fn();


//-----------------------------------------------------------------
