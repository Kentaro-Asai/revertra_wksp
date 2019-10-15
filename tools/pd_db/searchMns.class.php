<?php
class searchMns {
	private $msg = "";

	public function getMsg(){
		return $this->msg;
	}

	public function getNo($mns){
		$rtn = array();
		foreach ($mns as $v) {
			$rtn[] = $v["NO"];
		}
		return $rtn;
	}

	public function getMns($mns, $ary){
		if (0 < count($mns)) {
			foreach ($mns as &$v) {
				foreach ($ary["type"] as $parts) {
					if ($v["NO"] == $parts["NO"]) {
						$v["TYPE"][] = $parts["TYPE"];
					}
				}
				foreach ($ary["awaken"] as $parts) {
					if ($v["NO"] == $parts["NO"]) {
						$v["AWAKEN"][] = $parts["AWAKEN"];
					}
				}
				foreach ($ary["super_awaken"] as $parts) {
					if ($v["NO"] == $parts["NO"]) {
						$v["SUPER_AWAKEN"][] = $parts["AWAKEN"];
					}
				}
			}
			$this->msg = "検索結果: " . count($mns) . "件";
		} else {
			$this->msg = "検索しましたが、０件でした。";
		}
		return $mns;
	}
}