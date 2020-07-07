import requests
import sys

#	cd C:\xampp\htdocs\revertra\revertra_wksp\tools\pd_db
#	python test.py

sys.getdefaultencoding()
mylist = list(range(1,5))
mylist += list(range(6,10))
#print([**mylist])
print([*mylist, 5])

#for v in range(5317, 5326):
#	r = requests.get('https://pd.appbank.net/m' + str(v))
#	print(r.status_code)
#	if 200 == r.status_code:
#		print("yes!!")