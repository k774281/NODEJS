const express=require('express');
const querystring=require('querystring');
//引入body-parser中間件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);


//把所有的靜態資源(html.css.js.圖片等文件)託管到某個目錄下
//當瀏覽器要請求靜態資源, 會自動到目錄下找, 不需要再創建單獨的路由響應文件
app.use(express.static('public'));
app.use(express.static('files'));
//使用body-parser中間件
//可以比post請求的數據解析為物件, 不用像之前一樣用toString轉
app.use(bodyParser.urlencoded({
	extended:false //不使用第三方的qs模塊, 而是使用核心模塊querystring來解析查詢字串為物件
}));




//練習: 创建web服务器，托管静态资源到public目录下，浏览器向服务器请求login.html

//點擊提交按鈕後, 得到相對應的路由
app.post('/mylogin',function(req,res){
  //用引入的body-parser第三方中間件來處理比較容易
  console.log(req.body);
  res.send('登入成功');
});