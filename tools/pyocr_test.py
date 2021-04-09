from PIL import Image
import sys

import pyocr
import pyocr.builders

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools
# python pyocr_test.py

tools = pyocr.get_available_tools()
if len(tools) == 0:
	print("No OCR tool found")
	sys.exit(1)

tool = tools[0]
print("Will use tool '%s'" % (tool.get_name()))

langs = tool.get_available_languages()
print("Available languages: %s" % ", ".join(langs))
lang = langs[0]
print("Will use lang '%s'" % (lang))

txt = tool.image_to_string(Image.open("./Screenshot_20210324-153900.png"), lang="jpn", builder=pyocr.builders.TextBuilder(tesseract_layout=6))

print(txt)
