//引入fs模塊
const fs = require('fs');

//查看文件的狀態
//參數1:路徑
//參數2:回調函式, function參數必寫err
/*
fs.stat('circle.js',function(err,stats){
	//err:可能產生的錯誤	
	if(err) throw err;
	
	//stats:具體的結果
	console.log(stats);
})



// fs 使用異步新增一個資料夾

fs.mkdir('mkdir',function(err){
	if(err) throw err
});


// fs 使用同步新增一個資料夾

fs.mkdirSync('mkdir');
console.log('end');




//fs 使用異步移除資料夾

fs.rmdir('mkdir',function(err){
	if(err) throw err;
});
console.log('end');



//fs 使用同步移除資料夾

fs.redirSync('mkdir');
console.log('end');







// fs 使用異步讀取資料夾

fs.readdir('03_2',function(err,result){
	if(err) throw err;
	console.log(result);
})



// fs 使用同步讀取資料夾


let res=fs.readdirSync('03_2');
console.log(res);
console.log('end');






// fs使用異步寫入/新增一個文件
// 如果已經有這個文件, 那他就會覆蓋


fs.writeFile('1.txt','1',function(err){
	if(err) throw err;
	console.log('成功');
});






// fs追加寫入
// \n代表換行


fs.appendFile('2.html','hello\n',function(err){
  if(err) throw err;
  console.log('成功');
});





// 練習1, 新增陣列, 每個元素是一個課程名稱, 循環陣列, 分別獲取元素, 將數據使用同步方法寫入文件data.txt

let arr = ['html','css','js','node.js','mysql'];
for(let i=0; i<arr.length;i++){
	fs.appendFileSync('data.txt',arr[i]+'\n');
}
console.log('end');





// fs 讀取文件

fs.readFile('data.txt',function(err,data){
  if(err) throw err;
  //data：读取的数据，格式为buffer 
  console.log( data.toString() );
});



// fs 使用同步方法讀取文件

let data=readFileSync('2.html');
console.log(data.toString());




// fs 使用異步刪除文件

fs.unlink('1.txt',function(err){
  if(err) throw err;
  console.log('文件删除成功');
});


// fs 使用同步刪除文件
fs.unlinkSync('1.txt');








// fs 判斷文件是否存在

let res=fs.existsSync('mydir');
console.log(res);
console.log('end');





//練習2, 判斷data.txt是否存在, 如果存在就刪除
//老師解答

if( fs.existsSync('data.txt') ){
  //如果存在，删除
  fs.unlinkSync('data.txt');
}



//我的答案
let res=fs.existsSync('data.txt');
if(res===true){
	fs.unlinkSync('data.txt');
}

console.log('end');


*/












