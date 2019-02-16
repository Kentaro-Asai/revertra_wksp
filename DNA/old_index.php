<?php //いろいろつけれたら良い

	$ari = false;

	$dna=null;
	if(isset($_POST["dna"])){
		$dna = $_POST["dna"];
		$dna = htmlspecialchars($dna, ENT_QUOTES, "UTF-8");
		$inputed = '';
		$ndna='';
		$dna = strtoupper($dna);
		$len1 = mb_strlen($dna);
		for($i=0; $i < $len1; $i++){ //($i=0, $len2=0; $i < $len1-$len2; $i++){
			switch(mb_substr($dna, $i, 1)){
				case 'A':
				 $inputed .= 'A';
				 $ndna .= 'T';
				 break;
				case 'T':
				 $inputed .= 'T';
				 $ndna .= 'A';
				 break;
				case 'G':
				 $inputed .= 'G';
				 $ndna .= 'C';
				 break;
				case 'C':
				 $inputed .= 'C';
				 $ndna .= 'G';
				 break;
				case 'R':
				 $inputed .= 'R';
				 $ndna .= 'Y';
				 break;
				case 'Y':
				 $inputed .= 'Y';
				 $ndna .= 'R';
				 break;
				case 'M':
				 $inputed .= 'M';
				 $ndna .= 'K';
				 break;
				case 'K':
				 $inputed .= 'K';
				 $ndna .= 'M';
				 break;
				case 'B':
				 $inputed .= 'B';
				 $ndna .= 'V';
				 break;
				case 'H':
				 $inputed .= 'H';
				 $ndna .= 'D';
				 break;
				case 'V':
				 $inputed .= 'V';
				 $ndna .= 'B';
				 break;
				case 'D':
				 $inputed .= 'D';
				 $ndna .= 'H';
				 break;
				case 'W':
				 $inputed .= 'W';
				 $ndna .= 'W';
				 break;
				case 'S':
				 $inputed .= 'S';
				 $ndna .= 'S';
				 break;
				case 'N':
				 $inputed .= 'N';
				 $ndna .= 'N';
				 break;
				default:
//				 $i--;
//				 $len2++;
//				 $dna = substr_replace($dna, "", $i, 1);
			}
		}
		$ndna = strrev($ndna);
		$len1 = mb_strlen($inputed);
//		$len1 = mb_strlen($dna);
		$len2 = mb_strlen($ndna);
		$inputed = chunk_split($inputed, 10, " ");
		$ndna = chunk_split($ndna, 10, " ");
//		$dna = chunk_split($dna, 10, " ");
		$inputed = chunk_split($inputed, 55, "<br />");
		$ndna = chunk_split($ndna, 55, "<br />");
//		$dna = chunk_split($dna, 55, "<br />");
		$ari = true;
	}
?>
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
		</header>
	
		<div class="subti">
			<p>入力されたDNA塩基配列を逆相補鎖にします。
				<br />※記号などを入れると、思わぬ動きをしますので注意してください。＾＾；</p>
		</div>
<?php
	if($ari == true){
?>
		<div class="clearfix">
			<div id="sp"></div>
			<div id="inp"><p>入力されたDNA塩基配列(5'-3'):<br /><br /><span><?php echo $inputed ?></span><br />長さ: <?php echo $len1 ?> bp</p></div>
			<div id="outp"><p>逆相補鎖(5'-3'): <br /><br /><span><?php echo $ndna ?></span><br />長さ: <?php echo $len2 ?> bp</p></div>
		</div>
<?php
	}else{ //最初の画面で生成される説明
?>
		<div align="center" style="margin:50"><img src="dnaseq.png" width="357" height="63" alt="逆相補鎖のイメージ"></div>
<?php
	}
?>
		<div id="fm_contain">
			<div id="fm_caption"><p>逆相補鎖にしたい配列を入れてください</p></div>
				 <form action="" method="post">
			<div><textarea name="dna" rows="10" cols="80"></textarea></div>
			<div><input type="submit" value="逆相補鎖を表示"></div>
				 </form>
		</div>
	
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
	<footer></footer>
</body>
</html>