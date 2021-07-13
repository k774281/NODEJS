//引入fs模塊
const fs = require('fs');

/*
//文件流
//新增可讀流, 我們要讀取的東西
let readStream=fs.createReadStream('fs.js');
// 編碼為utf8
readStream.setEncoding('utf8');
//接取我們要讀取的東西
// step1 用事件監聽(on)是否有數據過來
// step2 然後用回調函式來接取數據
readStream.on('data',function(chunk){
  //chunk每次要讀取的數據
  console.log(chunk);
});
//事件監聽(on)是否讀取完畢
readStream.on('end',function(){
  console.log('讀取結束');
});


*/


//使用可讀流和可寫流, 拷貝文件
// 新增一個可讀流
let readStream=fs.createReadStream('fs.js');
//新增一個可寫流
let writeStream=fs.createWriteStream('data.txt');
//把讀取的流通過管道放入寫入流
readStream.pipe(writeStream);








