# coding: utf-8
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

	# モンスターの登録
	def mnsRegister(self, mns):
		self.c.execute('INSERT INTO mns VALUES (%(no)s, %(name)s, %(main_attribute)s, %(sub_attribute)s,\
		%(rare)s, %(cost)s, %(assist)s, %(hp)s, %(atk)s, %(recover)s, %(skill)s, %(leader_skill)s,\
		%(super_hp)s, %(super_atk)s, %(super_recover)s)', mns)
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

	# 接続を閉じる
	def __del__(self):
		self.c.close
		self.conn.close