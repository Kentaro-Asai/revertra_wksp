# -*- coding: utf-8 -*-
"""
Created on Wed Feb 22 22:24:52 2017

@author: kent
"""

from PIL import Image

img = Image.open('kaoPhoto.jpg')
#img.show()
wdh, hgt = img.size
print(wdh)
print(hgt)

# 中心を求めます && 切り取り開始位置を決めます
center = (wdh/2-420, hgt/2-540, wdh/2+420, hgt/2+540) 
#横7、縦９になるように切り取ります
new_img = img.crop(center)
#保存します
new_img.save('rireki79.jpg','JPEG')