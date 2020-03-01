<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="description" content="パズドラのモンスター検索のWebアプリケーションです。インストール不要です。">
<meta name="keywords" content="パズドラ,モンスター検索,パズル＆ドラゴンズ">
<link rel="stylesheet" href="searchMonster.css">
<link rel="shortcut icon" href="../favicon.ico" type="image/vnd.microsoft.icon">
<title>パズドラ モンスター検索</title>
<script src="../jq.js"></script>
</head>
<body>
<header>
	<h1><a href="./searchMonster.php">puzzle and dragons モンスター検索 mnsfd</a></h1>
	<p>
		<dfn><abbr title="パズルアンドドラゴンズ">パズドラ</abbr></dfn>のモンスター検索のWebアプリケーションです。<br>
		覚醒スキル、モンスターの追加をしました。(最終更新日：<time datetime="2019-11-01">2019.11.01</time>)
	</p>
	<p><a href="./input.html">DBへの登録ページ</a>、<a href="./index.html">ダメージ計算機</a>も開発しました。</p>
</header>
<main>
	<section class="attribute">
		<h4>属性</h4>
		<fieldset class="main-attribute">
			<legend>主属性</legend>
			<label><input type="radio" id="main-attribute-none" name="main-attribute" checked>指定しない</label>
			<label><input type="radio" id="main-attribute-fire" name="main-attribute">火</label>
			<label><input type="radio" id="main-attribute-water" name="main-attribute">水</label>
			<label><input type="radio" id="main-attribute-tree" name="main-attribute">木</label>
			<label><input type="radio" id="main-attribute-light" name="main-attribute">光</label>
			<label><input type="radio" id="main-attribute-dark" name="main-attribute">闇</label>
		</fieldset>
		<fieldset class="sub-attribute">
			<legend>副属性</legend>
			<label><input type="radio" id="sub-attribute-none" name="sub-attribute" checked>指定しない</label>
			<label><input type="radio" id="sub-attribute-fire" name="sub-attribute">火</label>
			<label><input type="radio" id="sub-attribute-water" name="sub-attribute">水</label>
			<label><input type="radio" id="sub-attribute-tree" name="sub-attribute">木</label>
			<label><input type="radio" id="sub-attribute-light" name="sub-attribute">光</label>
			<label><input type="radio" id="sub-attribute-dark" name="sub-attribute">闇</label>
			<label><input type="radio" id="sub-attribute-null" name="sub-attribute">無</label>
		</fieldset>
	</section>
	<section class="type">
		<h4>タイプ(複数選択時、or検索です)</h4>
		<div>
			<label><input type="checkbox" data-type="神"><img src="img_type/神.png" title="神"></label>
			<label><input type="checkbox" data-type="ドラゴン"><img src="img_type/ドラゴン.png" title="ドラゴン"></label>
			<label><input type="checkbox" data-type="悪魔"><img src="img_type/悪魔.png" title="悪魔"></label>
			<label><input type="checkbox" data-type="マシン"><img src="img_type/マシン.png" title="マシン"></label>
			<label><input type="checkbox" data-type="バランス"><img src="img_type/バランス.png" title="バランス"></label>
			<label><input type="checkbox" data-type="攻撃"><img src="img_type/攻撃.png" title="攻撃"></label>
			<label><input type="checkbox" data-type="体力"><img src="img_type/体力.png" title="体力"></label>
			<label><input type="checkbox" data-type="回復"><img src="img_type/回復.png" title="回復"></label>
			<label><input type="checkbox" data-type="進化用"><img src="img_type/進化用.png" title="進化用"></label>
			<label><input type="checkbox" data-type="覚醒用"><img src="img_type/覚醒用.png" title="覚醒用"></label>
			<label><input type="checkbox" data-type="強化合成用"><img src="img_type/強化合成用.png" title="強化合成用"></label>
			<label><input type="checkbox" data-type="売却用"><img src="img_type/売却用.png" title="売却用"></label>
		</div>
	</section>
	<section class="skill">
		<h4>スキル(含む文字列)</h4>
		<p>
			<span>スキル</span><input type="text" id="skill" name="skill" value="" >
			<span>スキルターン</span><input type="number" id="skill-turn" value="10" disabled>
			<button id="skill-turn-button">無効</button>
		</p>
		<p><span>リーダースキル</span><input type="text" id="leader-skill" name="leader-skill" value="" ></p>
	</section>
	<section class="awaken">
		<h4>覚醒スキル</h4>
		<label><input type="checkbox" id="contain-super-awaken" name="contain-super-awaken">超覚醒を含む</label>
		<div id="shortcut-awaken-table">
			<?php
			foreach (glob('img_awaken/*') as $key => $file) {
				if (is_file($file)) {
					echo '<p id="awaken'.$key.'" data-title="' .mb_substr($file, mb_strrpos($file, '/')+1, mb_strrpos($file,'.png') - mb_strrpos($file, '/') - 1).'">';
					echo '<img src="'.$file.'" title="'.mb_substr($file, mb_strrpos($file, '/')+1, mb_strrpos($file,'.png') - mb_strrpos($file, '/') - 1).'">';
					//echo '<span id=""></span>';
					echo '</p>';
				}
			}
			?>
		</div>
	</section>
	<button id="submit">検索する</button>
	<output id="result"><p>ここに検索結果を表示します</p></output>
</main>
<footer></footer>
<script src="searchMonster.js"></script>
</body>
</html>