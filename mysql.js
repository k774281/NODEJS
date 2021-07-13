/*


//引入mysql模塊
const mysql=require('mysql');
//創建連接對象
let connection=mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu' //連接後使用的數據庫
});


//建立連接
connection.connect();




//執行SQL語句
connection.query('DELETE FROM emp WHERE eid=18',function(err,result){
	//err:可能產生的錯誤
	//result SQL語句的結果
	if (err) throw err;
	console.log(result);
});




//修改編號為10的數據, 性別改為1, 工資改5000
connection.query('UPDATE emp SET sex=1,salary=5000 WHERE eid=10',function(err,result){
	if (err) throw err;
	console.log(result);
})




//查詢員工表裡所有的數據
connection.query('SELECT * FROM',function(err,result){
	if (err) throw err;
	console.log(result);
})


//往員工表裡插入數據
//員工編號自增設NULL
connection.query('INSERT INTO emp VALUES(NULL,"sty",1,"1999-7-1",8000,20)',function(err,result){
	if (err) throw err;
	console.log(result);
});




//使用佔位符, 過濾傳入的值, 防止鑽漏洞,不要在values()參數直接加入值, 用問號代替, 後面再帶入值
connection.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[null,'abcd',1,'1997-9-2',8000,20],function(err,result){
  if(err) throw err;
  console.log(result);
})




//不在Mysql裡面加入數據, 改成直接用物件方式加入到數據庫>比較方便
//裡面對應的名稱必須要一樣
let emp={
  ename:'ccc',
  birthday:'1995-8-3',
  sex:0,
  salary:9000
}
//用問號代替, 之後emp帶入問號裡
//不屬於mysql標準語句, 是Mysql封裝後的
connection.query('INSERT INTO emp SET ?',[emp],function(err,result){
  if(err) throw err;
  console.log(result);
});
//執行完畢後要關閉連接避免耗費資源
connection.end();


*/










//mysql連接池的使用

// 同樣要引入模塊
const mysql=require('mysql');

//創建連接池物件(相當於我們的uBike, 每個人都可以借來使用, 用完就還)
let pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20 //設置uBike要放幾台, 要根據服務器可以乘載多少量
});


/*
//執行SQL語句
pool.query('SELECT * FROM emp',function(err,result){
  if(err) throw err;
  console.log(result);
});

*/

//練習: 執行SQL語句, 刪除編號為5的數據
pool.query('DELETE FROM emp WHERE eid=?',[5],function(err,result){
	if(err) throw err;
  console.log(result);
})




















