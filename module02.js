console.log('module02.js');

var a=1;
function fn(){
	console.log(2);
}

//module.exports導出後module01才收得到
module.exports.name='小名';
module.exports.mya=a;
module.exports.fn=fn;