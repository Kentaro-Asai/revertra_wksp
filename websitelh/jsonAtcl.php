<?php
$p = null;
if (isset($_REQUEST["p"])) $p = $_REQUEST["p"];

$js = array();
//最初のページ
if ($p == 0) {
	$js[0]["li"]	= '開発するソフト';
	$js[0]["ttl"][0] = '開発するソフトの内容';
	$js[0]["cts"][0] = '生物系出身ですので、DNA解析系のソフトもそれなりに開発できます。'
			.'とはいっても、それでご飯食べている人もいっぱいいますので、'
			.'そういった方に迷惑がかからない程度で開発していく予定です。＾＾；';
	$js[1]["li"]	= 'ソフト開発の勧め';
	$js[1]["ttl"][0] = 'ソフト開発の勧め';
	$js[1]["cts"][0] = '素人でも独学でそれなりにできるようになると思います。'
			.'でもプロレベルになるには、やはりちゃんと習わないとなかなかできなさそうです。'
			.'どの辺りがっていうと、見やすいコードを書くためのクラス、MVCモデル、楽に書くためのフレームワークなどです。'
			.'レガシーからの脱却などですね。'
			.'<br />そもそも一人で開発しているとそこまでなかなか必要とならないんですよね。';
	$js[2]["li"]	= '自作PCの勧め';
	$js[2]["ttl"][0]= '自作PCの勧め';
	$js[2]["cts"][0] = '最初に組み立てるのに少し知識が必要です。<br />'
			.'　しかし一度組み立てればその良さが分かるようになると思います。<br />'
.'　良さというのは、拡張ができるということと、何より自然とハードウェアの知識がつくことです。<br />'
			.'　初めてでもちょっとした本と少しのやる気があって、半日ほどの時間があればできると思います。';
	$js[3]["li"]  = '開発者略歴';
	$js[3]["ttl"][0] = '開発者略歴';
	$js[3]["cts"][0] = '生物系の博士課程まで進学しました。趣味で始めたプログラミング、CADができます。'
			.'VC++(MFC)、Javaが書けます。専らPHP、JavaScriptを書いています。';

//雑記（BLOG）
} elseif ($p == 2) {
	$js[0]["li"] = 'LAMP開発環境の構築';
	$js[0]["ttl"][0] = '開発環境の構築(全て無料のソフトです)';
$js[0]["cts"][0] = "ここではCentOS, appach, PHP, MySQLの開発環境の構築を紹介します。";
	$js[0]["ttl"][1] = "CentOSをダウンロード";
	$js[0]["cts"][1] = "<ol>"
						."<li>まずはCentOSをダウンロードします。<a href=\"http://www.centos.org/\" rel=\"nofollow\" target=\"_blank\">The Community ENTerprize Operating System</a>にアクセス</li>"
						."<li>グローバルナビゲーションの「Downloads」下のMirrorsにアクセス</li>"
						."<li>Mirror Listをクリック</li>"
						."<li><span id=\"underline\">South American, Asian, Oceania, Middle Eastern, African and Other Regional</span> Mirrorsをクリック</li>"
						."<li>Asia Japan Internet Initiative Japan Inc. All All Yes HTTP FTP RSYNのHTTPをクリック</li>"
						."<li>6.4/(最新版2013.5.14現在)をクリック（ここはこの時の私に合わせる事無く最新版を選んでください）</li>"
						."<li>isos/ をクリック</li>"
						."<li>i386/(32bit版) をクリック</li>"
						."<li>CentOS-6.4-i386-bin-DVD1.isoをダウンロード</li>"
					."</ol>";
	$js[0]["ttl"][2] = 'VirtualBoxをダウンロード(OSがWindowsならfor Windows hostsを選びましょう)';
	$js[0]["cts"][2] = "<ol>"
						."<li>VirtualBoxをダウンロードしたら起動し、新規ボタンを押します</li>"
						."<li>名前は何でも良いです。タイプはLinux、バージョンはRed Hatです（CentOSがRed Hat系のLinux）。次へを押す</li>"
						."<li>メモリーサイズは、CentOS 6.4の最小が1GBだと思います。私は少し余裕をとって2048MBにしました。</li>"
						."<li>ハードドライブは、CentOS 6.4の最小が8GBだと思います。私は少し余裕をとって20GBにしました。</li>"
						."<li>設定ボタンをクリックし、システムをクリックし、起動順序をCD/DVD-ROM、ハードディスク...とします</li>"
						."<li>設定ボタンをクリックし、ストレージをクリックし、コントローラー:IDEをクリックし、「CD/DVDドライブの追加」を押します</li>"
						."<li>そこで、先ほどダウンロードした「CentOS-6.4-i386-bin-DVD1.iso」を選んでください</li>"
					."</ol>";
	$js[0]["ttl"][3] = 'VirtualBoxからCentOSを起動します';
	$js[0]["cts"][3] = "<ol>"
						."<li>立ち上がるウインドウがCentOSです。デフォルトを選びます（最後だけMinimum desktop）。</li>"
						."<li>カーソルがとられて戻れない時は、ctrl+Alt+Deleteキーを押すことで帰ってこれます</li>"
						."<li>インストールされたのはGUIのCentOSですが、従来のCUIのように扱うには、アプリケーション->システムツール->端末を使えばできます。</li>"
						."<li>そこで以下のコマンドを流します。意味は本等(LINUX コマンド)を参考にしてください。^^;</li>"
						."<ol>"
							."<li>su - （rootにかわります。コマンドを流すとパスワードを聞かれますので、答えます）</li>"
							."<li>yum update （たぶん古いバージョンのCentOSをインストールすると、この後バグる）</li>"
							."<li>yum install httpd httpd-devil</li>"
							."<li>chkconfig httpd on</li>"
							."<li>service httpd start</li>"
							."<li>yum install php php-ci php-pdo php-mysql php-mbstring php-devil</li>"
							."<li>service httpd start</li>"
							."<li>yum install mysql mysql-server</li>"
							."<li>chkconfig mysqld on</li>"
							."<li>service mysqld start</li>"
							."<li>chmod 664 /var/log/httpd/error_log(デバッグ用にエラーログへのアクセス権限を変更します。)</li>"
						."</ol>"
						."<li>実はすでに、WinSCPやputtyjpでアクセスできるようになっていますが、Webブラウザでは、表示できません。そこで、CentOSのFirewallを無効化します（仮想化して開発環境を構築したい時だけこの作業をします）。</li>"
						."<ol>"
							."<li>/etc/init.d/iptables stop</li>"
							."<li>chkconfig iptables off</li>"
							."<li>setenforce 0</li>"
						."</ol>"
						."<li>ここまでできたら、WinSCPで/var/www/html辺りでindex.phpを作成して表示してみましょう。</li>"
					."</ol>";
	$js[0]["ttl"][4] = 'NetBeansのダウンロード（参考：<a href=\"http://junichi11.com/?p=1349\" rel=\"nofollow\">junichi11の日記〜つらつらなるままに〜</a>）';
	$js[0]["cts"][4] = "<ol>"
						."<li>NetBeans(<a href=\"https://netbeans.org/downloads/?pagelang=ja\" rel=\"nofollow\" target=\"_blank\">NetBeansダウンロードサイト</a>)で開発するには、これを用います。</li>"
						."<li>ファイル->プロジェクトを選択[リモート・サーバーからのPHPアプリケーション]を選んで次へ</li>"
						."<li>ソース・フォルダは、展開される場所を示します。次へボタンを押します</li>"
						."<li>管理ボタンを押し、ポート22、ホスト名(000.000.00.0)のようなのを入れて、アクセスするユーザー名、パスワードを入力します。秘密鍵ファイルはそのままでOK。既知のホスト・ファイルは、WinSCPのところで.sshという名のフォルダを作成し、その中にknown_hostという名の空のファイルを作成します。それをWindows上に移動させ、そこを参照すればOKです。</li>"
						."<li>初期ディレクトリ以下がNetBeansにコピーされます。あとは、次へ、終了を押すことで完成です。</li>"
					."</ol>";
	$js[1]["li"] = '3Dプリンタでの出力';
	$js[1]["ttl"][0] = '2D CADでのメモ書き';
	$js[1]["cts"][0] = 'いきなり3D CADで設計しても良いのですが、後から変更'
				.'しようとすると寸法が分からなくなってしまいます。'
				.'寸法のメモ書きには手書きも良いかもしれませんが、'
				.'Jw_cad(フリーソフト)が一番良いかもしれません。'
				.'欲を言えば第三角法など多少、製図の知識をつけると良いでしょう。'
				.'ちなみに2D CADにもいろいろ種類があり、目的に合ったソフトを選ぶ必要があります。'
				.'Jw_cadは建築系のイメージ'
				.'が強いですが、3Dプリンタ向け（機械系）の作業も可能です。';
	$js[1]["ttl"][1] = '3D CADでの設計';
	$js[1]["cts"][1] = '123D Design(フリーソフト)を用いるとカンタンなものは設計可能です。'
				.'いろいろ作る前に3Dプリンタごとの制約を理解しておくことも重要です。'
				.'私は下の画像のように持ち運びができる本棚を作りましたが、'
				.'これは大きすぎてお値段がかかりすぎてしまいます。'
					.'<br /><img src=websitelh/images/book_rest.jpg width=380px height=396px alt=本棚正面画像 /><br />'
					.'<br /><img src=websitelh/images/book_rest2.jpg width=356px height=451px alt=本棚背面画像 />'
				.'<br />夏の暑い日でもスマートフォンを使えるように下の画像のケースを設計しました。'
					.'<img src=websitelh/images/cover.jpg width=215px height=424px alt=カバー画像 />'
				.'<br />こちらは下記の方法で出力しています。';
	$js[1]["ttl"][2] = '3Dプリンタでの出力';
	$js[1]["cts"][2] = '出力する前にチェックが必要です。'
				.'3D CGソフトだと実体化できないネジレができていたり、パーツが複数あったり、'
				.'重なりがある場合、エラーになってしまうかもしれません。'
				.'そこで、チェックソフトが必要になります。私はMiniMagicを用いました。<br />'
				.'3Dプリンタは購入するのも手ですが、新機種がこれから出てきそうなので、'
				.'今（2014年2月）は、個人での所有は少し考えたほうが良いかもしれません。'
				.'現状、Web上での出力サービスがありますので、それを利用することで'
				.'いろいろとできると思います。<br />'
                                .'<img src=websitelh/images/sentcover.jpg width=240px height=427px alt=出力されたカバー画像 /><br />'
.'上の画像は注文から10日程して届いたゴムライク素材のスマートフォンカバーです。きちんとしたサイズで作られていました。＾＾';

//web apps
} elseif ($p == 4) {
	$js[0]["li"]  = 'MH3G スキル調整';
	$js[0]["ttl"][0] = 'MH3Gスキルシミュレータ(剣士)';
	$js[0]["cts"][0] = 'モンハンのスキルシミュレータを開発しました。<br />'
				."<a href=\"http://revertra.webcrow.jp/MH3G/index.php\">MH3Gスキルシミュレータ</a><br />"
				."<br />バージョン2も開発しました。<br />"
				."<a href=\"http://revertra.webcrow.jp/mh3gjs/index.html\">MH3Gスキルシミュレータver.2</a><br />"
				."実現できなかった時、欲しい発動スキルを1つ無くしたパターン全てを試す設定を追加しています。<br />"
				."JavaScriptの記述を増やしてユーザーサイドの処理を増やしています。";
	$js[0]["ttl"][1] = "MH3Gスキルシミュレータ(ガンナー)";
	$js[0]["cts"][1] = "ガンナー向けはバージョン2を改良して開発しました。<br />"
				."<a href=\"http://revertra.webcrow.jp/mh3gg/docs/\">MH3Gスキルシミュレータ(ガンナー)</a>";
	$js[0]["ttl"][2] = "MH3Gスキルシミュレータのアルゴリズム";
	$js[0]["cts"][2] = "<ol>"
						."<li>全装備を欲しいスキルに基づいてポイント付けします。</li>"
						."<li>上位5位＋胴系統倍加の組み合わせを試していきます。</li>"
						."<li>珠を填めていきます。欲しいスキルが適い、且つ空きスロットの多いセットを最大3セット記録します。</li>"
						."<li>表示させます。</li>"
					."</ol>以上です。だから、本来実現可能な発動スキルのセットも不可能となることがあります。でも稀だと思います。^^ ";
					
	$js[1]["li"]  = '討鬼伝 スキル調整';
	$js[1]["ttl"][0] = '討鬼伝 スキル調整';
	$js[1]["cts"][0] = '討鬼伝のミタマで発動するスキルが実現可能か、また、実現できるならどういうセットになるか調べたい時に便利です。<br>'
				.'<a href=http://revertra.webcrow.jp/toki/docs/index.html >討鬼伝（発現スキル調整システム）</a>';
	$js[2]["li"] = 'MH4 スキル調整';
	$js[2]["ttl"][0] = 'MH4スキルシミュレータ（剣士）';
	$js[2]["cts"][0] = 'MH3Gスキルシミュレータをベースに開発しました。<br>'
				."<a href=\"http://revertra.webcrow.jp/mh4/docs/\">MH4スキルシミュレータ（剣士）</a><br>";
	$js[2]["ttl"][1] = 'MH4スキルシミュレータ（ガンナー）';
	$js[2]["cts"][1] = '時間がかかってしまいました。<br>'
				."<a href=\"http://revertra.webcrow.jp/mh4g/docs/\">MH4スキルシミュレータ（ガンナー）</a><br>";
$js[3]["li"] = 'MH4G スキル調整';
$js[3]["ttl"][0] = 'MH4Gスキルシミュレータ（剣士/ガンナー）';
	$js[3]["cts"][0] = '使っている方が増えてきたようなので、オプションやら何やら追加しました。<br>'
				."<a href=\"http://revertra.webcrow.jp/MH4G/\">MH4Gスキルシミュレータ（剣士/ガンナー）</a><br>";
$js[4]["li"] = 'パズドラ ダメージ計算機';
		$js[4]["ttl"][0] = 'puzzle ＆ dragons ダメージ計算機';
		$js[4]["cts"][0] = 'ダメージ計算機は、当初、盤面を自動生成し、最大火力配置を目指して作る予定でした。<br>'
				.'しかし、高難度すぎてやる気が無くなっていたのですが、必要性を感じ、妥協を重ねてこの状況にこぎつきました。<br>'
				."<a href=\"http://revertra.webcrow.jp/PUADRA/\">puzzle ＆ dragons ダメージ計算機</a><br>";
} elseif ($p == 3) {
	$js[0]["li"]="逆相補鎖に変換";
	$js[0]["ttl"][0]="逆相補鎖を表示";
	$js[0]["cts"][0]="インストールすることなく、DNA塩基配列を入力するだけで表示させることができます。<br>"
	."<a href=\"http://revertra.webcrow.jp/DNA/index.php\">逆相補鎖に変換</a>";
	$js[1]["li"]="プライマー設計";
	$js[1]["ttl"][0]="プライマーの設計";
	$js[1]["cts"][0]="インストールすることなく、DNA塩基配列を入力するだけでプライマーの評価ができます。<br>"
	."GC含量、Tm値、プライマーダイマーの確認ができます。周辺配列の追加入力で非特異的結合を予測します。<br>"
	."<a href=\"http://revertra.webcrow.jp/DNA/primer.php\">プライマーの評価</a>";
}

header("Content-type: data.json; charset=UTF-8");
echo json_encode($js);