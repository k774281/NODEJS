//引入查詢字串的模塊
const querystring = require('querystring');

//練習, 引入之後查詢lid=5&pname=apple裡面的編號及商品名稱

//查詢字串
let str = 'lid=5&pname=apple'


//把查詢字串解析為物件
let obj=querystring.parse(str);
//console.log(obj);
console.log(obj.lid,obj.pname);


//把物件格式化為查詢字串
let str2=querystring.stringify(obj);
console.log(str2);

