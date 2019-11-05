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
	 * get monster data
	 */
	public function getMns($number_ary){
		$ob = new padmnsDb();
		$mns = $ob->getMns($number_ary);
		$typeAry = $ob->getType($number_ary);
		$awakenAry = $ob->getAwaken($number_ary);
		$superAwakenAry = $ob->getSuperAwaken($number_ary);
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
}