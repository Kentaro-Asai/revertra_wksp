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
#rtn = ps.request(6832, 6888)
#mns_num_list = list(range(6832, 6888 +1))
#mns_num_list = list(range(3539, 3549, 2))
mns_num_list = [6892, 6893, 6894, 6895, 6896, 6897, 6898, 6899, 6900, 5639, 5641, 5647, 6889, 5654, 6890, 5653, 6891, 5640, 5644, 5645, 5648, 5652, 5655, 5658, 5661, 5664, 5665, 5643, 5650, 5651, 5657, 5646, 5649, 5659, 5660, 5662, 5663, 5666, 5667, 5669]
print(mns_num_list)
rtn = ps.request(mns_num_list, 0)
#rtn = ps.request(6345, 6349)

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
# 1. JSONファイルにデータを入れて、mysqlcon.jsでDBに登録
with open('scrapy.json', 'w', newline='', encoding='utf8') as f:
	json.dump(rtn, f, indent=2, ensure_ascii=False)
# 2. データベースに入れる
#con = connectSql.connectSql()
#for mns in rtn:
#	con.skillUpdate(mns)
#	con.evolveRegister(mns) #4701
#	con.mnsSelectRegister(mns)
	#print(mns)