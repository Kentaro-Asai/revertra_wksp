<?php
require_once($_SERVER["DOCUMENT_ROOT"].'/wksp/PUADRA/init.class.php');
$mns_names = init::mns_names();
$pls = init::pls();
$assist = init::mns_names(true);
$asi_pls = init::pls(true);
$zk_main = init::zk(0);
$zk_sub = init::zk(1);
$st_atk = init::stts(0);
$st_re = init::stts(1);
$aw_2way = init::aw("2way");
$aw_hi = init::aw("hi");
$aw_mz = init::aw("mz");
$aw_ki = init::aw("ki");
$aw_hk = init::aw("hk");
$aw_ym = init::aw("ym");
$aw_ht = init::aw("ht");
$aw_hir = init::aw("hir");
$aw_mzr = init::aw("mzr");
$aw_kir = init::aw("kir");
$aw_hkr = init::aw("hkr");
$aw_ymr = init::aw("ymr");
$aw_mlb = init::aw("mlb");
$aw_kilr = init::aw("kilr");
$aw_cmbs = init::aw("cmbs");
$aw_noDmg = init::aw("noDmg");
$sen_aw_klr = init::senAw("sen_klr");
$html_junbi = init::htmlJunbi();
?>
<!DOCTYPE html>
<html lang=ja>
<head>
<meta charset=UTF-8>
<meta name=description content=パズドラのダメージ計算機のWebアプリケーションです。対応モンスターは今後増やしていきます。インストール不要です。>
<meta name=keywords content=パズドラ,ダメージ計算機,計算方法,シミュレータ,パズル＆ドラゴンズ>
<link rel=stylesheet href=str.css>
<link rel=stylesheet href=stpd.css>
<link rel="shortcut icon" href=../favicon.ico type=image/vnd.microsoft.icon>
<title>パズドラ ダメージ計算機</title>
</head>
<body>
<script type="text/javascript" src="https://ad.netowl.jp/js/webcrow-php.js"></script>
<header>
<h1>puzzle and dragons ダメージ計算機 cmb</h1>
<p>
<dfn><abbr title=パズルアンドドラゴンズ>パズドラ</abbr></dfn>のダメージ計算機のWebアプリケーションです。<br />
各ステータスを入力後、ドロップをセットすることでダメージ量を確認できます。<br />
モンスター名を変更することで、そのモンスターのレベル９９での攻撃力、回復力、フル覚醒の値に自動で変更されます。<br />
覚醒スキル、モンスターの追加をしました。(最終変更日：<time datetime=2017-07-23>2017.07.23</time>)
</p>
<p><a href=../PUADRA_G/ >ガチャシミュレータ</a>も開発しました。</p>
<p>チームの選定（微調整可能）、リーダースキル倍率、コンボ入力（直接入力 or パズル）の３stepで計算できます。</p>
</header>
<main>
<section id=tm>
<h4>チームの選定</h4>
<table id=team>
<caption>モンスターを選択してください。<br />※デフォルトでキラー、マルチブーストがＯＮになっています。必要ない場合は0にしてください。</caption>
<thead><tr><th>-</th><th>Leader</th><th>Sub1</th><th>Sub2</th><th>Sub3</th><th>Sub4</th><th>Friend</th></tr></thead>
<tbody>
<tr>
<?php echo $mns_names; ?>
</tr>
<tr>
<?php echo $pls; ?>
</tr>
<tr>
<?php echo $assist ?>
</tr>
<tr>
<?php echo $asi_pls ?>
</tr>
<tr>
<?php echo $zk_main; ?>
</tr>
<tr>
<?php echo $zk_sub; ?>
</tr>
<tr>
<?php echo $st_atk; ?>
</tr>
<tr>
<?php echo $st_re; ?>
</tr>
<tr>
<?php echo $aw_2way; ?>
</tr>
<tr>
<?php echo $aw_hi; ?>
</tr>
<tr>
<?php echo $aw_mz; ?>
</tr>
<tr>
<?php echo $aw_ki; ?>
</tr>
<tr>
<?php echo $aw_hk; ?>
</tr>
<tr>
<?php echo $aw_ym; ?>
</tr>
<tr>
<?php echo $aw_ht; ?>
</tr>
<tr>
<?php echo $aw_hir; ?>
</tr>
<tr>
<?php echo $aw_mzr; ?>
</tr>
<tr>
<?php echo $aw_kir; ?>
</tr>
<tr>
<?php echo $aw_hkr; ?>
</tr>
<tr>
<?php echo $aw_ymr; ?>
</tr>
<tr>
<?php echo $aw_mlb; ?>
</tr>
<tr>
<?php echo $aw_kilr; ?>
</tr>
<tr>
<?php echo $aw_noDmg; ?>
</tr>
<tr>
<?php echo $aw_cmbs; ?>
</tr>
<tr><?php echo $sen_aw_klr ?></tr>
</tbody>
</table>
	<dl>
		<dt class="status">ＨＰ: </dt><dd class="status" id="status_hp">0</dd>
		<dt class="status">攻撃力: </dt><dd class="status" id="status_atk">6000</dd>
		<dt class="status">回復力: </dt><dd class="status" id="status_re">1800</dd>
		<dt><img src=img/hidec.png width=22 height=22 alt=火軽減 title=火軽減 >:</dt><dd id=aw_hidec>0</dd>
		<dt><img src=img/mzdec.png width=22 height=22 alt=水軽減 title=水軽減 >:</dt><dd id=aw_mzdec>0</dd>
		<dt><img src=img/kidec.png width=22 height=22 alt=木軽減 title=木軽減 >:</dt><dd id=aw_kidec>0</dd>
		<dt><img src=img/hkdec.png width=22 height=22 alt=光軽減 title=光軽減 >:</dt><dd id=aw_hkdec>0</dd>
		<dt><img src=img/ymdec.png width=22 height=22 alt=闇軽減 title=闇軽減 >:</dt><dd id=aw_ymdec>0</dd>
		<dt><img src=img/hid.png width=22 height=22 alt=火ドロップ強化 title=火ドロップ強化 >:</dt><dd id=aw_hi>0</dd>
		<dt><img src=img/mzd.png width=22 height=22 alt=水ドロップ強化 title=水ドロップ強化 >:</dt><dd id=aw_mz>0</dd>
		<dt><img src=img/kid.png width=22 height=22 alt=木ドロップ強化 title=木ドロップ強化 >:</dt><dd id=aw_ki>0</dd>
		<dt><img src=img/hkd.png width=22 height=22 alt=光ドロップ強化 title=光ドロップ強化 >:</dt><dd id=aw_hk>0</dd>
		<dt><img src=img/ymd.png width=22 height=22 alt=闇ドロップ強化 title=闇ドロップ強化 >:</dt><dd id=aw_ym>0</dd>
		<dt><img src=img/htd.png width=22 height=22 alt=回復ドロップ強化 title=回復ドロップ強化 >:</dt><dd id=aw_ht>0</dd>
		<dt><img src=img/hir.png width=22 height=22 alt=火属性列強化 title=火属性列強化 >:</dt><dd id=aw_hir>0</dd>
		<dt><img src=img/mzr.png width=22 height=22 alt=水属性列強化 title=水属性列強化 >:</dt><dd id=aw_mzr>0</dd>
		<dt><img src=img/kir.png width=22 height=22 alt=木属性列強化 title=木属性列強化 >:</dt><dd id=aw_kir>0</dd>
		<dt><img src=img/hkr.png width=22 height=22 alt=光属性列強化 title=光属性列強化 >:</dt><dd id=aw_hkr>0</dd>
		<dt><img src=img/ymr.png width=22 height=22 alt=闇属性列強化 title=闇属性列強化 >:</dt><dd id=aw_ymr>0</dd>
		<dt><img src=img/2way.png width=22 height=22 alt=2体攻撃 title=2体攻撃 >:</dt><dd id=aw_2way>0</dd>
		<dt><img src=img/skb.png width=22 height=22 alt=スキルブースト title=スキルブースト >:</dt><dd id=aw_skb>0</dd>
		<dt><img src=img/mulb.png width=22 height=22 alt=マルチブースト title=マルチブースト >:</dt><dd id=aw_mlb>0</dd>
		<dt><img src=img/jm.png width=22 height=22 alt=お邪魔耐性 title=お邪魔耐性 >:</dt><dd id=aw_jm>0</dd>
		<dt><img src=img/dk.png width=22 height=22 alt=毒耐性 title=毒耐性 >:</dt><dd id=aw_dk>0</dd>
		<dt><img src=img/huin.png width=22 height=22 alt=封印耐性 title=封印耐性 >:</dt><dd id=aw_huin>0</dd>
		<dt><img src=img/birs.png width=22 height=22 alt=バインド耐性 title=バインド耐性 >:</dt><dd id=aw_birs>0</dd>
		<dt><img src=img/bire.png width=22 height=22 alt=バインド回復 title=バインド回復 >:</dt><dd id=aw_bire>0</dd>
		<dt><img src=img/re.png width=22 height=22 alt=自動回復 title=自動回復 >:</dt><dd id=aw_re>0</dd>
		<dt><img src=img/yb.png width=22 height=22 alt=操作時間延長 title=操作時間延長 >:</dt><dd id=aw_yb>0</dd>
		<dt><img src=img/god_kilr.png width=22 height=22 alt=キラー全般 title=キラー全般 >:</dt><dd id=aw_kilr>0</dd>
		<dt><img src=img/cmbs.png width=22 height=22 alt=コンボ強化 title=コンボ強化 >:</dt><dd id=aw_cmbs>0</dd>
		<dt><img src=img/brk.png width=22 height=22 alt=ガードブレイク title=ガードブレイク >:</dt><dd id=aw_brk>0</dd>
		<dt><img src=img/add.png width=22 height=22 alt=追加攻撃 title=追加攻撃 >:</dt><dd id=aw_add>0</dd>
		<dt><img src=img/tmHP.png width=22 height=22 alt=チームHP強化 title=チームHP強化 >:</dt><dd id=aw_tmHP>0</dd>
		<dt><img src=img/tmRE.png width=22 height=22 alt=チーム回復強化 title=チーム回復強化 >:</dt><dd id=aw_tmRE>0</dd>
		<dt><img src=img/noDmg.png width=22 height=22 alt=ダメージ無効貫通 title=ダメージ無効貫通 >:</dt><dd id=aw_noDmg>0</dd>
	</dl>
