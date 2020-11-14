<?php
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="簡易に性格を判定します。エニアグラムに関心をもつきっかけとなると思い作ってみました。">
	<meta name="keywords" content="性格診断,エニアグラム">
	<script src="../jq.js"></script>
	<link rel="stylesheet" href="index.css" type="text/css">
	<link rel="shortcut icon" href="../favicon.ico" type="image/vnd.microsoft.icon">
	<title>簡易性格診断</title>
</head>
<body>
	<header>
		<h1><a href="./">簡易性格診断</a></h1>
		<p>
			10位の質問であなたのタイプを診断します。<br>
			（判断基準は勝手な私の妄想です）
		</p>
	</header>
	<main>
		<output id="question-output"></output>
		<output id="result-output">
			<!-- 選んだ履歴と、得点結果を表示 -->
		</output>
	</main>
	<footer>作者はいい加減に作っていますので、参考程度にできるかどうかも怪しいです。真剣に勉強したいなら本買ってね。</footer>
	<script src="index.js"></script>
</body>
</html>