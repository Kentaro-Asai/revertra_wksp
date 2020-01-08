# coding: utf-8
import MySQLdb
# you can use this from "scCtrl.py"
#	cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
#	python mysqlCon.py

class connectSql:
	conn = None
	c = None
	# 接続する
	def __init__(self):
		self.conn = MySQLdb.connect(
		user='root',
		passwd='root',
		host='localhost',
		#host='DESKTOP-IJ33ANA',
		db='padmns',
		charset='utf8mb4')
		# MySQLdb.escape_string(text.encode("utf-8"))
		self.c = self.conn.cursor()

	# モンスターのデータを取得しようとし、あれば更新(update)、無ければ登録(insert)する
	def mnsSelectRegister(self, mns):
		self.c.execute('SELECT `NO`, `NAME` FROM mns WHERE `NO` = %(no)s', mns)
		result = self.c.fetchall()
		if 0 < len(result):
			print('update No. ' + str(mns["no"]) + ': ' + mns["name"])
			self.mnsUpdate(mns)
		else:
			print('insert No. ' + str(mns["no"]) + ': ' + mns["name"])
			self.mnsInsert(mns)

	# モンスターの登録
	def mnsInsert(self, mns):
		self.c.execute('INSERT INTO mns VALUES (%(no)s, %(name)s, %(main_attribute)s, %(sub_attribute)s,\
		%(rare)s, %(cost)s, %(assist)s, %(hp)s, %(atk)s, %(recover)s, %(skill)s, %(skill_turn)s, %(skill_max_turn)s,\
		%(leader_skill)s, %(super_hp)s, %(super_atk)s, %(super_recover)s)', mns)
		self.conn.commit()
		if 0 < len(mns["type"]):
			for v in mns["type"]:
				self.c.execute('INSERT INTO mns_type (`NO`, `TYPE`) VALUES (%s, %s)', (mns["no"], v))
				self.conn.commit()
		if 0 < len(mns["awaken"]):
			for v in mns["awaken"]:
				self.c.execute('INSERT INTO mns_awaken (`NO`, `AWAKEN`) VALUES (%s, %s)', (mns["no"], v))
				self.conn.commit()
		if 0 < len(mns["super_awaken"]):
			for v in mns["super_awaken"]:
				self.c.execute('INSERT INTO mns_super_awaken (`NO`, `AWAKEN`) VALUES (%s, %s)', (mns["no"], v))
				self.conn.commit()
	
	# モンスターの更新
	def mnsUpdate(self, mns):
		self.c.execute('UPDATE mns SET `NAME`=%(name)s, MAIN_ATTRIBUTE=%(main_attribute)s, SUB_ATTRIBUTE=%(sub_attribute)s,\
			`RARE`=%(rare)s, `COST`=%(cost)s, ASSIST=%(assist)s, HP=%(hp)s, ATK=%(atk)s, RECOVER=%(recover)s, `SKILL`=%(skill)s,\
			SKILL_TURN=%(skill_turn)s, SKILL_MAX_TURN=%(skill_max_turn)s, LEADER_SKILL=%(leader_skill)s,\
			SUPER_HP=%(super_hp)s, SUPER_ATK=%(super_atk)s, SUPER_RECOVER=%(super_recover)s WHERE `NO`=%(no)s ', mns)
		self.conn.commit()
		if 0 < len(mns["type"]):
			# 数が増えたり減ったりすることも考えられるので、DELETEしてからが難しくない
			self.c.execute('DELETE FROM mns_type WHERE `NO`=%(no)s ', mns)
			for v in mns["type"]:
				self.c.execute('INSERT INTO mns_type (`NO`, `TYPE`) VALUES (%s, %s)', (mns["no"], v))
				self.conn.commit()
		if 0 < len(mns["awaken"]):
			self.c.execute('DELETE FROM mns_awaken WHERE `NO`=%(no)s ', mns)
			for v in mns["awaken"]:
				self.c.execute('INSERT INTO mns_awaken (`NO`, `AWAKEN`) VALUES (%s, %s)', (mns["no"], v))
				self.conn.commit()
		if 0 < len(mns["super_awaken"]):
			self.c.execute('DELETE FROM mns_super_awaken WHERE `NO`=%(no)s ', mns)
			for v in mns["super_awaken"]:
				self.c.execute('INSERT INTO mns_super_awaken (`NO`, `AWAKEN`) VALUES (%s, %s)', (mns["no"], v))
				self.conn.commit()
	
	# スキルターンのみの更新
	def skillUpdate(self, mns):
		# DBの古いデータ取得
		print(mns)
		print(mns["no"])
		sql = 'SELECT `NO`, `NAME`, SKILL_TURN, SKILL_MAX_TURN FROM mns WHERE `NO` = ' + str(mns["no"])
		self.c.execute(sql)
		#self.c.execute('SELECT `NO`, `NAME`, SKILL_TURN, SKILL_MAX_TURN FROM mns WHERE `NO` = %(no)s', mns) <-なぜかascii bugになる
		result = self.c.fetchall()
		if 0 < len(result) and None == result[0][2]:
			print('update No. ' + str(mns["no"]) + ': ' + mns["name"] + ', turn: ' + str(result[0][2]) + ', max_turn: ' + str(result[0][3]))
			self.c.execute('UPDATE mns SET SKILL_TURN=%(skill_turn)s, SKILL_MAX_TURN=%(skill_max_turn)s WHERE `NO`=%(no)s ', mns)
			self.conn.commit()

	#進化情報のみの登録
	def evolveRegister(self, mns):
		if 0 < len(mns['evolve']):
			for v in mns['evolve']:
				print(v)
				self.c.execute('SELECT `NO`, `NAME` FROM mns WHERE `NO` = %(no)s', mns)
				result = self.c.fetchall()
				print(result)
				if 0 == len(result):
					self.c.execute('INSERT INTO evolve (BEFORE_NO, AFTER_NO, EVOLVE_NAME) VALUES (%(before_no)s, %(after_no)s, %(evolve_name)s)', v)
					self.conn.commit()

	# 接続を閉じる
	def __del__(self):
		self.c.close
		self.conn.close