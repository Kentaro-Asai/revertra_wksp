# coding: UTF-8
import MySQLdb

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
	
	# 接続を閉じる
	def __del__(self):
		self.c.close
		self.conn.close