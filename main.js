//引入circle.js
//如果後面引入的是js檔,那可以忽略
// ./同一級目錄

let circle=require('./circle');
//console.log(circle); //是看看有沒有被正確導出
//訪問引用的變數

//前面只是被return, 在這裡必須要console.log出來

//console.log(circle.getArea(4).toFixed(2));
//console.log(circle.getLength(2).toFixed(2));
//console.log(circle.fn(2,3));
console.log(circle);