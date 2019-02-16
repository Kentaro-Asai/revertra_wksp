<?php
class arySkill
{
	const TAISIN = 6;
	const MIKIRI = 7;
	const HUATU  = 8;
	const TYOKA  = 10;
	const KYORI  = 12;
	//const TKM = 15;//slot2で1,slot3で3
	const TAKUMI = 20;
	const TOSHO  = 40;
	
	public function __construct() {
		
	}
	
	//発動スキル(一本化します。剣士ガンナー共通で使う)
	public static function expSkill()
	{
        return array(
            "-無し-",
            "アイテム使用強化",
            "暑さ無効",
			"暗躍",//裏稼業
            "居合術【力】",
            "運搬の達人",
			"奥義",//秘伝
            "オートガード",
			"オトモへの号令",
            "オトモへの采配",
            "お肉大好き",
			"お守りマスター",
            "お守りハンター",
			"お守り収集",
            "隠密",
            "ガード強化",
            "ガード性能+2",
            "ガード性能+1",
			"会心撃【属性】",//特殊属性
			"会心撃【特殊】",//特殊会心
            "回避距離UP",
            "回避性能+3",
            "回避性能+2",
            "回避性能+1",
            "回復速度+2",
            "回復速度+1",
            "拡散弾全LV追加",
            "拡散弾LV1追加",
            "覚醒",
            "火事場力+2",
            "火事場力+1",
            "雷属性攻撃強化+3",
            "雷属性攻撃強化+2",
            "雷属性攻撃強化+1",
            "雷耐性【大】",
            "雷耐性【小】",
            "神の気まぐれ",
            "軽業師",
            "貫通弾・貫通矢UP",
            "貫通弾全LV追加",
            "貫通弾LV1追加",
            "気絶確率半減",
            "気絶無効",
			"キノコ大好き",//茸食
            "強運",
			"強打",//スタミナ奪取とKO
            "斬れ味レベル+1",
            "強撃ビン追加",
			"グルメ",//食欲
            "KO術",
            "激運",
            "逆鱗",
            "減気ビン追加",
            "広域化+2",
            "広域化+1",
            "幸運",
            "高級耳栓",
            "攻撃力UP【超】",
            "攻撃力UP【大】",
            "攻撃力UP【中】",
            "攻撃力UP【小】",
            "高速収集",
            "剛弾",
            "氷属性攻撃強化+3",
            "氷属性攻撃強化+2",
            "氷属性攻撃強化+1",
            "氷耐性【大】",
            "氷耐性【小】",
            "護法",
            "金剛体",
            "根性",
            "細菌研究家",
            "採取マスター",
            "採取+2",
            "採取+1",
            "寒さ無効",
            "散弾・拡散矢UP",
            "散弾全LV追加",
            "散弾LV1追加",
            "斬裂弾追加",
            "自動マーキング",
            "弱点特効",
            "集中",
			"祝福",//きとう
            "状態異常攻撃+2",
            "状態異常攻撃+1",
            "真打",
            "心眼",
			"心剣一体",//斬術
            "睡眠ビン追加",
            "睡眠無効",
            "スタミナ急速回復",
            "スタミナ奪取",
            "精神力",
            "精霊の加護",
            "精霊の気まぐれ",
            "接撃ビン追加",
            "増収",
            "装填数UP",
            "装填速度+3",
            "装填速度+2",
            "装填速度+1",
            "属性攻撃強化",
            "属性やられ無効",
            "属物強化",//増幅
            "体術+2",
            "体術+1",
            "耐震",
            "体力+50",
            "体力+20",
            "体力回復量UP",
            "盾使い",
            "探知",
			"弾導強化",//射法
            "力の解放+2",
            "力の解放+1",
            "調合成功率+45%",
            "調合成功率+20%",
            "挑戦者+2",
            "挑戦者+1",
            "通常弾全LV追加",
            "通常弾・連射矢UP",
            "徹甲榴弾全LV追加",
            "徹甲榴弾LV1追加",
            "鉄壁",//頑強
            "鉄面皮",
			"砥石使用高速化",
            "毒ビン追加",
            "毒無効",
			"トラップマスター",
            "泥＆雪無効",
            "盗み無効",
			"ネバネバ剣法",//北辰納豆流
			"粘着無効",//耐粘
            "燃鱗",
            "納刀術",
            "乗り名人",
            "バイオドクター",
            "破壊王",
			"剥ぎ取りマスター",
            "剥ぎ取り達人",
            "剥ぎ取り鉄人",
            "爆破弾追加",
            "爆破ビン追加",
            "抜刀術【力】",
            "抜刀術【技】",
            "ハニーハンター",
            "早食い+2",
            "早食い+1",
            "腹減り無効",
            "腹減り半減",
            "ハンター生活",
            "反動軽減+3",
            "反動軽減+2",
            "反動軽減+1",
            "火属性攻撃強化+3",
            "火属性攻撃強化+2",
            "火属性攻撃強化+1",
            "火耐性【大】",
            "火耐性【小】",
            "拾い食い",
            "風圧【大】無効",
            "風圧【小】無効",
            "笛吹き名人",
            "不屈",
            "舞踏家",//潔癖
            "フルチャージ",
            "ブレ抑制+2",
            "ブレ抑制+1",
            "防御力UP【超】",
            "防御力UP【大】",
            "防御力UP【中】",
            "防御力UP【小】",
            "砲術マスター",
            "砲術王",
            "砲術師",
            "捕獲の見極め",
            "捕獲マスター",
            "捕獲名人",
            "捕獲達人",
            "ボマー",
            "麻痺ビン追加",
            "麻痺無効",
			"満足感",//節食
            "まんぷく",
            "見切りマスター",
            "見切り+3",
            "見切り+2",
            "見切り+1",
            "水属性攻撃強化+3",
            "水属性攻撃強化+2",
            "水属性攻撃強化+1",
            "水耐性【大】",
            "水耐性【小】",
            "耳栓",
            "無我の境地",
            "無慈悲",//剛撃
            "ランナー",
            "龍属性攻撃強化+3",
            "龍属性攻撃強化+2",
            "龍属性攻撃強化+1",
            "龍耐性【大】",
            "龍耐性【小】",
			"裂傷無効",//"裂傷"
            "連発数+1",
			"業物",
            "罠師"
        );
	}
	
