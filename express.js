//引入 express模塊
//引入不已路徑為開頭的資料夾
const express=require('express');
const querystring=require('querystring');


//建一個服務器
let app=express();
//監聽端口8080
app.listen(8080);


/*


//使用路由來接收請求並做出響應
//一種路由只能做一種事
//請求: 請求url, 請求的方法
//請求方法:get 請求url: /login
app.get('/login',function(req,res){
	//回調函式:用來做出響應
	//req:請求的對象
	//res:響應的對象
	res.send('這是登錄的頁面');
});








//練習: 創建路由, 請求方法:get, 請求url:/reg, 響應多行內容
app.get('/reg',function(req,res){
	//send不可重複使用, 使用模板字串
	res.send(`
	登陸<br>
	成功
	`);
})

*/





//練習:創建路由, 請求方法:get, 請求的url: /study, 響應文件並發送給瀏覽器
app.get('/study',function(req,res){
	//要響應一個文件必須用絕對路徑
	res.sendFile(__dirname+'/tmooc.html');
})




//请求方法:get  请求url:/index
app.get('/index',function(req,res){
  //跳转到 另一個網址
  res.redirect('https://www.netflix.com/browse');
});



//請求方法:get, 請求的url: /detail
//響應內容並發送
app.get('/detail',function(req,res){
	//獲取請求的方法, url, 訊息頭
	// req: 請求的對象
	//console.log(req.menthod,req.url);
	//console.log(req.henders);
	//獲取查詢字串的數據, 返回一個對象
	console.log(req.query);
	res.send('這是商品詳情');
})







//路由:請求方法: get, 請求url: /shopping, 響應內容並發送
app.get('/shopping/:price',function(req,res){
	//獲取路由傳遞的數據
	console.log(req.params);
	res.send('訂單完成')
})


//練習: 創建路由, 請求方法:get, 請求 url: /admin, 傳遞用戶名(uname)和密碼(upwd), 接收傳遞數據, 並響應到瀏覽器中

app.get('/admin/:uname/:upwd',function(req,res){
	console.log(res.params);
	res.send('歡迎用戶');
})




//練習: 使用express 創建一個web服務器, 創建路由, 請求方法:get, 請求 url: /login, 響應一個文件login.html 到瀏覽器端
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html');
});
//根據提交按鈕的請求, 創建對應的路由
//post  只能用在按鈕上 /mylogin   響應'登陸成功'
app.post('/mylogin',function(req,res){
	//獲取post請求數據
	//事件:
	req.on('data',function(mydata){
		//buffer數據>查詢字串
		//console.log(mydata.toString());
		//把查詢字串轉物件
		let str=mydata.toString();
		let obj=querystring.parse(str);
		console.log(obj);
	})
	res.send('登陸成功');
});







//練習: 創建路由, 請求方法: get, 請求url: /reg, 響應一個文件reg.html
app.get('/reg',function(req,res){
	res.sendFile(__dirname+'/reg.html');
});
app.get('/myreg',function(req,res){
	console.log(req.query);
	res.send('註冊成功, 您的手機號碼:'+req.query.phone)
})





















