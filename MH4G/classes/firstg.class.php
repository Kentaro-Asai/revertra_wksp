<?php  //最初にここでフラグを受け取る。必要なら他のクラスを受け取り、やはりここで最後に答えを出す
class firstg
{
	private $sex = 1; //man=1,woman=2
	private $sob = array(); //1->下位装備(rank 1) 2->上位(rank 2),3->G級(rank 3)
	private $hlm = "all";
	private $amusk1 = 0;
	private $amusk2 = 0;
	private $skval1 = 5;
	private $skval2 = 5;
	private $amusl = 0;
	private $wepsl = 0;
	private $wp = array("it"=>0,"nm"=>"","vl"=>0);//"it"=>,"nm"=>,"vl"=>
	private $sk = array();
	private $sog = false;//Sword OR Gun（タブ）false = sword
    private $opt1 = false;//装備の重なり部分のオプション
	const TAISIN = 6;
	const MIKIRI = 7;
	const HUATU  = 8;
	const TYOKA  = 10;
	const KYORI  = 12;
	const TAKUMI = 20;
	const TOSHO  = 40;
	const KOUHO = 5; 
	
	public function __construct()
	{
		if (isset($_POST["sex"])) {
			$this->sex = $_POST["sex"];
			
			if (isset($_POST["sob"])) { //is_array
				$this->sob = $_POST["sob"];
			} else {
				$this->sob[0] = 3;
			}
			
            if (isset($_POST["opt1"])) $this->opt1 = $_POST["opt1"];
			
			if (isset($_POST["sog"])) $this->sog = $_POST["sog"];
            
			if (isset($_POST["hlm"])) $this->hlm = $_POST["hlm"];
			
			if (isset($_POST["amusk1"])) $this->amusk1 = $_POST["amusk1"];
			
			if (isset($_POST["skval1"])) $this->skval1 = $_POST["skval1"];
			
			if (isset($_POST["amusk2"])) $this->amusk2 = $_POST["amusk2"];
			
			if (isset($_POST["skval2"])) $this->skval2 = $_POST["skval2"];
			
			if (isset($_POST["amuslot"])) $this->amusl = $_POST["amuslot"];
			
			if (isset($_POST["wepslot"])) {
				if ($_POST["wepslot"] <= 3) $this->wepsl = $_POST["wepslot"];
				else { //武器が発掘されたものであり、何か珠が入っている
					$this->wp = arySkill::wpskl($_POST["wepslot"]);
					$this->wepsl = 0;
					//$this->istiw = true;//Is Tama in Weapon
				}
			}
			
			if (is_array($_POST["wntsk"])) $this->sk = $_POST["wntsk"];
		}
		
	}
	
	public function input()
	{
		$ar = array();
		if ($this->sex == 1) $ar['sex'] = false;
		else                 $ar['sex'] = true;
		//$ar['hlm'] = $this->hlm;
		$ar['amusk'][0] = $this->amusk1;
		$ar['skval'][0] = $this->skval1;
		$ar['amusk'][1] = $this->amusk2;
		$ar['skval'][1] = $this->skval2;
		$ar['amuslot'] = $this->amusl;
		$ar['wepslot'] = $this->wepsl;
		$ar['wntsk'] = $this->sk;
		return $ar;
	}
	
	public function ini()
	{
		$ns = array();//need sklll発動に必要な量
		$it = array();//item sklll項目
		$sa = array();//sa sklll aquired・・・珠のタイプ

        for ($a1=0, $a2=0; $a1<count($this->sk); $a1++, $a2++) {
			$nis = arySkill::connectSkl($this->sk[$a1]);
			if ($this->sk[$a1] == 0) {
				$a2--;
			} else {
				$ns[$a2] = $nis["ns"];
				$it[$a2] = $nis["it"];
				$sa[$a2] = $nis["sa"];
			}
		}
        
		//重複させようとした人の重複スキルを0に変える
		for ($j=0; $j < count($it); $j++) {
			for ($k=$j+1; $k < count($it); $k++) {
				if ($it[$j] == $it[$k]) {
					if ($ns[$j] < $ns[$k]) {
						$ns[$j] = $ns[$k];
						$ns[$k] = 0; $it[$k] = 0; $sa[$k] = 0;
					} else {
						$ns[$k] = 0; $it[$k] = 0; $sa[$k] = 0;
					}
				}
			}
		}
		if (@$it[0]==0 && @$it[1]==0 && @$it[2]==0 && @$it[3]==0 && @$it[4]==0 && @$it[5]==0) {
			return false;
		}
		
		
		$arys["ns"] = $ns;
		$arys["it"] = $it;
		$arys["sa"] = $sa;
		return $arys;
	}
	
