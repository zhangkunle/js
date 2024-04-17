const date=new Date()
console.log(date);
console.log(typeof date);//object
console.log(date.toLocaleString());
console.log(Date.now());



const obj={'a':1,'b':2,'c':3}
for(let i in obj){
    console.log(i);}