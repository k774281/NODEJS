const express=require('express');
//引入用戶路由器
const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');


//創建Web服務器
let app=express();
//監聽端口
app.listen(8080);


//練習: 託管靜態資源到public資料夾, 創建註冊網頁
app.use(express.static('public'));




//使用body-parser中間件
app.use(bodyParser.urlencoded({
	extended:false
}));

//2. 在app.js 引入路由器, 並掛載到 /user下
app.use('/user',userRouter);