	public function ctl($ns, $it, $sa) {
		
		//欲しいスキルからns(必要量)を削る
		for($j=0; $j<count($it); $j++){
			//お守り分必要量を削った
			if($this->amusk1 == $it[$j]) $ns[$j] -= $this->skval1;
			if($this->amusk2 == $it[$j]) $ns[$j] -= $this->skval2;
			//weapon slotが発掘武器の場合
			if($this->wp["it"] == $it[$j] && $this->wp["it"]!=0) $ns[$j] -= $this->wp["vl"]; 
		}
		//DBから探す対象となる装備を持ってくる
		//sobScoreで採点する（高得点の装備は$arysに格納されている)
        $arys = $this->sobScore($it, $sa, $ns, $this->opt1);
		//ここから最適な装備を選択する
		//珠をはめる
		$bests = $this->accumulate($arys, $it, $sa, $ns);

		return $bests;
		
	}
	
	
	private function sobScore($it, $sa, $ns, $opt1)
	{
		$arys = array();
		//DBからデータを持ってくる。
		$m = model::getIns();
        if ($opt1) {
            $arys[1] = $this->score($it, $sa, $ns, $m->getA($this->sex, $this->sob, $this->hlm));//頭
            $arys[0] = $this->score($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "d"));//胴
            $arys[3] = $this->score($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "k"));//腰
            $arys[4] = $this->score($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "s"));//脚
            $arys[2] = $this->score($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "u"));//腕
        } else {
            $arys[1] = $this->scoref($it, $sa, $ns, $m->getA($this->sex, $this->sob, $this->hlm));//頭
            $arys[0] = $this->scoref($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "d"));//胴
            $arys[3] = $this->scoref($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "k"));//腰
            $arys[4] = $this->scoref($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "s"));//脚
            $arys[2] = $this->scoref($it, $sa, $ns, $m->getBui($this->sex, $this->sob, $this->sog, "u"));//腕
        }
        //３次元配列になっている
		//var_dump($arys[4]);
		return $arys;
	}
	
	private function score($it, $sa, $ns, $arys)
	{
		$scr = array(0, 0, 0, 0, 0);
		$mem = array(0, 0, 0, 0, 0);
		$ol1 = 0;//only oneスキルが一つだけ
		$nol = false;//欲しいスキルと2つ以上被っている not only one
		
		for($a=0, $p=0; $a < count($arys); $a++, $p=0, $ol1=0, $nol=false){
			for($b=0; $b < count($it); $b++){ //bは、欲しいスキルの中で動くように設定
				for($i=1; $i<=5; $i++){
					if($it[$b]==$arys[$a]["skl".$i] && $ns[$b] > 0){
						//ここで装備の評価計算
						if($ns[$b] < $arys[$a]["sklVal".$i]){
							$p += $ns[$b] * $sa[$b] * $ns[$b];
						//必要量以上の場合、nsの値分しか追加しない	
						}else $p += $arys[$a]["sklVal".$i] * $sa[$b] * $ns[$b];
						if(0 == $ol1) $ol1 = $i;
						else $nol = true;
					//ここはお守りで必要量以上になってしまっている時マイナスになるのを防いでいる
					}else if($it[$b] == $arys[$a]["skl".$i] && $ns[$b] <= 0){
						//もし、Skill valueがマイナスだったら、その分も換算したほうが良い//
						if($arys[$a]["sklVal".$i] < 0) $p += $arys[$a]["sklVal".$i] * $sa[$b];
					}
				} 
			}
			if($arys[$a]["slot"] > 0) $p += 40 * $arys[$a]["slot"];
			/*ここでは、欲しいスキルが一つだけある装備がランキングに入ってるやつの
			 絶対上位あるいは下位の時、省くかどうかを決める*/
			if($ol1 != 0 && !$nol && count($it)!=1){
				//1位～5位を回すfor
				for($i=0; $i < self::KOUHO; $i++){
					if($scr[$i] > 0){
						//欲しいスキルを回すFor
						for($j=0; $j < count($it); $j++){
							if($arys[$a]["skl".$ol1]==$it[$j]) {
								//ランキングに入ったスキルを回すFor
								for($k=1; $k < 5; $k++){
									if($arys[$mem[$i]]["skl".$k]==$it[$j]){
										if($arys[$mem[$i]]["sklVal".$k] >= $arys[$a]["sklVal".$ol1] && $arys[$mem[$i]]["slot"] >= $arys[$a]["slot"]){
											//スキル値もスロット数も同値以下ならはじく
											$p=0;
										}elseif($arys[$mem[$i]]["sklVal".$k] <= $arys[$a]["sklVal".$ol1] && $arys[$mem[$i]]["slot"] <= $arys[$a]["slot"] && $scr[$i] <= $p){
											//絶対下位が先にランキングに入っていて、絶対上位がこれ
											//絶対下位をランキングから取り除いて、新たに今のを追加できるようにする
											for($m=$i; $m < self::KOUHO -1; $m++){
												$scr[$m] = $scr[$m +1];
												$mem[$m] = $mem[$m +1];
											}
											$scr[4]=0;
										}
										//var_dump('$a='.$a);
										break(2);
									}
								}
							}
						}
					}else break;
				}
			}
			//装備一つのコスト換算終了
			if($scr[0] < $p){
				$scr[4]=$scr[3];$scr[3]=$scr[2];$scr[2]=$scr[1];$scr[1]=$scr[0];$scr[0]=$p;
				$mem[4]=$mem[3];$mem[3]=$mem[2];$mem[2]=$mem[1];$mem[1]=$mem[0];$mem[0]=$a;
			}else if($scr[1] < $p){
				$scr[4]=$scr[3];$scr[3]=$scr[2];$scr[2]=$scr[1];$scr[1]=$p;
				$mem[4]=$mem[3];$mem[3]=$mem[2];$mem[2]=$mem[1];$mem[1]=$a;
			}else if($scr[2] < $p){
				$scr[4]=$scr[3];$scr[3]=$scr[2];$scr[2]=$p;
				$mem[4]=$mem[3];$mem[3]=$mem[2];$mem[2]=$a;
			}else if($scr[3] < $p){
				$scr[4]=$scr[3];$scr[3]=$p;
				$mem[4]=$mem[3];$mem[3]=$a;
			}else if($scr[4] < $p){
				$scr[4]=$p;
				$mem[4]=$a;
			}
		}
		//元の$arysを返す
		for ($j = 0; $j < 5; $j++) {
			$ret[$j] = $arys[$mem[$j]];
		}
		return $ret;
	}
    
    //score false
    private function scoref($it, $sa, $ns, $arys)
	{
		$scr = array(0, 0, 0, 0, 0);
		$mem = array(0, 0, 0, 0, 0);
		
		for($a=0, $p=0; $a < count($arys); $a++, $p=0){//cとa1はいつも同値、キャストできない時あるから用意している
			for($b=0; $b < count($it); $b++){ //bは、欲しいスキルの中で動くように設定
				if($it[$b]==$arys[$a]["skl1"] && $ns[$b] > 0){
					//ここで装備の評価計算
					$p += $arys[$a]['sklVal1'] * $sa[$b] * $ns[$b];
				//ここはお守りで必要量以上になってしまっている時マイナスになるのを防いでいる
				}else if($it[$b] == $arys[$a]["skl1"] && $ns[$b] <= 0){
					//もし、Skill valueがマイナスだったら、その分も換算したほうが良い
				}else if($it[$b]==$arys[$a]["skl2"] && $ns[$b] > 0){
					$p += $arys[$a]['sklVal2'] * $sa[$b] * $ns[$b];
				}else if($it[$b] == $arys[$a]["skl2"] && $ns[$b] <= 0){
					
				}else if($it[$b]==$arys[$a]["skl3"] && $ns[$b] > 0){
					$p += $arys[$a]['sklVal3'] * $sa[$b] * $ns[$b];
				}else if($it[$b] == $arys[$a]["skl3"] && $ns[$b] <= 0){
					
				}else if($it[$b]==$arys[$a]["skl4"] && $ns[$b] > 0){
					$p += $arys[$a]['sklVal4'] * $sa[$b] * $ns[$b];
				}else if($it[$b] == $arys[$a]["skl4"] && $ns[$b] <= 0){
					
				}else if($it[$b]==$arys[$a]["skl5"] && $ns[$b] > 0){
					$p += $arys[$a]['sklVal5'] * $sa[$b] * $ns[$b];
				}else if($it[$b] == $arys[$a]["skl5"] && $ns[$b] <= 0){
				}
			}
			if($arys[$a]["slot"] > 0){
				$p += 40 * $arys[$a]["slot"];
			}
			//装備一つのコスト換算終了
			if($scr[0] < $p){
				$scr[4]=$scr[3];$scr[3]=$scr[2];$scr[2]=$scr[1];$scr[1]=$scr[0];$scr[0]=$p;
				$mem[4]=$mem[3];$mem[3]=$mem[2];$mem[2]=$mem[1];$mem[1]=$mem[0];$mem[0]=$a;
			}else if($scr[1] < $p){
				$scr[4]=$scr[3];$scr[3]=$scr[2];$scr[2]=$scr[1];$scr[1]=$p;
				$mem[4]=$mem[3];$mem[3]=$mem[2];$mem[2]=$mem[1];$mem[1]=$a;
			}else if($scr[2] < $p){
				$scr[4]=$scr[3];$scr[3]=$scr[2];$scr[2]=$p;
				$mem[4]=$mem[3];$mem[3]=$mem[2];$mem[2]=$a;
			}else if($scr[3] < $p){
				$scr[4]=$scr[3];$scr[3]=$p;
				$mem[4]=$mem[3];$mem[3]=$a;
			}else if($scr[4] < $p){
				$scr[4]=$p;
				$mem[4]=$a;
			}
		}
		//元の$arysを返す
		for ($j = 0; $j < 5; $j++) {
			$arysRet[$j] = $arys[$mem[$j]];
		}
		return $arysRet;
	}
	
	private function accumulate($arys, $it, $sa, $ns)
	{
		//ここで装備の組合わせをする（網羅的）頭（スカルヘッド付）、胴、腕、腰（バンギスコイル付）、脚（胴系統倍加付）
		$sl = array(); //slotのアレイ。$sl[0~4][slot数(0~3)中身はtrue false] スロットの数は、足していく。脚が一番入れ替わる
		$sk = array(); //その装備のSkill合計値を記憶。$sk[0~5]
		//ここに護石スロットと武器スロットを入力すべき
		$tama = arySkill::juel();
		$sknm = arySkill::skillSystem();
		//$countで、何回ランクインされたか判断
		$count = 0;
		$mm = array(
			0=>array('aki'=>array(0,0,0), 'a'=>0, 'd'=>0, 'u'=>0, 'k'=>0, 's'=>0, 0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			1=>array('aki'=>array(0,0,0), 'a'=>0, 'd'=>0, 'u'=>0, 'k'=>0, 's'=>0, 0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			2=>array('aki'=>array(0,0,0), 'a'=>0, 'd'=>0, 'u'=>0, 'k'=>0, 's'=>0, 0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			3=>array('aki'=>array(0,0,0), 'a'=>0, 'd'=>0, 'u'=>0, 'k'=>0, 's'=>0, 0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			4=>array('aki'=>array(0,0,0), 'a'=>0, 'd'=>0, 'u'=>0, 'k'=>0, 's'=>0, 0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0))
		);
		$mp = array(
			0=>array(0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			1=>array(0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			2=>array(0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			3=>array(0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0)),
			4=>array(0=>array('nm'=>0, 'val'=>0),1=>array('nm'=>0, 'val'=>0),2=>array('nm'=>0, 'val'=>0),3=>array('nm'=>0, 'val'=>0),4=>array('nm'=>0, 'val'=>0),5=>array('nm'=>0, 'val'=>0))
		);
		
		//最初は胴
		for ($d=0; $d < count($arys[0]); $d++) {
			for ($i=0; $i < count($it); $i++) {
				//$skの初期化は必須
				$sk[$i][0] = 0;
				if ($it[$i] == $arys[0][$d]['skl1']) {
					$sk[$i][0] = $arys[0][$d]['sklVal1'];
				} elseif ($it[$i] == $arys[0][$d]['skl2']) {
					$sk[$i][0] = $arys[0][$d]['sklVal2'];
				} elseif ($it[$i] == $arys[0][$d]['skl3']) {
					$sk[$i][0] = $arys[0][$d]['sklVal3'];
				} elseif ($it[$i] == $arys[0][$d]['skl4']) {
					$sk[$i][0] = $arys[0][$d]['sklVal4'];
				} elseif ($it[$i] == $arys[0][$d]['skl5']) {
					$sk[$i][0] = $arys[0][$d]['sklVal5'];
				}
			} 
			$sl[0] = $arys[0][$d]['slot'];
			//ここから頭 =1
			for ($a=0; $a < count($arys[1]) +1; $a++) {//+1は胴系統倍加
				for ($i=0; $i < count($it); $i++) {
					$sk[$i][1] = 0;
					if ($a == self::KOUHO) {//候補の数は5(5番目は胴系統倍加)
						$sk[$i][1] = $sk[$i][0];
					} else {
						if ($it[$i] == $arys[1][$a]['skl1']) {
							$sk[$i][1] = $arys[1][$a]['sklVal1'];
						} elseif ($it[$i] == $arys[1][$a]['skl2']) {
							$sk[$i][1] = $arys[1][$a]['sklVal2'];
						} elseif ($it[$i] == $arys[1][$a]['skl3']) {
							$sk[$i][1] = $arys[1][$a]['sklVal3'];
						} elseif ($it[$i] == $arys[1][$a]['skl4']) {
							$sk[$i][1] = $arys[1][$a]['sklVal4'];
						} elseif ($it[$i] == $arys[1][$a]['skl5']) {
							$sk[$i][1] = $arys[1][$a]['sklVal5'];
						}
					}
				} 
				if ($a != count($arys[1])) {
					$sl[1] = $arys[1][$a]['slot'];
				} else { //else以下は胴系統倍加
					$sl[1] = 0;
				}
				//腕=2
				for ($u=0; $u < count($arys[2]) +1; $u++) {
					for ($i=0; $i < count($it); $i++) {
						$sk[$i][2] = 0;
						if ($u == self::KOUHO) {//5
							$sk[$i][2] = $sk[$i][0];
						} else {
							if ($it[$i] == $arys[2][$u]['skl1']) {
								$sk[$i][2] = $arys[2][$u]['sklVal1'];
							} elseif ($it[$i] == $arys[2][$u]['skl2']) {
								$sk[$i][2] = $arys[2][$u]['sklVal2'];
							} elseif ($it[$i] == $arys[2][$u]['skl3']) {
								$sk[$i][2] = $arys[2][$u]['sklVal3'];
							} elseif ($it[$i] == $arys[2][$u]['skl4']) {
								$sk[$i][2] = $arys[2][$u]['sklVal4'];
							} elseif ($it[$i] == $arys[2][$u]['skl5']) {
								$sk[$i][2] = $arys[2][$u]['sklVal5'];
							}
						}
					}
					if ($u != count($arys[2])) {
						$sl[2] = $arys[2][$u]['slot'];
					} else { //胴系統倍加
						$sl[2] = 0;
					}
					//for 腰=3
					for ($k=0; $k < count($arys[3]) +1; $k++) {
						for ($i=0; $i < count($it); $i++) {
							$sk[$i][3] = 0;
							if ($k == self::KOUHO) {//5
								$sk[$i][3] = $sk[$i][0];
							} else {
								if ($it[$i] == $arys[3][$k]['skl1']) {
									$sk[$i][3] = $arys[3][$k]['sklVal1'];
								} elseif ($it[$i] == $arys[3][$k]['skl2']) {
									$sk[$i][3] = $arys[3][$k]['sklVal2'];
								} elseif ($it[$i] == $arys[3][$k]['skl3']) {
									$sk[$i][3] = $arys[3][$k]['sklVal3'];
								} elseif ($it[$i] == $arys[3][$k]['skl4']) {
									$sk[$i][3] = $arys[3][$k]['sklVal4'];
								} elseif ($it[$i] == $arys[3][$k]['skl5']) {
									$sk[$i][3] = $arys[3][$k]['sklVal5'];
								}
							}
						}
						if ($k != count($arys[3])) {
							$sl[3] = $arys[3][$k]['slot'];
						} else { //else以下は胴系統倍加
							$sl[3] = 0;
						}
						//for 脚=4
						for ($s=0; $s < count($arys[4]) +1; $s++) {
							for ($i=0; $i < count($it); $i++) {
								$sk[$i][4] = 0;
								if ($s == self::KOUHO) {//5
									$sk[$i][4] = $sk[$i][0];
								} else {
									if ($it[$i] == $arys[4][$s]['skl1']) {
										$sk[$i][4] = $arys[4][$s]['sklVal1'];
									} elseif ($it[$i] == $arys[4][$s]['skl2']) {
										$sk[$i][4] = $arys[4][$s]['sklVal2'];
									} elseif ($it[$i] == $arys[4][$s]['skl3']) {
										$sk[$i][4] = $arys[4][$s]['sklVal3'];
									} elseif ($it[$i] == $arys[4][$s]['skl4']) {
										$sk[$i][4] = $arys[4][$s]['sklVal4'];
									} elseif ($it[$i] == $arys[4][$s]['skl5']) {
										$sk[$i][4] = $arys[4][$s]['sklVal5'];
									}
								}
							}
							if ($s != count($arys[4])) {
								$sl[4] = $arys[4][$s]['slot'];
							} else { //else以下は胴系統倍加
								$sl[4] = 0;
							}
							//$slと$skには、slot,スキルの値が蓄積されている。
							//珠用スロット(1, 2, 3)
							$tmsl = array(0, 0, 0);
							for ($i = 0; $i < count($sl); $i++) {
								if ($sl[$i] == 1) $tmsl[0]++;
								elseif ($sl[$i] == 2) $tmsl[1]++;
								elseif ($sl[$i] == 3) $tmsl[2]++;
							}
							if ($this->amusl == 1) $tmsl[0]++;
							elseif ($this->amusl == 2) $tmsl[1]++;
							elseif ($this->amusl == 3) $tmsl[2]++;
							
							if ($this->wepsl == 1) $tmsl[0]++;
							elseif ($this->wepsl == 2) $tmsl[1]++;
							elseif ($this->wepsl == 3) $tmsl[2]++;
							
							$dou = 0; //胴系統倍加の処理
							if ($a == 5) $dou++;
							if ($u == 5) $dou++;
							if ($k == 5) $dou++;
							if ($s == 5) $dou++;
							
							$skns = array();
							for ($i=0; $i < count($it); $i++) {
								$skns[$i]=$ns[$i]-$sk[$i][0]-$sk[$i][1]-$sk[$i][2]-$sk[$i][3]-$sk[$i][4];
							}
							//欲しいスキル,必要量,評価値,空きslot,胴slot数,胴系統倍加の数,
							//戻り値は、2次元配列.空きslot,珠のマイナス分、あるいはFalse(不可能だった)
							$result = $this->tama($it, $skns, $sa, $tmsl, $sl[0], $dou);
							if ($result) {
								//1-5位を記録(空きスロット, 珠のマイナス, 装備(Indent)のみ)
								if ($result[0][0]+ 2*$result[0][1]+ 3*$result[0][2] >= $mm[0]['aki'][0]+ 2*$mm[0]['aki'][1]+ 3*$mm[0]['aki'][2]) {
									$mm[4]['aki']=$mm[3]['aki'];$mm[3]['aki']=$mm[2]['aki'];
									$mm[2]['aki']=$mm[1]['aki'];$mm[1]['aki']=$mm[0]['aki'];
									$mm[0]['aki']=$result[0];
									$mm[4]['a']=$mm[3]['a'];$mm[3]['a']=$mm[2]['a'];
									$mm[2]['a']=$mm[1]['a'];$mm[1]['a']=$mm[0]['a'];$mm[0]['a']=$a;
									$mm[4]['d']=$mm[3]['d'];$mm[3]['d']=$mm[2]['d'];
									$mm[2]['d']=$mm[1]['d'];$mm[1]['d']=$mm[0]['d'];$mm[0]['d']=$d;
									$mm[4]['u']=$mm[3]['u'];$mm[3]['u']=$mm[2]['u'];
									$mm[2]['u']=$mm[1]['u'];$mm[1]['u']=$mm[0]['u'];$mm[0]['u']=$u;
									$mm[4]['k']=$mm[3]['k'];$mm[3]['k']=$mm[2]['k'];
									$mm[2]['k']=$mm[1]['k'];$mm[1]['k']=$mm[0]['k'];$mm[0]['k']=$k;
									$mm[4]['s']=$mm[3]['s'];$mm[3]['s']=$mm[2]['s'];
									$mm[2]['s']=$mm[1]['s'];$mm[1]['s']=$mm[0]['s'];$mm[0]['s']=$s;
									for ($i=0; $i < count($it); $i++) {
										$mm[4][$i]['nm']=$mm[3][$i]['nm'];$mm[3][$i]['nm']=$mm[2][$i]['nm'];
										$mm[2][$i]['nm']=$mm[1][$i]['nm'];$mm[1][$i]['nm']=$mm[0][$i]['nm'];
										$mm[0][$i]['nm'] = $sknm[$tama[$it[$i]]];
										$mm[4][$i]['val']=$mm[3][$i]['val'];$mm[3][$i]['val']=$mm[2][$i]['val'];
										$mm[2][$i]['val']=$mm[1][$i]['val'];$mm[1][$i]['val']=$mm[0][$i]['val'];
										$mm[0][$i]['val'] = $result[1][$i];
										$mp[4][$i]['nm']= $mp[3][$i]['nm'];$mp[3][$i]['nm']= $mp[2][$i]['nm'];
										$mp[2][$i]['nm']= $mp[1][$i]['nm'];$mp[1][$i]['nm']= $mp[0][$i]['nm'];
										$mp[0][$i]['nm'] = $sknm[$it[$i]];
										$mp[4][$i]['val']= $mp[3][$i]['val'];$mp[3][$i]['val']= $mp[2][$i]['val'];
										$mp[2][$i]['val']= $mp[1][$i]['val'];$mp[1][$i]['val']= $mp[0][$i]['val'];
										$mp[0][$i]['val'] = $result[2][$i];
									}
								} elseif ($result[0][0]+ 2*$result[0][1]+ 3*$result[0][2] >= $mm[1]['aki'][0]+ 2*$mm[1]['aki'][1]+ 3*$mm[1]['aki'][2]) {
									$mm[4]['aki']=$mm[3]['aki'];$mm[3]['aki']=$mm[2]['aki'];
									$mm[2]['aki']=$mm[1]['aki'];$mm[1]['aki']=$result[0];
									$mm[4]['a']=$mm[3]['a'];$mm[3]['a']=$mm[2]['a'];$mm[2]['a']=$mm[1]['a'];$mm[1]['a']=$a;
									$mm[4]['d']=$mm[3]['d'];$mm[3]['d']=$mm[2]['d'];$mm[2]['d']=$mm[1]['d'];$mm[1]['d']=$d;
									$mm[4]['u']=$mm[3]['u'];$mm[3]['u']=$mm[2]['u'];$mm[2]['u']=$mm[1]['u'];$mm[1]['u']=$u;
									$mm[4]['k']=$mm[3]['k'];$mm[3]['k']=$mm[2]['k'];$mm[2]['k']=$mm[1]['k'];$mm[1]['k']=$k;
									$mm[4]['s']=$mm[3]['s'];$mm[3]['s']=$mm[2]['s'];$mm[2]['s']=$mm[1]['s'];$mm[1]['s']=$s;
									for ($i=0; $i < count($it); $i++) {
										$mm[4][$i]['nm']=$mm[3][$i]['nm'];$mm[3][$i]['nm']=$mm[2][$i]['nm'];
										$mm[2][$i]['nm']=$mm[1][$i]['nm'];$mm[1][$i]['nm'] = $sknm[$tama[$it[$i]]];
										$mm[4][$i]['val']=$mm[3][$i]['val'];$mm[3][$i]['val']=$mm[2][$i]['val'];
										$mm[2][$i]['val']=$mm[1][$i]['val'];$mm[1][$i]['val'] = $result[1][$i];
										$mp[4][$i]['nm']= $mp[3][$i]['nm'];$mp[3][$i]['nm']= $mp[2][$i]['nm'];
										$mp[2][$i]['nm']= $mp[1][$i]['nm'];$mp[1][$i]['nm'] = $sknm[$it[$i]];
										$mp[4][$i]['val']= $mp[3][$i]['val'];$mp[3][$i]['val']= $mp[2][$i]['val'];
										$mp[2][$i]['val']= $mp[1][$i]['val'];$mp[1][$i]['val'] = $result[2][$i];
									}
								} elseif ($result[0][0]+ 2*$result[0][1]+ 3*$result[0][2] >= $mm[2]['aki'][0]+ 2*$mm[2]['aki'][1]+ 3*$mm[2]['aki'][2]) {
									$mm[4]['aki']=$mm[3]['aki'];$mm[3]['aki']=$mm[2]['aki'];$mm[2]['aki']=$result[0];
									$mm[4]['a']=$mm[3]['a'];$mm[3]['a']=$mm[2]['a'];$mm[2]['a']=$a;
									$mm[4]['d']=$mm[3]['d'];$mm[3]['d']=$mm[2]['d'];$mm[2]['d']=$d;
									$mm[4]['u']=$mm[3]['u'];$mm[3]['u']=$mm[2]['u'];$mm[2]['u']=$u;
									$mm[4]['k']=$mm[3]['k'];$mm[3]['k']=$mm[2]['k'];$mm[2]['k']=$k;
									$mm[4]['s']=$mm[3]['s'];$mm[3]['s']=$mm[2]['s'];$mm[2]['s']=$s;
									for ($i=0; $i < count($it); $i++) {
										$mm[4][$i]['nm']=$mm[3][$i]['nm'];
										$mm[3][$i]['nm']=$mm[2][$i]['nm'];
										$mm[2][$i]['nm'] = $sknm[$tama[$it[$i]]];
										$mm[4][$i]['val']=$mm[3][$i]['val'];
										$mm[3][$i]['val']=$mm[2][$i]['val'];
										$mm[2][$i]['val'] = $result[1][$i];
										$mp[4][$i]['nm']= $mp[3][$i]['nm'];
										$mp[3][$i]['nm']= $mp[2][$i]['nm'];
										$mp[2][$i]['nm'] = $sknm[$it[$i]];
										$mp[4][$i]['val']= $mp[3][$i]['val'];
										$mp[3][$i]['val']= $mp[2][$i]['val'];
										$mp[2][$i]['val'] = $result[2][$i];
									}
								} elseif ($result[0][0]+ 2*$result[0][1]+ 3*$result[0][2] >= $mm[2]['aki'][0]+ 2*$mm[2]['aki'][1]+ 3*$mm[2]['aki'][2]) {
									$mm[4]['aki'] = $mm[1]['aki'];$mm[3]['aki'] = $result[0];
									$mm[4]['a']=$mm[3]['a'];$mm[3]['a']=$a;
									$mm[4]['d']=$mm[3]['d'];$mm[3]['d']=$d;
									$mm[4]['u']=$mm[3]['u'];$mm[3]['u']=$u;
									$mm[4]['k']=$mm[3]['k'];$mm[3]['k']=$k;
									$mm[4]['s']=$mm[3]['s'];$mm[3]['s']=$s;
									for ($i=0; $i < count($it); $i++) {
										$mm[4][$i]['nm']=$mm[3][$i]['nm'];
										$mm[3][$i]['nm'] = $sknm[$tama[$it[$i]]];
										$mm[4][$i]['val']=$mm[3][$i]['val'];
										$mm[3][$i]['val'] = $result[1][$i];
										$mp[4][$i]['nm']= $mp[3][$i]['nm'];
										$mp[3][$i]['nm'] = $sknm[$it[$i]];
										$mp[4][$i]['val']= $mp[3][$i]['val'];
										$mp[3][$i]['val'] = $result[2][$i];
									}
								} elseif ($result[0][0]+ 2*$result[0][1]+ 3*$result[0][2] >= $mm[4]['aki'][0]+ 2*$mm[4]['aki'][1]+ 3*$mm[4]['aki'][2]) {
									$mm[4]['aki'] = $result[0];
									$mm[4]['a'] = $a;
									$mm[4]['d'] = $d;
									$mm[4]['u'] = $u;
									$mm[4]['k'] = $k;
									$mm[4]['s'] = $s;
									for ($i=0; $i < count($it); $i++) {
										$mm[4][$i]['nm'] = $sknm[$tama[$it[$i]]];
										$mm[4][$i]['val'] = $result[1][$i];
										$mp[4][$i]['nm'] = $sknm[$it[$i]];
										$mp[4][$i]['val'] = $result[2][$i];
									}
								}
								//スキルの名前、各スキルの量->発動スキルを表示
								$count++;
							}
						}//for 脚=4
					}//for 腰=3
				}//for 腕=2
			}//for 頭=1
		}//for 胴=0
		if ($count == 0) return false;
		/*
		 必要なやつだけnmを持ってくる
		for ($i=0; $i < count($mm) && $i < $count; $i++) {
			$nmd[$i] = $arys[0][$mm[$i]['d']]['id'];
			if ($mm[$i]['a']!=5) $nma[$i] = $arys[1][$mm[$i]['a']]['id'];
			if ($mm[$i]['u']!=5) $nmu[$i] = $arys[2][$mm[$i]['u']]['id'];
			if ($mm[$i]['k']!=5) $nmk[$i] = $arys[3][$mm[$i]['k']]['id'];
			if ($mm[$i]['s']!=5) $nms[$i] = $arys[4][$mm[$i]['s']]['id'];
		}
		$ob = model::getIns();
		if (!empty($nma)) $arnma = $ob->getnm($nma, "a");
		else $arnma = null;
		$arnmd = $ob->getnm($nmd, "d");
		if (!empty($nmu)) $arnmu = $ob->getnm($nmu, "u");
		else $arnmu = null;
		if (!empty($nmk)) $arnmk = $ob->getnm($nmk, "k");
		else $arnmk = null;
		if (!empty($nms)) $arnms = $ob->getnm($nms, "s");
		else $arnms = null;
		*/
		
		//全て持ってきてユーザーにみせたい
		$nm_id = array();
		for ($i=0; $i < self::KOUHO; $i++) {
			$nm_id[0][$i] = $arys[0][$i]['id'];
			$nm_id[1][$i] = $arys[1][$i]['id'];
			$nm_id[2][$i] = $arys[2][$i]['id'];
			$nm_id[3][$i] = $arys[3][$i]['id'];
			$nm_id[4][$i] = $arys[4][$i]['id'];
		}
		$ob = model::getIns();
		$arnma = $ob->getnm($nm_id[1], "a");
		$arnmd = $ob->getnm($nm_id[0], "d");
		$arnmu = $ob->getnm($nm_id[2], "u");
		$arnmk = $ob->getnm($nm_id[3], "k");
		$arnms = $ob->getnm($nm_id[4], "s");
		
		//ここから$rtnに代入していく。（returnするものを詰め込む）
		$rtn = array();
		for ($i=0; $i < count($mm); $i++) {
			//初期化
			$srl = array(); //skillをシリアル化して$rtnに代入
			
			$rtn[$i]['aki'] = $mm[$i]['aki'];
			for ($j=0; $j < count($arnmd); $j++) {
				if ($arnmd[$j]['id'] == $arys[0][$mm[$i]['d']]['id']) {
					$rtn[$i]['d']['nm'] = $arnmd[$j]['name'];
					$rtn[$i]['d']['hi'] = $arnmd[$j]['hi'];
					$rtn[$i]['d']['mz'] = $arnmd[$j]['mz'];
					$rtn[$i]['d']['km'] = $arnmd[$j]['km'];
					$rtn[$i]['d']['ko'] = $arnmd[$j]['ko'];
					$rtn[$i]['d']['ry'] = $arnmd[$j]['ry'];
					//$rtn[$i]['d']['def'] = $arnmd[$j]['def'];
					$srl['sk'][1][0] = $sknm[$arys[0][$mm[$i]['d']]['skl1']];
					$srl['sk'][1][1] = $sknm[$arys[0][$mm[$i]['d']]['skl2']];
					$srl['sk'][1][2] = $sknm[$arys[0][$mm[$i]['d']]['skl3']];
					$srl['sk'][1][3] = $sknm[$arys[0][$mm[$i]['d']]['skl4']];
					$srl['sk'][1][4] = $sknm[$arys[0][$mm[$i]['d']]['skl5']];
					$srl['vl'][1][0] = $arys[0][$mm[$i]['d']]['sklVal1'];
					$srl['vl'][1][1] = $arys[0][$mm[$i]['d']]['sklVal2'];
					$srl['vl'][1][2] = $arys[0][$mm[$i]['d']]['sklVal3'];
					$srl['vl'][1][3] = $arys[0][$mm[$i]['d']]['sklVal4'];
					$srl['vl'][1][4] = $arys[0][$mm[$i]['d']]['sklVal5'];
					break;
				}
			}
			if ($mm[$i]['a']!=5) {
				for ($j=0; $j < count($arnma); $j++) {
					if ($arnma[$j]['id'] == $arys[1][$mm[$i]['a']]['id']) {
						//databaseから情報をキャッチ
						$rtn[$i]['a']['nm'] = $arnma[$j]['name'];
						$rtn[$i]['a']['hi'] = $arnma[$j]['hi'];
						$rtn[$i]['a']['mz'] = $arnma[$j]['mz'];
						$rtn[$i]['a']['km'] = $arnma[$j]['km'];
						$rtn[$i]['a']['ko'] = $arnma[$j]['ko'];
						$rtn[$i]['a']['ry'] = $arnma[$j]['ry'];
						//$rtn[$i]['a']['def'] = $arnma[$j]['def'];
						//skは頭のskill名
						$srl['sk'][0][0] = $sknm[$arys[1][$mm[$i]['a']]['skl1']];
						$srl['sk'][0][1] = $sknm[$arys[1][$mm[$i]['a']]['skl2']];
						$srl['sk'][0][2] = $sknm[$arys[1][$mm[$i]['a']]['skl3']];
						$srl['sk'][0][3] = $sknm[$arys[1][$mm[$i]['a']]['skl4']];
						$srl['sk'][0][4] = $sknm[$arys[1][$mm[$i]['a']]['skl5']];
						//vlは頭のskill量
						$srl['vl'][0][0] = $arys[1][$mm[$i]['a']]['sklVal1'];
						$srl['vl'][0][1] = $arys[1][$mm[$i]['a']]['sklVal2'];
						$srl['vl'][0][2] = $arys[1][$mm[$i]['a']]['sklVal3'];
						$srl['vl'][0][3] = $arys[1][$mm[$i]['a']]['sklVal4'];
						$srl['vl'][0][4] = $arys[1][$mm[$i]['a']]['sklVal5'];
						break;
					}
				}
			} else {
				$rtn[$i]['a']['nm'] = '[胴系統倍加]';
				$rtn[$i]['a']['hi'] = '-';
				$rtn[$i]['a']['mz'] = '-';
				$rtn[$i]['a']['km'] = '-';
				$rtn[$i]['a']['ko'] = '-';
				$rtn[$i]['a']['ry'] = '-';
				//$rtn[$i]['a']['def'] = '-';
				$srl['sk'][0] = $srl['sk'][1];
				$srl['vl'][0] = $srl['vl'][1];
			}
			if ($mm[$i]['u']!=5) {
				for ($j=0; $j < count($arnmu); $j++) {
					if ($arnmu[$j]['id'] == $arys[2][$mm[$i]['u']]['id']) {
						$rtn[$i]['u']['nm'] = $arnmu[$j]['name'];
						$rtn[$i]['u']['hi'] = $arnmu[$j]['hi'];
						$rtn[$i]['u']['mz'] = $arnmu[$j]['mz'];
						$rtn[$i]['u']['km'] = $arnmu[$j]['km'];
						$rtn[$i]['u']['ko'] = $arnmu[$j]['ko'];
						$rtn[$i]['u']['ry'] = $arnmu[$j]['ry'];
						//$rtn[$i]['u']['def'] = $arnmu[$j]['def'];
						$srl['sk'][2][0] = $sknm[$arys[2][$mm[$i]['u']]['skl1']];
						$srl['sk'][2][1] = $sknm[$arys[2][$mm[$i]['u']]['skl2']];
						$srl['sk'][2][2] = $sknm[$arys[2][$mm[$i]['u']]['skl3']];
						$srl['sk'][2][3] = $sknm[$arys[2][$mm[$i]['u']]['skl4']];
						$srl['sk'][2][4] = $sknm[$arys[2][$mm[$i]['u']]['skl5']];
						$srl['vl'][2][0] = $arys[2][$mm[$i]['u']]['sklVal1'];
						$srl['vl'][2][1] = $arys[2][$mm[$i]['u']]['sklVal2'];
						$srl['vl'][2][2] = $arys[2][$mm[$i]['u']]['sklVal3'];
						$srl['vl'][2][3] = $arys[2][$mm[$i]['u']]['sklVal4'];
						$srl['vl'][2][4] = $arys[2][$mm[$i]['u']]['sklVal5'];
						break;
					}
				}
			} else {
				$rtn[$i]['u']['nm'] = '[胴系統倍加]';
				$rtn[$i]['u']['hi'] = '-';
				$rtn[$i]['u']['mz'] = '-';
				$rtn[$i]['u']['km'] = '-';
				$rtn[$i]['u']['ko'] = '-';
				$rtn[$i]['u']['ry'] = '-';
				//$rtn[$i]['u']['def'] = '-';
				$srl['sk'][2] = $srl['sk'][1];
				$srl['vl'][2] = $srl['vl'][1];
			}
			if ($mm[$i]['k']!=5) {//腰
				for ($j=0; $j < count($arnmk); $j++) {
					if ($arnmk[$j]['id'] == @$arys[3][$mm[$i]['k']]['id']) {
						$rtn[$i]['k']['nm'] = $arnmk[$j]['name'];
						$rtn[$i]['k']['hi'] = $arnmk[$j]['hi'];
						$rtn[$i]['k']['mz'] = $arnmk[$j]['mz'];
						$rtn[$i]['k']['km'] = $arnmk[$j]['km'];
						$rtn[$i]['k']['ko'] = $arnmk[$j]['ko'];
						$rtn[$i]['k']['ry'] = $arnmk[$j]['ry'];
						//$rtn[$i]['k']['def'] = $arnmk[$j]['def'];
						$srl['sk'][3][0] = $sknm[$arys[3][$mm[$i]['k']]['skl1']];
						$srl['sk'][3][1] = $sknm[$arys[3][$mm[$i]['k']]['skl2']];
						$srl['sk'][3][2] = $sknm[$arys[3][$mm[$i]['k']]['skl3']];
						$srl['sk'][3][3] = $sknm[$arys[3][$mm[$i]['k']]['skl4']];
						$srl['sk'][3][4] = $sknm[$arys[3][$mm[$i]['k']]['skl5']];
						$srl['vl'][3][0] = $arys[3][$mm[$i]['k']]['sklVal1'];
						$srl['vl'][3][1] = $arys[3][$mm[$i]['k']]['sklVal2'];
						$srl['vl'][3][2] = $arys[3][$mm[$i]['k']]['sklVal3'];
						$srl['vl'][3][3] = $arys[3][$mm[$i]['k']]['sklVal4'];
						$srl['vl'][3][4] = $arys[3][$mm[$i]['k']]['sklVal5'];
						break;
					}
				}
			} else {
				$rtn[$i]['k']['nm'] = '[胴系統倍加]';//腰
				$rtn[$i]['k']['hi'] = '-';
				$rtn[$i]['k']['mz'] = '-';
				$rtn[$i]['k']['km'] = '-';
				$rtn[$i]['k']['ko'] = '-';
				$rtn[$i]['k']['ry'] = '-';
				//$rtn[$i]['k']['def'] = '-';
				$srl['sk'][3] = $srl['sk'][1];
				$srl['vl'][3] = $srl['vl'][1];
			}
			if ($mm[$i]['s']!=5) {//脚
				for ($j=0; $j < count($arnms); $j++) {
					if ($arnms[$j]['id'] == $arys[4][$mm[$i]['s']]['id']) {
						$rtn[$i]['s']['nm'] = $arnms[$j]['name'];
						$rtn[$i]['s']['hi'] = $arnms[$j]['hi'];
						$rtn[$i]['s']['mz'] = $arnms[$j]['mz'];
						$rtn[$i]['s']['km'] = $arnms[$j]['km'];
						$rtn[$i]['s']['ko'] = $arnms[$j]['ko'];
						$rtn[$i]['s']['ry'] = $arnms[$j]['ry'];
						//$rtn[$i]['s']['def'] = $arnms[$j]['def'];
						$srl['sk'][4][0] = $sknm[$arys[4][$mm[$i]['s']]['skl1']];
						$srl['sk'][4][1] = $sknm[$arys[4][$mm[$i]['s']]['skl2']];
						$srl['sk'][4][2] = $sknm[$arys[4][$mm[$i]['s']]['skl3']];
						$srl['sk'][4][3] = $sknm[$arys[4][$mm[$i]['s']]['skl4']];
						$srl['sk'][4][4] = $sknm[$arys[4][$mm[$i]['s']]['skl5']];
						$srl['vl'][4][0] = $arys[4][$mm[$i]['s']]['sklVal1'];
						$srl['vl'][4][1] = $arys[4][$mm[$i]['s']]['sklVal2'];
						$srl['vl'][4][2] = $arys[4][$mm[$i]['s']]['sklVal3'];
						$srl['vl'][4][3] = $arys[4][$mm[$i]['s']]['sklVal4'];
						$srl['vl'][4][4] = $arys[4][$mm[$i]['s']]['sklVal5'];
						break;
					}
				}
			} else {
				$rtn[$i]['s']['nm'] = '[胴系統倍加]';//脚
				$rtn[$i]['s']['hi'] = '-';
				$rtn[$i]['s']['mz'] = '-';
				$rtn[$i]['s']['km'] = '-';
				$rtn[$i]['s']['ko'] = '-';
				$rtn[$i]['s']['ry'] = '-';
				//$rtn[$i]['s']['def'] = '-';
				$srl['sk'][4] = $srl['sk'][1];
				$srl['vl'][4] = $srl['vl'][1];
			}
			
			//スロットのマイナスとプラスを反映
			for ($k=0, $m=0, $n=0; $k < count($it); $k++) {
				if ($mm[$i][$k]['val'] != 0) {
					$srl['sk'][5][$m] = $mm[$i][$k]['nm'];
					$srl['vl'][5][$m] = $mm[$i][$k]['val'];
					$m++;
				}
				if ($mp[$i][$k]['val'] != 0) {
					$srl['sk'][6][$n] = $mp[$i][$k]['nm'];
					$srl['vl'][6][$n] = $mp[$i][$k]['val'];
					$n++;
				}
			}
			$srl['sk'][7][0] = $sknm[$this->amusk1];
			$srl['sk'][7][1] = $sknm[$this->amusk2];
			$srl['vl'][7][0] = $this->skval1;
			$srl['vl'][7][1] = $this->skval2;
			
			//$srlに入れたデータを$rtnに成形して入れる
			//var_dump($srl['vl']);
			$skvl = array();
			for ($j=0; $j < 8; $j++) {
				for ($k=0; $k < count($srl['sk'][$j]); $k++) {
					if ($srl['sk'][$j][$k] == '-無し-') continue;
					for ($m=0; $m < 40; $m++) {
						if (empty($skvl[$m][0]) && !isset($skvl[$m][0])) {
							//スキル名が無ければ入れる && とりあえずスキル値に0を入れておく
							for ($n=0; $n < 9; $n++) {
								$skvl[$m][$n] = 0;
							}
							$skvl[$m][0] = $srl['sk'][$j][$k];
							//珠プラス以外
							if ($j < 6) $skvl[$m][$j+1] = $srl['vl'][$j][$k];
							//護石プラス以外
							else        $skvl[$m][$j] = $srl['vl'][$j][$k];
							break;
						} else {
							if ($srl['sk'][$j][$k] == $skvl[$m][0]) {
								//護石・珠プラス以外
								if ($j < 6) $skvl[$m][$j+1] = $srl['vl'][$j][$k];
								//護石プラス
								else        $skvl[$m][$j] = $srl['vl'][$j][$k];
								break;
							}
						}
					}
				}
			}
			//発掘武器値をここで入れる(左から9番目)
			$k = false;
			for  ($j=0; $j < count($skvl); $j++) {
				if ($skvl[$j][0] == $this->wp["nm"]) {
					$skvl[$j][8] = $this->wp["vl"];
					$k = true;//武器のスキルがあり、かつ、入れられた。
				} else {
					//$skvl[$j][]にいれてる
					$skvl[$j][8] = 0;
				}
			}
			//武器のスキルが入れられなかったので、ここで入れる
			if ($k == false && $this->wp["vl"] > 0) {
				$skvl[$j][0] = $this->wp["nm"];
				for ($n=1; $n < 8; $n++) {
					$skvl[$j][$n] = 0;
				}
				$skvl[$j][8] = $this->wp["vl"];
			}
			//var_dump($skvl);
			//最後に合計値でソート(降順)
			//ソートをする前に合計値を作る
			for ($j=0; $j < count($skvl); $j++) {
				$cnt = 0;
				for ($k=1; $k < 9; $k++) {
					$cnt += $skvl[$j][$k];
				}
				$skvl[$j][9] = $cnt;
				//var_dump($cnt);
			}
			//var_dump($skvl);
			
			//ソートする
			$sum = array();
			foreach ($skvl as $key => $row) {
				$sum[$key] = $row[9];
			}
			array_multisort($sum, SORT_DESC, SORT_NUMERIC, $skvl);
			
			$rtn[$i]['skvl'] = $skvl;
		}
		$rtn['messe'] = sprintf("合計%dパターン見つけられました(最大5件の表示)。", $count);
		$rtn['kouho'] = $this->disp_nm($arnma,$arnmd,$arnmu,$arnmk,$arnms);
		$rtn['cnt'] = $count;
		return $rtn;
	}
	
	
	
	
	//珠をはめるプログラム(必要スキル[], 必要量[], スキル評価値[], スロット[], int 胴スロット数, int 胴系統倍加の数)
	private function tama($it, $ns, $sa, $slts, $dsl, $dou)
	{
		//珠に何を使ったか記録した方が良い

		//tama-minus=$tmnsを用いてマイナス分を反映させる
		$tmns = array();
		//$tmns初期化 && TOSHOでスキル系統値が不足しているなら失敗
		for ($i = 0; $i < count($it); $i++) {
			$tmns[$i] = 0;
			if ($sa[$i] == self::TOSHO && $ns[$i] > 0) return false;
		}
		//珠のプラス分を記憶
		$tpls = $ns;
		//珠を填めるアルゴリズム->まず、胴系統倍加の数から
		if ($dsl == 1 && $dou > 0) {
			//胴系統の倍加から
			$slts[0]--;
			$setted = false; //珠をつけた
			
			for ($i = 0; $i < count($it) && $setted == false; $i++) {
				if($sa[$i] == self::KYORI && $ns[$i] >= $dou + 1){//旧回避距離1-1
					$ns[$i] -= ($dou + 1); $setted = true;//c+1で胴系統倍加の効果を示せる
					$tmns[$i] -= ($dou + 1);
				}else if($sa[$i] == self::TAISIN && $ns[$i] >= (2*$dou+1)){//耐震など2-1の場合
					$ns[$i] -= 2 * ($dou + 1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}
			}
			for ($i = 0; $i < count($it) && $setted == false; $i++) {
				if ($slts[2] == 0 && $sa[$i] == self::TYOKA && $ns[$i] >= ($dou+1)){//聴覚保護など
					$ns[$i] -= ($dou + 1); $setted = true;
					$tmns[$i] -= ($dou + 1);
				} else if ($ns[$i]<4 && $sa[$i]==self::TYOKA && $ns[$i]>=($dou+1)) {//聴覚保護など
					$ns[$i] -= ($dou+1); $setted = true;
					$tmns[$i] -= ($dou + 1);
				} else if ($slts[2]==0 && $slts[1]==0 && $sa[$i]==self::HUATU && $ns[$i]>=($dou+1)) {//風圧など
					$ns[$i] -= ($dou+1); $setted = true;
					$tmns[$i] -= ($dou + 1);
				} else if ($ns[$i]<3 && $sa[$i]==self::HUATU && $ns[$i]>=($dou+1)) {//風圧など
					$ns[$i] -= ($dou+1); $setted = true;
					$tmns[$i] -= ($dou + 1);
				} else if ($slts[2]==0 && $slts[1]==0 && $sa[$i]==self::MIKIRI && $ns[$i]>=($dou+1)) {//見切りなど
					$ns[$i] -= ($dou+1); $setted = true;
					$tmns[$i] -= ($dou + 1);
				} else if ($ns[$i]<3 && $sa[$i]==self::MIKIRI && $ns[$i]>=($dou+1)) {//見切りなど
					$ns[$i] -= ($dou+1); $setted = true;
					$tmns[$i] -= ($dou + 1);
				}
			}
			for ($i = 0; $i < count($it) && $setted == false; $i++) {
				for (; $slts[2]>0 && $sa[$i]==self::TYOKA && $ns[$i]>3; ) {//聴覚保護など
					$slts[2]--; $ns[$i]-=4;
					$tmns[$i] -= 2;
				}
				if($sa[$i]==self::TYOKA && ($slts[2]==0 || $ns[$i]>=$dou+1)){
					$ns[$i] -= ($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}
			}
			for ($i = 0; $i < count($it) && $setted == false; $i++) {
				for(; $slts[1] > 0 && $sa[$i]==self::HUATU && $ns[$i]>2; ){//風圧など
					$slts[1]--; $ns[$i]-=3;
					$tmns[$i] -= 1;
				}
				if($sa[$i]==self::HUATU && ($slts[2]==0 || $ns[$i]>=$dou+1)){
					$ns[$i]-=($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}
			}
			for ($i = 0; $i < count($it) && $setted == false; $i++) {
				for (; $slts[2]>0 && $sa[$i]==self::MIKIRI && $ns[$i]>4; ) {//見切りなど
					$slts[2]--; $ns[$i]-=4;
					$tmns[$i] -= 2;
				}
				for(; $slts[1] > 0 && $sa[$i]==self::MIKIRI && $ns[$i]>2; ){//見切りなど
					$slts[1]--; $ns[$i]-=3;
					$tmns[$i] -= 1;
				}
				if($sa[$i]==self::MIKIRI && ($slts[2]==0 || $ns[$i]>=$dou+1)){
					$ns[$i]-=($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}
			}
			
			//効率良くつけれない時ここで処理される
			for ($i = 0, $j = 0; $i < count($it) && $setted == false; $i++){
				//一番不足しているところに代入するためのセレクション
				if ($sa[$i] == self::TAISIN && $j < $ns[$i]/2){
					$j = $ns[$i]; $j/=2;
				} elseif ($j < $ns[$i]) {
					$j = $ns[$i];
				}
				if(count($it) == $i+1 && $sa[$i] == self::TAISIN){
					$ns[$i]-=2*($dou+1); $setted= true;//もう全部のスキル回してるから胴につけるだけ
					$tmns[$i] -= ($dou+1);
				}else if(count($it) == $i+1 && $sa[$i]==self::MIKIRI){
					$ns[$i]-=($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}else if(count($it) == $i+1 && $sa[$i]==self::HUATU){
					$ns[$i]-=($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}else if(count($it) == $i+1 && $sa[$i]==self::TYOKA){
					$ns[$i]-=($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}else if(count($it) == $i+1 && $sa[$i]==self::KYORI){
					$ns[$i]-=($dou+1); $setted = true;
					$tmns[$i] -= ($dou+1);
				}
			}
		} elseif ($dsl == 2 && $dou > 0) {
			//胴のSlotが2つ
			$slts[1]--;
			$dslt = 2; //胴の残りスロット数を示す(1個の時で言う所の$setted)
			for($i=0; $i<count($it) && $dslt > 0; $i++){
				if($sa[$i]==self::HUATU && $ns[$i]>=3*($dou+1)){//風圧
					$ns[$i]-=3*($dou+1); $dslt = 0;
					$tmns[$i] -= ($dou+1);
				}elseif($slts[2]==0 && $sa[$i]==self::TAKUMI && $ns[$i]>=($dou+1)){//匠2
					$ns[$i]-=($dou+1); $dslt=0;
					$tmns[$i] -= ($dou+1);
				}elseif($slts[2]==0 && $slts[1]==0 && $sa[$i]==self::TAKUMI && $ns[$i]>0){//匠2,他に付けれないからしょうがない
					$ns[$i]-=($dou+1); $dslt=0;
					$tmns[$i] -= ($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt > 0; $i++){
				if($sa[$i]==self::HUATU && $ns[$i]>=(3*($dou+1)-$dou)){//風圧
					$ns[$i]-=3*($dou+1); $dslt=0;
					$tmns[$i] -= ($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt > 0; $i++){
				for($j=0; $ns[$i]>0 && $slts[2]>0 && $j<5; $j++){
					if($sa[$i]==self::TYOKA && $slts[2]>0 && $ns[$i]>=4){//聴覚
						$ns[$i]-=4; $slts[2]--;
						$tmns[$i] -= 2;
					}elseif($sa[$i]==self::MIKIRI && $slts[2]>0 && $ns[$i]>=5){//見切りなど
						$ns[$i]-=5; $slts[2]--;
						$tmns[$i] -= 1;
					}elseif($sa[$i]==self::TAKUMI && $slts[2]>0 && $ns[$i]>=2){//匠3
						$ns[$i]-=3; $slts[2]--;
						$tmns[$i] -= 2;
					}
				}
			}
			for($i=0; $i<count($it) && $dslt > 0; $i++){
				for($j=0; $ns[$i]>0 && $slts[2]>0 && $j<5; $j++){
					if($sa[$i]==self::HUATU && $slts[1]>0 && $ns[$i]>=3){//風圧
						$ns[$i]-=3; $slts[2]--; $slts[0]++;
						$tmns[$i] -= 1;
					}elseif($sa[$i]==self::TAKUMI && $slts[2]>0 && $ns[$i]>0){//匠2
						$ns[$i]-=1; $slts[2]--; $slts[0]++;
						$tmns[$i] -= 1;
					}
				}
			}
			for($i=0; $i<count($it) && $dslt > 0; $i++){
				if($sa[$i]==self::TAKUMI && $ns[$i]>0){//匠2
					$ns[$i]-=($dou+1); $dslt=0;
					$tmns[$i] -= ($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt > 0; $i++){
				if($sa[$i]==self::MIKIRI && $ns[$i]>(3*($dou+1)-$dou)){//見切りなど
					$ns[$i]-=3*($dou+1); $dslt=0;
					$tmns[$i] -= ($dou+1);
				}
			}
			//slot2の利便性が無いと判断された→slot1が二つあると判断
			for ($j=0; $j < 2; $j++) {
				// 2個1スロットがあるから、２回回す
				for($i=0; $i<count($it) && $dslt > 0; $i++){
					if ($sa[$i]==self::TAISIN && $ns[$i]>=2*($dou+1) && $dslt>0){
						$ns[$i]-=2*($dou+1); $dslt--;
						$tmns[$i] -= ($dou+1);
					}elseif($sa[$i]==self::HUATU && $ns[$i]>=($dou+1) && $dslt>0){
						$ns[$i]-=($dou+1); $dslt--;
						$tmns[$i] -= ($dou+1);
					}elseif($sa[$i]==self::TYOKA && $ns[$i]>=($dou+1) && $dslt>0){
						$ns[$i]-=($dou+1); $dslt--;
						$tmns[$i] -= ($dou+1);
					}elseif($sa[$i]==self::KYORI && $ns[$i]>=($dou+1) && $dslt>0){
						$ns[$i]-=($dou+1); $dslt--;
						$tmns[$i] -= ($dou+1);
					}
				}
			}
			for ($k=0, $m=0; $dslt > 0; $m++) {//下でBreakしているから大丈夫
				for($i=0, $j=0; $i<count($it) && $dslt>0; $i++){
				//効率良くつけれない時ここで処理される(最も必要量が多い所を選ぶ->下のifで填める)
					if($sa[$i]==self::TAKUMI || $sa[$i]==self::TOSHO){
					}elseif($sa[$i]==self::TAISIN && $ns[$i]/2 > $j){
						$j=$ns[$i]/2; $k=$i;//$jに必要スキル量,scr[3]に必要な場所
					}elseif($ns[$i] > $j){
						$j=$ns[$i]; $k=$i;
					}
				}
				if ($dslt>0 && $sa[$k]==self::TAISIN){
					$ns[$k] -= 2*($dou+1);//もう全部のスキル回してるから胴につけるだけ
					$tmns[$i] -= ($dou+1);
					$dslt--;
				}elseif($dslt>0 && $sa[$k]!=self::TAKUMI){
					$ns[$k] -= ($dou+1);
					$tmns[$i] -= ($dou+1);
					$dslt--;
				}
				if ($m == 2) break;
			}
		} elseif ($dsl == 3 && $dou > 0) {
			//胴のSlotが3つ ($tmnsと見切りを反映させていない)
			$slts[2]--;
			$dslt = 3;
			for($i=0; $i<count($it) && $dslt>0; $i++){
				if($sa[$i]==self::TAKUMI && $ns[$i]>=3*($dou+1)){//匠3
					$ns[$i] -= 3*($dou+1); $dslt=0;
					$tmns[$i] -= 2*($dou+1);
				}else if($sa[$i]==self::TYOKA && $ns[$i]>=4*($dou+1)){//聴覚
					$ns[$i] -= 4*($dou+1); $dslt=0;
					$tmns[$i] -= 2*($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt>0; $i++){
				if($sa[$i]==self::TYOKA && $ns[$i]>=(4*($dou+1)-$dou)){//聴覚
					$ns[$i] -= 4*($dou+1); $dslt=0;
					$tmns[$i] -= 2*($dou+1);
				}else if($sa[$i]==self::TAKUMI && $ns[$i]>=(3*($dou+1)-$dou)){//匠3
					$ns[$i] -= 3*($dou+1); $dslt=0;
					$tmns[$i] -= 2*($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt>0; $i++){
				if($sa[$i]==self::MIKIRI && $ns[$i]>=(5*($dou+1)-$dou)){//見切り
					$ns[$i] -= 5*($dou+1); $dslt=0;
					$tmns[$i] -= ($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt>1; $i++){
				if($sa[$i]==self::HUATU && $ns[$i]>=3*($dou+1)){//風圧
					$ns[$i] -= 3*($dou+1); $dslt=1;
					$tmns[$i] -= ($dou+1);
				}
			}
			for($i=0; $i<count($it) && $dslt>0; $i++){
				for($j=0; $ns[$i]>0 && $slts[2]>0 && $j<5; $j++){
					if($sa[$i]==self::TYOKA && $slts[2]>0 && $ns[$i]>=4){//聴覚
						$ns[$i]-=4; $slts[2]--;
						$tmns[$i] -= 2;
					}elseif($sa[$i]==self::TAKUMI && $slts[2]>0 && $ns[$i]>=2){//匠3
						$ns[$i]-=2; $slts[2]--;
						$tmns[$i] -= 2;
					}
				}
			}
			for($i=0; $i<count($it) && $dslt>0; $i++){
				for($j=0; $ns[$i]>0 && $slts[2]>0 && $j<5; $j++){
					if($sa[$i]==self::HUATU && $slts[1]>0 && $ns[$i]>=3){//風圧
						$ns[$i]-=3; $slts[2]--; $slts[0]++;
						$tmns[$i] -= 1;
					}else if($sa[$i]==self::TAKUMI && $slts[2]>0 && $ns[$i]>0){//匠2
						$ns[$i]-=1; $slts[2]--; $slts[0]++;
						$tmns[$i] -= 1;
					}
				}
			}
			for($i=0; $i<count($it) && $dslt>1; $i++){
				if($sa[$i]==self::HUATU && $ns[$i]>=3*($dou+1)-$dou){//風圧
					$ns[$i] -= 3*($dou+1); $dslt=1;
					$tmns[$i] -= ($dou+1);
				}
				if($sa[$i]==self::TAKUMI && $slts[2]==0){
					if($ns[$i]<=($dou+1)){//匠2
						$ns[$i]-=($dou+1); $dslt=1;
						$tmns[$i] -= ($dou+1);
					}elseif($slts[1]==0 && $ns[$i]>($dou+1)){//匠3,他に付けれないからしょうがない
						$ns[$i] -= 3*($dou+1); $dslt=0;
						$tmns[$i] -= 2*($dou+1);
					}elseif($slts[1]==0 && $ns[$i]>0){//匠2,他に付けれないからしょうがない
						$ns[$i] -= ($dou+1); $dslt=1;
						$tmns[$i] -= ($dou+1);
					}
				}
			}
			for($i=0; $i<count($it) && $dslt>1; $i++){
				if($sa[$i]==self::MIKIRI && $ns[$i]>=(3*($dou+1)-$dou)){//見切り
					$ns[$i] -= 3*($dou+1); $dslt=1;
					$tmns[$i] -= ($dou+1);
				}
			}//ここからslot1が3つあると判断
			for ($j=0; $j<3 && $dslt>0; $j++) {
				for($i=0; $i<count($it) && $dslt>0; $i++){
					if($sa[$i]==self::TAKUMI || $sa[$i]==self::TOSHO){
					}elseif($sa[$i]==self::TAISIN && $ns[$i]>=2*($dou+1) && $dslt>0){
						$ns[$i]-=2*($dou+1); $dslt--;
						$tmns[$i] -= ($dou+1);
					}else if($ns[$i]>=($dou+1) && $dslt>0){
						$ns[$i]-=($dou+1); $dslt--;
						$tmns[$i] -= ($dou+1);
					}
				}
			}
			for ($k=0, $m=0; $dslt > 0; $m++) {
				for($i=0, $j=0; $i<count($it) && $dslt>0; $i++){
				//効率良くつけれない時ここで処理される(最も必要量が多い所を選ぶ->下のifで填める)
					if($sa[$i]==self::TAKUMI || $sa[$i]==self::TOSHO){
					}elseif($sa[$i]==self::TAISIN && $ns[$i]/2 > $j){
						$j=$ns[$i]/2; $k=$i;//$jに必要スキル量,scr[3]に必要な場所
					}elseif($ns[$i] > $j){
						$j=$ns[$i]; $k=$i;
					}
				}
				if ($dslt>0 && $sa[$k]==self::TAISIN){
					$ns[$k] -= 2*($dou+1);//もう全部のスキル回してるから胴につけるだけ
					$tmns[$k] -= ($dou+1);
					$dslt--;
				}elseif($dslt>0 && $sa[$k]!=self::TAKUMI){
					$ns[$k] -= ($dou+1);
					$tmns[$k] -= ($dou+1);
					$dslt--;
				}
				if ($m == 3) break;
			}
		//ここまで倍加処理
		}
		
		//珠の子供は、珠子。Returnも。
		$tmk = $this->tamako($it, $ns, $sa, $tmns, $slts);
		
		if ($tmk != false) {
			//ここで珠のマイナス分がどこに被るのかを調べる
			$tama = arySkill::juel();
			for ($i=0; $i < count($tmk['it']); $i++) {
				if ($tmk['tmns'][$i] < 0) {
					for ($j=0; $j<count($tmk['it']); $j++) {
						if ($tmk['it'][$j] == $tama[$tmk['it'][$i]]) {
							//珠マイナスと被っている($nsは必要量、$tmnsは負の値)
							$tmk['ns'][$j] -= $tmk['tmns'][$i];
							if ($tmk['ns'][$j] > 0) {
								$tmk = $this->tamako($tmk['it'], $tmk['ns'], $tmk['sa'], $tmk['tmns'], $tmk['slts']);
								if ($tmk == false) return false;
							}
						}
					}
				}
			}
			for ($i=0; $i < count($tmk['it']); $i++) {
				$tpls[$i] -= $tmk['ns'][$i];
			}
			$rtn[0] = $tmk['slts'];//slotの空き
			$rtn[1] = $tmk['tmns'];//珠で生まれるマイナス
			$rtn[2] = $tpls;//珠で得られたプラス
			return $rtn; 
		} else {
			return false;
		}
		
	}

	
	//胴系統倍加無しの珠をつけるプログラム（マイナス換算は呼び出す周りのプログラムでしてる）
	private function tamako($it, $ns, $sa, $tmns, $slts)
	{
		for($i=0; $i<count($it); $i++){
			
			if ($ns[$i]>0 && $sa[$i]==self::TOSHO) return false;//怒などは珠でつけれない
			
			if($ns[$i]>0 && $sa[$i]==self::TAKUMI){//匠とかの場合
				for(; $ns[$i]>0; ){
					if($ns[$i]>1 && $slts[2]>0){
						$slts[2]--; $ns[$i]-=3;
						$tmns[$i] -= 2;
					}elseif($ns[$i]>0 && $slts[2]==0 && $slts[1]>0){
						//３つ穴が無い時２つ穴を消費
						$slts[1]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}elseif($ns[$i]==1 && $slts[2]>0 && $slts[1]==0){
						//残り1だけど2つ穴が無い時３つ穴を消費
						$slts[2]--; $slts[0]++; $ns[$i]--;
						$tmns[$i] -= 2;
					}elseif($ns[$i]==1 && $slts[1]>0){
						$slts[1]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}elseif($slts[2]==0 && $slts[1]==0) return false;//この装備では不可能を示す
				}
			}
			if($ns[$i]>0 && $sa[$i]==self::TYOKA){//聴覚保護とか(4-3, 1-1)の場合
				for($j=0; $ns[$i]>0 && $j<4; $j++){
					if($ns[$i]>3 && $slts[2]>0){
						$slts[2]--; $ns[$i]-=4;
						$tmns[$i] -= 2;
					}//必要量が4以上なので、３つ穴を消費
				}
			}
			if($ns[$i]>0 && $sa[$i]==self::MIKIRI){//見切りとか(5-3,3-2,1-1)の場合
				for($j=0; $ns[$i]>0 && $j<4; $j++){
					if($ns[$i]>4 && $slts[2]>0){
						$slts[2]--; $ns[$i]-=5;
						$tmns[$i] -= 1;
					}//必要量が5以上なので、３つ穴を消費
				}
			}
			if($ns[$i]>0 && $sa[$i]==self::HUATU){//風圧とか(3-2, 1-1)の場合
				for($j=0; $ns[$i]>0 && $j<5; $j++){
					if($ns[$i]>2 && $slts[1]>0){
						$slts[1]--; $ns[$i]-=3;
						$tmns[$i] -= 1;
					}//必要量が3以上なので、2つ穴を消費
				}
			}
		}
		for($i=0; $i<count($it); $i++){
			if($ns[$i]>0 && $sa[$i]==self::HUATU){
				for($j=0; $ns[$i]>0 && $j<14; $j++){
					if($ns[$i]>2 && $slts[1]>0){
						$slts[1]--; $ns[$i]-=3;
						$tmns[$i] -= 1;
					}else if($ns[$i]>2 && $slts[1]==0 && $slts[2]>0){
						//必要量が3以上だが、3つ穴が無いので１つ穴を消費
						$slts[2]--; $slts[0]++; $ns[$i]-=3;
						$tmns[$i] -= 1;
					}else if($ns[$i]>2 && $slts[1]==0 && $slts[2]==0 && $slts[0]>0){
						//必要量が3以上だが、１,３つ穴が無いので２つ穴を消費
						$slts[0]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($ns[$i]<3 && $slts[0]>0){
						//必要量2以下なので、一つ穴を消費
						$slts[0]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($ns[$i]<3 && $slts[0]==0 && $slts[1]>0){
						//必要量が2以下で、一つ穴が無く２つ穴を消費
						$slts[1]--; $slts[0]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($ns[$i]<3 && $slts[0]==0 && $slts[1]==0 && $slts[2]>0){
						//必要量が3以下で、1,2穴が無く3つ穴を消費
						$slts[2]--; $slts[1]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[2]==0 && $slts[1]==0 && $slts[0]==0) return false;//この装備では不可能を示す
				}
			}
		}
		for($i=0; $i<count($it); $i++){
			if($ns[$i]>0 && $sa[$i]==self::TYOKA){
				for($j=0; $ns[$i]>0 && $j<14; $j++){
					if($ns[$i]>3 && $slts[2]>0){
						$slts[2]--; $ns[$i]-=4;
						$tmns[$i] -= 2;
					}else if($ns[$i]>3 && $slts[2]==0 && $slts[0]>0){
						//必要量が4以上だが、3つ穴が無いので１つ穴を消費
						$slts[0]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($ns[$i]>3 && $slts[2]==0 && $slts[0]==0 && $slts[1]>0){
						//必要量が4以上だが、１,３つ穴が無いので２つ穴を消費
						$slts[1]--; $ns[$i]-=2;
						$tmns[$i] -= 2;
					}else if($ns[$i]<4 && $slts[0]>0){
						//必要量が3以下なので、一つ穴を消費
						$slts[0]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($ns[$i]<4 && $slts[0]==0 && $slts[1]>0){
						//必要量が3以下で、一つ穴が無く２つ穴を消費
						$slts[1]--; $slts[0]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($ns[$i]<4 && $slts[0]==0 && $slts[1]==0 && $slts[2]>0){
						//必要量が3以下で、1,2穴が無く3つ穴を消費
						$slts[2]--; $slts[1]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[2]==0 && $slts[1]==0 && $slts[0]==0) return false;//この装備では不可能を示す
				}
			}
		}
		for($i=0; $i<count($it); $i++){
			if($ns[$i]>0 && $sa[$i]==self::MIKIRI){
				for(; $ns[$i]>0; ){
					if($ns[$i]>3 && $slts[2]>0){
						//必要量が4以上で3連がある
						$slts[2]--; $ns[$i]-=5;
						$tmns[$i] -= 1;
					}elseif($ns[$i]>3 && $slts[2]==0 && $slts[1]>0){
						//必要量が4以上だが、3連が無い
						$slts[1]--; $ns[$i]-=3;
						$tmns[$i] -= 1;
					}elseif($ns[$i]>3 && $slts[2]==0 && $slts[1]==0 && $slts[0]>0){
						//必要量が4以上だが、3連が無い,2連も無い
						$slts[0]--; $ns[$i]-=1;
						$tmns[$i] -= 1;
					}elseif($ns[$i]>1 && $slts[1]>0){
						//必要量が2以上
						$slts[1]--; $ns[$i]-=3;
						$tmns[$i] -= 1;
					}elseif($ns[$i]>1 && $slts[2]>0 && $slts[1]==0){
						//必要量が2以上だが,2連が無い
						$slts[2]--; $slts[0]++; $ns[$i]-=3;
						$tmns[$i] -= 1;
					}elseif($ns[$i]>0 && $slts[0]>0){
						//一つ穴がある時
						$slts[0]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[0]==0 && $slts[1]>0){
						//一つ穴が無く、２つ穴がある時
						$slts[1]--; $slts[0]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[0]==0 && $slts[1]==0 && $slts[2]>0){
						//1，2穴が無く3つ穴がある時
						$slts[2]--; $slts[1]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[2]==0 && $slts[1]==0 && $slts[0]==0) return false;//この装備では不可能を示す
				}
			}
		}
		for($i=0; $i<count($it); $i++){//2つ穴と3つ穴があった時、優先順位がスキルによって変わってくることがあるから残り物につける必要あり
			if($ns[$i]>0 && $sa[$i]==self::KYORI){//回避距離1-1
				for(; $ns[$i]>0; ){
					if($ns[$i]>0 && $slts[0]>0){
						//一つ穴がある時
						$slts[0]--; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[0]==0 && $slts[1]>0){
						//一つ穴が無く、２つ穴がある時
						$slts[1]--; $slts[0]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[0]==0 && $slts[1]==0 && $slts[2]>0){
						//1，2穴が無く3つ穴がある時
						$slts[2]--; $slts[1]++; $ns[$i]--;
						$tmns[$i] -= 1;
					}else if($slts[2]==0 && $slts[1]==0 && $slts[0]==0) return false;//この装備では不可能を示す
				}
			}
			if($ns[$i]>0 && $sa[$i]==self::TAISIN){//耐震など2-1の場合
				for(; $ns[$i]>0; ){
					if($slts[0]>0){$slts[0]--; $ns[$i]-=2; $tmns[$i]-=1;}//一つ穴がある時
					else if($slts[0]==0 && $slts[1]>0){$slts[1]--; $slts[0]++; $ns[$i]-=2; $tmns[$i]-=1;}//一つ穴が無く、２つ穴がある時
					else if($slts[0]==0 && $slts[1]==0 && $slts[2]>0){$slts[2]--; $slts[1]++; $ns[$i]-=2; $tmns[$i]-=1;}//1，2穴が無く3つ穴がある時
					else if($slts[2]==0 && $slts[1]==0 && $slts[0]==0) return false;//この装備では不可能を示す
				}
			}
		}
		
		$rtn['it']   = $it;
		$rtn['ns']   = $ns;
		$rtn['sa']   = $sa;
		$rtn['tmns'] = $tmns;
		$rtn['slts'] = $slts;
		return $rtn;
	}
	
	private function disp_nm($nma, $nmd, $nmu, $nmk, $nms)
	{
		$str = "<br><table><thead><tr><th colspan=\"5\">装備候補</th></tr></thead>";
		$str .= "<tbody><tr><th>頭</th><th>胴</th><th>腕</th><th>腰</th><th>脚</th></tr>";
		for ($i=0; $i < self::KOUHO; $i++) {
			$str .= "<tr><td>".$nma[$i][name]."</td><td>".$nmd[$i][name]."</td><td>"
					.$nmu[$i][name]."</td><td>".$nmk[$i][name]."</td><td>".$nms[$i][name]."</td></tr>";
		}
		$str .= "</tbody></table>";
		return $str;
	}
}