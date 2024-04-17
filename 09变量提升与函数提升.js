var a = 10
fun()
function fun() {
    console.log(a);//undefined
    var a = 20
    console.log(a);//20
}

var t = 10
fn1()
function fn1() {
    var b = 12
    console.log(t);
    console.log(b);
    var t = 20
}

let g = 1
fnn()
function fnn() {
    // let g=3
    // console.log(g);//error
    let g1 = 11
}

function fn(){
    console.log(uu);//[function:uu]
    var uu = 123;
    console.log(uu);//123
    function uu(){}
    console.log(uu);//123
    var bb = function(){}
    console.log(bb);//[function:bb]
    function d(){}
}
fn(1)


console.log(a);//[function]
function a(){
    console.log(111);
}
var a=1
console.log(a);//1
// fn 123 123 fn
