const express=require('express');
const pool=require('../pool.js')
let router=express.Router();

router.post('/reg',function(req,res){
	let obj=req.body;
	console.log(obj);
	if(obj.uname===""){
		res.send({code:401,msg:'uname required'})
		return;
	}
	if(obj.upwd===""){
		res.send({code:402,msg:'upwd required'})
		return;
	}
	if(obj.phone===""){
		res.send({code:403,msg:'phone required'})
		return;
	}
	if(obj.email===""){
		res.send({code:404,msg:'email required'})
		return;
	}
	pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
		if(err) throw err;
		if(result.affectRows>0){
			res.send({code:200,msg:'success!'});
		}
	})
})








router.post('/login',function(req,res){
	let obj=req.body;
	console.log(obj);
	if(obj.uname===""){
		res.send({code:401,msg:'uname required'});
		return;
	};
	if(obj.upwd===""){
		res.send({code:402,msg:'upwd required'});
		return;
	};
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send({code:200,msg:'success!'})
		}else{
			res.send({code:201,msg:'your uname or upwd error.'})
		}
	})
})







router.get('/detail',function(req,res){
	let obj=req.query;
	if(obj.uid===""){
		res.send({code:401,msg:'uid required'});
		return;
	}
	pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
		if(err) throw err;
		res.send(result);
	})
})





router.post('/update',function(req,res){
	let obj=req.body;
	let i = 400;
	for(let key in obj){
		i++;
		if(obj[key]===""){
			res.send({code:i,msg:key+'required'});
			return;
		}
	}
	let uid=obj.uid;
	delete obj.uid;
	console.log(obj);
	pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,uid],function(err,result){
		if(err) throw err;
		if(result.affectRows>0){
			res.send({code:200,msg:'success!'})
		}else{
			res.send({code:201,msg:'update error'})
		}
	})
})













router.get('/list',function(req,res){
	let obj=req.query;
	console.log(obj);
	let count=obj.count;
	let pno=obj.pno;
	if(count===""){
		count=2;
	}
	if(pno===""){
		pno=1;
	}
	count=parseInt(count);
	pno=parseInt(pno);
	let start=(pno-1)*count;
	pool.query('SELECT *FROM xz_user LIMIT ?,?',[start,count],function(err,result){
		if(err) throw err;
		res.send(result);
	})
})










router.get('/delete',function(req,res){
	let obj=req.query;
	if(obj.uid===""){
		res.send({code:401,msg:'uid required'});
		return;
	}
	pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
		if(err) throw err;
		if(result.affectRows>0){
			res.send({code:200,msg:'success'})
		}else{
			res.send({code:201,msg:'uid error'})
		}
	})
})















module.exports=router;