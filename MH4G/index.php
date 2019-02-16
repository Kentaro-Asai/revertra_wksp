<?php
//"/PhpProject1"を抜く
require_once($_SERVER["DOCUMENT_ROOT"]."/wksp/MH4G/classes/arySkill.class.php");
//発動スキル（剣士とガンナー）とスキル系統（剣士とガンナー）
$exp = arySkill::expSkill();
$sys = arySkill::skillSystem();
$wpsk = arySkill::wpskl(0);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="MH4Gの欲しい発動スキルの組合わせを実現するためのサイトです。インストール不要です。良い護石を手に入れたら試してみましょう^^">
	<meta name="keywords" content="MH4G,スキル調整,モンスターハンター4G,スキルシミュレータ,モンハン4G">
	<link rel="stylesheet" href="str.css">
	<link rel="stylesheet" href="st4g.css">
	<title>MH4Gスキル調整システム(剣士/ガンナー)</title>
</head>
<body>
	<div id="container">
	<header>
		<h1>MH4G スキルシミュレータ(剣士/ガンナー)</h1>
		<p>
			モンスターハンター4Gの装備の検索ができるWEBアプリケーションです。<br>
			発動させたいスキルの組み合わせをどの装備で実現させられるか調べられます。<br>
			発動スキルである弾導強化の設定ミスを訂正しました。（12/3）<br>
			発掘防具は今後追加していきます(現在剣士の斬術5、裏稼業5、祈願5、一心5、居合5、刀匠4、潔癖5、頑強5、状態耐性5、回避術4、秘伝5、剛腕5追加。<br>
			ガンナーの裏稼業5、状態耐性5、回避術4、祈願5、射手4、頑強5(12/13))。
		</p>
		<p id="linker">
			開発者のサイト（リンク集）： <a href="http://revertra.webcrow.jp/index.php">ソフト開発趣味の部屋</a><br>
			バグは見つかり次第一週間以内に修正する方針です。<br>
		</p>
	</header>
	<main>
        <article>
            <h3>装備の重なりオプション（少し高度な設定）</h3>
            <p><label><input type="checkbox" id="opt1" name="opt1" checked>下位互換削除オプション</label></p>
            <p>
                説明文を読む前に装備検索方法について調べてください（上の開発者のリンク集を見てください）。<br>
                簡単に書くと、このオプションでは、
                スキルにおいて下位互換（全く同じ性能含む）の性能を持つ装備をすべて除去して検索します。<br>
                オプションをオンにするメリットは、オフの時、検索結果ゼロの条件であっても、
                オンにすることで1件以上の成果を挙げられる可能性があることです。<br>
                
                （例えば、MH4で発動スキルの「切れ味レベル+1」の装備の検索をした際、
                EXレウスフォールドとクシャナアンダが共に”匠２スロット３”で検出されるはずでしたが、
                このオプションによってEXレウスフォールドのみが検索されるようになっていました。
                共に結果として出てきたほうが良いと思うかもしれませんが、
                しかしそれでは他に欲しい発動スキルがあっても、
                匠のポイントの重さ（ポイントの重さは珠でのつけ難さです）のせいで、
                耐震等のポイントの軽いスキルが上位５位以内に入ってこなくてなってしまいます。
                そこで、下位互換の装備は全て排除して、ユニークな装備のみを選ぶ必要がありました。
                これによって以前のシミュレータでは高い検出率・高速性を確保出来ていたのですが、
                利用者数の増加に伴い、やや後ろめたさ（知らずに使うユーザーがいるかもしれない）というのがありまして、
                オプションという形で復活させることにしました。
                （MH4のスキルシミュレータでは匠のみで検索した際、クシャナアンダは検索されません。））<br>
                
                今まではこれがデフォルトで、オンになっていましたが、
                今回は、ユーザーがチェックボックスによって選択できるようになっています。
            </p>
        </article>
		<article>
            <h3>装備のNGリスト</h3>
            <p>
				ユーザーさんのゲームの進度に応じて、手に入ることも入らないこともあります。<br>
				ここでは、この装備は手に入らないというリストを与えておき、除外することが可能です。<br>
				一度検索後、候補に入ってしまった候補に入れたくない装備を除外して再度検索するという使い方を想定しています。
			</p>
            <p id="ng_lst">
				NGにしたい装備シリーズをここで追加してください。
				<label><input type="checkbox" name="ng1">凛シリーズ（レア10）</label>
            </p>
        </article>
		<article>
            <h3>バグ・要望に応えることがあります。</h3>
            <p>
				開発者自身が利用者ですので、バグは発見次第ボチボチ修正してきましたが、たまに発見が遅れます。<br>
				ユーザーさんがバグを発見したら、報告してみてください。<br>
				（例えば、"発動スキルに「裂傷無効」を選んでボタン押しても応答が無い。"など、状況を<span class="strong">詳細</span>に教えてくれないと対応できません。）<br>
				開発者は、忙しくてなかなか対応できない時もあります。<br>
				忙しくない時は、早急に対応しますので、困っている時は下のテキストエリアにコメントしてください。<br>
				<span class="minor">
					開発者は無報酬で、開発者が使用するためにこれを開発しています。<br>
					上方のバナーは、開発者の収入とは無関係でサーバー持ちの方の収入に関連しています。<br>
					開発者とサーバー持ちの方との交友はありません。
				</span>
				<textarea id="bug"></textarea>
			</p>
            <p id="send_msg">
				<input type="button" value="メッセージを送信する">
            </p>
        </article>
		<ul id=tab  class="clearfix">
			<li>剣士</li>
			<li>ガンナー</li>
		</ul>
		<section>
			<div id="rdo" class="clearfix">
				<label><input type="radio" name="sex" value="1" checked />男性装備</label>
				<label><input type="radio" name="sex" value="2" />女性装備</label>
			</div>
			<div id="chb" class="clearfix">
				<label><input type="checkbox" id="s1" value="1" disabled="disabled" />下位装備</label>
				<label><input type="checkbox" id="s2" value="2" checked />上位装備</label>
				<label><input type="checkbox" id="s3" value="3" checked />G級装備</label>
				<label><input type="checkbox" id="s4" value="4" checked />発掘防具</label>
				<label>
					<select id="hlm">
						<option value="all">全頭部装備</option>
						<option value="swd">剣士頭部装備のみ</option>
						<option value="gun">ガンナー頭部装備のみ</option>
					</select>
				</label>
			</div>

			<div id="amu" class="clearfix">
				<p>護石スキル1</p>
				<div>
					<select id="amusk1">
						<?php
						//スキル系統を与えます
						for ($i=0; $i < count($sys); $i++) {
							echo "<option value=".$i.">".$sys[$i]."</option>";
						}
						?>
					</select>
				</div>
				<div>
					<select id="skval1">
						<?php
						for ($i=13; $i > -11; $i--) {
							if ($i != 5) echo "<option value=".$i.">".$i."</option>";
							else echo "<option value=".$i." selected>".$i."</option>";
						}
						?>
					</select>
				</div>
				<p>護石スキル2</p>
				<div>
					<select id="amusk2">
						<?php
						for ($i=0; $i < count($sys); $i++) {
							echo "<option value=".$i.">".$sys[$i]."</option>";
						}
						?>
					</select>
				</div>
				<div>
					<select id="skval2">
						<?php
						for ($i=13; $i > -11; $i--) {
							if ($i != 5) echo "<option value=".$i.">".$i."</option>";
							else echo "<option value=".$i." selected>".$i."</option>";
						}
						?>
					</select>
				</div>

				<p>護石スロット</p>
				<div><select id="amuslot">
						<option value="0" selected>0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
			</div>
			
			<div id="weapon" class="clearfix">
				<p>武器スロット</p>
				<div><select id="wepslot">
						<option value="0" selected>0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<?php
						for ($i=4; $i <= count($wpsk)+3; $i++) {
							echo '<option value='.$i.'>発掘 -'.$wpsk[$i][nm].$wpsk[$i][vl].'-</option>';
						} ?>
					</select>
				</div>
			</div>
			
			<div id="hatu">
				<p>欲しい発動スキルを選択してください（最大6種、あいうえお順）</p>
				<div class="clearfix">
                    <?php
                    for ($w=1; $w <= 6; $w++) {
                        echo "<div>";
                            echo "<select id=\"wntsk".$w."\">";
                                //スキルを与えます
                                for ($i=0; $i < count($exp); $i++) {
                                    echo "<option value=".$i.">".$exp[$i]."</option>";
                                }
                            echo "</select>";
                        echo "</div>";
                    }
                    ?>
				</div>
			</div>
			<div id="sub"><input type="submit" value="結果を表示" /></div>
		</section>
	</main>
	<div id="ms"><p>この下に結果を表示します。</p></div>
	<div id="res"></div>
	<footer></footer>
	</div>
	<script src="../jq.js"></script>
	<script src="mh4g.js"></script>
</body>
</html>