	//スキル系統
	public static function skillSystem()
	{
		return array(
            "-無し-",
			"居合",
            "怒",
            "一心",
            "運気",
            "裏稼業",
			"運搬",
            "ガード強化",
            "ガード性能",
            "回避距離",
            "回避術",
            "回避性能",
            "回復速度",
            "回復量",
            "拡散弾追加",
            "加護",
            "雷属性攻撃",
            "雷耐性",
            "狩人",
            "頑強",
            "観察眼",
            "貫通弾強化",
            "貫通弾追加",
            "祈願",
			"気絶",
            "気まぐれ",
            "逆境",
            "狂撃耐性",
            "強撃瓶追加",
            "気力回復",
            "斬れ味",
            "食いしん坊",
            "KO",
            "潔癖",
            "気配",
            "減気攻撃",
            "減気瓶追加",
            "剣術",
            "広域",
            "効果持続",
            "攻撃",
            "剛撃",
            "高速収集",
            "高速設置",
            "強欲",
            "号令",
			"剛腕",
            "氷属性攻撃",
            "氷耐性",
            "護石王",
            "護石収集",
            "根性",
            "細菌学",
            "採取",
            "采配",
			"斬術",
            "散弾強化",
            "散弾追加",
            "斬裂弾追加",
            "指揮",
            "自動防御",
            "射手",
			"射法",
            "重撃",
            "状態耐性",
			"茸食",//じょうしょく
            "食事",
			"食欲",
			"職工",
            "睡眠",
            "睡眠瓶追加",
            "スタミナ",
            "精密射撃",
            "接撃瓶追加",
			"節食",
            "千里眼",
            "装填数",
            "装填速度",
            "増幅",
            "速射",
			"属性会心",
            "属性解放",
            "属性攻撃",
            "属性耐性",
            "底力",
            "耐寒",
            "体術",
            "耐暑",
            "耐震",
            "耐泥耐雪",
			"耐粘",
            "対防御DOWN",
            "体力",
            "匠",
            "達人",
            "盾持",
            "溜め短縮",
            "聴覚保護",
            "調合数",
            "調合成功率",
            "痛撃",
            "通常弾強化",
            "通常弾追加",
            "闘魂",
            "刀匠",
            "研ぎ師",
            "毒",
			"特殊会心",
            "特殊攻撃",
            "毒瓶追加",
            "肉食",
            "盗み無効",
            "燃鱗",
            "納刀",
            "乗り",
            "剥ぎ取り",
            "爆弾強化",
            "爆破弾追加",
            "爆破瓶追加",
            "ハチミツ",
            "抜刀会心",
            "抜刀減気",
            "腹減り",
            "反動",
            "火属性攻撃",
            "火耐性",
            "秘伝",
			"風圧",
            "笛",
            "不動",
            "防御",
            "砲術",
            "捕獲",
			"北辰納豆流",
            "本気",
            "麻痺",
            "麻痺瓶追加",
            "水属性攻撃",
            "水耐性",
            "無傷",
            "龍属性攻撃",
            "龍耐性",
            "榴弾追加",
			"裂傷"
        );
	}
	
