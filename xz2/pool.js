/*如果將來放到服務器上面, 改一個地方, 有好幾個地方也要改, ip地址要改, 用戶要改, 密碼要改, 數據庫名稱要改, 用起來太麻煩, 因此我們可以再建立一個mysql模組, 直接引入所有有關聯的路由
*/


const mysql=require('mysql');
let pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'xz',
	connectionLimit:20
})



//一個模塊的東西不能被外部使用, 所以需要導出
module.exports=pool;