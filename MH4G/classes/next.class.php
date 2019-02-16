<?php //複数回検索のためのクラス。最初に失敗したらfirstnを使って何回も検索させる
class next {
	
	private $ar = array();
	
	public function __construct() {
		//postの内容をここで得る
	}
	
	public function caller(){
		$ob = new firstg();
		$this->ar = $ob->input();
		//ns,it,saをここでコントロール
		$nis = $ob->ini();
		if ($nis == 0) return "欲しいスキルを入力してください。";
		$bsts[0] = $ob->ctl($nis["ns"], $nis["it"], $nis["sa"]);
		if (false != $bsts[0]) return $bsts;
		
		//ここで一個外しのプログラムを記述
		for ($i=0; $i < count($nis["it"]); $i++) {
			$mnis = array();
			for ($j=0, $k=0; $j < count($nis["it"]); $j++) {
				if ($i == $j) continue;
				$mnis["ns"][$k] = $nis["ns"][$j];
				$mnis["it"][$k] = $nis["it"][$j]; 
				$mnis["sa"][$k] = $nis["sa"][$j];
				$k++;
			}
			$hash = $ob->ctl($mnis["ns"], $mnis["it"], $mnis["sa"]);
			if ($hash === false) $hash['0'] = false;
			$hash["its"] = $this->sknm($mnis["it"]);
			$bsts[$i+1] = $hash;
		}
		return $bsts;
	}
	
	public function basic(){
		return $this->ar;
	}
	
	public function sknm($it){
		$ar = arySkill::skillSystem();
		$skls = '';
		for ($i=0; $i < count($it); $i++) {
			$skls .= $ar[$it[$i]].', ';
		}
		$skls = rtrim($skls, ", ");
		return $skls;
	}
}
