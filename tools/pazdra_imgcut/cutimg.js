const jimp = require('jimp');
const fs = require('fs');
const mysql = require('mysql');

// cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pazdra_imgcut
// node cutimg.js
const crop_parameter = {x: 11, y: 613, y_chosei: 343, width: 99, height: 99};
let php_ary = '';

fs.readdir('.', (err, directory_files)=>{
	if (err) throw err;
	let target_files = [];
	// .jpgファイルのみ読み込む && 頭にcがつくファイルは読み込まない
	target_files = directory_files.filter((the_file)=> fs.statSync(the_file).isFile() && '.jpg' == the_file.substr(-4) && 'c' != the_file.substr(-9, 1) );
	console.log(target_files.length, target_files);
	for (let v of target_files) {
		jimp.read(v, (error_log, image)=>{
			image.crop(crop_parameter.x, image.bitmap.height - crop_parameter.y_chosei, crop_parameter.width, crop_parameter.height);
			image.write('c' + v);
		});
	}

	// MySQLとのコネクションの作成
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'padmns'
	});
	let mns = {NOs: '', no_ary: []};
	for (let v of target_files) {
		mns.NOs += ('' == mns.NOs) ? v.substr(0, v.indexOf('.')) : (',' + v.substr(0, v.indexOf('.')));
		mns.no_ary.push( v.substr(0, v.indexOf('.')) );
	}
	// connection.queryが帰ってこないからimplodeして、writeする
	connection.query('SELECT `NO`, `NAME`, `RARE` FROM mns WHERE `NO` IN (' + mns.NOs + ')', (error_log, db_data, fields) => {
		if (!!error_log) {
			console.log('select_error: ' + error_log);
			return;
		}
		for (let n of mns.no_ary) {
			let input_flg = false;
			for (let v of db_data) {
				if (v.NO == n) {
					// sql文を書いて、あればそのデータを乗せてphp_ary.txtにコード
					console.log(v);
					php_ary += 'array("no"=> '+v.NO+', "nm"=> "'+v.NAME+'", "rr"=> '+v.RARE+', "pc"=> 2),\n';
					input_flg = true;
					break;
				}
			}
			if (!input_flg) {
				console.log('db has no data. NO: '+n);
				php_ary += 'array("no"=> '+n+', "nm"=> "", "rr"=> 6, "pc"=> 2),\n';
			}
		}
		fs.writeFileSync("php_ary.txt", php_ary);
		console.log('i am outputted in php_ary.txt');
	});
});



