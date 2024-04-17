//数组
// let x = [1, 2, 3, 4, 5, 6, 7]
// let t=x.join(' ')

// let g=x.reverse()
// console.log(x);
// console.log(g);

// delete x[0]
// console.log(x);
// console.log(x.length);//7
// x.shift()
// console.log(x);

// x.pop()
// console.log(x);
// x.unshift('a')
// console.log(x);

// x.push('a')
// console.log(x);
// let x1=[8,9,'a',1]
// let h=x.concat(x1)
// console.log(h);

// let j=x.slice(2)
// console.log(j);
// console.log(x);

// let d=x.sort((a,b)=>{
// return b-a
// })
// console.log(d);
// console.log(x);

// x.splice(2)
// console.log(x);

// x.splice(2,3)
// console.log(x);
// x.splice(2,5,'aa')
// console.log(x);
// console.log(x.toLocaleString());
// console.log(x.toString());

// x.forEach((item)=>{
//     console.log(item);
// })

// x.forEach((item)=>{
//     item= item+3
// })
// console.log(x);

// let arr=x.every((item,index)=>{
// if(item>0){
//     return true
// }
// })
// console.log(arr);

// let y=x.map((item)=>{
//     return item+3
// })
// console.log(y);
// console.log(x);


// let y=x.filter((item)=>{
//     return item>3
// })
// console.log(y);
// console.log(x);
// let z=x.indexOf('a')
// console.log(z);


// console.log([1, 2, 3, [2, 5, 6], [7, 8, [1, 2]], 9, 0].flat(1));
// // console.log({a:'2',b:'3',c:{e:'6',h:{g:'2'}},j:'ss'}.flat(2)); 错误 
// let u=[1, 2, 3, [2, 5, 6], [7, 8, [1, 2]], 9, 0]
// const result = u.flatMap((num) => {
//     return num 
// });
// console.log(result);

// console.log(x.includes('a'));
// let f=x.find((item)=>{
//     return item>3
// })
// console.log(f);

//字符串
// let g='helloword sss'
// console.log(g.length);
// console.log(g.toUpperCase());
// console.log(g.toLowerCase());
// console.log(g.charAt(3));
// console.log(g.substring(2,5));
// console.log(g.split(','));
// console.log(g.split(' '));
// console.log(g.split(''));
// console.log(g.charCodeAt(3));
// let k='woqs'
// console.log(g.concat(k));
// console.log(g.indexOf('l'));
// console.log(g.slice(2,10));
// console.log(new String('cool').valueOf());

// //布尔对象
// console.log(false.toString());
// console.log(true.valueOf());
// console.log(new Boolean(false).valueOf());

// //日期对象
// const d=new Date()
// console.log(d);
// const a=new Date(100000)
// console.log(a);
// let time=new Date('2015-5-6 10:0:0')
// console.log(time);
// let yy=new Date(2020,2,5,12,6,45)
// console.log(yy);
// console.log(yy.getDate());
// console.log(yy.getFullYear());
// console.log(yy.getMonth());
// console.log(yy.getHours());
// console.log(yy.getDay());
// console.log(yy.getSeconds());
// console.log(yy.getMilliseconds());
// console.log(yy.getTime());

//构造函数
// function GetHome(name){
//     name=name+1
// }
// const h=new GetHome(1)
// GetHome(2)
// console.log(GetHome.caller);

//Math
// console.log(Math.ceil(2.333));
// console.log(Math.floor(2.66));
// console.log(Math.round(3.6));
//Number
//对象
// let h={
//     a:'1',
//     c:{
//         qL:'1',
//         hh:'2'
//     }
// }
// console.log(h.hasOwnProperty('a'));//true
// console.log(h.hasOwnProperty('hh'));//false

// function SaveTf(){
//    this.name=2
// }
// const sif=new SaveTf()
// console.log(SaveTf.prototype.isPrototypeOf(sif));

// console.log(1 == '1');
// console.log(null == undefined);//true
// console.log(null === undefined);//false
// console.log(NaN == NaN);//false
// console.log(NaN === NaN);//false

console.log([1,2,3].constructor === Array); //true
// console.log(undefined.constructor === undefined);//error