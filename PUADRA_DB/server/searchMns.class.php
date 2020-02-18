<?php
class searchMns{
	public $msg = "";
	public $awaken_ary = array();
	/**
	 * get monster number with user filter
	 */
	public function getNo($search_param){
		$ob = new padmnsDb();
		//where句に入れられるものと、タイプを条件に入れる
		$number_ary = $ob->getConditionNumber($search_param);
		//覚醒スキルの種類数を数える
		if (array_key_exists("awaken", $search_param) && 0 < count($search_param["awaken"])) {
			$number_ary = $ob->getAwakenNumber($search_param["awaken"], $number_ary, $search_param["super_awaken_flg"]);
			foreach ($search_param["awaken"] as $v) {
				$this->awaken_ary[] = $v["name"];
			}
		}
		return $number_ary;
	}

	/**
	 * get monster for damage calculator
	 */
	public function getDamageCalcMns(){
		$number_ary = array();
		$ob = new padmnsDb();
		$mns = $ob->getSearchMns(array("not type" => array("強化合成用", "進化用", "覚醒用", "売却用")));
		foreach ($mns as $v) {
			$number_ary[] = $v["NO"];
		}
		$typeAry = $ob->getType($number_ary);
		$awakenAry = $ob->getAwaken($number_ary);
		$superAwakenAry = $ob->getSuperAwaken($number_ary);
		for ($i=0; $i < count($mns); $i++) {
			foreach ($typeAry as $v) {
				if ($mns[$i]["NO"] == $v["NO"]) $mns[$i]["TYPE"][] = $v["TYPE"];
			}
			foreach ($awakenAry as $v) {
				if ($mns[$i]["NO"] == $v["NO"]) $mns[$i]["AWAKEN"][] = $v["AWAKEN"];
			}
			foreach ($superAwakenAry as $v) {
				if ($mns[$i]["NO"] == $v["NO"]) $mns[$i]["SUPER_AWAKEN"][] = $v["AWAKEN"];
			}
			$mns[$i] = $this->getPlusConversionValue($mns[$i]);
		}
		return $mns;
	}

	/**
	 * get monster data
	 */
	public function getMns($number_ary){
		$ob = new padmnsDb();
		$mns = $ob->getMns($number_ary);
		$typeAry = $ob->getType($number_ary);
		$awakenAry = $ob->getAwaken($number_ary);
		$superAwakenAry = $ob->getSuperAwaken($number_ary);
		$evolveAry = $ob->getEvolve($number_ary);
		foreach ($mns as &$v) {
			$v["SUM_CNT"] = 0;
			$input_super_awaken_flg = false;
			foreach ($typeAry as $val) {
				if ($v["NO"] == $val["NO"]) $v["TYPE"][] = $val["TYPE"];
			}
			foreach ($awakenAry as $val) {
				if ($v["NO"] == $val["NO"]) {
					$v["AWAKEN"][] = $val["AWAKEN"];
					if (in_array($val["AWAKEN"], $this->awaken_ary)) $v["SUM_CNT"]++;
					elseif (in_array(mb_substr($val["AWAKEN"], 0, mb_strlen($val["AWAKEN"]) - 1), $this->awaken_ary)) $v["SUM_CNT"] += 2;
				}
			}
			foreach ($superAwakenAry as $val) {
				if ($v["NO"] == $val["NO"]) {
					$v["SUPER_AWAKEN"][] = $val["AWAKEN"];
					if (in_array($val["AWAKEN"], $this->awaken_ary) && !$input_super_awaken_flg) {
						$v["SUM_CNT"]++;
						$input_super_awaken_flg = true;
					} elseif (in_array(mb_substr($val["AWAKEN"], 0, mb_strlen($val["AWAKEN"]) - 1), $this->awaken_ary) && !$input_super_awaken_flg) {
						$v["SUM_CNT"] += 2;
						$input_super_awaken_flg = true;
					}
				}
			}
			foreach ($evolveAry as $val) {
				if ($v["NO"] == $val["BEFORE_NO"]) $v["EVOLVE"][] = $val;
			}
			$v = $this->getPlusConversionValue($v);
		}
		if (0 < count($mns)) {
			$this->msg = count($mns) . "件 取得しました。";
		} else {
			$this->msg = "検索しましたが、条件に合うモンスターは得られませんでした。";
		}
		return $mns;
	}

	/**
	 * get message
	 */
	public function getMsg(){
		return $this->msg;
	}

	
	/**
	 * プラス換算値、Lv110の上昇幅(HP)を取得
	*/
	public function getPlusConversionValue($mns){
		$plus_value = ["hp" => 10, "atk" => 5, "recover" => 3];
		$mns["PLUS_CONVERSION"] = round(
			10 * $mns["HP"] / $plus_value["hp"] + 10 * $mns["ATK"] / $plus_value["atk"] + 10 * $mns["RECOVER"] / $plus_value["recover"]
			) / 10;
		if (0 < $mns["SUPER_HP"]) {
			$mns["SUPER_PLUS_CONVERSION"] = round(
				10 * $mns["SUPER_HP"] / $plus_value["hp"] + 10 * $mns["SUPER_ATK"] / $plus_value["atk"] + 10 * $mns["SUPER_RECOVER"] / $plus_value["recover"]
				) / 10;
			$mns["SUPER_UP_RATE"] = round(100 * ($mns["SUPER_HP"] - $mns["HP"]) / $mns["HP"]);
		} else {
			$mns["SUPER_PLUS_CONVERSION"] = $mns["PLUS_CONVERSION"];
			$mns["SUPER_UP_RATE"] = 0;
		}
		return $mns;
	}
}