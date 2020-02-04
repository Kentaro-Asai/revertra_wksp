<?php
	//require_once($_SERVER["DOCUMENT_ROOT"]."/wksp/PUADRA_G/mnsdata.class.php");
	require_once($_SERVER["DOCUMENT_ROOT"]."/revertra/revertra_wksp/PUADRA_G/mnsdata.class.php");
	@include_once($_SERVER["DOCUMENT_ROOT"]."/revertra/revertra_wksp/PUADRA_G/mnsDb.class.php");

	$ob = new mnsdata();
	$g = $ob->series();
	$ttl = $ob->ttl($g);
	//$mns = $ob->lstMns($g);
	$mns_ary = $ob->createMnsList($g);
	$g_ary = $ob->createNav($g);
	$summary_ary = $ob->createSummary($g);
	// mnsDbで、DBが無いと動かない
	if (class_exists("mnsDb")) {
		$obdb = new mnsDb();
		$number_ary = array();
		foreach($mns_ary as $mns){
			$number_ary[] = $mns["no"];
		}
		$mns_data = $obdb->getNumberMns($number_ary);
	} else {
		$mns_data = null;
	}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="description" content="パズドラのガチャシミュレータのWebアプリケーションです。確率など任意に組み替えられます。インストール不要です。">
<meta name="keywords" content="パズドラ,ガチャ,確率,シミュレータ,パズル＆ドラゴンズ">
<link rel="stylesheet" href="str.css">
<link rel="stylesheet" href="pdg.css">
<link rel="shortcut icon" href="../favicon.ico" type="image/vnd.microsoft.icon">
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
				<li><a href="./?g=<?= $g_ary[0]["a_href"] ?>" ><?= $g_ary[0]["ttl"] ?></a></li>
				<li><a href="./?g=<?= $g_ary[1]["a_href"] ?>" ><?= $g_ary[1]["ttl"] ?></a></li>
				<li><a href="./?g=<?= $g_ary[2]["a_href"] ?>" ><?= $g_ary[2]["ttl"] ?></a></li>
				<li><a href="./?g=<?= $g_ary[3]["a_href"] ?>" ><?= $g_ary[3]["ttl"] ?></a></li>
				<li id="nav_other" data-glist="<?= $g_ary[4] ?>" ><span>・・・</span></li>
			</ul>
		</nav>
	</header>
	<main>
		<section>
			<h2><?= $ttl ?> ガチャ</h2>
			<h5>当選確率 <small>変えて試したい場合はどうぞ。</small></h5>
			<dl id="summary">
<?php 
	foreach ($summary_ary as $k => $v) {
		echo "<dt class=\"" . $v["rare_clr_head"] . "\">★".$k.":</dt>";
		echo "<dd class=\"".$v["rare_clr_tail"]."\">";
			echo "全".$v["num"]."種 計<input type=\"text\" id=\"all_rr".$k."\" value=\"".$v["sum_percent"]."\" />％";
		echo "</dd>";
	}
?>
			</dl>
			<ul class="mns_box" id="kosiki" data-series="<?= $g ?>">
<?php
	foreach($mns_ary as $mns){
		echo "<li class=\"".$mns["rare_clr"]."\">";
			echo "<p><img src=\"img/i".$g."/c".$mns["no"].".jpg\" alt=\"".$mns["nm"]."\" /></p>";
			echo "<div>";
				echo "<h4>".$mns["nm"]."</h4>";
				echo "<p><span class=\"rare\">★".$mns["rr"]."</span> <input type=\"text\" id=\"".$mns["id"]."\" value=\"".$mns["pc"]."\" data-rr=\"".$mns["rr"]."\" /> ％</p>";
			echo "</div>";
		echo "</li>";
	}
