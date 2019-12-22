# -*- coding: utf-8 -*-
import os
from PIL import Image
import MySQLdb
# i cannot use this library
# import pytesseract

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pazdra_imgcut
# python cutimg3.py

# you want to read image (shuugo)
lst_img = {}
width = 99 #max645
height = 99 #max945
x = 11
y = 604 #height is 945
y_chosei = 343
direct = r'C:\xampp\htdocs\revertra\revertra_wksp\tools\pazdra_imgcut'

filer = os.listdir(direct)
a = 0
for f in filer:
	if ('cutimg3.py' != f and 'php_ary.txt' != f):
		lst_img[a] = f
		a += 1

# read image -> read monster name, ary for php
for i in lst_img:
	img_nm = lst_img[i]
	print(img_nm)
	src = Image.open(img_nm)
	print(src.size)
	ybest = src.size[1] - y_chosei
	icon_position = (x, ybest, x+width, ybest+height)
	cutted = src.crop(icon_position)
	cutted.save('c'+img_nm, 'JPEG')
	# str = pytesseract.image_to_string(src, lang="jpn")
	# str = pytesseract.image_to_string(src)
	# print(str)

# databaseにデータがある場合、ファイルを生成して登録しやすくする
conn = MySQLdb.connect(user='root',passwd='root',host='localhost',db='padmns',charset='utf8mb4')
if None != conn:
	c = conn.cursor()
	rtn = ''
	for i in lst_img:
		img_number = lst_img[i][ : lst_img[i].find('.')]
		if img_number.isdecimal() == False:
			continue
		c.execute('SELECT `NO`, `NAME`, `RARE` FROM mns WHERE `NO` = %s', (img_number,))
		result = c.fetchall()
		if 0 < len(result):
			print(result)
			rtn += f'array("no"=> {result[0][0]}, "nm"=> "{result[0][1]}", "rr"=> {result[0][2]}, "pc"=> 2),\r\n'
		else:
			print('this number is nothing in db: ' + img_number)
			rtn += f'array("no"=> {img_number}, "nm"=> "", "rr"=> 6, "pc"=> 2),\r\n'
		if '' != rtn:
			# file save
			with open('php_ary.txt', 'w', newline='', encoding='utf8') as f:
				f.write(rtn)
		c.close
		conn.close