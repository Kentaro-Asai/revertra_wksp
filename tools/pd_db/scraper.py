# coding: UTF-8
import requests
from pyquery import PyQuery as pq
# cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
# python scCtrl.py
class PdScraper:

	def debugMethod(self, anyd):
		if (type(anyd) is str):
			print(f"string: {anyd}")
		elif (type(anyd) is int):
			print(f"int: {anyd}")
		elif (type(anyd) is list):
			print("list")
			for v in anyd:
				print(f"list of: {v}")
		elif (type(anyd) is float):
			print(f"float: {anyd}")
		elif (type(anyd) is tuple):
			for v in anyd:
				print(f"tuple of: {v}")
		elif (type(anyd) is dict):
			for k, v in anyd.items():
				print(f"dict of {k}: {v}")
		else:
			print(type(anyd))
		
	# 「,」を外す
	def explodeComma(self, html_txt):
		#rint("html_txt: "+html_txt)
		while 0 < html_txt.find(","):
			html_txt = html_txt[: html_txt.find(",")] + html_txt[html_txt.find(",")+1 :]
		if 0 < html_txt.find(" "):
			html_txt = html_txt[: html_txt.find(" ")]
		try:
			rtn = int(html_txt)
		except ValueError:
			rtn = 0
			print("function explodeComma: " + html_txt)
		return rtn

	def getAttribute(self, html_str):
		rtn = ["", ""]
		#print(html_str)
		hs = html_str[ html_str.find("i class=\"")+7 : html_str.find("\"></i>")]
		if (0 < hs.find("fire")):
			rtn[0] = "火"
		elif (0 < hs.find("water")):
			rtn[0] = "水"
		elif (0 < hs.find("wood")):
			rtn[0] = "木"
		elif (0 < hs.find("light")):
			rtn[0] = "光"
		elif (0 < hs.find("dark")):
			rtn[0] = "闇"
		# 副属性取得
		hs = html_str[ html_str.find("\"></i>")+6 : ]
		if (0 < hs.find("fire")):
			rtn[1] = "火"
		elif (0 < hs.find("water")):
			rtn[1] = "水"
		elif (0 < hs.find("wood")):
			rtn[1] = "木"
		elif (0 < hs.find("light")):
			rtn[1] = "光"
		elif (0 < hs.find("dark")):
			rtn[1] = "闇"
		else:
			rtn[1] = "無"
		return rtn

	def getType(self, html_str):
		rtn = []
		hs = html_str
		while 1 < len(hs):
			find_chars = {"type": hs.find("タイプ"), "mns": hs.find("モンスター")}
			if (-1 != find_chars["type"] and -1 != find_chars["mns"]):
				# find both
				if (find_chars["type"] < find_chars["mns"]):
					rtn.append(hs[ : find_chars["type"]].strip(" "))
					hs = hs[find_chars["type"]+3 : ].strip(" ")
				else:
					rtn.append(hs[ : find_chars["mns"]].strip(" "))
					hs = hs[find_chars["mns"]+5 : ].strip(" ")
			elif 0 < find_chars["type"]:
				# find only type
				rtn.append(hs[ : find_chars["type"]].strip(" "))
				hs = hs[find_chars["type"]+3 : ].strip(" ")
			elif 0 < find_chars["mns"]:
				# find only monster
				rtn.append(hs[ : find_chars["mns"]].strip(" "))
				hs = hs[find_chars["mns"]+5 : ].strip(" ")
			else:
				print("input type error: "+hs)
				break
		return rtn

	def createMns(self, html_txt):
		rtn = {\
			"no":0,	"name":"",\
			"main_attribute":"", "sub_attribute":"無",\
			"rare":7,	"cost":25,\
			"assist":True,\
			"type":[], "evolve": [],\
			"hp":0, "atk":0, "recover":0,\
			"super_hp":0, "super_atk":0, "super_recover":0,\
			"awaken": [], "super_awaken": [],\
			"skill": "", "skill_turn":0, "skill_max_turn":0, "leader_skill": "",\
		}
		d = pq(html_txt)
		hs = d('.monster h2').text()
		rtn["no"] = int(hs[(hs.find("No.")+3) : (hs.find(" "))])
		rtn["name"] = hs[(hs.find(" ")+1) : ]
		hs = d('.monster > div > img.image-responsive + p').outerHtml()
		[rtn["main_attribute"], rtn["sub_attribute"]] = self.getAttribute(hs)
		hs = d('.monster > div > img.image-responsive + p').text()
		rtn["rare"] = int(hs[ hs.find("★")+1 : hs.find(" / コスト")])
		rtn["cost"] = int(hs[ hs.find(" / コスト")+7 : hs.find(" / アシスト:")])
		#if rtn["cost"] > 1000:
		#	print(str(rtn["no"])+": cost->"+str(rtn["cost"]))
			#rtn["cost"] = 70
		#rtn["assist"] = hs[hs.find(" / アシスト:")+9 : ] == "◯"
		rtn["assist"] = hs[-1 : ] == "◯"
		rtn["type"] = self.getType(d('.monster > div:nth-child(2) > p.icon-mtype').text())
		rtn["hp"] = self.explodeComma(d('.table-monster-status tr:nth-child(2) > td:nth-child(3)').text())
		rtn["atk"] = self.explodeComma(d('.table-monster-status tr:nth-child(2) > td:nth-child(4)').text())
		rtn["recover"] = self.explodeComma(d('.table-monster-status tr:nth-child(2) > td:nth-child(5)').text())
		if d('.table-monster-status tr:nth-child(4)').text():
			rtn["super_hp"] = self.explodeComma(d('.table-monster-status tr:nth-child(4) > td:nth-child(3)').text())
			rtn["super_atk"] = self.explodeComma(d('.table-monster-status tr:nth-child(4) > td:nth-child(4)').text())
			rtn["super_recover"] = self.explodeComma(d('.table-monster-status tr:nth-child(4) > td:nth-child(5)').text())
		indent_div = 3
		while indent_div < 10:
			title = d(f'.monster > div:nth-child({indent_div}) > h3').text()
			if "スキル" == title:
				rtn["skill"] = d(f'.monster > div:nth-child({indent_div}) > p:nth-child(3)').text()
				hs = d(f'.monster > div:nth-child({indent_div}) > p:nth-child(2) > strong').text()
				rtn["skill_turn"] = int(hs[hs.find("：")+1 : hs.find("（")])
				rtn["skill_max_turn"] = int(hs[hs.find("（")+1 : hs.find("）")])
			elif "リーダースキル" == title:
				rtn["leader_skill"] = d(f'.monster > div:nth-child({indent_div}) > p:nth-child(3)').text()
			elif '覚醒スキル' == title:
				i = 1
				awaken_txt = d(f'.monster > div:nth-child({indent_div}) li:nth-child({i}) div.name').text()
				while("" != awaken_txt):
					rtn["awaken"].append(awaken_txt)
					i += 1
					awaken_txt = d(f'.monster > div:nth-child({indent_div}) li:nth-child({i}) div.name').text()
			elif '超覚醒スキル' == title:
				i = 1
				super_awaken_txt = d(f'.monster > div:nth-child({indent_div}) li:nth-child({i}) div.name').text()
				while("" != super_awaken_txt):
					rtn["super_awaken"].append(super_awaken_txt)
					i += 1
					super_awaken_txt = d(f'.monster > div:nth-child({indent_div}) li:nth-child({i}) div.name').text()
			elif '進化合成' == title or '究極進化' == title:
				for v in d(f'.monster > div:nth-child({indent_div}) table'):
					dmin = pq(v)
					#tr:nth-child(2) > .monster > a
					after_no = int(dmin('a').attr('href')[2:])  # href="/m4702"
					if '究極進化' == title:
						evolve_name = '究極進化'
					elif 0 < len(rtn["awaken"]) and "覚醒アシスト" == rtn["awaken"][0]:
						evolve_name = "アシスト進化"
					else:
						evolve_name = "進化"
					rtn["evolve"].append({"after_no": after_no, "before_no": rtn["no"], "evolve_name": evolve_name})
			indent_div += 1
		return rtn

	def request(self, start_num, end_num):
		ary = range(start_num, end_num + 1) # end is not entering, because +1
		rtn = []
		for v in ary:
			r = requests.get('https://pd.appbank.net/m' + str(v))
			if 200 == r.status_code:
				mnsDict = self.createMns(r.text)
				rtn.append(mnsDict)
			else:
				print(f'm{v}: {r.status_code}, cannot read!!')
		print(len(rtn))
		return rtn

