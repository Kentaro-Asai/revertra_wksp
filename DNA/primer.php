<?php
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="あなたのPCRプライマー設計を支援します。">
	<meta name="keywords" content="Tm値,primer,プライマー設計,PCR">
	<link rel="stylesheet" href="primer.css" type="text/css">
	<script src="../jq.js"></script>
	<title>プライマー評価</title>
</head>
<body>
	<header>
		<h1>プライマー設計</h1>
		<p>
			あなたの設計したプライマーの評価をします。<br>
			または、あなたがプライマーの設計をする際の支援をします。<br>
			評価項目は、GC含量、Tm値、回文配列(primer DNA自身で構造をとらないか、primer dimer)、Template DNAの周辺配列にプライマーに似通った配列がないか確認します。<br>
			非特異的結合や、PCRしても増幅がイマイチな結果になることを予防することができます。<br>
			<a href="index.php">DNA相補鎖生成</a>
		</p>
	</header>
	<main>
		<section>
			<h4>周辺DNA塩基配列(入力無しでも可)</h4>
			<p id="around-dna">
				<textarea></textarea>
				<button id="complement-around-dna">逆相補鎖にする</button>
				<span>0bp</span>
			</p>
		</section>
		<section>
			<h4>プライマーの入力</h4>
			<ul id="primer_box">
				<li>
					<span>primer name</span><input type="text" id="primer1nm" value="プライマー配列(1)">
					<span>primer sequence</span><input type="text" id="primer1sq" value="">
				</li>
			</ul>
			<p class="btn_box"><button id="insert_primer_btn">プライマーの追加</button></p>
		</section>
		<p><button id="done">プライマーの評価</button></p>
		<output>
			ここに入力されたプライマーの評価が表示されます。
		</output>
	</main>
	<footer>
		<small>Copyright &commat; Kentaro Asai 2019</small>
	</footer>
	<script src="./primer.js"></script>
</body>
</html>