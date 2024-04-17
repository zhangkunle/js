//一
// function showName() {
//   console.log("极客邦");
// }
// showName(); //极客时间
// function showName() {
//   console.log("极客时间");
// }
// showName();//极客时间

//二
// showName();//1
// var showName = function () {
//   console.log(2);
// };
// function showName() {
//   console.log(1);
// }
// showName();//2

//三
// (function(){
//     console.log(g) //undefined
//     if(true){
//         console.log('hello world');
//         function g(){ return true; }
//     }
// })();

// console.log(a); //undefined
// var a = 0;
// if (true) {
//   //var a=function(){}
//   a = 1;
//   console.log(a); //1
//   function a() {}
//   a = 21;
//   console.log(a); //21
// }
// console.log(a); //1

// function b(){
//     function a(){};
// }
// console.log(a); //报错

// {
//     console.log(a);//会输出function a(){}
// 	function a(){};
//     console.log(a);//会输出function a(){}
// }
// console.log(a); //会输出function a(){}
// console.log(a);//undefined
// {
// 	console.log(a)   //fn
// 	a = 2;
// 	console.log(a)  //2
// 	a = 3;
// 	console.log(a)  //3
// 	function a(){}           //执行完之后全局变为3 函数声明之后将全局变量赋值为函数声明之前的局部变量值
// 	console.log(a) //3
// 	a = 4;
// 	console.log(a) //5
// }
// console.log(a) //3

// var myname = "极客时间"
// function showName(){
//   console.log(myname);//undefined
//   if(0){
//    var myname = "极客邦"
//   }
//   console.log(myname);//undefined
// }
// showName()

// function varTest() {
//     var x = 1;
//     if (true) {
//       var x = 2;  // 同样的变量!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }

// let myname= '极客时间'
// {
//   console.log(myname)
//   let myname= '极客邦'
// }

// function bar() {
//   var myName = "极客世界";
//   let test1 = 100;
//   if (1) {
//     let myName = "Chrome浏览器";
//     console.log(test);
//   }
// }
// function foo() {
//   var myName = "极客邦";
//   let test = 2;
//   {
//     let test = 3;
//     bar();
//   }
// }
// var myName = "极客时间";
// let myAge = 10;
// let test = 1;
// foo();

// var bar = {
//   myName: "time.geekbang.com",
//   printName: function () {
//     console.log(myName);
//   },
// };
// function foo() {
//   let myName = "极客时间";
//   return bar.printName;
// }
// let myName = "极客邦";
// let _printName = foo();
// _printName(); //极客邦
// bar.printName(); //极客邦


// function foo() {
//   var myName = "极客时间";
//   let test1 = 1;
//   const test2 = 2;
//   var innerBar = {
//     getName: function () {
//       console.log(test1);
//       return myName;
//     },
//     setName: function (newName) {
//       myName = newName;
//     },
//   };
//   return innerBar;
// }
// var bar = foo();
// bar.setName("极客邦");
// bar.getName();
// console.log(bar.getName());


var myObj = {
  name : "极客时间", 
  showThis: function(){
    console.log(this)
    var self = this
    function bar(){
      self.name = "极客邦"
    }
    bar()
  }
}
myObj.showThis()
console.log(myObj.name)
// console.log(window.name)