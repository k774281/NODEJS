//用Math物件求得半徑跟圓周率
/*
function getArea(r){
	return Math.PI*Math.pow(r,2);
};

function getLength(r){
	return 2*Math.PI*r;
}

//module.export=exports
module.exports.getArea=getArea;
module.exports.getLength=getLength;
//以上方法是,先寫函式再導出



//也可以直接導出函式
module.exports.fn=function(a,b){
	return a+b;
}
*/

//直接導出物件
module.exports={
	name:'momo',
	say:function(){},
}