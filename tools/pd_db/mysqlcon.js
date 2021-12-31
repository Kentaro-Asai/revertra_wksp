const mysql = require('mysql');
const fs = require('fs');
 
// call from scrapeSql.bat
//	cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
//	node mysqlcon.js

let mns = [];
fs.readFile('scrapy.json', 'utf-8', (err, data) => {
  // 例外処理
  if (err) { throw err; }
  mns = JSON.parse(data);
	console.log('mns length: ' + mns.length);
	
	// MySQLとのコネクションの作成
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'padmns'
	});
	
	// 接続(codingするとエラーになる)
	//connection.connect();

	for (let v of mns) {
		connection.query('SELECT `NO` FROM mns WHERE `NO` = ' + v.no, (error_log, db_data, fields) => {
			if (!!error_log) {
				console.log('select_error: ' + error_log);
				return;
			}
			if (0 == db_data.length) {
				connection.query(`INSERT INTO mns VALUES (${v.no}, "${v.name}", "${v.main_attribute}", "${v.sub_attribute}",
						${v.rare}, ${v.cost}, ${v.assist}, ${v.hp}, ${v.atk}, ${v.recover}, "${v.skill}", ${v.skill_turn}, ${v.skill_max_turn},
						"${v.leader_skill}", ${v.super_hp}, ${v.super_atk}, ${v.super_recover})`, (error, insert_result) => {
					if (!!error) {
						console.log('error: ' + error);
						return;
					}
					console.log(`inserted NO: ${v.no}, NAME: ${v.name}.`);
					if (!!v.type && v.type.length) {
						for (let i in v.type) {
							connection.query('INSERT INTO mns_type (`NO`, `TYPE`) VALUES ('+v.no+', "'+v.type[i]+'")');
						}
					}
					if (!!v.awaken && v.awaken.length) {
						for (let i in v.awaken) {
							connection.query('INSERT INTO mns_awaken (`NO`, `AWAKEN`) VALUES ('+v.no+', "'+v.awaken[i]+'")');
						}
					}
					if (!!v.super_awaken && v.super_awaken.length) {
						for (let i in v.super_awaken) {
							connection.query('INSERT INTO mns_super_awaken (`NO`, `AWAKEN`) VALUES ('+v.no+', "'+v.super_awaken[i]+'")');
						}
					}
					if (!!v.evolve && v.evolve.length) {
						for (let ev of v.evolve) {
							connection.query('DELETE FROM evolve WHERE `BEFORE_NO` = ' + v.no + ' AND `AFTER_NO` = ' + ev.after_no, (delete_error, res)=>{
								connection.query(`INSERT INTO evolve (BEFORE_NO, AFTER_NO, EVOLVE_NAME) VALUES (${ev.before_no}, ${ev.after_no}, "${ev.evolve_name}")`);
							});
						}
					}
				});
			} else if (0 < db_data.length) {
				const sql = 'UPDATE mns SET `NAME`= "'+v.name+'", MAIN_ATTRIBUTE= "'+v.main_attribute+'", SUB_ATTRIBUTE= "'+v.sub_attribute+'",'
					+ '`RARE`= '+v.rare+', `COST`= '+v.cost+', ASSIST= '+v.assist+', HP= '+v.hp+', ATK= '+v.atk+', RECOVER= '+v.recover+', `SKILL`= "'+v.skill+'",'
					+ 'SKILL_TURN= '+v.skill_turn+', SKILL_MAX_TURN= '+v.skill_max_turn+', LEADER_SKILL= "'+v.leader_skill+'",'
					+ 'SUPER_HP= '+v.super_hp+', SUPER_ATK= '+v.super_atk+', SUPER_RECOVER= '+v.super_recover+' WHERE `NO` = '+v.no;
				connection.query(sql, (error, update_result)=>{
					if (!!error) {
						console.log(error);
						return;
					}
					console.log(`updated NO: ${v.no}, NAME: ${v.name}.`);
					if (!!v.type && v.type.length) {
						connection.query('DELETE FROM mns_type WHERE `NO` = ' + v.no, (delete_error, res)=>{
							if (!!delete_error) return;
							for (let i in v.type) {
								connection.query('INSERT INTO mns_type (`NO`, `TYPE`) VALUES ('+v.no+', "'+v.type[i]+'")');
							}
						});
					}
					if (!!v.awaken && v.awaken.length) {
						connection.query('DELETE FROM mns_awaken WHERE `NO` = ' + v.no, (delete_error, res)=>{
							if (!!delete_error) return;
							for (let i in v.awaken) {
								connection.query('INSERT INTO mns_awaken (`NO`, `AWAKEN`) VALUES ('+v.no+', "'+v.awaken[i]+'")');
							}
						});
					}
					if (!!v.super_awaken && v.super_awaken.length) {
						connection.query('DELETE FROM mns_super_awaken WHERE `NO` = ' + v.no, (delete_error, res)=>{
							if (!!delete_error) return;
							for (let i in v.super_awaken) {
								connection.query('INSERT INTO mns_super_awaken (`NO`, `AWAKEN`) VALUES ('+v.no+', "'+v.super_awaken[i]+'")');
							}
						});
					}
					if (!!v.evolve && v.evolve.length) {
						connection.query('DELETE FROM evolve WHERE `BEFORE_NO` = ' + v.no, (delete_error, res)=>{
							if (!!delete_error) return;
							for (let ev of v.evolve) {
								connection.query(`INSERT INTO evolve (BEFORE_NO, AFTER_NO, EVOLVE_NAME) VALUES (${ev.before_no}, ${ev.after_no}, "${ev.evolve_name}")`);
							}
						});
					}
				});
			}
		});
	}

	// 接続終了(codingするとエラーになる)
	//connection.end();
	return;
});