	//珠の相性(やろうと思えば、スキル系統と一元管理可能)
	public static function juel()
	{ //ex.)溜め短縮 => 体術
		$tama = array(//スキル系統 => スキル系統(マイナスになる物)
			//0=>		"-無し-",
			1=>0,     //"居合",
			2=>0,     //"怒",
			3=>0,     //"一心",
			4=>25,     //"運気",
			5=>0,     ////"裏稼業",
			6=>0,     //"運搬",
			7=>71,     //"ガード強化",
			8=>86,     //"ガード性能",
			9=>92,     //"回避距離",
			10=>0,    //"回避術",
			11=>92,    //"回避性能",
			12=>66,    //"回復速度",
			13=>12,    //"回復量",
			14=>77,    //"拡散弾追加",
			15=>0,    //"加護",
			16=>47,    //"雷属性攻撃",
			17=>0,    //"雷耐性",
			18=>0,    //"狩人",
			19=>0,    //"頑強",
			20=>0,    //"観察眼",
			21=>123,    //"貫通弾強化",
			22=>0,    //"貫通弾追加",
			23=>0,    ////"祈願",
			24=>0,    //"気絶",
			25=>0,    //"気まぐれ",
			26=>13,    //"逆境",
			27=>11,    //"狂撃耐性",//TYOKA
			28=>94,    //"強撃瓶追加",
			29=>11,    //"気力回復",
			30=>93,    //"斬れ味",
			31=>0,    //"食いしん坊",
			32=>122,    //"KO",
			33=>0,    //"潔癖",
			34=>0,    //"気配",
			35=>71,    //"減気攻撃",
			36=>0,    //"減気瓶追加",
			37=>93,    //"剣術",
			38=>34,    //"広域",
			39=>0,    //"効果持続",
			40=>130,    //"攻撃",
			41=>0,    //"剛撃",
			42=>0,    //"高速収集",
			43=>0,    //"高速設置",
			44=>0,    //"強欲",
			45=>53,    //"号令",
			46=>0,    ////"剛腕",
			47=>124,    //"氷属性攻撃",
			48=>0,    //"氷耐性",
			49=>0,    //"護石王",
			50=>0,    //"護石収集",
			51=>99,    //"根性",
			52=>0,    //"細菌学",
			53=>0,    //"採取",
			54=>0,    //"采配",
			55=>0,    ////"斬術",
			56=>123,    //"散弾強化",
			57=>0,    //"散弾追加",
			58=>0,    //"斬裂弾追加",
			59=>0,    //"指揮",
			60=>0,    ////"自動防御",
			61=>0,    //"射手",
			62=>76,    ////"射法",
			63=>94,    //"重撃",
			64=>0,    //"状態耐性",
			65=>110,    ////"茸食",//じょうし
			66=>13,    //"食事",
			67=>0,    ////"食欲",
			68=>0,    ////"職工",
			69=>89,    //"睡眠",
			70=>0,    //"睡眠瓶追加",
			71=>122,    //"スタミナ",
			72=>0,    //"精密射撃",
			73=>0,    //"接撃瓶追加",
			74=>25,    ////"節食",//TAISIN->きまぐれ
			75=>0,    //"千里眼",
			76=>77,    //"装填数",
			77=>123,    //"装填速度",
			78=>0,    //"増幅",
			79=>77,    //"速射",
			80=>40,    ////"属性会心",//huatu
			81=>108,    //"属性解放",
			82=>108,    //"属性攻撃",
			83=>92,    //"属性耐性",
			84=>15,    //"底力",
			85=>0,    //"耐寒",
			86=>71,    //"体術",
			87=>0,    //"耐暑",
			88=>0,    //"耐震",
			89=>0,    //"耐泥耐雪",
			90=>0,    ////"耐粘",//TAISIN
			91=>0,    //"対防御DOWN",
			92=>0,    //"体力",
			93=>30,    //"匠",
			94=>141,    //"達人",
			95=>0,    //"盾持",
			96=>86,    //"溜め短縮",
			97=>15,    //"聴覚保護",
			98=>0,    //"調合数",
			99=>0,    //"調合成功率",
			100=>92,   //"痛撃",
			101=>123,   //"通常弾強化",
			102=>77,   //"通常弾追加",
			103=>77,   //"闘魂",
			104=>0,   //"刀匠",
			105=>0,   //"研ぎ師",
			106=>24,   //"毒",
			107=>40,   ////"特殊会心",//huatu
			108=>82,   //"特殊攻撃",
			109=>0,   //"毒瓶追加",
			110=>0,   //"肉食",
			111=>0,   //"盗み無効",
			112=>0,   //"燃鱗",
			113=>105,   //"納刀",
			114=>0,   //"乗り",//taisin
			115=>4,   //"剥ぎ取り",
			116=>0,   //"爆弾強化",
			117=>0,   //"爆破弾追加",
			118=>0,   //"爆破瓶追加",
			119=>0,   //"ハチミツ",
			120=>94,   //"抜刀会心",
			121=>30,   //"抜刀減気",
			122=>0,   //"腹減り",
			123=>77,   //"反動",
			124=>137,   //"火属性攻撃",
			125=>0,   //"火耐性",
			126=>0,   ////"秘伝",
			127=>4,   //"風圧",
			128=>0,   //"笛",
			129=>130,   //"不動",
			130=>40,   //"防御",
			131=>0,   //"砲術",
			132=>4,   //"捕獲",
			133=>0,   ////"北辰納豆流",
			134=>34,   //"本気",
			135=>106,   //"麻痺",
			136=>40,   //"麻痺瓶追加",
			137=>16,   //"水属性攻撃",
			138=>0,   //"水耐性",
			139=>12,   //"無傷",
			140=>108,   //"龍属性攻撃",
			141=>0,   //"龍耐性",
			142=>0,   //"榴弾追加"
			143=>0   ////"裂傷",
		);
		
		return $tama;
	}
	