<p>
<input type=checkbox id=ld_type checked=checked />
<label for=ld_type>入力した値の2乗</label>
<br />
リーダースキル倍率（攻撃）：
<input id=leader_atk type=text>
<br />リーダースキル倍率（回復）：
<input id=leader_re type=text>
<br />
コンボ直接入力、あるいはパズルでコンボ入力のどちらかを選択して計算してください。
</p>
</section>
<section id=dir>
<h4><span>▽</span>コンボ直接入力</h4>
<div>
<table>
<?php echo $html_junbi; ?>
</table>
<p>
<input id=dir_but type=button value=この条件でダメージ計算>
結果は下のコンボ計算結果の項目で出ます。
</p>
</div>
</section>
<section id=cmb_zone>
<h4><span>▽</span>パズルでコンボ入力<small> - PC版Google Chrome向け。IEではドラッグアンドドロップできないかも。 - </small></h4>
<div id=dp_gene>
<table>
<caption>盤面に生成する各ドロップの出現率を示します。</caption>
<thead>
<tr><th>ドロップの種類</th><th>出現率(％)</th><th>プラスドロップ率(％)</th></tr>
</thead>
<tbody>
<tr class=bgc_hi><th>火ドロップ</th><td><input type=text id=hi_gene value=16 /></td><td><select id=hi_pls><option value=0>0</option><option value=20>20</option><option value=40>40</option><option value=60>60</option><option value=80>80</option><option value=100>100</option></select></td></tr>
<tr class=bgc_mz><th>水ドロップ</th><td><input type=text id=mz_gene value=16 /></td><td><select id=mz_pls><option value=0>0</option><option value=20>20</option><option value=40>40</option><option value=60>60</option><option value=80>80</option><option value=100>100</option></select></td></tr>
<tr class=bgc_ki><th>木ドロップ</th><td><input type=text id=ki_gene value=16 /></td><td><select id=ki_pls><option value=0>0</option><option value=20>20</option><option value=40>40</option><option value=60>60</option><option value=80>80</option><option value=100>100</option></select></td></tr>
<tr class=bgc_hk><th>光ドロップ</th><td><input type=text id=hk_gene value=16 /></td><td><select id=hk_pls><option value=0>0</option><option value=20>20</option><option value=40>40</option><option value=60>60</option><option value=80>80</option><option value=100>100</option></select></td></tr>
<tr class=bgc_ym><th>闇ドロップ</th><td><input type=text id=ym_gene value=16 /></td><td><select id=ym_pls><option value=0>0</option><option value=20>20</option><option value=40>40</option><option value=60>60</option><option value=80>80</option><option value=100>100</option></select></td></tr>
<tr class=bgc_kh><th>回復ドロップ</th><td><input type=text id=ht_gene value=20 /></td><td><select id=ht_pls><option value=0>0</option><option value=20>20</option><option value=40>40</option><option value=60>60</option><option value=80>80</option><option value=100>100</option></select></td></tr>
</tbody>
</table>
<p><input type=button id=cmb_redrop value=ドロップの再生成 /></p>
</div>
<div>
<p>ドラッグ ＆ ドロップでコンボを生成し、「計算する」ボタンを押してください。</p>
<div class=banmen>
<p id=A1><img src=img/fireA.png width=59 height=59></p><p id=B1><img src=img/fireA.png width=59 height=59></p><p id=C1><img src=img/firepA.png width=59 height=59></p><p id=D1><img src=img/firepA.png width=59 height=59></p><p id=E1><img src=img/heartA.png width=59 height=59></p><p id=F1><img src=img/fireA.png width=59 height=59></p>
<p id=A2><img src=img/waterA.png width=59 height=59></p><p id=B2><img src=img/waterA.png width=59 height=59></p><p id=C2><img src=img/waterpA.png width=59 height=59></p><p id=D2><img src=img/waterpA.png width=59 height=59></p><p id=E2><img src=img/heartA.png width=59 height=59></p><p id=F2><img src=img/waterA.png width=59 height=59></p>
<p id=A3><img src=img/treeA.png width=59 height=59></p><p id=B3><img src=img/treeA.png width=59 height=59></p><p id=C3><img src=img/treepA.png width=59 height=59></p><p id=D3><img src=img/treepA.png width=59 height=59></p><p id=E3><img src=img/heartpA.png width=59 height=59></p><p id=F3><img src=img/treeA.png width=59 height=59></p>
<p id=A4><img src=img/lightA.png width=59 height=59></p><p id=B4><img src=img/lightA.png width=59 height=59></p><p id=C4><img src=img/lightpA.png width=59 height=59></p><p id=D4><img src=img/lightpA.png width=59 height=59></p><p id=E4><img src=img/heartpA.png width=59 height=59></p><p id=F4><img src=img/lightA.png width=59 height=59></p>
<p id=A5><img src=img/darkA.png width=59 height=59></p><p id=B5><img src=img/darkA.png width=59 height=59></p><p id=C5><img src=img/darkpA.png width=59 height=59></p><p id=D5><img src=img/darkpA.png width=59 height=59></p><p id=E5><img src=img/darkA.png width=59 height=59></p><p id=F5><img src=img/darkA.png width=59 height=59></p>
</div>
<p><input type=button id=cmb_calc value=計算する /></p>
</div>
</section>
<section id=rst>
<h4>コンボ計算結果</h4>
<table class=dm_hyou>
<thead>
<tr><th>-</th><th>Leader</th><th>Sub1</th><th>Sub2</th><th>Sub3</th><th>Sub4</th><th>Friend</th></tr>
</thead>
<tbody>
<tr id=each_main><th>メイン属性</th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr id=each_sub><th>サブ属性</th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr id=each_re><th>回復</th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr id=each_sum><th>各属性合計</th><td class=bgc_hi>-</td><td class=bgc_mz>-</td><td class=bgc_ki>-</td><td class=bgc_hk>-</td><td class=bgc_ym>-</td><td class=bgc_kh>-</td></tr>
</tbody>
</table>
<p id=dm_sum>合計 - ダメージ</p>
<table class=cmb_hyou>
<thead>
<tr><th>-</th><th class=bgc_hi>火</th><th class=bgc_mz>水</th><th class=bgc_ki>木</th><th class=bgc_hk>光</th><th class=bgc_ym>闇</th><th class=bgc_kh>回復</th></tr>
</thead>
<tbody>
<tr id=each_cmb><th>コンボ数</th><td class=bgc_hi>-</td><td class=bgc_mz>-</td><td class=bgc_ki>-</td><td class=bgc_hk>-</td><td class=bgc_ym>-</td><td class=bgc_kh>-</td></tr>
</tbody>
</table>
<p id=cmb_sum>合計 - コンボ</p>
</section>
</main>
<footer>
</footer>
<script src=../jq.js></script>
<script src=pda.js></script>
</body>
</html>