const express=require('express');
let router=express();
app.listen(8080);



//驗證是否為空
//所有中間件都要用use
//參數1: 表示要攔截的url(給誰用)
//回調函式, 處理請求
app.use('/reg',function(req,res,next){
	console.log('验证了是否为空');
  //如果为空，响应一句话
  //res.send('用户名不能为空');
  //执行下一个中间件或者路由
  next();
})



//註冊路由
app.get('/reg',function(req,res){
	res.send('註冊成功');
});