	//expskillと一元管理可能
	public static function connectSkl($sk)
	{
		$nis = array(
			1=>array("ns"=>10,"it"=>39,"sa"=>self::TAISIN), //"アイテム使用強化",
			2=>array("ns"=>10,"it"=>87,"sa"=>self::TAISIN),//"暑さ無効",
			3=>array("ns"=>10,"it"=>5,"sa"=>self::TOSHO),//"暗躍",//裏稼業
			4=>array("ns"=>10,"it"=>1,"sa"=>self::TOSHO),//"居合術【力】",
			5=>array("ns"=>10,"it"=>6,"sa"=>self::TAISIN),//"運搬の達人",
			6=>array("ns"=>10,"it"=>126,"sa"=>self::TOSHO),//"奥義",//秘伝
			7=>array("ns"=>10,"it"=>60,"sa"=>self::TOSHO),//"オートガード",
			8=>array("ns"=>10,"it"=>45,"sa"=>self::HUATU),//"オトモへの号令",
			9=>array("ns"=>10,"it"=>54,"sa"=>self::TAISIN),//"オトモへの采配",
			10=>array("ns"=>10,"it"=>110,"sa"=>self::TAISIN),//"お肉大好き",
			11=>array("ns"=>20,"it"=>49,"sa"=>self::KYORI),//"お守りマスター",
			12=>array("ns"=>15,"it"=>49,"sa"=>self::KYORI),//"お守りハンター",
			13=>array("ns"=>10,"it"=>49,"sa"=>self::KYORI),//"お守り収集",
			14=>array("ns"=>10,"it"=>34,"sa"=>self::TAISIN),//"隠密",
			15=>array("ns"=>10,"it"=>7,"sa"=>self::HUATU),//"ガード強化",
			16=>array("ns"=>15,"it"=>8,"sa"=>self::HUATU),//"ガード性能+2",
			17=>array("ns"=>10,"it"=>8,"sa"=>self::HUATU),//"ガード性能+1",
			18=>array("ns"=>10,"it"=>80,"sa"=>self::HUATU),//"会心撃【属性】",//属性会心
			19=>array("ns"=>10,"it"=>107,"sa"=>self::HUATU),//"会心撃【特殊】",//特殊会心
			20=>array("ns"=>10,"it"=>9,"sa"=>self::HUATU),//"回避距離UP",
			21=>array("ns"=>20,"it"=>11,"sa"=>self::HUATU),//"回避性能+3",
			22=>array("ns"=>15,"it"=>11,"sa"=>self::HUATU),//"回避性能+2",
			23=>array("ns"=>10,"it"=>11,"sa"=>self::HUATU),//"回避性能+1",
			24=>array("ns"=>15,"it"=>12,"sa"=>self::HUATU),//"回復速度+2",
			25=>array("ns"=>10,"it"=>12,"sa"=>self::HUATU),//"回復速度+1",
			26=>array("ns"=>15,"it"=>14,"sa"=>self::KYORI),//"拡散弾全LV追加",
			27=>array("ns"=>10,"it"=>14,"sa"=>self::KYORI),//"拡散弾LV1追加",
			28=>array("ns"=>10,"it"=>81,"sa"=>self::TAKUMI),//"覚醒",
			29=>array("ns"=>15,"it"=>84,"sa"=>self::HUATU),//"火事場力+2",
			30=>array("ns"=>10,"it"=>84,"sa"=>self::HUATU),//"火事場力+1",
			31=>array("ns"=>20,"it"=>16,"sa"=>self::HUATU),//"雷属性攻撃強化+3",
			32=>array("ns"=>15,"it"=>16,"sa"=>self::HUATU),//"雷属性攻撃強化+2",
			33=>array("ns"=>10,"it"=>16,"sa"=>self::HUATU),//"雷属性攻撃強化+1",
			34=>array("ns"=>15,"it"=>17,"sa"=>self::TAISIN),//"雷耐性【大】",
			35=>array("ns"=>10,"it"=>17,"sa"=>self::TAISIN),//"雷耐性【小】",
			36=>array("ns"=>15,"it"=>25,"sa"=>self::TAISIN),//"神の気まぐれ",
			37=>array("ns"=>10,"it"=>10,"sa"=>self::TOSHO),//"軽業師",
			38=>array("ns"=>10,"it"=>21,"sa"=>self::TYOKA),//"貫通弾・貫通矢UP",
			39=>array("ns"=>15,"it"=>22,"sa"=>self::TAISIN),//"貫通弾全LV追加",
			40=>array("ns"=>10,"it"=>22,"sa"=>self::TAISIN),//"貫通弾LV1追加",
			41=>array("ns"=>10,"it"=>24,"sa"=>self::TAISIN),//"気絶確率半減",
			42=>array("ns"=>15,"it"=>24,"sa"=>self::TAISIN),//"気絶無効",
			43=>array("ns"=>10,"it"=>65,"sa"=>self::TAISIN),//"キノコ大好き",//茸食
			44=>array("ns"=>15,"it"=>4,"sa"=>self::TYOKA),//"強運",
			45=>array("ns"=>10,"it"=>46,"sa"=>self::TOSHO),//"強打",//スタミナ奪取とKO
			46=>array("ns"=>10,"it"=>93,"sa"=>self::TAKUMI),//"斬れ味レベル+1",
			47=>array("ns"=>10,"it"=>28,"sa"=>self::HUATU),//"強撃ビン追加",
			48=>array("ns"=>10,"it"=>67,"sa"=>self::TOSHO),//"グルメ",//食欲
			49=>array("ns"=>10,"it"=>32,"sa"=>self::HUATU),//"KO術",
			50=>array("ns"=>20,"it"=>4,"sa"=>self::TYOKA),//"激運",
			51=>array("ns"=>10,"it"=>2,"sa"=>self::TOSHO),//"逆鱗",
			52=>array("ns"=>10,"it"=>36,"sa"=>self::TAISIN),//"減気ビン追加",
			53=>array("ns"=>15,"it"=>38,"sa"=>self::HUATU),//"広域化+2",
			54=>array("ns"=>10,"it"=>38,"sa"=>self::HUATU),//"広域化+1",
			55=>array("ns"=>10,"it"=>4,"sa"=>self::TYOKA),//"幸運",
			56=>array("ns"=>15,"it"=>97,"sa"=>self::TYOKA),//"高級耳栓",
			57=>array("ns"=>25,"it"=>40,"sa"=>self::MIKIRI),//"攻撃力UP【超】",
			58=>array("ns"=>20,"it"=>40,"sa"=>self::MIKIRI),//"攻撃力UP【大】",
			59=>array("ns"=>15,"it"=>40,"sa"=>self::MIKIRI),//"攻撃力UP【中】",
			60=>array("ns"=>10,"it"=>40,"sa"=>self::MIKIRI),//"攻撃力UP【小】",
			61=>array("ns"=>10,"it"=>42,"sa"=>self::TAISIN),//"高速収集",
			62=>array("ns"=>10,"it"=>61,"sa"=>self::TOSHO),//"剛弾",
			63=>array("ns"=>20,"it"=>47,"sa"=>self::HUATU),//"氷属性攻撃強化+3",
			64=>array("ns"=>15,"it"=>47,"sa"=>self::HUATU),//"氷属性攻撃強化+2",
			65=>array("ns"=>10,"it"=>47,"sa"=>self::HUATU),//"氷属性攻撃強化+1",
			66=>array("ns"=>10,"it"=>48,"sa"=>self::TAISIN),//"氷耐性【大】",
			67=>array("ns"=>10,"it"=>48,"sa"=>self::TAISIN),//"氷耐性【小】",
			68=>array("ns"=>10,"it"=>64,"sa"=>self::TOSHO),//"護法",
			69=>array("ns"=>10,"it"=>129,"sa"=>self::TYOKA),//"金剛体",
			70=>array("ns"=>10,"it"=>51,"sa"=>self::HUATU),//"根性",
			71=>array("ns"=>10,"it"=>52,"sa"=>self::TAISIN),//"細菌研究家",
			72=>array("ns"=>20,"it"=>53,"sa"=>self::TAISIN),//"採取マスター",
			73=>array("ns"=>15,"it"=>53,"sa"=>self::TAISIN),//"採取+2",
			74=>array("ns"=>10,"it"=>53,"sa"=>self::TAISIN),//"採取+1",
			75=>array("ns"=>10,"it"=>85,"sa"=>self::TAISIN),//"寒さ無効",
			76=>array("ns"=>10,"it"=>56,"sa"=>self::TYOKA),//"散弾・拡散矢UP",
			77=>array("ns"=>15,"it"=>57,"sa"=>self::TAISIN),//"散弾全LV追加",
			78=>array("ns"=>10,"it"=>57,"sa"=>self::TAISIN),//"散弾LV1追加",
			79=>array("ns"=>10,"it"=>58,"sa"=>self::TAISIN),//"斬裂弾追加",
			80=>array("ns"=>15,"it"=>75,"sa"=>self::TAISIN),//"自動マーキング",
			81=>array("ns"=>10,"it"=>100,"sa"=>self::TYOKA),//"弱点特効",
			82=>array("ns"=>10,"it"=>96,"sa"=>self::TYOKA),//"集中",
			83=>array("ns"=>10,"it"=>23,"sa"=>self::TOSHO),//"祝福",//祈願
			84=>array("ns"=>15,"it"=>108,"sa"=>self::HUATU),//"状態異常攻撃+2",
			85=>array("ns"=>10,"it"=>108,"sa"=>self::HUATU),//"状態異常攻撃+1",
			86=>array("ns"=>10,"it"=>104,"sa"=>self::TOSHO),//"真打",
			87=>array("ns"=>10,"it"=>37,"sa"=>self::TYOKA),//"心眼",
			88=>array("ns"=>10,"it"=>55,"sa"=>self::TOSHO),//"心剣一体",//斬術
			89=>array("ns"=>10,"it"=>70,"sa"=>self::TAISIN),//"睡眠ビン追加",
			90=>array("ns"=>10,"it"=>69,"sa"=>self::HUATU),//"睡眠無効",
			91=>array("ns"=>10,"it"=>29,"sa"=>self::HUATU),//"スタミナ急速回復",
			92=>array("ns"=>10,"it"=>35,"sa"=>self::HUATU),//"スタミナ奪取",
			93=>array("ns"=>10,"it"=>3,"sa"=>self::TOSHO),//"精神力",
			94=>array("ns"=>10,"it"=>15,"sa"=>self::TAISIN),//"精霊の加護",
			95=>array("ns"=>10,"it"=>25,"sa"=>self::TAISIN),//"精霊の気まぐれ",
			96=>array("ns"=>10,"it"=>73,"sa"=>self::HUATU),//"接撃ビン追加",
			97=>array("ns"=>10,"it"=>44,"sa"=>self::TOSHO),//"増収",
			98=>array("ns"=>10,"it"=>76,"sa"=>self::TAKUMI),//"装填数UP",
			99=>array("ns"=>20,"it"=>77,"sa"=>self::TYOKA),//"装填速度+3",
			100=>array("ns"=>15,"it"=>77,"sa"=>self::TYOKA),//"装填速度+2",
			101=>array("ns"=>10,"it"=>77,"sa"=>self::TYOKA),//"装填速度+1",
			102=>array("ns"=>10,"it"=>82,"sa"=>self::TYOKA),//"属性攻撃強化",
			103=>array("ns"=>10,"it"=>83,"sa"=>self::TYOKA),//"属性やられ無効",
			104=>array("ns"=>10,"it"=>78,"sa"=>self::TOSHO),//"属物強化",//増幅
			105=>array("ns"=>15,"it"=>86,"sa"=>self::HUATU),//"体術+2",
			106=>array("ns"=>10,"it"=>86,"sa"=>self::HUATU),//"体術+1",
			107=>array("ns"=>10,"it"=>88,"sa"=>self::TAISIN),//"耐震",
			108=>array("ns"=>15,"it"=>92,"sa"=>self::TAISIN),//"体力+50",
			109=>array("ns"=>10,"it"=>92,"sa"=>self::TAISIN),//"体力+20",
			110=>array("ns"=>10,"it"=>13,"sa"=>self::HUATU),//"体力回復量UP",
			111=>array("ns"=>10,"it"=>95,"sa"=>self::TOSHO),//"盾使い",
			112=>array("ns"=>10,"it"=>75,"sa"=>self::TAISIN),//"探知",
			113=>array("ns"=>10,"it"=>62,"sa"=>self::HUATU),//"弾導強化",//射法
			114=>array("ns"=>15,"it"=>134,"sa"=>self::HUATU),//"力の解放+2",
			115=>array("ns"=>10,"it"=>134,"sa"=>self::HUATU),//"力の解放+1",
			116=>array("ns"=>15,"it"=>99,"sa"=>self::TAISIN),//"調合成功率+45%",
			117=>array("ns"=>10,"it"=>99,"sa"=>self::TAISIN),//"調合成功率+20%",
			118=>array("ns"=>15,"it"=>103,"sa"=>self::HUATU),//"挑戦者+2",
			119=>array("ns"=>10,"it"=>103,"sa"=>self::HUATU),//"挑戦者+1",
			120=>array("ns"=>10,"it"=>102,"sa"=>self::HUATU),//"通常弾全LV追加",
			121=>array("ns"=>10,"it"=>101,"sa"=>self::TYOKA),//"通常弾・連射矢UP",
			122=>array("ns"=>15,"it"=>142,"sa"=>self::TAISIN),//"徹甲榴弾全LV追加",
			123=>array("ns"=>10,"it"=>142,"sa"=>self::TAISIN),//"徹甲榴弾LV1追加",
			124=>array("ns"=>10,"it"=>19,"sa"=>self::TOSHO),//"鉄壁",//頑強
			125=>array("ns"=>10,"it"=>91,"sa"=>self::TAISIN),//"鉄面皮",
			126=>array("ns"=>10,"it"=>105,"sa"=>self::TAISIN),//"砥石使用高速化",
			127=>array("ns"=>10,"it"=>109,"sa"=>self::TAISIN),//"毒ビン追加",
			128=>array("ns"=>10,"it"=>106,"sa"=>self::HUATU),//"毒無効",
			129=>array("ns"=>10,"it"=>68,"sa"=>self::TOSHO),//"トラップマスター",
			130=>array("ns"=>10,"it"=>89,"sa"=>self::TAISIN),//"泥＆雪無効",
			131=>array("ns"=>10,"it"=>111,"sa"=>self::TAISIN),//"盗み無効",
			132=>array("ns"=>10,"it"=>133,"sa"=>self::TOSHO),//"ネバネバ剣法",//北辰納豆流
			133=>array("ns"=>10,"it"=>90,"sa"=>self::TAISIN),//"粘着無効",//耐粘
			134=>array("ns"=>10,"it"=>112,"sa"=>self::TAISIN),//"燃鱗",
			135=>array("ns"=>10,"it"=>113,"sa"=>self::HUATU),//"納刀術",
			136=>array("ns"=>10,"it"=>114,"sa"=>self::TAISIN),//"乗り名人",
			137=>array("ns"=>15,"it"=>52,"sa"=>self::TAISIN),//"バイオドクター",
			138=>array("ns"=>10,"it"=>63,"sa"=>self::TYOKA),//"破壊王",
			139=>array("ns"=>20,"it"=>115,"sa"=>self::TYOKA),//"剥ぎ取りマスター",
			140=>array("ns"=>15,"it"=>115,"sa"=>self::TYOKA),//"剥ぎ取り達人",
			141=>array("ns"=>10,"it"=>115,"sa"=>self::TYOKA),//"剥ぎ取り鉄人",
			142=>array("ns"=>10,"it"=>117,"sa"=>self::TAISIN),//"爆破弾追加",
			143=>array("ns"=>10,"it"=>118,"sa"=>self::TAISIN),//"爆破ビン追加",
			144=>array("ns"=>10,"it"=>121,"sa"=>self::TYOKA),//"抜刀術【力】",
			145=>array("ns"=>10,"it"=>120,"sa"=>self::HUATU),//"抜刀術【技】",
			146=>array("ns"=>10,"it"=>119,"sa"=>self::TAISIN),//"ハニーハンター",
			147=>array("ns"=>15,"it"=>66,"sa"=>self::TYOKA),//"早食い+2",
			148=>array("ns"=>10,"it"=>66,"sa"=>self::TYOKA),//"早食い+1",
			149=>array("ns"=>15,"it"=>122,"sa"=>self::TAISIN),//"腹減り無効",
			150=>array("ns"=>10,"it"=>122,"sa"=>self::TAISIN),//"腹減り半減",
			151=>array("ns"=>10,"it"=>18,"sa"=>self::TAISIN),//"ハンター生活",
			152=>array("ns"=>20,"it"=>123,"sa"=>self::TYOKA),//"反動軽減+3",
			153=>array("ns"=>15,"it"=>123,"sa"=>self::TYOKA),//"反動軽減+2",
			154=>array("ns"=>10,"it"=>123,"sa"=>self::TYOKA),//"反動軽減+1",
			155=>array("ns"=>20,"it"=>124,"sa"=>self::HUATU),//"火属性攻撃強化+3",
			156=>array("ns"=>15,"it"=>124,"sa"=>self::HUATU),//"火属性攻撃強化+2",
			157=>array("ns"=>10,"it"=>124,"sa"=>self::HUATU),//"火属性攻撃強化+1",
			158=>array("ns"=>15,"it"=>125,"sa"=>self::TAISIN),//"火耐性【大】",
			159=>array("ns"=>10,"it"=>125,"sa"=>self::TAISIN),//"火耐性【小】",
			160=>array("ns"=>15,"it"=>31,"sa"=>self::HUATU),//"拾い食い",
			161=>array("ns"=>15,"it"=>127,"sa"=>self::HUATU),//"風圧【大】無効",
			162=>array("ns"=>10,"it"=>127,"sa"=>self::HUATU),//"風圧【小】無効",
			163=>array("ns"=>10,"it"=>128,"sa"=>self::TAISIN),//"笛吹き名人",
			164=>array("ns"=>10,"it"=>26,"sa"=>self::HUATU),//"不屈",
			165=>array("ns"=>10,"it"=>33,"sa"=>self::TOSHO),//"舞踏家",//潔癖
			166=>array("ns"=>10,"it"=>139,"sa"=>self::HUATU),//"フルチャージ",
			167=>array("ns"=>15,"it"=>72,"sa"=>self::TAISIN),//"ブレ抑制+2",
			168=>array("ns"=>10,"it"=>72,"sa"=>self::TAISIN),//"ブレ抑制+1",
			169=>array("ns"=>25,"it"=>130,"sa"=>self::MIKIRI),//"防御力UP【超】",
			170=>array("ns"=>20,"it"=>130,"sa"=>self::MIKIRI),//"防御力UP【大】",
			171=>array("ns"=>15,"it"=>130,"sa"=>self::MIKIRI),//"防御力UP【中】",
			172=>array("ns"=>10,"it"=>130,"sa"=>self::MIKIRI),//"防御力UP【小】",
			173=>array("ns"=>20,"it"=>131,"sa"=>self::TAISIN),//"砲術マスター",
			174=>array("ns"=>15,"it"=>131,"sa"=>self::TAISIN),//"砲術王",
			175=>array("ns"=>10,"it"=>131,"sa"=>self::TAISIN),//"砲術師",
			176=>array("ns"=>10,"it"=>20,"sa"=>self::TAISIN),//"捕獲の見極め",
			177=>array("ns"=>20,"it"=>132,"sa"=>self::TYOKA),//"捕獲マスター",
			178=>array("ns"=>15,"it"=>132,"sa"=>self::TYOKA),//"捕獲名人",
			179=>array("ns"=>10,"it"=>132,"sa"=>self::TYOKA),//"捕獲達人",
			180=>array("ns"=>10,"it"=>116,"sa"=>self::TAISIN),//"ボマー",
			181=>array("ns"=>10,"it"=>136,"sa"=>self::HUATU),//"麻痺ビン追加",
			182=>array("ns"=>10,"it"=>135,"sa"=>self::HUATU),//"麻痺無効",
			183=>array("ns"=>10,"it"=>74,"sa"=>self::TAISIN),//"満足感",//節食
			184=>array("ns"=>10,"it"=>31,"sa"=>self::TAISIN),//"まんぷく",
			185=>array("ns"=>30,"it"=>94,"sa"=>self::MIKIRI),//"見切りマスター",
			186=>array("ns"=>20,"it"=>94,"sa"=>self::MIKIRI),//"見切り+3",
			187=>array("ns"=>15,"it"=>94,"sa"=>self::MIKIRI),//"見切り+2",
			188=>array("ns"=>10,"it"=>94,"sa"=>self::MIKIRI),//"見切り+1",
			189=>array("ns"=>20,"it"=>137,"sa"=>self::HUATU),//"水属性攻撃強化+3",
			190=>array("ns"=>15,"it"=>137,"sa"=>self::HUATU),//"水属性攻撃強化+2",
			191=>array("ns"=>10,"it"=>137,"sa"=>self::HUATU),//"水属性攻撃強化+1",
			192=>array("ns"=>15,"it"=>138,"sa"=>self::TAISIN),//"水耐性【大】",
			193=>array("ns"=>10,"it"=>138,"sa"=>self::TAISIN),//"水耐性【小】",
			194=>array("ns"=>10,"it"=>97,"sa"=>self::TYOKA),//"耳栓",
			195=>array("ns"=>10,"it"=>27,"sa"=>self::TYOKA),//"無我の境地",
			196=>array("ns"=>10,"it"=>41,"sa"=>self::TOSHO),//"無慈悲",//剛撃
			197=>array("ns"=>10,"it"=>71,"sa"=>self::TYOKA),//"ランナー",
			198=>array("ns"=>20,"it"=>140,"sa"=>self::HUATU),//"龍属性攻撃強化+3",
			199=>array("ns"=>15,"it"=>140,"sa"=>self::HUATU),//"龍属性攻撃強化+2",
			200=>array("ns"=>10,"it"=>140,"sa"=>self::HUATU),//"龍属性攻撃強化+1",
			201=>array("ns"=>15,"it"=>141,"sa"=>self::TAISIN),//"龍耐性【大】",
			202=>array("ns"=>10,"it"=>141,"sa"=>self::TAISIN),//"龍耐性【小】",
			203=>array("ns"=>10,"it"=>143,"sa"=>self::TAISIN),//"裂傷無効",
			204=>array("ns"=>10,"it"=>79,"sa"=>self::TYOKA),//"連発数+1",
			205=>array("ns"=>10,"it"=>30,"sa"=>self::TYOKA),//"業物",
			206=>array("ns"=>10,"it"=>43,"sa"=>self::TAISIN),//"罠師"

		);
		return $nis[$sk];
	}
	
