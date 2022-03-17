<?php
	require_once($_SERVER["DOCUMENT_ROOT"]."/nutrient_quiz/nutrient.class.php");
	$standard = nutrient::standardNutrient();
	$foods = nutrient::foods();
?>
<DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="必要な栄養素を獲得できる食材の知識をつけられます。">
	<meta name="keywords" content="カロリー,栄養管理,栄養素">
	<script src="../jq.js"></script>
	<link rel="stylesheet" href="quiz.css" type="text/css">
	<link rel="shortcut icon" href="../favicon.ico" type="image/vnd.microsoft.icon">
	<title>栄養クイズ</title>
</head>
<body>
	<header>
		<h1><a href="./">栄養クイズ</a></h1>
		<p>優れた食品の栄養素を記憶するために<br>問題を解きましょう！</p>
		<div id="hide-toggle-button" class="rotate">根拠とするデータを表示</div>
		<div id="hide-box">
			<h4>成人の摂取量(1日分)</h4>
			<dl id="standard-nutrient">
				<?php
					foreach ($standard as $nutrient) {
						echo "<dt>${nutrient["label"]}</dt><dd id=\"${nutrient["name"]}\" data-label=\"${nutrient["label"]}\" data-limit=\"${nutrient["limit"]}\" data-unit=\"${nutrient["unit"]}\" data-need=\"${nutrient["need"]}\">${nutrient["need"]} ${nutrient["unit"]}</dd>";
					}
				?>
			</dl>
			<h4>登録されている食材・食べ物</h4>
			<div id="foods">
				<?php
					foreach ($foods as $food) {
						echo "<p data-food=".json_encode($food, JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE).">${food["name"]}</p>";
					}
				?>
			</div>
		</div>
	</header>
	<main>
		<!-- 問題文、回答ボタン、答えを表示。回答ボタンを押したら答えを出す。次の問題ボタンを押したらすぐに次の問題　-->
	</main>
	<footer>
		<p></p>
		<script src="quiz.js"></script>
	</footer>
</body>
</html>