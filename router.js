const express=require('express');
//引入路由器模塊
const userRouter=require('./user.js');
//創建web服務器
let app=express();
//監聽端口
app.listen(8080);



//路由
//使用路由器, 把用戶下的所有路由掛載到/user下
//掛載: 在url的前面添加/user
// /user/list  /user/delete
//參數1: 掛載的url
//參數2: 要掛載的路由器
app.use('/user',userRouter);