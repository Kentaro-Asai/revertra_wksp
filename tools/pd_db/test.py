import requests

for v in range(5317, 5326):
	r = requests.get('https://pd.appbank.net/m' + str(v))
	print(r.status_code)
	if 200 == r.status_code:
		print("yes!!")