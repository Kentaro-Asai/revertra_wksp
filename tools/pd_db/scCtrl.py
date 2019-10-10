# coding: utf-8
import sys
import csv
import json
import scraper
import connectSql

#	cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
#	python scCtrl.py
# input ary to get monster data
ps = scraper.PdScraper()
rtn = ps.request(3004, 3600)
# 310~397, 597, 854~895, 985~1000, 1191~1201, 1215,1225,1242,1244, 1555~1561, 1601~1658, 1738~1748, 1784~1804
# 1814, 1838~1889, 1901~1981, 2006~2194, 2205~2298, 2314~2571, 2601~2868, 2891~2989, 3004~
"""
# write csv
with open('pd.csv', 'w', newline='') as f:
	writer = csv.writer(f)
	writer.writerows(rtn)
"""
#with open('pd.json', 'w', newline='', encoding='utf8') as f:
#	json.dump(rtn, f, indent=2, ensure_ascii=False)
# データベースに入れる
con = connectSql.connectSql()
for mns in rtn:
	con.mnsRegister(mns)