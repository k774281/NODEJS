//引入url模塊
const url = require('url');

//處理及解析url
let str='https://www.bilibili.com:80/video/BV1P5411a7YC?p=2&spm_id_from=pageDriver';

//把url解析為物件
let obj=url.parse(str);
console.log(obj);

//把一個物件格式化為URL
let obj2={
	protocol:'https',
	hostname:'www.
	query:{
		
	}
}

let str2=url.format(obj2);
console.log(str2);