?>
			</ul>
			<div class="rst_box">
				<p>
					<input type="button" id="exec_gatya" value="１回ガチャ" />
					<input type="button" id="exec_gatya17" value="17回ガチャ" />
					<input type="button" id="exec_complete_gatya" value="全種コンプリート" />
					<input type="button" id="reset_encount" value="出現リセット" />
				</p>
				<div id="rst">
					<p class="shoki">ここに結果を示します。</p>
				</div>
			</div>
		</section>
		<section class="mns-data">
		<?php
		if (null != $mns_data && 0 < count($mns_data)) {
			foreach ($mns_data as $mns) {
				echo "<table>";
					echo "<tr>";
						echo "<td rowspan=\"2\"><img src=\"img/i".$g."/c".$mns["NO"].".jpg\"></td>";
						echo "<td>".$mns["NAME"]."<br>★".$mns["RARE"]." ";
						foreach ($mns["TYPE"] as $type) {
							echo "<img src=\"../PUADRA_DB/img_type/".$type.".png\" class=\"type_image\">";
						}
							echo "<br>スキル ".$mns["SKILL_TURN"]." / ".$mns["SKILL_MAX_TURN"]."</td>";
						echo "<td class=\"awaken\">";
						foreach ($mns["AWAKEN"] as $aw) {
							echo "<img src=\"../PUADRA_DB/img_awaken/".$aw.".png\">";
						}
						if (0 < count($mns["SUPER_AWAKEN"])) {
							echo "<br>超覚醒";
							foreach ($mns["SUPER_AWAKEN"] as $sa) {
								echo "<img src=\"../PUADRA_DB/img_awaken/".$sa.".png\">";
							}
						}
						echo "</td>";
					echo "</tr>\n<tr>";	
						echo "<td class=\"skill\">".$mns["SKILL"]."</td>";
						echo "<td class=\"leader-skill\">".(!!$mns["LEADER_SKILL"] ? $mns["LEADER_SKILL"] : "-無し-")."</td>";
					echo "</tr>";
					if (!array_key_exists("EVOLVE", $mns)) continue;
					if (0 < count($mns["EVOLVE"])) {
						foreach ($mns["EVOLVE"] as $m) {
							echo "<tr>";
								echo "<td rowspan=\"2\">".$m["EVOLVE_NAME"]."</td>";
								echo "<td>".$m["NAME"]."<br>★".$m["RARE"]." ";
								foreach ($m["TYPE"] as $type) {
									echo "<img src=\"../PUADRA_DB/img_type/".$type.".png\" class=\"type_image\">";
								}
								echo "<br>スキル ".$m["SKILL_TURN"]." / ".$m["SKILL_MAX_TURN"]."</td>";
								echo "<td class=\"awaken\">";
								foreach ($m["AWAKEN"] as $aw) {
									echo "<img src=\"../PUADRA_DB/img_awaken/".$aw.".png\">";
								}
								if (0 < count($m["SUPER_AWAKEN"])) {
									echo "<br>超覚醒";
									foreach ($m["SUPER_AWAKEN"] as $sa) {
										echo "<img src=\"../PUADRA_DB/img_awaken/".$sa.".png\">";
									}
								}
								echo "</td>";
							echo "</tr>\n<tr>";	
								echo "<td class=\"skill\">".$m["SKILL"]."</td>";
								echo "<td class=\"leader-skill\">".(!!$m["LEADER_SKILL"] ? $m["LEADER_SKILL"] : "-無し-")."</td>";
							echo "</tr>";
							if (!array_key_exists("EVOLVE", $m)) continue;
							if (0 < count($m["EVOLVE"])) {
								foreach ($m["EVOLVE"] as $ev) {
									echo "<tr>";
										echo "<td rowspan=\"2\">".$m["EVOLVE_NAME"]."後の".$ev["EVOLVE_NAME"]."</td>";
										echo "<td>★".$ev["RARE"]." ".$ev["NAME"]." ";
										foreach ($ev["TYPE"] as $type) {
											echo "<img src=\"../PUADRA_DB/img_type/".$type.".png\" class=\"type_image\">";
										}
										echo "<br>スキル ".$ev["SKILL_TURN"]." / ".$ev["SKILL_MAX_TURN"]."</td>";
										echo "<td class=\"awaken\">";
										foreach ($ev["AWAKEN"] as $aw) {
											echo "<img src=\"../PUADRA_DB/img_awaken/".$aw.".png\">";
										}
										if (0 < count($ev["SUPER_AWAKEN"])) {
											echo "<br>超覚醒";
											foreach ($ev["SUPER_AWAKEN"] as $sa) {
												echo "<img src=\"../PUADRA_DB/img_awaken/".$sa.".png\">";
											}
										}
										echo "</td>";
									echo "</tr>\n<tr>";	
										echo "<td class=\"skill\">".$ev["SKILL"]."</td>";
										echo "<td class=\"leader-skill\">".(!!$ev["LEADER_SKILL"] ? $ev["LEADER_SKILL"] : "-無し-")."</td>";
									echo "</tr>";
								}
							}
						}
					}
				echo "</table>\n";
			}
		}
		?>
		</section>
	</main>
	<footer>
		<p><small>シミュレータの設定は実際の値から逸脱しているかもしれません。あまり本気にしないでください。</small></p>
	</footer>
	<script src="../jq.js"></script>
	<script src="pdg.js"></script>
</body>
</html>