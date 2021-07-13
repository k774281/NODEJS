//用戶路由器
//用戶下的所有路由都放在這邊
//路由器是express下的一個功能
const express=require('express');


//創建路由器
let router=express.Router();
//往路由器添加路由
//get  /list
router.get('/list',function(req,res){
	res.send('這是用戶清單')
});

//路由器最終要給web服務器使用, 導出路由器為對象
module.exports=router;