const intervalId = setInterval(() => {
    console.log(3);
}, 2000);

// ১০ সেকেন্ড পর setInterval বন্ধ করে দেবে
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared!");
}, 10000);
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 2000);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

setInterval(()=>{
    console.log('i am you ');
},2000)
let num = 0;

const clockedId = setInterval(() => {
    num ++;
    console.log(clockedId,num)
}, 2000);