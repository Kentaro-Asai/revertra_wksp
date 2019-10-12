# -*- coding: utf-8 -*-
import os
from PIL import Image
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
	if ('cutimg3.py' != f):
		lst_img[a] = f
		a += 1

# read image -> read monster name, ary for php
for i in lst_img:
	img_nm = lst_img[i]
	print(img_nm)
	src = Image.open(img_nm)
	print(src.size)
	ybest = src.size[1] - y_chosei
	icon = (x, ybest, x+width, ybest+height)
	cutted = src.crop(icon)
	cutted.save('c'+img_nm, 'JPEG')
	# str = pytesseract.image_to_string(src, lang="jpn")
	# str = pytesseract.image_to_string(src)
	# print(str)
