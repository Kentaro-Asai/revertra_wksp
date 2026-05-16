import multiprocessing as mp
from concurrent.futures import ThreadPoolExecutor
import time
import os

# cd C:\xampp\htdocs\revertra\revertra_wksp\tools
# python mp.py
cpu_cnt = 2 #mp.cpu_count()
tasks = ['D:\\av\\良作', 'E:\\BackUp E\\BackUpFiles\\my music', 'E:\\BackUp E\\BackUpFiles\\picture', 'E:\\BackUp E\\BackUpFiles\\video\\av\\DMM4']
tasks_per_cpu = []
for i in range(cpu_cnt): tasks_per_cpu.append([])
for i in range(0, len(tasks), cpu_cnt):
	for c in range(cpu_cnt):
		if i+c < len(tasks): tasks_per_cpu[c].append(tasks[i+c])

def handle_threads(few_tasks):
	with ThreadPoolExecutor(max_workers=4) as executor:
		results = list(executor.map(os.listdir, few_tasks))
		return results

def handle_mp():
	start_time = time.time()
	with mp.Pool(cpu_cnt) as pool:
		results = pool.map(handle_threads, tasks_per_cpu)
		#print(results)
		take_time = time.time() - start_time
		print(f"Threads Time: {take_time}")

def drive_threads():
	start_time = time.time()
	with ThreadPoolExecutor(max_workers=4) as executor:
		results = list(executor.map(os.listdir, tasks))
		ret = ''
		for i in results:
			ret += str(i)
	take_time = time.time() - start_time
	print(f"Threads Time: {take_time}")

def drive_mp():
	start_time = time.time()
	with mp.Pool(processes=4) as pool:
		ret = ''
		results = pool.map(os.listdir, tasks)
		for i in results:
			ret += str(i)
	take_time = time.time() - start_time
	print(f"MP Time: {take_time}")

def drive_ary():
	start_time = time.time()
	ret= ''
	for path in tasks:
		res = os.listdir(path)
		ret += str(res)
	take_time = time.time() - start_time
	print(f"Ary Time: {take_time}")

if __name__ == "__main__":
	cpu_cnt = mp.cpu_count()
	print(f"CPU Count: {cpu_cnt}")
	drive_threads()
	drive_mp()
	drive_ary()
	handle_mp()
	