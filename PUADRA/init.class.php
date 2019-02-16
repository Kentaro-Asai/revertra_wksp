<?php
class init {
	//roopする個数
	const PARTY = 6;
	const TWOWAY = 8;
    const DRPPLS = 9;
	const RTKYO = 9;
	const MLT = 2;
	const KILR = 3;
	const NO_DMG = 3;
	const CMBS = 3;
	const SEN_KLR = 3;

    public function __construct()
	{
		
	}
	
	public static function mns_names($is_assist = false)
	{
		if (!$is_assist) {
			$mns = "<th>モンスター名</th>";
			$id = "nm";
			
		}else{
			$mns = "<th>アシスト</th>";
			$id = "asis_nm";
		}
		for ($i=1; $i <= self::PARTY; $i++) {
			$mns .= "<td id=".$id.$i.">";
			$mns .= "-指定無し- <span class=trn> > </span>";
			$mns .= "</td>";
		}

		return $mns;
	}
	
	public static function pls($is_assist = false)
	{
		if (!$is_assist) {
			$sen = "<th>+297</th>";
			$id = "pls";
		}else{
			$sen = "<th>アシスト+297</th>";
			$id = "asis_pls";
		}
		for ($i=1; $i <= self::PARTY; $i++) {
			$sen .= "<td>";
			$sen .= "<input type=checkbox id=".$id.$i." checked />";
			$sen .= "</td>";
		}
		return $sen;
	}
	
	public static function zk($zk_part)
	{
		$ja = array(0=>"メイン", 1=>"サブ");
		$en = array(0=>"main", 1=>"sub");
		
		$zk = "<th>".$ja[$zk_part]."属性</th>";
		for ($i=1; $i < self::PARTY+1; $i++) {
			$zk .= "<td>";
			$zk .= "<select name=".$en[$zk_part].$i.">";
			if ($zk_part === 1) $zk .= "<option value=0>無</option>";
			$zk .= "<option value=1>火</option>";
			$zk .= "<option value=2>水</option>";
			$zk .= "<option value=3>木</option>";
			$zk .= "<option value=4>光</option>";
			$zk .= "<option value=5>闇</option>";
			$zk .= "</select>";
			$zk .= "</td>";
		}
		return $zk;
	}
	
	public static function stts($num)
	{
		$ja = array(0=>"攻撃力", 1=>"回復力");
		$en = array(0=>"atk", 1=>"re");
		$st_num = array(1000, 300);
		
		$st = "<th>".$ja[$num]."</th>";
		for ($i=1; $i < self::PARTY+1; $i++) {
			$st .= "<td>";
			$st .= "<input type=text name=".$en[$num].$i." value=".$st_num[$num].">";
			$st .= "</td>";
		}
		return $st;
	}
	
	public static function aw($aw)
	{
		$ary =  array("hi"=>"火", "mz"=>"水", "ki"=>"木", "hk"=>"光", "ym"=>"闇", "ht"=>"回復");
		$sen = "<th>";
		if ($aw === "2way") {
			$sen .= "<img src=img/2way.png width=22 height=22 alt=2体攻撃 title=２体攻撃>";
			$rp = self::TWOWAY;
		}else if($aw === "hi" || $aw === "mz"|| $aw === "ki" || $aw === "hk"|| $aw === "ym" || $aw === "ht"){
			$sen .= "<img src=img/".$aw."d.png width=22 height=22 alt=".$ary[$aw]."ドロップ強化 title=".$ary[$aw]."ドロップ強化>";
			$rp = self::DRPPLS;
		}else if($aw === "hir" || $aw === "mzr"|| $aw === "kir" || $aw === "hkr"|| $aw === "ymr"){
			$hs = substr($aw, 0, 2);
			$sen .= "<img src=img/".$aw.".png width=22 height=22 alt=".$ary[$hs]."属性列強化 title=".$ary[$hs]."属性列強化>";
			$rp = self::RTKYO;
		}else if($aw === "mlb"){
			$sen .= "<img src=img/mulb.png width=22 height=22 alt=マルチブースト title=マルチブースト>";
			$rp = self::MLT;
		}else if ($aw === "kilr"){
			$sen .= "<img src=img/god_kilr.png width=22 height=22 alt=キラー全般 title=キラー全般>";
			$rp = self::KILR;
		}else if ($aw === "noDmg"){
			$sen .= "<img src=img/noDmg.png width=22 height=22 alt=ダメージ無効貫通 title=ダメージ無効貫通>";
			$rp = self::NO_DMG;
		}else{ //cmbs
			$sen .= "<img src=img/cmbs.png width=22 height=22 alt=コンボ強化 title=コンボ強化>";
			$rp = self::CMBS;
		}
		$sen .= "</th>";
		for ($i=1; $i < self::PARTY+1; $i++) {
			$sen .= "<td><select name=".$aw.$i.">";
			for ($k=0; $k <= $rp; $k++) {
				$sen .= "<option>".$k."</option>";
			}
			$sen .= "</select></td>";
		}
		return $sen;
	}
	
	public static function senAw($sen_aw)
	{
		$ary =  array("hi"=>"火", "mz"=>"水", "ki"=>"木", "hk"=>"光", "ym"=>"闇", "ht"=>"回復");
		$sen = "<th>";
		$sen .= "<img src=img/sen_klr.jpg width=54 height=22 alt=潜在覚醒キラー全般 title=潜在覚醒キラー全般>";
		$sen .= "</th>";
		for ($i=1; $i < self::PARTY+1; $i++) {
			$sen .= "<td><select name=".$sen_aw.$i.">";
			for ($k=0; $k <= self::SEN_KLR; $k++) {
				$sen .= "<option>".$k."</option>";
			}
			$sen .= "</select></td>";
		}
		return $sen;
	}
	
	public static function htmlJunbi()
	{
		$rt_str = "";
    	for ($i = 1; $i <= 10; $i++) {
    		$htm = "<tr><th>コンボ ".$i.":</th><td><select name=zk".$i.">"
				. "<option value=0>-無し-</option>"
				. "<option value=1>火ドロップ</option>"
				. "<option value=2>水ドロップ</option>"
				. "<option value=3>木ドロップ</option>"
				. "<option value=4>光ドロップ</option>"
				. "<option value=5>闇ドロップ</option>"
				. "<option value=6>回復ドロップ</option></select>";
    		$htm .= " <select id=cmb_dp" . $i. ">";
			// for 7 * 6 banmen to change 6 * 5 banmen
    		for ($j = 3; $j <= 42; $j++) {
    			$htm .= "<option value=" . $j . ">" . $j . "</option>";
    		}
    		$htm .= "</select>個消し"
				. "うち、プラスドロップ"
				. "<select id=cmb_pls" .$i . ">";
    		for ($j = 0; $j <= 42; $j++) {
    			$htm .= "<option value=" . $j . ">" . $j . "</option>";
    		}
    		$htm .= "</select>個"
				. "<input type=checkbox id=cmb" . $i  ."rt /><label for=cmb" .$i . "rt>列判定</label>"
				."<input type=checkbox id=cmb" . $i  ."square /><label for=cmb" .$i . "square>3×3正方形判定</label></td></tr>";

    		$rt_str .= $htm;
    	}
    	//総コンボ数
    	$ht = "<tr><th>総コンボ数:</th><td><select id=cmb>";
    	for ($i=1; $i<=15; $i++) {
    		$ht .= "<option>".$i."</option>";
    	}
    	$ht .= "</select></td></tr>";
    	$rt_str .= $ht;
		
		return $rt_str;
	}
}
