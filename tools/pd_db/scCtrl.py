# coding: utf-8
import sys
import csv
import json
import scraper
#import connectSql
import connectSql2 as connectSql

# this file saves local DB to get data from scraping

#	cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
#	python scCtrl.py
# input ary to get monster data
ps = scraper.PdScraper()
rtn = ps.request(5841, 5846)
# 登録済 一覧
# 310~397, 597, 854~895, 985~1000, 1191~1201, 1215,1225,1242,1244, 1555~1561, 1601~1658, 1738~1748, 1784~1804
# 1814, 1838~1889, 1901~1981, 2006~2194, 2205~2298, 2314~2571,   2601~2868, 2891~2989, 3004~4200,
# スキル登録済み
# 4015,4016, 4576~5564, 5579~5607,5612~5616,5630~5774(5636,5641,5736 is null)
"""
# write csv
with open('pd.csv', 'w', newline='') as f:
	writer = csv.writer(f)
	writer.writerows(rtn)
"""
with open('scrapy.json', 'w', newline='', encoding='utf8') as f:
	json.dump(rtn, f, indent=2, ensure_ascii=False)
# データベースに入れる
#con = connectSql.connectSql()
#for mns in rtn:
	#con.skillUpdate(mns)
	#con.evolveRegister(mns) #4701
	#con.mnsSelectRegister(mns)
	#print(mns)