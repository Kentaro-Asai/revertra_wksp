<?php
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="あなたの労働時間のメモを支援します。自由に勤務時間を決められるヒトにとっては便利かも。">
	<meta name="keywords" content="勤務時間,休憩時間,労働時間,時間管理">
	<script src="../jq.js"></script>
	<link rel="stylesheet" href="work.css" type="text/css">
	<title>勤務時間管理メモ</title>
</head>
<body>
	<header>
		<h1>労働時間管理メモ</h1>
		<p>
			休憩時間や労働開始時間を自由に決められるお仕事をしているヒトには、便利なWebアプリケーションです。（そんなヒトどれだけいるのかな？）<br>
			Webブラウザのwebストレージ(ローカルストレージ)にデータが格納されますので、端末ごとにみられるデータが決まり、他のデバイスで見ることはできません。<br>
			過去2ヶ月分のデータを蓄積します。
		</p>
	</header>
	<main>
		<section class="today">
			<!-- 高度な設定をあとで追加したい -->
			<div>
				<p id="msg"></p>
				<p id="start"></p>
				<p id="work_time">00:00:00</p>
				<p id="rest_time">00:00:00</p>
			</div>
			<div id="btn_box">
				<!-- 勤務開始、休憩、勤務終了、やっぱり勤務開始、別の勤務開始 -->
				<button id="work_btn">勤務開始</button>
			</div>
		</section>
		<section class="tbl">
			<p>
				<input id="reg_time_btn1" type="button" value="登録された時間を変更" >
				<span></span>
			</p>
			<table>
				<thead>
					<tr>
						<th>日付</th>
						<th class="changable">開始</th><th class="changable">終了</th><th class="changable">勤務時間</th>
						<th>仕事</th><th>休憩</th><th class="changable">コメント</th>
					</tr>
				</thead>
				<tbody id="tbl_data">
					<tr><td colspan="7">まだ登録されていません。</td></tr>
				</tbody>
				<thead>
					<tr>
						<th>日付</th>
						<th class="changable">開始</th><th class="changable">終了</th><th class="changable">勤務時間</th>
						<th>仕事</th><th>休憩</th><th class="changable">コメント</th>
					</tr>
				</thead>
			</table>
			<p>
				<span></span>
				<input id="reg_time_btn2" type="button" value="登録された時間を変更" >
			</p>
		</section>
		<section id="total_tbl" class="tbl"></section>
	</main>
	<footer>
		<small>Copyright &commat; Kentaro Asai 2019</small>
	</footer>
	<script src="./work.js"></script>
</body>
</html>