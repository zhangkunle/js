console.log(Object.is(null, null)); // true
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(NaN, NaN))//true
let obj = {}
console.log(Object.is(obj, {}))//false
console.log(Object.is({}, {}))//false
console.log(Object.is(0, -0))//false
console.log(Object.is(NaN, 0 / 0)); // true
console.log(Object.is(NaN, Number.NaN)); // true
console.log(NaN === NaN);//false
console.log(NaN == NaN);//false
console.log(0 === -0);//true
console.log(0 == -0);//true


const a = { w: '1' }
const b = { w: '1' }
let c = a
console.log(Object.is(a, b));//false
console.log(Object.is(c, a));//true
console.log(c == a);//true
console.log(c == b);//false
console.log(c === b);//false
console.log(Object.is(b, c));//false

const k = { a: '1', h: 'kk', c: { s: '1' } }
console.log(Object.getOwnPropertyNames(k));
let f = k
delete f.a
console.log(Object.is(k, f));//true
console.log(k);

//如何判断两个对象的内容相等
const q = { a: '22', b: 'oo', c: { j: 1, k: 2, g: { q: 1 } }, l: 222 }
const p = { a: '22', c: { j: 1, k: 2, g: { q: 1 } }, l: 222, b: 'oo' }
let qq = q
console.log(q === p); //false
function ObjectIsEqual(obj1, obj2) {
  if (obj1 === obj2) return true //是否同一引用地址
  let prop1 = Object.getOwnPropertyNames(obj1)
  let prop2 = Object.getOwnPropertyNames(obj2)
  if (prop1.length !== prop2.length) return false
  for (let i in obj1) {
    if (obj2.hasOwnProperty(i)) {
      if (typeof obj1[i] === 'object' && typeof obj2[i] === 'object') {
        ObjectIsEqual(obj1[i], obj2[i])
      } else {
        if (obj1[i] !== obj2[i]) {
          return false
        }
      }
    } else {
      return false
    }
  }
  return true
}

console.log(ObjectIsEqual(p, q));//true
console.log(ObjectIsEqual(q, qq));//true

console.log(Number('444'));
console.log(parseInt(2.3333));

console.log('111' + 11);
console.log(-'88' + 1000);


const xy = { a: '22', b: 'oo', c: { j: 1, k: 2, g: { q: 1 } }, l: 222 }
console.log(Object.keys(xy));

const per = { age: 10, name: 'hello' }
let hh = Object.create({
  a: '季节',
  b: '收藏',
  c: 'aa'
},
  {
    'l': {
      value: '1111'
    },
    'w': {
      value: '222'
    }
  });
  console.log(hh);
console.log(hh.__proto__);

let car={
  name:'奔驰',
  price:1000000,
  getCar:function(){
      console.log(car.name);
  }
}
for(let i in car){
 if(car.hasOwnProperty(i)){console.log(i);} 
}

console.log(Object.getPrototypeOf(q));