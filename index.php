<?php
require_once("websitelh/classes/ctr3.class.php");
$ob = new ctr3();
$atcs = $ob->mkatcls();
header("Content-type: text/html");
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="ゲーム攻略ソフトやwebアプリケーション、DNA解析ソフトを趣味で開発しています。開発環境の構築も紹介してみたり、いろいろ中途半端なサイトです。">
	<meta name="keywords" content="webプログラマ,日曜プログラマ,自作PC,DNA" />
	<link rel="stylesheet" href="websitelh/css/stylereset.css">
	<link rel="stylesheet" href="websitelh/css/hm.css">
	<title>ソフト開発趣味の部屋</title>
</head>
<body>
	<header>
		<h1><a href="index.php">浅井健太郎の趣味の部屋</a></h1>
		<p>便利ソフト詰め合わせにしていく方針です</p>
		<nav class="clearfix">
			<ul>
				<?= $ob->mklabels() ?>
			</ul>
		</nav>
	</header>
	<main class="clearfix">
		<ul id="side">
			<?= $ob->mksides() ?>
		</ul>
		<div id="atcl">
<?php
for($i=0; $i < count($atcs); $i++){
	echo "<article>";
	for($k=0; $k < count($atcs[$i]["ttl"]); $k++){
		echo "<h4>".$atcs[$i]["ttl"][$k]."</h4>";
		echo "<p>".$atcs[$i]["cts"][$k]."</p>";
	}
	echo "</article>";
}
?>
		</div>
	</main>
	<footer>
		<p>Copyright &commat; Kentaro Asai 2013</p>
	</footer>
	<script src="jq.js"></script>
	<script src="websitelh/js/hm2.js"></script>
</body>
</html>