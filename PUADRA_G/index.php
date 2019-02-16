<?php
	require_once($_SERVER["DOCUMENT_ROOT"]."/wksp/PUADRA_G/mnsdata.class.php");
	
	$ob = new mnsdata();
	$g = $ob->series();
	$ttl = $ob->ttl($g);
	$mns = $ob->lstMns($g);
	$g_ary = $ob->createNav($g);
	$rr_ar = array(
		4=>0, 5=>0, 6=>0, 7=>0, 8=>0
	);
	$pc_ar = array(
		4=>0, 5=>0, 6=>0, 7=>0, 8=>0
	);
?>
<!DOCTYPE html>
<html lang=ja>
<head>
<meta charset=UTF-8>
<meta name=description content=パズドラのガチャシミュレータのWebアプリケーションです。確率など任意に組み替えられます。インストール不要です。>
<meta name=keywords content=パズドラ,ガチャ,確率,シミュレータ,パズル＆ドラゴンズ>
<link rel=stylesheet href=str.css>
<link rel=stylesheet href=pdg.css>
<link rel="shortcut icon" href=../favicon.ico type=image/vnd.microsoft.icon>
<title>パズドラ ガチャシミュレータ</title>
</head>
<body>
	<header>
		<h1><a href="index.php">パズドラ ガチャシミュレータ exam</a></h1>
		<p>
			ガチャのシミュレータを開発しました。<br />
			体感でどの程度、出てくるのか（出てこないのか）を実感しましょう。<br />
			他に、<a href="../PUADRA/">ダメージ計算機</a>も開発しています。
		</p>
		<nav>
			<ul>
				<li><a href=./?g=<?php echo $g_ary[0]["a_href"]  ." >" .$g_ary[0]["ttl"] ?></a></li>
				<li><a href=./?g=<?php echo $g_ary[1]["a_href"]  ." >" .$g_ary[1]["ttl"] ?></a></li>
				<li><a href=./?g=<?php echo $g_ary[2]["a_href"]  ." >" .$g_ary[2]["ttl"] ?></a></li>
				<li id=nav_other data-glist=<?php echo $g_ary[3] ?> ><span>・・・</span></li>
			</ul>
		</nav>
	</header>
	<main>
		<section>
			<h2><?php echo $ttl; ?> ガチャ</h2>
			<h5>当選確率 <small>変えて試したい場合はどうぞ。</small></h5>
			<dl>
<?php
	for ($i=0; $i < count($mns); $i++) {
		foreach($rr_ar as $k => $val){
			if ($mns[$i]["rr"] === $k) {
				$rr_ar[$k]++;
				$pc_ar[$k] += $mns[$i]["pc"];
			}
		}
	}
	foreach ($rr_ar as  $k => $val) {
		if($val > 0) {
			$head = "";
			$tail = "";
			if($k <= 4) $bk = "silver_clr";
			elseif ($k == 5) $bk = "gold_clr";
			else {
				$bk = "dia_clr";
				$head = "_head";
				$tail = "_tail";
			}
			echo "<dt class=".$bk.$head.">★".$k."：</dt><dd class=".$bk.$tail.">全".$val."種 計<input type=text id=all_rr".$k." value=".$pc_ar[$k]." />％</dd>";
		}
	}
?>
			</dl>
			<ul class="mns_box" id="kosiki" data-0=<?php echo $g ?>>
<?php
	for ($i=0; $i < count($mns); $i++) {
		if ($mns[$i]["rr"] > 5) $cls_nm = "dia_clr";
		elseif ($mns[$i]["rr"] > 4) $cls_nm = "gold_clr";
		else $cls_nm = "silver_clr";
		echo "<li class=".$cls_nm.">";
			echo "<h4>".$mns[$i]["nm"]."</h4>";
			echo "<p><img src=img/i".$g."/c".$mns[$i]["no"].".jpg width=33 height=33 alt=".$mns[$i]["nm"]." /></p>";
			echo "<p class=rare>レアリティ： ★".$mns[$i]["rr"]."<br />排出率： <input type=text id=mns".($i+1)." value=".$mns[$i]["pc"]." data-rr=".$mns[$i]["rr"]." /> ％</p>";
			echo "</li>";
	}
?>
			</ul>
			<div class=rst_box>
				<p>
					<input type="button" id="exec_gatya" value="１回ガチャ" />
					<input type="button" id="exec_gatya17" value="17回ガチャ" />
					<input type="button" id="reset_encount" value="出現リセット" />
				</p>
				<div id="rst">
					<p class="shoki">ここに結果を示します。</p>
				</div>
			</div>
		</section>
		<section>
			<!-- JavaScriptで実装 -->
			<h3>ユーザー作成ガチャ</h3>
			<ul class="mns_box" id="usr">
				<li id="usr1">
					<h4><input type="text" name="usr_nm1" value="モンスター1" /></h4>
					<p><img src="img/c0000.jpg" width="33" height="33" alt="任意のモンスター" /></p>
					<p class="rare">
						レアリティ： ☆<input type="text" name=usr_rr1 value="4" /><br />
						排出率： <input type="text" name="usr_pc1" /> ％
					</p>
				</li>
				<li id="usr2"><input type="button" name=usr2 value="モンスター追加" /></li>
			</ul>
			<div class=rst_box>
				<p>
					<input type="button" id="usr_gatya" value="１回ガチャ" />
					<input type="button" id="usr_gatya17" value="17回ガチャ" />
				</p>
				<div  id="rst_usr">
					<p>ここに結果を示します。</p>
				</div>
			</div>
		</section>
	</main>
	<footer>
		<p>シミュレータの設定は実際の値から逸脱しているかもしれません。あまり本気にしないでください。</p>
	</footer>
	<script src=../jq.js></script>
	<script src=pdg.js></script>
</body>
</html>