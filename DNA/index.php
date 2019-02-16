<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="あなたのDNA塩基配列を逆相補鎖に変換します">
	<meta name="keywords" content="DNA,塩基配列,reverse,complement">
	<link rel="stylesheet" href="verify.css" type="text/css">
	<title>逆相補鎖に変換</title>
</head>
<body>
	<div id="container">
		<header>
			<h1>逆相補鎖に変換</h1>
			<p>
				入力されたDNA塩基配列を逆相補鎖にします。<br>
				<a href="primer.php">プライマーの設計</a>
			</p>
		</header>

		<div class="img-box"><img src="rev_comp.svg" width="475" height="101" alt="逆相補鎖のイメージ"></div>

		<section id="output-data">
			<div>
				<h6>入力されたDNA塩基配列(5'-3'):</h6>
				<p id="inputed_text"></p>
				<p>長さ: <span id="inputed_text_length"></span>bp, GC含量: <span id="inputed_GC_contents"></span>(％)</p>
			</div>
			<div>
				<h5>入力されたDNA塩基配列(5'-3'):</h6>
				<p id="outputed_text"></p>
				<p>長さ: <span id="outputed_text_length"></span>bp <button id="to-clipboard">配列をコピー</button></p>
			</div>
		</section>
		
		<section class="tools">
			<h3>逆相補鎖にしたい配列を入れてください</h3>
			<textarea id="input-text"></textarea>
			<button id="input-btn">逆相補鎖を表示</button>
		</section>
	
		<table class="usage">
			<caption>使える文字</caption>
			<thead>
				<tr><th>入力可能文字</th>	<th>説明</th></tr>
			</thead>
			<tbody>
				<tr><td>A</td>				<td>adenine</td></tr>
				<tr><td>T</td>				<td>thymine</td></tr>
				<tr><td>G</td>				<td>guanine</td></tr>
				<tr><td>C</td>				<td>cytosine</td></tr>
				<tr><td>N (A, T, G, C)</td>	<td>any</td></tr>
				<tr><td>W (A, T)</td>		<td>weak: H double bond</td></tr>
				<tr><td>S (G, C)</td>		<td>strong: H triple bond</td></tr>
				<tr><td>R (A, G)</td>		<td>purine</td></tr>
				<tr><td>Y (T, C)</td>		<td>pyrimidine</td></tr>
				<tr><td>M (A, C)</td>		<td>amino</td></tr>
				<tr><td>K (T, G)</td>		<td>keto</td></tr>
				<tr><td>B (T, G, C)</td>	<td>not A</td></tr>
				<tr><td>V (A, G, C)</td>	<td>not T</td></tr>
				<tr><td>H (A, T, C)</td>	<td>not G</td></tr>
				<tr><td>D (A, T, G)</td>	<td>not C</td></tr>
			</tbody>
		</table>
	</div>
	<footer><p>Copyright &commat; Kentaro Asai 2013</p></footer>
	<script src="../jq.js"></script>
	<script src="./dna.js"></script>
</body>
</html>