<?php 
class ctr3{

public $p=0;
const PAGE = [
	["get" => 0, "label" => "ホーム", "side" => ["開発するソフト", "ソフト開発の勧め", "自作PCの勧め", "開発者略歴"]],
	["get" => 1, "label" => "Androidアプリ", "side" => ["ダメージ計算機"]],
	["get" => 4, "label" => "ゲーム攻略", "side" => ["MH3G スキル調整","討鬼伝 スキル調整","MH4 スキル調整","MH4G スキル調整", "パズドラ ダメージ計算機","パズドラ ガチャシミュレータ"]],
	["get" => 2, "label" => "雑記", "side" => [/*"LAMP開発環境の構築",*/ "3Dプリンタでの出力"]],
	["get" => 3, "label" => "DNA解析", "side" => ["逆相補鎖に変換","プライマー設計"]],
	["get" => 5, "label" => "お仕事", "side" => ["勤務時間管理","栄養管理","性格診断"]]
];

public function __construct(){
	// get値が取れなくて困ったらgetが0のページへ飛ばす
	if(isset($_GET["p"])) $this->p = $_GET["p"];
	$bo = false;
	foreach(self::PAGE as $val){
		if($this->p == $val["get"]){
			$bo = true;
			break;
		}
	}
	if(!$bo) $this->p = 0;
}

public function mklabels(){
	$rtn = "";
	foreach(self::PAGE as $v){
		$rtn .= "<li><a href=\"?p=".$v["get"]."\">".$v["label"]."</a></li>";
	}
	return $rtn;
}

public function mksides(){
	$sideBarAry = [];
	foreach(self::PAGE as $v){
		if($this->p == $v["get"]){
			$sideBarAry = $v["side"];
			break;
		}
	}
	$rtn = "";
	for($i=0; $i < count($sideBarAry); $i++){
		$rtn .= "<li data-0=\"".$i."\">".$sideBarAry[$i] . "</li>";
	}
	return $rtn;
}

public function mkatcls(){
	$js = [
		0 => [ //ホーム
			0 => [
				"li" => '開発するソフト',
				"ttl" => ['開発するソフトの内容'],
				"cts" => [
					'生物系出身ですので、そっちの知識があり、DNA解析系のソフトもそれなりに開発できます。'
					.'とはいっても、それでご飯食べている人もいっぱいいますので、'
					.'そういった方に迷惑がかからない程度で開発していく予定です。＾＾；'
				]
			],
			1 => [
				"li" => 'ソフト開発の勧め',
				"ttl" => ['ソフト開発の勧め'],
				"cts" => [
					'素人でもそれなりにできるようになると思います。'
					.'でもプロレベルになるには、やはりちゃんと習わないとなかなかできなさそうです。'
					.'どの辺りが難しいかというと、見やすいコードを書くためのコツ、MVC、楽に書くためのフレームワークなどです。'
					.'レガシーからの脱却などですね。'
					.'<br>しかしそもそも一人で開発しているとそこまでもりもりコードを書くようなことにならず、なかなか必要とならないです。'
				]
			],
			2 => [
				"li" => '自作PCの勧め',
				"ttl" => ['自作PCの勧め'],
				"cts" => [
					'最初に組み立てるのに少し知識が必要です。<br>'
					.'　しかし一度組み立てればその良さが分かるようになると思います。<br>'
					.'　良さというのは、拡張ができるということと、何より自然とハードウェアの知識がつくことです。<br>'
					.'　初めてでもちょっとした本と少しのやる気があって、半日ほどの時間があればできると思います。'
				]
			],
			3 => [
				"li" => '開発者略歴',
				"ttl" => ['開発者略歴'],
				"cts" => [
					'生物系の博士課程まで進学しました。趣味で始めたプログラミング、CADができます。'
					.'VC++(MFC)、Javaが少しだけ書けます。専らPHP、JavaScriptを書いています。最近Pythonが便利なことに気づきました。'
				]
			],
		],
		1 => [ //Androidアプリ
			0 => [
				"li" => 'ダメージ計算機',
				"ttl" => ['ポケモンのダメージ計算機(ver. 2.31)'],
				"cts" => [
					"第4世代〜第5世代対応のポケモンのダメージ計算機を開発しました。参考にしたページは、<a href=\"http://wiki.xn--rckteqa2e.com/wiki/%E3%83%80%E3%83%A1%E3%83%BC%E3%82%B8\" rel=\"nofollow\">ダメージ - ポケモンWiki</a>です。Android4.0以降で動作します。playストアからはダウンロードできません。</p>"
					."<p><img src=websitelh/images/PDC1.jpg width=240 height=420 alt=ダメージ計算機ホーム画面 /><br>ホーム画面はいきなりダメージ計算入力画面です。</p>"
					."<p><img src=websitelh/images/PDC2.jpg width=240 height=420 alt=ダメージ計算機結果画面 /><br>ホームの「計算結果へ」のボタンを押すとこの画面です。</p>"
					."<p><img src=websitelh/images/PDC3.jpg width=240 height=420 alt=ダメージ計算機努力値調整画面 /><br>Androidのメニューボタンを押すとここへ移動できます。防御系ステータスに努力値を割り振るシミュレーションができます。</p>"
					."<p><br>ダウンロードの方法は、Android 4.xのブラウザでアクセスして下のリンクをクリックし、ダウンロードしたapkファイルを直接開こうとすればOKです。PCでダウンロードしてAndroidに送ることもできます。"
					."<br><a href=websitelh/apk/PokemonDamageCaliculator.apk>ポケモンダメージ計算機のダウンロード</a>"
				]
			],
		],
		2 => [ //雑記
			0/* => [
				"li" => 'LAMP開発環境の構築',
				"ttl" => [
					'開発環境の構築(全て無料のソフトです)',
					'CentOSをダウンロード',
					'VirtualBoxをダウンロード(OSがWindowsならfor Windows hostsを選びましょう)',
					'VirtualBoxからCentOSを起動します',
					'NetBeansのダウンロード（参考：<a href=\"http://junichi11.com/?p=1349\" rel=\"nofollow\">junichi11の日記〜つらつらなるままに〜</a>）'
				],
				"cts" => [
					"ここではCentOS, appach, PHP, MySQLの開発環境の構築を紹介します。",
					"<ol>"."<li>まずはCentOSをダウンロードします。<a href=\"http://www.centos.org/\" rel=\"nofollow\" target=\"_blank\">The Community ENTerprize Operating System</a>にアクセス</li>"."<li>グローバルナビゲーションの「Downloads」下のMirrorsにアクセス</li>"
					."<li>Mirror Listをクリック</li>"."<li><span id=\"underline\">South American, Asian, Oceania, Middle Eastern, African and Other Regional</span> Mirrorsをクリック</li>"
					."<li>Asia Japan Internet Initiative Japan Inc. All All Yes HTTP FTP RSYNのHTTPをクリック</li>"
					."<li>6.4/(最新版2013.5.14現在)をクリック（ここはこの時の私に合わせる事無く最新版を選んでください）</li>"
					."<li>isos/ をクリック</li>"
					."<li>i386/(32bit版) をクリック</li>"
					."<li>CentOS-6.4-i386-bin-DVD1.isoをダウンロード</li>"."</ol>",
					"<ol>"."<li>VirtualBoxをダウンロードしたら起動し、新規ボタンを押します</li>"
					."<li>名前は何でも良いです。タイプはLinux、バージョンはRed Hatです（CentOSがRed Hat系のLinux）。次へを押す</li>"
					."<li>メモリーサイズは、CentOS 6.4の最小が1GBだと思います。私は少し余裕をとって2048MBにしました。</li>"
					."<li>ハードドライブは、CentOS 6.4の最小が8GBだと思います。私は少し余裕をとって20GBにしました。</li>"
					."<li>設定ボタンをクリックし、システムをクリックし、起動順序をCD/DVD-ROM、ハードディスク...とします</li>"
					."<li>設定ボタンをクリックし、ストレージをクリックし、コントローラー:IDEをクリックし、「CD/DVDドライブの追加」を押します</li>"
					."<li>そこで、先ほどダウンロードした「CentOS-6.4-i386-bin-DVD1.iso」を選んでください</li>"."</ol>",
					"CUIも軽くて良いのですが、せっかくなのでGUIにします。</p>"
					."<ol>"
						."<li>立ち上がるウインドウがCentOSです。デフォルトを選びます（最後だけMinimum desktop）。</li>"
					."<li>カーソルがとられて戻れない時は、ctrl+Alt+Deleteキーを押すことで帰ってこれます</li>"
					."<li>インストールされたのはGUIのCentOSですが、従来のCUIのように扱うには、アプリケーション->システムツール->端末を使えばできます。</li>"
					."<li>そこで以下のコマンドを流します。意味は本等(LINUX コマンド)を参考にしてください。^^;</li>"
					."<ol>"
					."<li><code>su -</code> （rootにかわります。コマンドを流すとパスワードを聞かれますので、答えます）</li>"
					."<li><code>yum update</code> （たぶん古いバージョンのCentOSをインストールすると、この後バグる）</li>"
					."<li><code>yum install httpd httpd-devil</code></li>"
					."<li><code>chkconfig httpd on</code></li>"
					."<li><code>service httpd start</code></li>"
					."<li><code>yum install php php-ci php-pdo php-mysql php-mbstring php-devel</code></li>"
					."<li><code>service httpd start</code></li>"
					."<li><code>yum install mysql mysql-server</code></li>"
					."<li><code>chkconfig mysqld on</code></li>"."<li><code>service mysqld start</code></li>"
					."<li><code>chmod 664 /var/log/httpd/error_log</code>(デバッグ用にエラーログへのアクセス権限を変更します。)</li>"
					."</ol>"
					."<li>実はすでに、WinSCPやputtyjpでアクセスできるようになっていますが、Webブラウザでは、表示できません。そこで、CentOSのFirewallを無効化します（仮想化して開発環境を構築したい時だけこの作業をします）。</li>"
					."<ol>"
					."<li><code>/etc/init.d/iptables stop</code></li>"
					."<li><code>chkconfig iptables off</code></li>"
					."<li><code>setenforce 0</code></li>"
					."</ol>"
					."<li>ここまでできたら、WinSCPで/var/www/html辺りでindex.phpを作成して表示してみましょう。</li>"
					."</ol><p>PHPの中身は<code>phpinfo()</code>が良いですね。",
					"<ol>"
					."<li>NetBeans(<a href=\"https://netbeans.org/downloads/?pagelang=ja\" rel=\"nofollow\" target=\"_blank\">NetBeansダウンロードサイト</a>)で開発するには、これを用います。</li>"
					."<li>ファイル->プロジェクトを選択[リモート・サーバーからのPHPアプリケーション]を選んで次へ</li>"
					."<li>ソース・フォルダは、展開される場所を示します。次へボタンを押します</li>"
					."<li>管理ボタンを押し、ポート22、ホスト名(000.000.00.0)のようなのを入れて、アクセスするユーザー名、パスワードを入力します。秘密鍵ファイルはそのままでOK。既知のホスト・ファイルは、WinSCPのところで.sshという名のフォルダを作成し、その中にknown_hostという名の空のファイルを作成します。それをWindows上に移動させ、そこを参照すればOKです。</li>"
					."<li>初期ディレクトリ以下がNetBeansにコピーされます。あとは、次へ、終了を押すことで完成です。</li>"
					."</ol>"
					
				]
			],
			1*/ => [
				"li" => '3Dプリンタでの出力',
				"ttl" => ['2D CADでのメモ書き','3D CADでの設計','3Dプリンタでの出力'],
				"cts" => [
					'いきなり3D CADで設計しても良いのですが、後から変更'
					.'しようとすると寸法が分からなくなってしまいます。'
					.'寸法のメモ書きには手書きも良いかもしれませんが、'
					.'Jw_cad(フリーソフト)が一番良いかもしれません。'
					.'欲を言えば第三角法など多少、製図の知識をつけると良いでしょう。'
					.'ちなみに2D CADにもいろいろ種類があり、目的に合ったソフトを選ぶ必要があります。'
					.'Jw_cadは建築系のイメージ'.'が強いですが、3Dプリンタ向け（機械系）の作業も可能です。',
					'123D Design(フリーソフト)を用いるとカンタンなものは設計可能です。'
					.'いろいろ作る前に3Dプリンタごとの制約を理解しておくことも重要です。'
					.'私は下の画像のように持ち運びができる本棚を作りましたが、'
					.'これは大きすぎてお値段がかかりすぎてしまいます。'
					.'<br><img src=websitelh/images/book_rest.jpg width=380 height=396 alt=本棚正面画像 />'
					.'<br><img src=websitelh/images/book_rest2.jpg width=356 height=451 alt=本棚背面画像 />'
					.'<br>夏の暑い日でもスマートフォンを使えるように下の画像のケースを設計しました。'
					.'<img src=websitelh/images/cover.jpg width=215 height=424 alt=カバー画像 />'
					.'<br>こちらは下記の方法で出力しています。',
					'出力する前にチェックが必要です。'
					.'3D CGソフトだと実体化できないネジレができていたり、パーツが複数あったり、'
					.'重なりがある場合、エラーになってしまうかもしれません。'
					.'そこで、チェックソフトが必要になります。私はMiniMagicを用いました。<br>'
					.'3Dプリンタは購入するのも手ですが、新機種がこれから出てきそうなので、'
					.'今（2014年2月）は、個人での所有は少し考えたほうが良いかもしれません。'
					.'現状、Web上での出力サービスがありますので、それを利用することで'
					.'いろいろとできると思います。<br />'
					.'<img src=websitelh/images/sentcover.jpg width=240 height=427 alt=出力されたカバー画像 /><br>'
					.'上の画像は注文から10日程して届いたゴムライク素材のスマートフォンカバーです。きちんとしたサイズで作られていました。＾＾'
				]
			]
		],
		3 => [ //DNA
			0 => [
				"li" => '逆相補鎖に変換',
				"ttl" => ['逆相補鎖を表示'],
				"cts" => [
					"インストールすることなく、DNA塩基配列を入力するだけで表示させることができます。<br>"
					."<a href=\"http://revertra.webcrow.jp/DNA/index.php\">逆相補鎖に変換</a>"
				],
			],
			1 => [
				"li" => 'プライマー設計',
				"ttl" => ['プライマーの設計'],
				"cts" => [
					"インストールすることなく、DNA塩基配列を入力するだけでプライマーの評価ができます。<br>"
					."GC含量、Tm値、プライマーダイマーの確認ができます。周辺配列の追加入力で非特異的結合を予測します。<br>"
					."<a href=\"http://revertra.webcrow.jp/DNA/primer.php\">プライマーの評価</a>"
				]
			]
		],
		4 => [ //ゲーム攻略
			0 => [
				"li" => 'MH3G スキル調整',
				"ttl" => ['MH3Gスキルシミュレータ(剣士)','MH3Gスキルシミュレータ(ガンナー)',"MH3Gスキルシミュレータのアルゴリズム"],
				"cts" => [
					'モンハンのスキルシミュレータを開発しました。<br>'
					."<a href=\"http://revertra.webcrow.jp/MH3G/index.php\">MH3Gスキルシミュレータ</a><br>"."バージョン2も開発しました。<br>"
					."<a href=\"http://revertra.webcrow.jp/mh4gjs/index.html\">MH3Gスキルシミュレータver.2</a><br>"
					."実現できなかった時、欲しい発動スキルを1つ無くしたパターン全てを試す設定を追加しています。<br>"
					."JavaScriptの記述を増やしてユーザーサイドの処理を増やしています。",
					"ガンナー向けはバージョン2を改良して開発しました。<br>"
					."<a href=\"http://revertra.webcrow.jp/mh4gg/docs/\">MH3Gスキルシミュレータ(ガンナー)</a>",
					"なんとなく作ったら、こうなりました。</p><ol>"
					."<li>全装備を欲しいスキルに基づいてポイント付けします。</li>"
					."<li>上位5位＋胴系統倍加の組み合わせを試していきます。</li>"
					."<li>珠を填めていきます。欲しいスキルが適い、且つ空きスロットの多いセットを最大3セット記録します。</li>"
					."<li>表示させます。</li>"
					."</ol><p>以上です。だから、本来実現可能な発動スキルのセットも不可能となることがあります。でも稀だと思います。^^ "
				]
			],
			1 => [
				"li" => '討鬼伝 スキル調整',
				"ttl" => ["討鬼伝 スキル調整"],
				"cts" => [
					'討鬼伝のミタマで発動するスキルが実現可能か、また、実現できるならどういうセットになるか調べたい時に便利です。<br>'
					.'<a href=http://revertra.webcrow.jp/toki/docs/index.html >討鬼伝（発現スキル調整システム）</a>'
				]
			],
			2 => [
				"li" => 'MH4 スキル調整',
				"ttl" => ["MH4スキルシミュレータ（剣士）","MH4スキルシミュレータ（ガンナー）"],
				"cts" => [
					'MH3Gスキルシミュレータをベースに開発しました。<br>'
					."<a href=\"http://revertra.webcrow.jp/mh4/docs/\">MH4スキルシミュレータ（剣士）</a><br>",
					'時間がかかってしまいました。<br>'
					."<a href=\"http://revertra.webcrow.jp/mh4g/docs/\">MH4スキルシミュレータ（ガンナー）</a><br>"
				]
			],
			3 => [
				"li" => 'MH4G スキル調整',
				"ttl" => ["MH4Gスキルシミュレータ（剣士/ガンナー）"],
				"cts" => [
					'使っている方が増えてきたようなので、オプションやら何やら追加しました。<br>'
					."<a href=\"http://revertra.webcrow.jp/MH4G/\">MH4Gスキルシミュレータ（剣士/ガンナー）</a><br>"
				]
			],
			4 => [
				"li" => 'パズドラ ダメージ計算機',
				"ttl" => ["puzzle ＆ dragons ダメージ計算機"],
				"cts" => [
					'ダメージ計算機は、当初、盤面を自動生成し、最大火力配置を目指して作る予定でした。<br>'
					.'しかし、高難度すぎてやる気が無くなっていたのですが、必要性を感じ、妥協を重ねてこの状況にこぎつきました。<br>'
					."<a href=\"http://revertra.webcrow.jp/PUADRA/\">puzzle ＆ dragons ダメージ計算機</a><br>"
				]
			],
			5 => [
				"li" => 'パズドラ ガチャシミュレータ',
				"ttl" => ["puzzle ＆ dragons ガチャシミュレータ"],
				"cts" => [
					'ガチャシミュレータは作っても意味無いかと思っていたのですが、不意に必要性を感じました。<br>'
					.'というのも、これがあれば残念な結果にも納得がいくということもあるかも？<br>'
					."<a href=\"http://revertra.webcrow.jp/PUADRA_G/\">puzzle ＆ dragons ガチャシミュレータ</a><br>"
				]
			],
		],
		5 => [ //お仕事
			0 => [
				"li" => '勤務時間管理',
				"ttl" => ['勤務時間管理'],
				"cts" => [
					"インストールすることなく、ボタンを押すだけで操作ができます。<br>"
					."DBではなく、webストレージに保存されますので、デバイス（Webブラウザ）に応じたデータストックになります。<br>"
					."<a href=\"http://revertra.webcrow.jp/work/work.php\">勤務時間管理</a>"
				],
			],
			1 => [
				"li" => '栄養管理',
				"ttl" => ['栄養管理メモ'],
				"cts" => [
					"あなたの不足しがちな栄養素は何でしょうか。このWebアプリケーションを使えば、可視化できるでしょう。<br>"
					."DBではなく、webストレージに保存されますので、デバイス（Webブラウザ）に応じたデータストックになります。<br>"
					."<a href=\"http://revertra.webcrow.jp/nutrient/\">栄養管理メモ</a><br>"
					."作ってみて思ったのが、完全栄養食の献立を作ることが非常に難しいということです。"
					."そもそも緑黄色野菜なしでは、栄養不足になりがちな食生活になるだろうことが分かりました。"
				],
			],
			2 => [
				"li" => '性格診断',
				"ttl" => ['性格診断'],
				"cts" => [
					"エニアグラムによる性格診断を助ける質問を考えて作成しました。<br>"
					."最初の難関が自分のタイプを知ることだと思います。<br>"
					."下のリンク先で自分のタイプの推測をしてみましょう。<br>"
					."<a href=\"http://revertra.webcrow.jp/temperament/\">簡易性格診断</a><br>"
					."他のサイトでそのタイプの解説を見てみましょう。価値があるかないかご自身で判断してください。"
				]
			]
		]
	];
	
	return $js[$this->p];
}
}