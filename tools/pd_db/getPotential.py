# coding: utf-8

from PIL import Image

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
# python getPotential.py

img = Image.open('./img_potential/Screenshot_20191202-160137.png')
#img.show()
wdh, hgt = img.size
print([wdh, hgt])

# 中心を求めます && 切り取り開始位置を決めます
potential_0 = [456, 1884]
potential_size = {"one":[66, 64], "two":[157, 64]}
potential_margin = 26
#453, 1883 -1949
#547
#639
for i in range(1, 6):
	cut_ori = potential_0[0] + (i - 1) * (potential_size["one"][0] + potential_margin)
	check_rgb = img.getpixel((\
		cut_ori + potential_size["one"][0] + int(potential_margin / 2),\
		potential_0[1] + int(potential_size["one"][1] / 2)\
	))
	print(check_rgb)
	if (54 < check_rgb[0] < 59 and 46 < check_rgb[1] < 51 and 33 < check_rgb[2] < 35):
		cut_val = (cut_ori, potential_0[1], cut_ori + potential_size["one"][0], potential_0[1] + potential_size["one"][1])
	else:
		cut_val = (cut_ori, potential_0[1], cut_ori + potential_size["two"][0], potential_0[1] + potential_size["two"][1])
	#横7、縦９になるように切り取ります
	print(cut_val)
	new_img = img.crop(cut_val)
	#保存します
	new_img.save('./img_potential/pot'+str(i)+'.jpg','JPEG')