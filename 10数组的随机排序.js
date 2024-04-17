let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function sortArr(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    var rand = parseInt(Math.random() * len);
    var temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

let res = sortArr(arr);
console.log(res); //[ 2, 4, 6, 1,5, 8, 7, 3]
let rand = parseInt(Math.random() * 5);
console.log(rand); //2
console.log(Math.random() - 0.5);
 