	//一元管理できる（引数でweapon slotに設定するかfirstから呼ぶか選ぶ=>returnを）
	//4=>4=>array("it"=>10,"nm"=>"回避術","vl"=>3,"wpnm"=>"発掘（剣士/ガンナー）-回避術3-"),
	public static function wpskl($wp)
	{
		$rtn = array(
			4=>array("it"=>10,"nm"=>"回避術","vl"=>3),
			5=>array("it"=>10,"nm"=>"回避術","vl"=>4),
			6=>array("it"=>10,"nm"=>"回避術","vl"=>5),
			7=>array("it"=>23,"nm"=>"祈願","vl"=>2),
			8=>array("it"=>23,"nm"=>"祈願","vl"=>4),
			9=>array("it"=>23,"nm"=>"祈願","vl"=>5),
			10=>array("it"=>33,"nm"=>"潔癖","vl"=>3),
			11=>array("it"=>33,"nm"=>"潔癖","vl"=>4),
			12=>array("it"=>33,"nm"=>"潔癖","vl"=>5),
			13=>array("it"=>44,"nm"=>"強欲","vl"=>3),
			14=>array("it"=>44,"nm"=>"強欲","vl"=>4),
			15=>array("it"=>44,"nm"=>"強欲","vl"=>6),
			16=>array("it"=>50,"nm"=>"護石収集","vl"=>3),
			17=>array("it"=>50,"nm"=>"護石収集","vl"=>4),
			18=>array("it"=>50,"nm"=>"護石収集","vl"=>6),
			/*19=>array("it"=>55,"nm"=>"斬術","vl"=>3),
			20=>array("it"=>55,"nm"=>"斬術","vl"=>4),
			21=>array("it"=>55,"nm"=>"斬術","vl"=>5),*/
			19=>array("it"=>64,"nm"=>"状態耐性","vl"=>2),
			20=>array("it"=>64,"nm"=>"状態耐性","vl"=>3),
			21=>array("it"=>64,"nm"=>"状態耐性","vl"=>4),
			22=>array("it"=>64,"nm"=>"状態耐性","vl"=>5),
			23=>array("it"=>104,"nm"=>"刀匠","vl"=>2),
			24=>array("it"=>104,"nm"=>"刀匠","vl"=>3),
			25=>array("it"=>104,"nm"=>"刀匠","vl"=>4),
			26=>array("it"=>104,"nm"=>"刀匠","vl"=>5),
			27=>array("it"=>2,"nm"=>"怒","vl"=>2),
			28=>array("it"=>2,"nm"=>"怒","vl"=>3),
			29=>array("it"=>2,"nm"=>"怒","vl"=>4),
			30=>array("it"=>2,"nm"=>"怒","vl"=>5),
			31=>array("it"=>19,"nm"=>"頑強","vl"=>3),
			32=>array("it"=>19,"nm"=>"頑強","vl"=>4),
			33=>array("it"=>19,"nm"=>"頑強","vl"=>5),
			34=>array("it"=>61,"nm"=>"射手","vl"=>2),
			35=>array("it"=>61,"nm"=>"射手","vl"=>3),
			36=>array("it"=>61,"nm"=>"射手","vl"=>4),
			37=>array("it"=>61,"nm"=>"射手","vl"=>5),
		);
		if ($wp==0) return $rtn;
		return $rtn[$wp];
	}
}
?>
