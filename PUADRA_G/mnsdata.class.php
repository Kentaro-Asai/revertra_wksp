<?php
class mnsdata {
	const NAV_NUM = 3;
	const SERIES = 21; //現在見せたいコラボ
	var $g = 21;
	
	public function __construct() {
		$this->g = self::SERIES;
		if (isset($_GET['g'])) {
			$this->g = $_GET['g'];
			$is_attk = true;
			for ($i=0; $i <= $this->ttl(-2); $i++) {
				if ($i == $this->g) {
					$is_attk = false;
				}
			}
			if ($is_attk) {
				$this->g = self::SERIES;
			}
		}
	}
	
	public function series() {
		return $this->g;
	}

	public function ttl($num = -1)
	{
		$ttl_ary = array(
			0 => "フェス限ヒロイン",
			1 => "FFコラボ",
			2 => "BLEACHコラボ",
			3 => "クリスマス",
			4 => "エヴァコラボ",
			5 => "お正月",
			6 => "北斗の拳コラボ",
			7 => "サンデーコラボ",
			8 => "クローズコラボ",
			9 => "るろうに剣心コラボ",
			10 => "マガジンコラボ",
			11 => "新学期",
			12 => "ぷぎゅコレ",
			13 => "モンハンコラボ",
			14 => "進撃の巨人コラボ",
			15 => "ジューンブライド",
			16 => "女の子フェス",
			17 => "夏休み",
			18 => "キン肉マンコラボ",
			19 => "神羅万象チョココラボ",
			20 => "龍契士&龍喚士",
			21 => "ハロウィンコラボ",
			22 => "鋼の錬金術師コラボ",
			23 => "KOFコラボ",
			24 => "バレンタイン",
			25 => "幽☆遊☆白書",
			26 => "サムライスピリッツ"
		);
		if ($num == -1) {
			return $ttl_ary;
		}else if ($num == -2) {
			return count($ttl_ary) - 1;
		}
		return $ttl_ary[$num];
	}
	
