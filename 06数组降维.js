//方法一
let arr=[[11,22,33],[44,555,66]]
arr=arr+''
arr=arr.split(',')
console.log(arr);

//方法二
let ret = []
function reducedinner(arr) {
    for (i in arr) {
        if (Array.isArray(arr[i])) {
        reducedinner(arr[i])
        }
        ret.push(arr[i]) 
    }
    return ret
}
let g=reducedinner([1, 2, 3, [44, 55], 66, [77, 88]])
// console.log(g);

//方法三
let gg=[1,2,3,[33,44],66,[5,[4,5]]].flat(Infinity)
console.log(gg);

//方法四
function stackReal(arr){
    let ret=[]
    let stack=[...arr]
    while(stack.length){
        let next=stack.pop()
        if(Array.isArray(next)){
            stack.push(...next)
        }else{
            ret.push(next)
        }
    }
    return ret.reverse()
} 

let kk=stackReal([1, 2, 3, [44, 55], 66, [77, 88,[1,2,3]]])
console.log(kk);

// let j=[...[1,2,3,[33,44],66,[5,[4,5]]]]
// console.log(j);
// let r=[1,2,3]
// console.log(...r); //1 2 3
