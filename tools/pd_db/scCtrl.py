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
rtn = ps.request(5630, 5669)
# 登録済 一覧
# 310~397, 597, 854~895, 985~1000, 1191~1201, 1215,1225,1242,1244, 1555~1561, 1601~1658, 1738~1748, 1784~1804
# 1814, 1838~1889, 1901~1981, 2006~2194, 2205~2298, 2314~2571, 2601~2868, 2891~2989, 3004~4452, 4576~5564, 5579~5607
# スキル登録済み
# 5612~5616,5630~5669(5636,5641 is null)
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
	# 登録か更新の選択が必要
	con.mnsRegister(mns)
	#con.mnsUpdate(mns)
	#print(mns)