from PIL import Image
import os

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools\steroid
# python img_cut.py

# you want to read image (shuugo)
lst_img_names = []
direct = r'C:\xampp\htdocs\revertra\revertra_wksp\home\images\steroid'

files = os.listdir(direct)
for f in files:
	print(f[0])
	if ('.jpg' == f[(len(f) - 4):]) and 'r' != f[0]:
		lst_img_names.append(f)

for img_name in lst_img_names:
	img = Image.open(direct + '/' + img_name)
	#img.show()
	wdh, hgt = img.size
	#print(wdh)
	#print(hgt)
	if wdh < hgt:
		img = img.rotate(-90, expand=True)
		wdh, hgt = img.size
	#切り取り位置を決めます
	cutting_length = wdh - (hgt * 2 - round(hgt / 1280 * 100))
	cropped_img = (cutting_length, 0, wdh - cutting_length, hgt)
	#切り取ります && 調整
	new_img = img.crop(cropped_img).rotate(180, expand=True).resize((590, 320))
	#保存します
	new_img.save(f'{direct}/r_{img_name}','JPEG')
	print(f'{img_name[:4]}年{img_name[4:6]}月{img_name[6:8]}日<br><img src="home/images/steroid/r_{img_name}"><br><br>')