	public function lstMns($num)
	{
		$mns_ary = array(
			0 => array(
				array("no"=>3274, "nm" => "魔導書の幻魔・イルミナ", "rr"=> 7, "pc"=> 2),
				array("no"=>3275, "nm" => "裁盤の鋼星神・エルゲヌビ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3276, "nm" => "討弓の鋼星神・メリディオナリス", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3277, "nm" => "獄幻魔の愛娘・ロミア", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3278, "nm" => "蒼翼の閃龍喚士・ナヴィ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3279, "nm" => "冥装の龍機工士・バーバラ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3280, "nm" => "撃瓶の鋼星神・クヴィア", "rr"=> 5, "pc"=> 9.25),
				array("no"=>3281, "nm" => "冷面の魔公女・メル", "rr"=> 5, "pc"=> 9.25),
				array("no"=>3282, "nm" => "神書の検索者・ミト", "rr"=> 5, "pc"=> 9.25),
				array("no"=>3283, "nm" => "碧地司の龍巫女・モミジ", "rr"=> 5, "pc"=> 9.25),
				array("no"=>3284, "nm" => "龍喚士の弟子・シーナ", "rr"=> 5, "pc"=> 9.25),
				array("no"=>3524, "nm" => "水華の喜女神・ウルカ", "rr"=> 7, "pc"=> 2),
				array("no"=>3526, "nm" => "静装の龍機博士・ジュリ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>4195, "nm" => "回想の時女神・プレーナ", "rr"=> 7, "pc"=> 2),
				array("no"=>4197, "nm" => "和龍喚士の弟子・エリカ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>4199, "nm" => "遊歓の魔領主・ルネリス", "rr"=> 5, "pc"=> 9.25),
			),
			1 => array(
				array("no"=>2029, "nm" => "クラウド", "rr"=> 6, "pc"=> 1),
				array("no"=>2031, "nm" => "セフィロス", "rr"=> 6, "pc"=> 1),
				array("no"=>2033, "nm" => "スコール", "rr"=> 5, "pc"=> 5),
				array("no"=>2035, "nm" => "リノア", "rr"=> 5, "pc"=> 5),
				array("no"=>2037, "nm" => "ジタン", "rr"=> 5, "pc"=> 5),
				array("no"=>2039, "nm" => "ビビ", "rr"=> 4, "pc"=> 4),
				array("no"=>2041, "nm" => "ティーダ", "rr"=> 5, "pc"=> 5),
				array("no"=>2043, "nm" => "ユウナ", "rr"=> 6, "pc"=> 1),
				array("no"=>2045, "nm" => "エース", "rr"=> 4, "pc"=> 4),
				array("no"=>2047, "nm" => "エモ", "rr"=> 4, "pc"=> 4),
				array("no"=>2049, "nm" => "ウォル", "rr"=> 4, "pc"=> 4),
				array("no"=>2767, "nm" => "セシル", "rr"=> 6, "pc"=> 1),
				array("no"=>2770, "nm" => "バッツ", "rr"=> 5, "pc"=> 5),
				array("no"=>2772, "nm" => "ティナ", "rr"=> 5, "pc"=> 5),
				array("no"=>2774, "nm" => "シャントット", "rr"=> 5, "pc"=> 5),
				array("no"=>2776, "nm" => "ヴァン", "rr"=> 5, "pc"=> 5),
				array("no"=>2778, "nm" => "ライトニング", "rr"=> 6, "pc"=> 1),
				array("no"=>2781, "nm" => "ヤ・シュトラ", "rr"=> 5, "pc"=> 5),
				array("no"=>2783, "nm" => "レイン", "rr"=> 4, "pc"=> 4),
				array("no"=>3295, "nm" => "オニオンナイト", "rr"=> 5, "pc"=> 5),
				array("no"=>3297, "nm" => "ティファ", "rr"=> 6, "pc"=> 1),
				array("no"=>3300, "nm" => "アーロン", "rr"=> 4, "pc"=> 4),
				array("no"=>3302, "nm" => "パンネロ ", "rr"=> 4, "pc"=> 4),
				array("no"=>3304, "nm" => "ノクティス", "rr"=> 6, "pc"=> 1),
				array("no"=>3796, "nm" => "バルフレア", "rr"=> 6, "pc"=> 1),
				array("no"=>3798, "nm" => "イダ", "rr"=> 5, "pc"=> 5),
				array("no"=>3800, "nm" => "プロンプト", "rr"=> 5, "pc"=> 5),
				array("no"=>3802, "nm" => "レェン＆ラァン", "rr"=> 4, "pc"=> 4),
			),
			2 => array(
				array("no"=>2675, "nm" => "黒崎一護", "rr"=> 6, "pc"=> 2.5),
				array("no"=>2678, "nm" => "朽木ルキア", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3356, "nm" => "山本元柳斎重國", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3358, "nm" => "藍染惣右介", "rr"=> 6, "pc"=> 2.5),
				array("no"=>2688, "nm" => "浦原喜助", "rr"=> 5, "pc"=> 6),
				array("no"=>2690, "nm" => "日番谷冬獅郎", "rr"=> 5, "pc"=> 6),
				array("no"=>2694, "nm" => "更木剣八", "rr"=> 5, "pc"=> 6),
				array("no"=>3360, "nm" => "ウルキオラ・シファー", "rr"=> 5, "pc"=> 6),
				array("no"=>3362, "nm" => "グリムジョー・ジャガージャック", "rr"=> 5, "pc"=> 6),
				array("no"=>2680, "nm" => "井上織姫", "rr"=> 4, "pc"=> 12),
				array("no"=>2682, "nm" => "石田雨竜", "rr"=> 4, "pc"=> 12),
				array("no"=>2684, "nm" => "茶渡泰虎", "rr"=> 4, "pc"=> 12),
				array("no"=>2686, "nm" => "四楓院夜一", "rr"=> 4, "pc"=> 12),
				array("no"=>2692, "nm" => "松本乱菊", "rr"=> 4, "pc"=> 12)
			),
			3 => array(
				array("no"=>1782, "nm" => "聖夜の神精霊・ジーニャ", "rr"=> 6, "pc"=> 5),
				array("no"=>1783, "nm" => "聖夜の麒麟姫・サクヤ", "rr"=> 7, "pc"=> 2),
				array("no"=>2511, "nm" => "聖堂の女主神・カーリー", "rr"=> 8, "pc"=> 1),
				array("no"=>2512, "nm" => "聖夜の赤龍喚士・ソニア", "rr"=> 8, "pc"=> 1),
				array("no"=>2513, "nm" => "星雪の白虎・ハク", "rr"=> 6, "pc"=> 5),
				array("no"=>2514, "nm" => "熱宴の龍英傑・劉備", "rr"=> 7, "pc"=> 2),
				array("no"=>3376, "nm" => "聖堂の豊麗神・フレイヤ", "rr"=> 5, "pc"=> 15),
				array("no"=>3377, "nm" => "聖祭の夜叉姫・初芽局", "rr"=> 5, "pc"=> 15),
				array("no"=>3378, "nm" => "聖夜の兄妹・ポルックス＆カストル", "rr"=> 5, "pc"=> 15),
				array("no"=>3379, "nm" => "聖夜の来訪者・グレモリー", "rr"=> 8, "pc"=> 1),
				array("no"=>4064, "nm" => "聖夜の灰幻魔・イルミナ", "rr"=> 8, "pc"=> 1),
				array("no"=>4065, "nm" => "聖宴の黄龍神・ファガン", "rr"=> 7, "pc"=> 2),
				array("no"=>4066, "nm" => "聖夜の運び屋・クラウソラス", "rr"=> 6, "pc"=> 5),
				array("no"=>4067, "nm" => "聖祭の慈愛神・ヴィーナス", "rr"=> 5, "pc"=> 15),
			),
			4 => array(
				array("no"=>695, "nm" => "アスカ＆エヴァ2号機", "rr"=> 4, "pc"=> 8),
				array("no"=>697, "nm" => "シンジ＆エヴァ初号機", "rr"=> 4, "pc"=> 8),
				array("no"=>699, "nm" => "マリ＆エヴァ仮設5号機", "rr"=> 4, "pc"=> 8),
				array("no"=>701, "nm" => "レイ＆エヴァ零号機", "rr"=> 4, "pc"=> 8),
				array("no"=>703, "nm" => "カヲル＆Mark.06・建造中", "rr"=> 4, "pc"=> 8),
				array("no"=>705, "nm" => "シンジ＆カヲル＆第13号機", "rr"=> 5, "pc"=> 7),
				array("no"=>1202, "nm" => "ミサト＆AAAヴンダー", "rr"=> 5, "pc"=> 7),
				array("no"=>3393, "nm" => "レイ＆ミルスーツ", "rr"=> 6, "pc"=> 5),
				array("no"=>3394, "nm" => "カヲル＆カーリースーツ", "rr"=> 6, "pc"=> 5),
				array("no"=>3395, "nm" => "ミサト＆レイランドレス", "rr"=> 5, "pc"=> 7),
				array("no"=>3396, "nm" => "アスカ＆ヤマトタケルスーツ", "rr"=> 5, "pc"=> 7),
				array("no"=>3397, "nm" => "シンジ＆シェアトスーツ", "rr"=> 5, "pc"=> 7),
				array("no"=>3398, "nm" => "マリ＆セレススーツ", "rr"=> 5, "pc"=> 7),
				array("no"=>3399, "nm" => "アヤナミレイ(仮称)＆Mark.09", "rr"=> 4, "pc"=> 8)
			),
			5 => array(
				array("no"=>2533, "nm" => "遊山の天舞神・アマテラスオオカミ", "rr"=> 8, "pc"=> 0.5),
				array("no"=>2534, "nm" => "紅日の寿龍喚士・カンナ", "rr"=> 8, "pc"=> 0.5),
				array("no"=>2535, "nm" => "初日の朱雀姫・レイラン", "rr"=> 6, "pc"=> 10),
				array("no"=>2536, "nm" => "宿願の武皇神・ヤマトタケル", "rr"=> 7, "pc"=> 2),
				array("no"=>2537, "nm" => "初夢招福神・ホルス", "rr"=> 7, "pc"=> 2),
				array("no"=>2538, "nm" => "初日影の幻光・服部半蔵", "rr"=> 5, "pc"=> 12),
				array("no"=>2540, "nm" => "伝統のだるま・大天狗", "rr"=> 4, "pc"=> 18),
				array("no"=>2574, "nm" => "節会の稲荷・ミツキ", "rr"=> 5, "pc"=> 12),
				array("no"=>3418, "nm" => "物見の夜月神・ツクヨミ", "rr"=> 8, "pc"=> 0.5),
				array("no"=>3419, "nm" => "参詣の星機姫・スピカ", "rr"=> 5, "pc"=> 12),
				array("no"=>3420, "nm" => "かるた取りの女王・ジャンヌダルク", "rr"=> 4, "pc"=> 18),
				array("no"=>4128, "nm" => "神殿の霊央神・カミムスビ", "rr"=> 8, "pc"=> 0.5),
				array("no"=>4129, "nm" => "多福の芸女神・アメノウズメ", "rr"=> 6, "pc"=> 10),
				array("no"=>4130, "nm" => "初陽の蒼空神・ケプリ", "rr"=> 7, "pc"=> 2),
			),
			6 => array(
				array("no"=>1858, "nm" => "ラオウ", "rr"=> 7, "pc"=> 1.5),
				array("no"=>1860, "nm" => "ケンシロウ", "rr"=> 7, "pc"=> 1.5),
				array("no"=>1862, "nm" => "トキ", "rr"=> 6, "pc"=> 3),
				array("no"=>1864, "nm" => "シン", "rr"=> 5, "pc"=> 7.863),
				array("no"=>1866, "nm" => "レイ", "rr"=> 5, "pc"=> 7.863),
				array("no"=>1868, "nm" => "ユダ", "rr"=> 5, "pc"=> 7.863),
				array("no"=>1870, "nm" => "シュウ", "rr"=> 5, "pc"=> 7.863),
				array("no"=>1872, "nm" => "サウザー", "rr"=> 5, "pc"=> 7.864),
				array("no"=>1874, "nm" => "マミヤ", "rr"=> 5, "pc"=> 7.864),
				array("no"=>2446, "nm" => "南斗最後の将", "rr"=> 6, "pc"=> 3),
				array("no"=>2448, "nm" => "ジュウザ", "rr"=> 5, "pc"=> 7.864),
				array("no"=>2450, "nm" => "フドウ", "rr"=> 5, "pc"=> 7.864),
				array("no"=>2452, "nm" => "リハク", "rr"=> 5, "pc"=> 7.864),
				array("no"=>3077, "nm" => "ヒューイ", "rr"=> 5, "pc"=> 7.864),
				array("no"=>3079, "nm" => "シュレン", "rr"=> 5, "pc"=> 7.864),
				array("no"=>3408, "nm" => "カイオウ", "rr"=> 7, "pc"=> 1.5),
				array("no"=>3410, "nm" => "バット", "rr"=> 6, "pc"=> 3),
			),
			7 => array(
				array("no"=>2457, "nm" => "犬夜叉", "rr"=> 6, "pc"=> 1.88),
				array("no"=>2460, "nm" => "日暮かごめ", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2462, "nm" => "ラム", "rr"=> 5, "pc"=> 4),
				array("no"=>2464, "nm" => "蒼月潮＆とら", "rr"=> 6, "pc"=> 1.88),
				array("no"=>2466, "nm" => "引挟霧雄＆九印", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2468, "nm" => "花菱烈火", "rr"=> 5, "pc"=> 4),
				array("no"=>2470, "nm" => "霧沢風子", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2472, "nm" => "アラジン", "rr"=> 5, "pc"=> 4),
				array("no"=>2474, "nm" => "アリババ", "rr"=> 5, "pc"=> 4),
				array("no"=>2476, "nm" => "モルジアナ", "rr"=>4, "pc"=> 4.6),
				array("no"=>2839, "nm" => "殺生丸", "rr"=> 6, "pc"=> 1.88),
				array("no"=>2841, "nm" => "桔梗", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2843, "nm" => "ヒョウ", "rr"=> 5, "pc"=> 4),
				array("no"=>2845, "nm" => "紅麗", "rr"=> 5, "pc"=> 4),
				array("no"=>2847, "nm" => "水鏡凍季也", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2849, "nm" => "小金井薫", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2851, "nm" => "石島土門", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2853, "nm" => "シンドバッド", "rr"=> 6, "pc"=> 1.88),
				array("no"=>2855, "nm" => "錬白龍", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2857, "nm" => "錬紅玉", "rr"=> 4, "pc"=> 4.6),
				array("no"=>2859, "nm" => "三橋＆伊藤", "rr"=> 5, "pc"=> 4),
				array("no"=>2861, "nm" => "江戸川コナン", "rr"=> 5, "pc"=> 4),
				array("no"=>3433, "nm" => "服部平次", "rr"=> 5, "pc"=> 4),
				array("no"=>3435, "nm" => "早乙女乱馬", "rr"=> 6, "pc"=> 1.88),
				array("no"=>3438, "nm" => "天道あかね", "rr"=> 4, "pc"=> 4.6),
				array("no"=>3440, "nm" => "本田吾郎", "rr"=> 5, "pc"=> 4),
			),
			8 => array(
				array("no"=>2601, "nm" => "坊屋春道", "rr"=> 6, "pc"=> 2.5),
				array("no"=>2603, "nm" => "林田恵", "rr"=> 6, "pc"=> 2.5),
				array("no"=>2605, "nm" => "古川修", "rr"=> 5, "pc"=> 7),
				array("no"=>2607, "nm" => "九能龍信", "rr"=> 5, "pc"=> 7),
				array("no"=>2609, "nm" => "美藤竜也", "rr"=> 5, "pc"=> 7),
				array("no"=>2611, "nm" => "安田泰男", "rr"=> 4, "pc"=> 7.5),
				array("no"=>2613, "nm" => "阪東秀人", "rr"=> 4, "pc"=> 7.5),
				array("no"=>2615, "nm" => "金山丈", "rr"=> 4, "pc"=> 7.5),
				array("no"=>2617, "nm" => "春山孝一", "rr"=> 4, "pc"=> 7.5),
				array("no"=>2619, "nm" => "村田十三", "rr"=>4, "pc"=> 7.5),
				array("no"=>3462, "nm" => "月島花", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3464, "nm" => "花木九里虎", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3466, "nm" => "武田好誠", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3468, "nm" => "河内鉄生", "rr"=> 5, "pc"=> 7),
				array("no"=>3470, "nm" => "藤代拓海", "rr"=> 5, "pc"=> 7),
				array("no"=>3472, "nm" => "迫田武文", "rr"=> 4, "pc"=> 7.5),
				array("no"=>3474, "nm" => "武藤蓮次", "rr"=> 4, "pc"=> 7.5),
			),
			9 => array(
				array("no"=>3018, "nm" => "緋村剣心", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3020, "nm" => "神谷薫", "rr"=> 4, "pc"=> 8.5),
				array("no"=>3022, "nm" => "明神弥彦", "rr"=> 4, "pc"=> 8.5),
				array("no"=>3024, "nm" => "相楽左之助", "rr"=> 5, "pc"=> 5.6),
				array("no"=>3026, "nm" => "高荷恵", "rr"=> 4, "pc"=> 8.5),
				array("no"=>3028, "nm" => "四乃森蒼紫", "rr"=> 5, "pc"=> 5.6),
				array("no"=>3030, "nm" => "巻町操", "rr"=> 4, "pc"=> 8.5),
				array("no"=>3032, "nm" => "斎藤一", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3034, "nm" => "瀬田宗次郎", "rr"=> 4, "pc"=> 8.5),
				array("no"=>3036, "nm" => "本条鎌足", "rr"=> 5, "pc"=> 5.6),
				array("no"=>3555, "nm" => "新津覚之進", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3557, "nm" => "柏崎念至", "rr"=> 5, "pc"=> 5.6),
				array("no"=>3559, "nm" => "駒形由美", "rr"=> 4, "pc"=> 8.5),
				array("no"=>3561, "nm" => "鵜堂刃衛", "rr"=> 4, "pc"=> 8.5),
				array("no"=>4002, "nm" => "雪代巴", "rr"=> 5, "pc"=> 5.6),
				array("no"=>4004, "nm" => "雪代縁", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4422, "nm" => "幕末の亡霊・志々雄真実", "rr"=> 6, "pc"=> 2.5),
			),
			10 => array(
				array("no"=>3605, "nm" => "ナツ", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3607, "nm" => "ルーシィ", "rr"=> 5, "pc"=> 8.94),
				array("no"=>3608, "nm" => "メリオダス", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3610, "nm" => "エリザベス", "rr"=> 5, "pc"=> 8.94),
				array("no"=>3611, "nm" => "サクラ", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3613, "nm" => "小狼", "rr"=> 5, "pc"=> 8.94),
				array("no"=>3614, "nm" => "パイ", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3616, "nm" => "藤井八雲", "rr"=> 5, "pc"=> 8.94),
				array("no"=>3617, "nm" => "陸奥九十九", "rr"=> 6, "pc"=> 2.5),
				array("no"=>3619, "nm" => "龍造寺舞子", "rr"=> 5, "pc"=> 8.94),
				array("no"=>4432,"nm"=>"幕之内一歩","rr"=>6,"pc"=>2.5),
				array("no"=>4434,"nm"=>"宮田一郎","rr"=>5,"pc"=> 8.94),
				array("no"=>4436,"nm"=>"チンミ","rr"=>6,"pc"=>2.5),
				array("no"=>4438,"nm"=>"シーファン","rr"=>5,"pc"=> 8.93),
				array("no"=>4439,"nm"=>"ガッシュ＆高嶺清麿","rr"=>6,"pc"=>2.5),
				array("no"=>4441,"nm"=>"ブラゴ＆シェリー","rr"=>5,"pc"=> 8.93),
				array("no"=>5534,"nm"=>"グレイ","rr"=>6,"pc"=>2.5),
				array("no"=>5536,"nm"=>"沢村栄純","rr"=>6,"pc"=>2.5),
				array("no"=>5538,"nm"=>"ディアンヌ","rr"=>5,"pc"=>3.5),
			),
			11 => array(
				array("no"=> 2014,"nm"=>"生徒会長・ルシファー", "rr"=>7,"pc"=>2),
				array("no"=> 2015,"nm"=>"風紀委員長・アテナ", "rr"=>7,"pc"=>2),
				array("no"=> 2017,"nm"=>"特待生・イシス", "rr"=>7,"pc"=>2),
				//array("no"=> 2813,"nm"=>"軽音部の麒麟姫・サクヤ", "rr"=>8,"pc"=>1.5),
				array("no"=> 2814,"nm"=>"図書室の管理神・カーリー", "rr"=>8,"pc"=>1.5),
				array("no"=> 2815,"nm"=>"新聞部の特命記者・猿飛佐助", "rr"=>5,"pc"=>14.375),
				//array("no"=> 2816,"nm"=>"飼育部の元気娘・赤ずきん", "rr"=>4,"pc"=>11),
				//array("no"=> 2817,"nm"=>"占い部の名物部長・白雪姫", "rr"=>4,"pc"=>11),
				//array("no"=> 2818,"nm"=>"帰宅部のおてんば娘・おやゆび姫", "rr"=>4,"pc"=>11),
				//array("no"=> 2819,"nm"=>"演劇部のヒロイン・シンデレラ", "rr"=>4,"pc"=>11),
				//array("no"=> 2820,"nm"=>"読書部の才媛・ねむり姫", "rr"=>4,"pc"=>11),
				array("no"=> 2821,"nm"=>"バレー部の悪魔・テウルギア", "rr"=>5,"pc"=>14.375),
				array("no"=> 3648,"nm"=>"学園の暴れ龍・ヤマタノオロチ", "rr"=>8,"pc"=>1.5),
				array("no"=> 3649,"nm"=>"嵐の転校生・スサノオノミコト", "rr"=>6,"pc"=>7.5),
				array("no"=> 3650,"nm"=>"料理部の新鋭・ハトホル", "rr"=>6,"pc"=>7.5),
				array("no"=> 3651,"nm"=>"剣道部の主将・不動明王", "rr"=>6,"pc"=>7.5),
				array("no"=>4344,"nm"=>"学園のアイドル・ウルカ","rr"=>8,"pc"=>1.5),
				array("no"=>4345,"nm"=>"陶芸部の女神・ヘスティア","rr"=>7,"pc"=>2),
				array("no"=>4346,"nm"=>"生徒会書記・ロキ","rr"=>6,"pc"=>7.5),
				array("no"=>4347,"nm"=>"夜ふかし龍騎姫・イシュタル","rr"=>5,"pc"=>14.375),
				array("no"=>4348,"nm"=>"寄り道の星天使・ルミエル","rr"=>5,"pc"=>14.375)
			),
			12 => array(
				array("no"=>1784,"nm"=>"月光牙の魔女・ミニりりす", "rr"=>5, "pc"=>5),
				array("no"=>1785,"nm"=>"薔薇戦姫・ミニぐれいすばるきりー", "rr"=>5, "pc"=>5),
				array("no"=>1786,"nm"=>"朱雀の化身・ミニれいらん", "rr"=>4, "pc"=>5),
				array("no"=>1787,"nm"=>"青龍の化身・ミニかりん", "rr"=>4, "pc"=>5),
				array("no"=>1788,"nm"=>"玄武の化身・ミニめいめい", "rr"=>4, "pc"=>5),
				array("no"=>1789,"nm"=>"麒麟の化身・ミニさくや", "rr"=>4, "pc"=>5),
				array("no"=>1790,"nm"=>"白虎の化身・ミニはく", "rr"=>4, "pc"=>5),
				array("no"=>1791,"nm"=>"夜刻武神・ミニつくよみ ", "rr"=>5, "pc"=>5),
				array("no"=>1792,"nm"=>"神書の管理者・ミニめたとろん", "rr"=>6, "pc"=>2),
				array("no"=>1793,"nm"=>"現世の赤龍喚士・ミニそにあ", "rr"=>6, "pc"=>2),
				array("no"=>1794,"nm"=>"反逆の熾天使・ミニるしふぁー", "rr"=>5, "pc"=>5),
				array("no"=>2314,"nm"=>"覚醒・ミニへらうるず↑↑", "rr"=>5, "pc"=>5),
				array("no"=>2315,"nm"=>"神王妃・ミニへら", "rr"=>5, "pc"=>5),
				array("no"=>2316,"nm"=>"神罰の審理者・ミニめたとろん", "rr"=>6, "pc"=>2),
				array("no"=>2906,"nm"=>"黒翼姫神・ミニばるきりーくれーる ", "rr"=>6, "pc"=>2),
				array("no"=>2907,"nm"=>"時女神・ミニうるど", "rr"=>5, "pc"=>5),
				array("no"=>2908,"nm"=>"時女神・ミニべるだんでぃ", "rr"=>5, "pc"=>5),
				array("no"=>2909,"nm"=>"時女神・ミニすくるど", "rr"=>6, "pc"=>2),
				array("no"=>2910,"nm"=>"魔哭の冥夜神・ミニぱんどら", "rr"=>5, "pc"=>5),
				array("no"=>2911,"nm"=>"覚醒ミニいしす", "rr"=>5, "pc"=>5),
				array("no"=>2912,"nm"=>"覚醒ミニばすてと", "rr"=>5, "pc"=>5),
				array("no"=>2913,"nm"=>"覚醒ミニあまてらす", "rr"=>5, "pc"=>5),
				array("no"=>2914,"nm"=>"覚醒ミニつくよみ", "rr"=>5, "pc"=>5)
			),
			13 => array(
				array("no"=>3652,"nm"=>"リオレウス", "rr"=>6,"pc"=>5.22),
				array("no"=>3653,"nm"=>"リオレイア", "rr"=>5,"pc"=>7.92),
				array("no"=>3654,"nm"=>"キリン", "rr"=>6,"pc"=>5.22),
				array("no"=>3655,"nm"=>"ティガレックス","rr"=>5,"pc"=>7.92),
				array("no"=>3656,"nm"=>"ナルガクルガ","rr"=>5,"pc"=>7.92),
				array("no"=>3657,"nm"=>"アマツマガツチ","rr"=>7,"pc"=>2),
				array("no"=>3658,"nm"=>"ディノバルド","rr"=>6,"pc"=>5.22),
				array("no"=>3659,"nm"=>"ガムート","rr"=>5,"pc"=>7.92),
				array("no"=>3660,"nm"=>"ライゼクス","rr"=>5, "pc"=>7.92),
				array("no"=>3661,"nm"=>"タマミツネ","rr"=>6, "pc"=>5.22),
				array("no"=>3662,"nm"=>"バルファルク","rr"=>6,"pc"=>5.22),
				array("no"=>3663,"nm"=>"鏖魔ディアブロス","rr"=>7,"pc"=>2),
				array("no"=>4133,"nm"=>"ベリオロス","rr"=>5,"pc"=>7.92),
				array("no"=>4134,"nm"=>"ブラキディオス","rr"=>6,"pc"=>5.22),
				array("no"=>4135,"nm"=>"金雷公ジンオウガ","rr"=>7,"pc"=>2),
				array("no"=>4136,"nm"=>"パオウルムー","rr"=>5,"pc"=>7.92),
				array("no"=>4137,"nm"=>"レイギエナ","rr"=> 6,"pc"=>5.22),
				array("no"=>4138,"nm"=>"ネルギガンテ","rr"=> 7,"pc"=>2)
			),
			14 => array(
				array("no"=>2353, "nm" => "エレン・イェーガー", "rr"=> 5, "pc"=> 2),
				array("no"=>2356, "nm" => "ミカサ・アッカーマン", "rr"=> 5, "pc"=> 2),
				array("no"=>2358, "nm" => "リヴァイ", "rr"=> 5, "pc"=> 2),
				array("no"=>2361, "nm" => "アルミン・アルレルト", "rr"=> 4, "pc"=> 15),
				array("no"=>2363, "nm" => "エルヴィン・スミス", "rr"=> 4, "pc"=> 15),
				array("no"=>2365, "nm" => "ジャン・キルシュタイン", "rr"=> 4, "pc"=> 15),
				array("no"=>2367, "nm" => "ハンジ・ゾエ", "rr"=> 4, "pc"=> 15),
				array("no"=>2369, "nm" => "クリスタ・レンズ", "rr"=> 4, "pc"=> 15),
				array("no"=>2371, "nm" => "サシャ・ブラウス", "rr"=> 4, "pc"=> 15),
				array("no"=>3776, "nm" => "アニ・レオンハート", "rr"=> 5, "pc"=> 2),
				array("no"=>3778, "nm" => "ライナー・ブラウン", "rr"=> 5, "pc"=> 2)
			),
			15 => array(
				array("no"=>2949, "nm" => "聖鐘の花嫁・エスカマリ", "rr"=> 8, "pc"=> 0.5),
				array("no"=>2950, "nm" => "疾走する新郎・赤龍契士ガディウス", "rr"=> 8, "pc"=> 0.5),
				array("no"=>2951, "nm" => "無邪気な新婦・月龍喚士サツキ", "rr"=> 7, "pc"=> 1),
				array("no"=>2952, "nm" => "可憐な花嫁・バステト", "rr"=> 6, "pc"=> 4),
				array("no"=>2953, "nm" => "情熱の太陽神・ラー", "rr"=> 6, "pc"=> 4),
				array("no"=>2954, "nm" => "深愛の新郎・明智光秀", "rr"=> 5, "pc"=> 8),
				array("no"=>2955, "nm" => "聖洋の新婦・ルカ", "rr"=> 5, "pc"=> 8),
				array("no"=>2956, "nm" => "白無垢の花嫁・カノ", "rr"=> 5, "pc"=> 8),
				array("no"=>2957, "nm" => "有明の花嫁・イザナミ", "rr"=> 4, "pc"=> 12.9),
				array("no"=>2958, "nm" => "純真な花嫁・ソティス", "rr"=> 4, "pc"=> 12.9),
				array("no"=>2959, "nm" => "紅蓮華の花嫁・エキドナ", "rr"=> 4, "pc"=> 12.9),
				array("no"=>2960, "nm" => "奇跡のヒロイン・シンデレラ", "rr"=> 4, "pc"=> 12.9),
				array("no"=>2961, "nm" => "誓約の魔女・リリス", "rr"=> 4, "pc"=> 12.9),
				array("no"=>3790, "nm" => "聖瓶の花嫁・シェアト", "rr"=> 8, "pc"=> 0.5),
				array("no"=>3791, "nm" => "星夜の花嫁・ペルセポネ", "rr"=> 7, "pc"=> 1)
			),
			16 => array(
				array("no"=>1673, "nm" => "時女神・スクルド", "rr"=> 6, "pc"=> 1),
				array("no"=>2015, "nm" => "風紀委員長・アテナ", "rr"=> 7, "pc"=> 0.5),
				array("no"=>2017, "nm" => "特待生・イシス", "rr"=> 7, "pc"=> 0.5),
				array("no"=>2511, "nm" => "聖堂の女主神・カーリー", "rr"=> 8, "pc"=> 0.3),
				array("no"=>2513, "nm" => "星雪の白虎・ハク", "rr"=> 6, "pc"=> 1),
				array("no"=>2516, "nm" => "聖堂の歌姫・セイレーン", "rr"=> 4, "pc"=> 12.3),
				array("no"=>2519, "nm" => "聖夜の魔女・リリス", "rr"=> 4, "pc"=> 12.3),
				array("no"=>2534, "nm" => "紅日の寿龍喚士・カンナ", "rr"=> 8, "pc"=> 0.3),
				array("no"=>2539, "nm" => "鎮守の翠月花・かぐや姫", "rr"=> 4, "pc"=> 12.3),
				array("no"=>2814, "nm" => "図書室の管理神・カーリー", "rr"=> 8, "pc"=> 0.3),
				array("no"=>2817, "nm" => "占い部の名物部長・白雪姫", "rr"=> 4, "pc"=> 12.3),
				array("no"=>2818, "nm" => "帰宅部のおてんば娘・おやゆび姫", "rr"=> 4, "pc"=> 12.3),
				array("no"=>2820, "nm" => "読書部の才媛・ねむり姫", "rr"=> 4, "pc"=> 12.3),
				array("no"=>2821, "nm" => "バレー部の悪魔・テウルギア", "rr"=> 5, "pc"=> 6),
				array("no"=>3376, "nm" => "聖堂の豊麗神・フレイヤ", "rr"=> 5, "pc"=> 6),
				array("no"=>3379, "nm" => "聖夜の来訪者・グレモリー", "rr"=> 8, "pc"=> 0.3),
				array("no"=>3413, "nm" => "風神", "rr"=> 6, "pc"=> 1),
				array("no"=>3415, "nm" => "雷神", "rr"=> 6, "pc"=> 1),
				array("no"=>3419, "nm" => "参詣の星機姫・スピカ	", "rr"=> 5, "pc"=> 6),
				array("no"=>3650, "nm" => "料理部の新鋭・ハトホル", "rr"=> 6, "pc"=> 1),
				array("no"=>3651, "nm" => "剣道部の主将・不動明王	", "rr"=> 6, "pc"=> 1),
			),
			17 => array(
				array("no"=>1518, "nm" => "楽園の管理者・メタトロン", "rr"=> 7, "pc"=> 2),
				array("no"=>2286, "nm" => "お忍びの王女・アルビダ", "rr"=> 4, "pc"=> 13.5),
				array("no"=>2287, "nm" => "楽園の緑龍喚士・ソニア", "rr"=> 7, "pc"=> 2),
				array("no"=>2288, "nm" => "休息の時女神・ウルド", "rr"=> 6, "pc"=> 3.25),
				array("no"=>2290, "nm" => "雪白の美姫・ヴァルキリークレール", "rr"=> 8, "pc"=> 0.25),
				array("no"=>2291, "nm" => "夏色の旅行者・チェスター", "rr"=> 6, "pc"=> 3.25),
				array("no"=>2292, "nm" => "冥夜の令嬢・パンドラ", "rr"=> 7, "pc"=> 2),
				array("no"=>3112, "nm" => "休息の狙撃手・時龍契士ミル", "rr"=> 8, "pc"=> 0.25),
				array("no"=>3113, "nm" => "渚の星女神・エスカマリ", "rr"=> 8, "pc"=> 0.25),
				array("no"=>3114, "nm" => "楽園の玄武姫・メイメイ", "rr"=> 6, "pc"=> 3.25),
				array("no"=>3115, "nm" => "ビーチバレーの女神・ラクシュミー", "rr"=> 6, "pc"=> 3.25),
				array("no"=>3116, "nm" => "遊楽の舞姫・フウ", "rr"=> 5, "pc"=> 11),
				array("no"=>3117, "nm" => "遊泳の猫又・クロネ", "rr"=> 5, "pc"=> 11),
				array("no"=>3118, "nm" => "破天荒の波乗り・石川五右衛門", "rr"=> 4, "pc"=> 13.5),
				array("no"=>3119, "nm" => "夕涼の魔導姫・アルマデル", "rr"=> 4, "pc"=> 13.5),
				array("no"=>3120, "nm" => "休翼の龍喚士・ナヴィ", "rr"=> 4, "pc"=> 13.5),
				array("no"=>3846, "nm" => "楽園の天鬼姫・風神", "rr"=> 8, "pc"=> 0.25),
				array("no"=>3847, "nm" => "ビーチバレーの姫神・立花ぎん千代", "rr"=> 7, "pc"=> 2),
				array("no"=>3848, "nm" => "常夏の狩猟神・アルテミス", "rr"=> 7, "pc"=> 2),
			),
			18 => array(
				array("no"=>3124, "nm" => "キン肉マン", "rr"=> 6, "pc"=> 2),
				array("no"=>3126, "nm" => "キン肉マンソルジャー", "rr"=> 6, "pc"=> 2),
				array("no"=>3128, "nm" => "悪魔将軍", "rr"=> 6, "pc"=> 2),
				array("no"=>3130, "nm" => "テリーマン", "rr"=> 4, "pc"=> 14),
				array("no"=>3132, "nm" => "ロビンマスク", "rr"=> 5, "pc"=> 6),
				array("no"=>3134, "nm" => "ブロッケンJr.", "rr"=> 4, "pc"=> 14),
				array("no"=>3136, "nm" => "ウォーズマン", "rr"=> 4, "pc"=> 14),
				array("no"=>3138, "nm" => "アシュラマン", "rr"=> 5, "pc"=> 6),
				array("no"=>3851, "nm" => "ラーメンマン", "rr"=> 5, "pc"=> 6),
				array("no"=>3853, "nm" => "ザ・ニンジャ", "rr"=> 5, "pc"=> 6),
				array("no"=>3855, "nm" => "ネプチューンマン", "rr"=> 4, "pc"=> 14),
				array("no"=>3857, "nm" => "バッファローマン", "rr"=> 4, "pc"=> 14),
			),
			19 => array(
				array("no"=>1967, "nm" => "聖龍王サイガ アナザー", "rr"=> 5, "pc"=> 5),
				array("no"=>1970, "nm" => "魔戦姫アスモディエス アナザー", "rr"=> 5, "pc"=> 5),
				array("no"=>1972, "nm" => "炎鎚のキリコ アナザー", "rr"=> 5, "pc"=> 5),
				array("no"=>1974, "nm" => "神羅魔導神メビウス", "rr"=> 4, "pc"=> 5.5),
				array("no"=>1975, "nm" => "神羅聖魔神アーク", "rr"=>4, "pc"=> 5.5),
				array("no"=>1976, "nm" => "神羅光龍神リュウガ", "rr"=>4, "pc"=> 5.5),
				array("no"=>1977, "nm" => "神羅黄金神マキシウス", "rr"=>4, "pc"=> 5.5),
				array("no"=>1978, "nm" => "神羅終極神カイ", "rr"=>4, "pc"=> 5.5),
				array("no"=>1979, "nm" => "神羅魂獣神サイ", "rr"=>4, "pc"=> 5.5),
				array("no"=>1980, "nm" => "神羅太陽神アポロ", "rr"=>4, "pc"=> 5.5),
				array("no"=>1981, "nm" => "神羅聖龍神サイガ", "rr"=>4, "pc"=> 5.5),
				array("no"=>2244, "nm" => "調和神バランシール アナザー", "rr"=> 5, "pc"=>5),
				array("no"=>2246, "nm" => "鎧羅王ポラリス", "rr"=>4, "pc"=> 5.5),
				array("no"=>2568, "nm" => "聖都の守護神・アテナ アナザー", "rr"=> 7, "pc"=> 1.5),
				array("no"=>2569, "nm" => "翠輝星の麒麟・サクヤ アナザー", "rr"=>8, "pc"=> 1),
				array("no"=>2570, "nm" => "絶世の紅龍喚士・ソニア アナザー", "rr"=> 7, "pc"=>1.5),
				array("no"=>3005, "nm" => "冒険野郎ヴァン・クロウ", "rr"=> 5, "pc"=>5),
				array("no"=>3423, "nm" => "流星王ギンガ", "rr"=> 5, "pc"=> 5),
				array("no"=>3425, "nm" => "碧地の風龍喚士・カエデ アナザー", "rr"=> 7, "pc"=> 1.5),
				array("no"=>3882, "nm" => "獣牙王ハクレン", "rr"=> 5, "pc"=> 5),
				array("no"=>3884, "nm" => "閃華鳳龍姫カナン", "rr"=> 5, "pc"=>5),
				array("no"=>3886, "nm" => "暗黒皇子シグマ", "rr"=> 5, "pc"=> 5),
			),
			20 => array(
				array("no"=>3757, "nm" => "雷天の零龍喚士・ネイ", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3758, "nm" => "大弯の零龍喚士・ネイ", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3759, "nm" => "玻璃の零龍喚士・ネイ", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3760, "nm" => "解放の零龍喚士・ネイ", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3761, "nm" => "黒天の零龍喚士・ネイ", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3897, "nm" => "灼爪の玩龍喚士・コットン", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3898, "nm" => "穿鮫の玩龍喚士・コットン", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3899, "nm" => "角砦の玩龍喚士・コットン", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3900, "nm" => "聖獣の玩龍喚士・コットン", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3901, "nm" => "道化の玩龍喚士・コットン", "rr"=> 7, "pc"=> 0.2),
				array("no"=>3930, "nm" => "博愛の彩龍喚士・イデアル", "rr"=> 7, "pc"=> 2),
				array("no"=>3932, "nm" => "漂龍喚士・エンラ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3934, "nm" => "荊龍喚士・ヴェルド", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3936, "nm" => "庭龍喚士・シャゼル", "rr"=> 5, "pc"=> 10.167),
				array("no"=>3938, "nm" => "衛龍喚士・ラシオス", "rr"=> 5, "pc"=> 10.167),
				array("no"=>3940, "nm" => "劾龍喚士・ニース", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3942, "nm" => "荒龍契士・6号", "rr"=> 5, "pc"=>10.167),
				array("no"=>3944, "nm" => "虚龍契士・キリ", "rr"=> 5, "pc"=>10.167),
				array("no"=>3946, "nm" => "蛮龍契士・ターディス", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3948, "nm" => "恐龍契士・リィ", "rr"=> 6, "pc"=> 5.5),
				array("no"=>3950, "nm" => "妖龍契士・クーリア", "rr"=> 5, "pc"=> 10.166),
				array("no"=>4186, "nm" => "霊龍契士・ラジョア", "rr"=> 7, "pc"=> 2),
				array("no"=>4188, "nm" => "謎龍契士・ディステル", "rr"=> 6, "pc"=> 5.5),
				array("no"=>4190, "nm" => "伝龍喚士・プラリネ", "rr"=> 5, "pc"=>10.166),
			),
			21 => array(
				array("no"=>2406, "nm" => "古城の青龍喚士・ソニア", "rr"=> 7, "pc"=> 2.5),
				//array("no"=>2407, "nm" => "古城の女主神・カーリー", "rr"=> 8, "pc"=> 1),
				//array("no"=>2408, "nm" => "仮装祭の来賓・イザナミ", "rr"=>4, "pc"=> 13),
				array("no"=>2409, "nm" => "好奇の客人・ライラ", "rr"=> 6, "pc"=> 7.5),
				array("no"=>2410, "nm" => "月夜の魔狼・ヴァンパイアロード", "rr"=> 6, "pc"=> 7.5),
				array("no"=>2411, "nm" => "仮装祭の精霊・アルラウネ", "rr"=> 6, "pc"=> 7.5),
				//array("no"=>2412, "nm" => "遊戯の星知神・トト＆ソティス", "rr"=> 4, "pc"=> 13),
				//array("no"=>3222, "nm" => "紅蘭の黒魔女・シャンメイ", "rr"=> 8, "pc"=> 1),
				array("no"=>3223, "nm" => "古城の居候・龍喚士ソニア＝グラン", "rr"=> 8, "pc"=> 1.5),
				array("no"=>3224, "nm" => "演舞の青龍姫・カリン", "rr"=> 6, "pc"=> 7.5),
				array("no"=>3225, "nm" => "仮装祭の小悪魔・ロズエル", "rr"=> 6, "pc"=> 7.5),
				array("no"=>3226, "nm" => "御茶屋の看板娘・望月千代女", "rr"=> 5, "pc"=> 8.4),
				array("no"=>3227, "nm" => "仮装祭の女神・パールヴァティー", "rr"=> 5, "pc"=> 8.4),
				array("no"=>3228, "nm" => "古城のパティシエール・ウンディーネ", "rr"=>5, "pc"=> 8.4),
				array("no"=>3229, "nm" => "仮装祭のカボチャ職人・ムーラン", "rr"=> 5,"pc"=> 8.4),
				array("no"=>3230, "nm" => "仮装祭のロックシンガー・ミザリィ", "rr"=> 5,"pc"=> 8.4),
				array("no"=>3994, "nm" => "周遊の時女神・ヴェルダンディ", "rr"=> 8, "pc"=> 1.5),
				array("no"=>3995, "nm" => "仮装祭の後援・ねね", "rr"=> 7, "pc"=> 2.5),
				array("no"=>3996, "nm" => "遊戯の星天使・リュエル", "rr"=> 7, "pc"=> 2.5),
				array("no"=>4830, "nm" => "仮装祭の玩龍喚士・コットン", "rr"=> 8, "pc"=> 1.5),
				array("no"=>4831, "nm" => "甘党の幻龍王・ゼローグ∞", "rr"=> 7, "pc"=> 2.5),
				array("no"=>5621, "nm" => "城下の大魔女・マドゥ", "rr"=> 9, "pc"=> 1),
				array("no"=>5623, "nm" => "巡遊の龍喚士・アルファ＆オメガ", "rr"=> 7, "pc"=> 2.5),
				array("no"=>5624, "nm" => "古城の守り猫・バステト", "rr"=> 7, "pc"=> 2.5),
			),
			22 => array(
				array("no"=>4019, "nm" => "エドワード・エルリック", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4021, "nm" => "アルフォンス・エルリック", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4023, "nm" => "ロイ・マスタング", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4025, "nm" => "キング・ブラッドレイ", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4027, "nm" => "ウィンリィ・ロックベル", "rr"=> 5, "pc"=> 15),
				array("no"=>4028, "nm" => "リザ・ホークアイ", "rr"=> 5, "pc"=> 15),
				array("no"=>4029, "nm" => "マース・ヒューズ", "rr"=> 5, "pc"=> 15),
				array("no"=>4030, "nm" => "アレックス・ルイ・アームストロング", "rr"=> 5, "pc"=> 15),
				array("no"=>4031, "nm" => "傷の男", "rr"=> 5, "pc"=> 15),
				array("no"=>4032, "nm" => "リン・ヤオ", "rr"=> 5, "pc"=> 15),
			),
			23 => array(
				array("no"=>4076, "nm" => "草薙京", "rr"=> 6, "pc"=> 2),
				array("no"=>4079, "nm" => "テリー・ボガード", "rr"=> 6, "pc"=> 2),
				array("no"=>4082, "nm" => "リョウ・サカザキ", "rr"=> 6, "pc"=> 2),
				array("no"=>4085, "nm" => "レオナ・ハイデルン", "rr"=> 6, "pc"=> 2),
				array("no"=>4088, "nm" => "不知火舞", "rr"=> 6, "pc"=> 2),
				array("no"=>4091, "nm" => "八神庵", "rr"=> 6, "pc"=> 2),
				array("no"=>4094, "nm" => "二階堂紅丸", "rr"=> 5, "pc"=> 11),
				array("no"=>4096, "nm" => "アンディ・ボガード", "rr"=> 5, "pc"=> 11),
				array("no"=>4098, "nm" => "ユリ・サカザキ", "rr"=> 5, "pc"=> 11),
				array("no"=>4100, "nm" => "麻宮アテナ", "rr"=> 5, "pc"=> 11),
				array("no"=>4102, "nm" => "鎮元斎", "rr"=> 5, "pc"=> 11),
				array("no"=>4104, "nm" => "キング", "rr"=> 5, "pc"=> 11),
				array("no"=>4106, "nm" => "キム・カッファン", "rr"=> 5, "pc"=> 11),
				array("no"=>4108, "nm" => "タクマ・サカザキ", "rr"=> 5, "pc"=> 11),
				array("no"=>4110, "nm" => "ビリー・カーン", "rr"=> 5, "pc"=> 11)
			),
			24 => array(
				array("no"=>4204, "nm" => "甘美の零龍喚士・ネイ", "rr"=> 8, "pc"=> 1.5),
				array("no"=>4205, "nm" => "お菓子作りの魔神・アスタロト", "rr"=> 7, "pc"=> 2),
				array("no"=>4206, "nm" => "甘味の撫子・クシナダヒメ", "rr"=> 7, "pc"=> 2),
				array("no"=>4207, "nm" => "バレンタインの深蒼姫・カラット", "rr"=> 6, "pc"=> 7.5),
				array("no"=>4208, "nm" => "バレンタインの金剛姫・ファセット", "rr"=> 6, "pc"=> 7.5),
				array("no"=>4209, "nm" => "バレンタインの金緑姫・シーン", "rr"=> 6, "pc"=> 7.5),
				array("no"=>4210, "nm" => "南方の親愛神・レイラン", "rr"=> 5, "pc"=> 14.4),
				array("no"=>4211, "nm" => "東方の親愛神・カリン", "rr"=> 5, "pc"=> 14.4),
				array("no"=>4212, "nm" => "北方の親愛神・メイメイ", "rr"=> 5, "pc"=> 14.4),
				array("no"=>4213, "nm" => "極光の親愛神・サクヤ", "rr"=> 5, "pc"=> 14.4),
				array("no"=>4215, "nm" => "西方の親愛神・ハク", "rr"=> 5, "pc"=> 14.4),
			),
			25 => array(
				array("no"=>4301, "nm" => "浦飯幽助", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4303, "nm" => "蔵馬", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4305, "nm" => "飛影", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4307, "nm" => "雷禅", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4309, "nm" => "仙水", "rr"=> 6, "pc"=> 2.5),
				array("no"=>4311, "nm" => "桑原和真", "rr"=> 5, "pc"=> 10.937),
				array("no"=>4312, "nm" => "幻海", "rr"=> 5, "pc"=> 10.937),
				array("no"=>4313, "nm" => "コエンマ", "rr"=> 5, "pc"=> 10.937),
				array("no"=>4314, "nm" => "ぼたん", "rr"=> 5, "pc"=> 10.937),
				array("no"=>4315, "nm" => "刃霧要", "rr"=> 5, "pc"=> 10.938),
				array("no"=>4316, "nm" => "酎", "rr"=> 5, "pc"=> 10.938),
				array("no"=>4317, "nm" => "陣", "rr"=> 5, "pc"=> 10.938),
				array("no"=>4318, "nm" => "鴉", "rr"=> 5, "pc"=> 10.938),
			),
			26 => array(
				array("no"=>5565, "nm" => "覇王丸", "rr"=> 6, "pc"=> 2.5),
				array("no"=>5568, "nm" => "ナコルル", "rr"=> 6, "pc"=> 2.5),
				array("no"=>5571, "nm" => "橘右京", "rr"=> 6, "pc"=> 2.5),
				array("no"=>5574, "nm" => "牙神幻十郎", "rr"=> 6, "pc"=> 2.5),
				array("no"=>5577, "nm" => "色", "rr"=> 6, "pc"=> 2.5),
				array("no"=>5580, "nm" => "鞍馬夜叉丸", "rr"=> 6, "pc"=> 2.5),
				array("no"=>5583, "nm" => "服部半蔵【侍魂】", "rr"=> 5, "pc"=> 13.59),
				array("no"=>5586, "nm" => "ガルフォード", "rr"=> 5, "pc"=> 13.59),
				array("no"=>5589, "nm" => "リムルル", "rr"=> 5, "pc"=> 3.5),
				array("no"=>5592, "nm" => "柳生十兵衛", "rr"=> 5, "pc"=> 13.58),
				array("no"=>5595, "nm" => "タムタム", "rr"=> 5, "pc"=> 13.58),
				array("no"=>5598, "nm" => "シャルロット", "rr"=> 5, "pc"=> 13.58),
				array("no"=>5601, "nm" => "徳川慶寅", "rr"=> 5, "pc"=> 13.58),
			)
		);
		return $mns_ary[$num];
	}

	public function createNav($num){
		$ar = array(
			0 => array('a_href' => 0, "ttl" => ""),
			1 => array('a_href' => 0, "ttl" => ""),
			2 => array('a_href' => 0, "ttl" => ""),
			3 => array('a_href' => 0, "ttl" => ""),
			4 => ""
		);
		$m = 0;

		for ($i = count($this->ttl())-1; $i >= 0; $i--) {
			if ($i != $num && $m < 4) {
				$ar[$m] = array('a_href' => $i, "ttl" => $this->ttl($i));
				$m++;
			} elseif ($m >= 4 || $i == $num) {
				//最終的には0-工事中_1-～コラボ_2-夏休み という形になる
				//$ar[$i] = $num . "-" .$this->ttl($num);
				$ar[4] .= $i."-".$this->ttl($i) ."_";
			}
		}
		$ar[4] = substr($ar[4], 0, -1);
		return $ar;
	}

	public function createSummary($num){
		$mns_ary = $this->lstMns($num);
		$summary_ary = array();
		//$rr_ary = array();
		foreach ($mns_ary as $v) {
			if (isset($summary_ary[$v["rr"]])) {
				$summary_ary[$v["rr"]]["num"]++;
				$summary_ary[$v["rr"]]["sum_percent"] += $v["pc"];
			} else {
				$summary_ary[$v["rr"]] = array(
					"rare_clr_head" => $this->getRareColor($v["rr"]) . (6 <= $v["rr"] ? "_head" : ""),
					"rare_clr_tail" => $this->getRareColor($v["rr"]) . (6 <= $v["rr"] ? "_tail" : ""),
					"num" => 1,
					"sum_percent" => $v["pc"]
				);
				//$rr_ary[] = $v["rr"];
			}
		}
		// keyでどうこうしようってのは間違っている。スイマセン
		krsort($summary_ary);
		return $summary_ary;
	}

	//並び順の修正と表示に必要な項目を追加
	public function createMnsList($num){
		$mns = $this->lstMns($num);
		$rtn = array();
		$i = 1;
		$rr_ary = array();
		$id_ary = array();
		foreach ($mns as $k => $v) {
			$rtn[] = array(
				"rare_clr" => $this->getRareColor($v["rr"]),
				"no" => $v["no"],
				"rr" => $v["rr"],
				"nm" => $v["nm"],
				"id" => "mns" . $v["no"],
				"pc" => $v["pc"]
			);
			$rr_ary[] = $v["rr"];
			$id_ary[] = $i++;
		}
		array_multisort($rr_ary, SORT_DESC, $id_ary, SORT_ASC, $rtn);
		return $rtn;
	}

	public function getRareColor($rare){
		if ($rare >= 6) {
			$rtn = "dia_clr";
		} elseif ($rare == 5) {
			$rtn = "gold_clr";
		} else {
			$rtn = "silver_clr";
		}
		return $rtn;
	}

}
