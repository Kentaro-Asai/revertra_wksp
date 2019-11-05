# coding: utf-8

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools
# python type_image.py

from PIL import Image
import math

list_type = ["神", "ドラゴン", "悪魔", "マシン", "バランス", "攻撃", "体力", "回復", "進化用", "覚醒用", "強化合成用", "売却用"]
yoko_kosu = 6
goukei = 12
cut_size = {"x": 71, "y": 71}

src = Image.open('type.png')
print(src.size)
margin = {\
	"x": math.floor((src.size[0] - cut_size["x"] * yoko_kosu) / (yoko_kosu - 1)),\
	"y": (src.size[1] - cut_size["y"] * math.ceil(goukei / yoko_kosu) ) / (math.ceil(goukei / yoko_kosu) - 1)\
}
print(margin)
for i in range(1, goukei + 1):
	if i <= yoko_kosu:
		icon = (1 + (cut_size["x"] + margin["x"]) * (i - 1), 1, cut_size["x"] + (cut_size["x"] + margin["x"]) * (i- 1), cut_size["y"])
	else:
		icon = (1 + (cut_size["x"] + margin["x"]) * (i - yoko_kosu - 1), 1 + margin["y"] + cut_size["y"], cut_size["x"] + (cut_size["x"] + margin["x"]) * (i  - yoko_kosu - 1), 2*cut_size["y"] + margin["y"])
	cutted = src.crop(icon)
	cutted.save('./img_type/' + list_type[i - 1] + '.png', 'PNG')