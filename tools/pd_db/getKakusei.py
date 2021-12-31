# coding: UTF-8
import requests
from pyquery import PyQuery as pq
import os

# 覚醒スキルの画像ファイルに名前をつける（本当は画像のダウンロードからすべきだったわー）

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
# python getKakusei.py

files = os.listdir('./img/')

for number in range(1, 87 + 1):
	r = requests.get('https://pd.appbank.net/kakusei/' + str(number))
	if 200 == r.status_code:
		d = pq(r.text)
		aw_nm = d('h2').text()
		if " " in aw_nm:
			aw_nm = aw_nm[: aw_nm.find(" ")]
		hs = d('h2 > img').attr('src')
		# https://img-pd.appbank.net/i/images/askill_68.png
		file_nm = hs[hs.rfind('/')+1 :]
		print(file_nm, aw_nm)
		#画像保存のコード(未デバッグ)
		#with open('./img/' + file_nm, 'wb') as f:
		#	img_r = requests.get(hs)
		#	f.write(img_r.content)
		if os.path.exists('./img/' + file_nm):
			os.rename('./img/' + file_nm, './img/' + aw_nm + '.png')
			print('changed file name')
		else:
			print('file not exist. ' + file_nm + ' '+ aw_nm)
	else:
		print(f'kakusei/{number}: {r.status_code}, cannot read!!')