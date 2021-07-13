const express=require('express');
const mysql=require('mysql');
//創建Web服務器
let app=express();
//監聽端口
app.listen(8080);




//練習: 託管靜態資源到public資料夾, 創建註冊網頁
app.use(express.static('public'));




//用連接池, 在路由之前連接mysql模塊
let pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20
})



app.get('/add',function(req,res){
	//如何獲取get數據
	let obj=req.query;
	console.log(obj);
	pool.query('INSERT INTO dept set ?',[obj],function(err,result){
		if(err) throw err;
		console.log(result);
		//如果插入成功, 才顯示註冊成功
		if(resulte.affectedRows>0){
			res.send('註冊成功')
		}
	})	
})

