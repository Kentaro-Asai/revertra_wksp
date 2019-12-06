const mysql = require('mysql');
 
// MySQLとのコネクションの作成
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	passwd : 'root',
	database: 'padmns'
});
 
// 接続
connection.connect();
 
// userdataの取得
connection.query('SELECT * FROM mns;', function (err, rows, fields) {
	if (err) { console.log('err: ' + err); } 

	console.log('name: ' + rows[0].name);
	console.log('no: ' + rows[0].no);
});
 
// userdataのカラムを取得
connection.query('SHOW COLUMNS FROM mns;', function (err, rows, fields) {
	if (err) { console.log('err: ' + err); }

	console.log(rows[0].Field);
	console.log(rows[1].Field);
});
 
// 接続終了
connection.end();

// 接続はしない。UIを作成 -> SQLを発行 Heidiで閲覧