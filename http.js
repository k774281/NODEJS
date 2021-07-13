//引入http模塊
const http=require('http');
// 引入fs模塊
const fs=require('fs');
//引入zlib模塊
const zlib=require('zlib');

/*
//向web服務器發請求
//參數1:請求URL
//參數2:獲取響應
http.get('http://www.weather.com.cn/data/sk/101010100.html',function(res){
	//res:響應的對象
	//響應的狀態碼
	console.log( res.statusCode );
	//獲取響應的內容
	//也是通過事件監聽是否有數據流響應
	res.on('data',function(chunk){
		console.log(chunk.toString());
	})
});












//創建web服務器

let app=http.createServer();
//設置監聽的端口
app.listen(8080);
//http://127.0.0.1:8080
//http://localhost:8080

//接收請求,根據請求做出響應
//事件監聽:一旦有請求, 自動觸發事件
//回調函式, 服務器做出響應
app.on('request',function(req,res){
	//req: 請求的對象, 獲取所有請求
	//請求的URL, 請求的method
	//console.log(req.url,req.method);
	//請求訊息頭
	//console.log(req.headers);
	//res: 響應的對象, 做出具體響應
	//write只是設置響應的內容
	//res.write('homepage');
	//設置響應的訊息頭和狀態碼
	res.writeHead(302,{
		Location:'http://www.tmooc.cn'//跳轉
	})
	//write寫完後要結束並發送到瀏覽器
	res.end();
})



*/






//練習, 創建web服務器, 監聽端口8080, 接收瀏覽器請求, 根據請求做出不同響應, http://127.0.0.1:8080/reg
//    /login 響應內容 this is login page
//    /reg 響應內容   this is reg page
//    /study 跳轉到  http://www.tmooc.cn

let app=http.createServer();
app.listen(8080);
app.on('request',function(req,res){
	if(req.url==='/login'){
		res.write('this is login page.');
		res.end;
	}else if(req.url==='/reg'){
		res.write('this is reg page.');
		res.end;
	}else if(req.url==='/study'){
		res.writeHead(301,{
			Location:'http://www.tmooc.cn'			
		})
		res.end();
	}else if(req.url==='/index'){
		//如果請求的url是index, 響應文件tmooc.html到瀏覽器
		//設置響應訊息頭,告訴瀏覽器按照網頁的內容去解析
		res.writeHead(200,{
			'Content-Type':'text/html';
			'Content-Encoding':'gzip';//設置解壓縮的類型
		})
		/*
		//同步讀取tmooc.html文件
		let data=fs.readFileSync('tmooc.html');
		//console.log(data.toString())
		//讀取的內容作為響應內容
		res.write(data.toString());
		//結束並發送
		res.end();
		*/
		
		//使用壓縮檔
		// 創建一個gzip壓縮
		let gzip=zlib.createGzip();
		//step1 創建可讀流讀取文件
		//step2 通過管道pipe把可讀流放入壓縮檔
		//step3 把壓縮的內容響應到瀏覽器
		fs.createReadStream('tmooc.html').pipe(gzip).pipe(res.);
	}	
})



















