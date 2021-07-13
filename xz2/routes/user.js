const express=require('express');
//引入連接池模塊, ../等於上一層資料夾
const pool=require('../pool.js');

let router=express.Router();


//1. 在user.js路由器文件中, 創建路由器, 添加路由(post/reg), 導出路由
// 1. 註冊路由
router.post('/reg',function(req,res){
	//  1. 獲取post請求的數據
	let obj=req.body;
	console.log(obj);
	// 2. 判斷是否為空
	//如果用戶名為空
	if(obj.uname===""){
		res.send({code:401,msg:'uname required'});
		//結束之後return 不往後執行, 否則有兩個res.send會報錯
		return;
	}
	if(obj.upwd===""){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	if(obj.phone===""){
		res.send({code:403,msg:'phone required'});
		return;
	}
	if(obj.email===""){
		res.send({code:404,msg:'email required'});
		return;
	}
	// 3. 執行SQL語句
	pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
      if(err) throw err;
	  //console.log(result);
	  //如果插入成功, 就顯示成功
	  if(result.affectedRows>0){
		  res.send({code:200,msg:'reg suc'});
	  }
	});
});















// 2.登入路由
router.post('/login',function(req,res){
	//獲取數據
	let obj=req.body;
	console.log(obj);
	//判斷是否為空
	if(obj.uname===""){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(obj.upwd===""){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	
	//執行SQL語句
	//使用pool查詢有用戶和密碼相同的數據
	
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
		if(err) throw err;
		console.log(result);
		//判斷登入成功還是失敗
		if(result.length>0){
			res.send({code:200,msg:'login suc'});
		}else{
			res.send({code:201,msg:'uname or upwd error'})
		}
	})
})










// 3. 查詢編號
router.get('/detail',function(req,res){
	let obj=req.query;
	if(obj.uid===""){
		res.send({code:401,msg:'uid required'});
		return;
	}
	
	pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
		if(err)throw err;
		res.send(result);
	})
})


















// 4. 修改個人資料
router.post('/update',function(req,res){
	let obj=req.body;
	//批量驗證數據
	//用迴圈訪問每個屬性
	let i=400;
	for(let key in obj){
		i++;
		//console.log(key,obj[key]);
		//如果屬性值為空, 就提示屬姓名是必須填入
		if(obj[key]===""){
			res.send({code:i,msg:key+'required'});
			return;
		}
	}
	//執行SQL語句
	//取出編號uid
	let uid=obj.uid;
	//刪除對象中的編號屬性
	delete obj.uid;
	console.log(obj);
	pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,uid],function(err,result){
		if(err) throw err;
		//console.log(result);
		//判斷是否修改成功
		if(result.affectedRows>0){
			res.send({code:200,msg:'update suc'})
		}else{
			res.send({code:201,msg:'update error'});
		}
	})
	
})















// 5.user_list 用戶列表 對應到後端的用戶列表
router.get('/list',function(req,res){
	//獲取數據
	let obj=req.query;
	console.log(obj);
	// 驗證為空, 則設置默認值
	let count=obj.count;
	let pno=obj.pno;
	if(count===""){
		count=2;
	}
	if(!pno){
		pno=1;
	}
	//轉整型
	count=parseInt(count);
	pno=parseInt(pno);
	
	//計算開始, 頁碼檢查
	let start=(pno-1)*count;
	//執行SQL語句
	pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,count],function(err,result){
		if(err) throw err;
		res.send(result);
	})	
})



















// 6. 刪除用戶
router.get('/delete',function(req,res){
	let obj=req.query;
	//判斷是否為空
	if(!obj.uid){
		res.send({code:401,msg:'uid required'});
		return;
	}
	//執行SQL語句
	pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
		if(err) throw err;
		//判斷是否刪除成功
		if(result.affectedRows>0){
			res.send({code:200,msg:'delete suc'})
		}else{
			res.send({code:201,msg:'delete false'})
		}
	})
})






module.exports=router;