<?php
class mnsDb {
	private $pdo;
	//private $link;

	public function __construct()	{
		//$db = DBconnec::getIns();
		//$this->pdo = $db->dbc();

		$this->pdo = new PDO("mysql:host=localhost; dbname=padmns", "root", "root");
		//$this->link = mysql_connect("localhost", "root", "root");
		//$this->pdo = new PDO("mysql:host=mysql1.webcrow-php.netowl.jp; dbname=revertra_mh", "revertra_usr", "usrusr");
	}

	// NOで検索
	public function getNumberMns($number_ary) {
		$rtn = array();
		if (0 < count($number_ary)) {
			$no_ary = $number_ary;
			$sql = "SELECT * FROM evolve WHERE `BEFORE_NO` IN (".implode(",", $number_ary).") ";
			$stmt = $this->pdo->prepare($sql);
			$stmt->execute();
			$evolve_ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
			if (0 < count($evolve_ary)) { 
				$evolve_after_ary = array();
				foreach ($evolve_ary as $ev) {
					$evolve_after_ary[] = $ev["AFTER_NO"];
				}
				$stmt = $this->pdo->prepare("SELECT * FROM evolve WHERE `BEFORE_NO` IN (".implode(",", $evolve_after_ary).") ");
				$stmt->execute();
				$evolve_after_after_ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
				if (0 < count($evolve_after_after_ary)) {
					foreach ($evolve_after_after_ary as $evaa) {
						$evolve_ary[] = $evaa;
					}
				}
			}
			foreach ($evolve_ary as $ev) {
				$no_ary[] = $ev["AFTER_NO"];
			}
			$sql = "SELECT * FROM mns WHERE `NO` IN (".implode(",", $no_ary).") ";
			$stmt = $this->pdo->prepare($sql);
			$stmt->execute();
			$mns_ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$type_ary = $this->getType($no_ary);
			$awaken_ary = $this->getAwaken($no_ary);
			$super_awaken_ary = $this->getSuperAwaken($no_ary);
			foreach ($number_ary as $number) {
				foreach ($mns_ary as $mns) {
					if ($number == $mns["NO"]) {
						$rtn[] = $this->mnsDecoration($mns, $type_ary, $awaken_ary, $super_awaken_ary);
						break;
					}
				}
			}
			//進化後
			if (0 < count($evolve_ary)) {
				for ($i=0; $i < count($rtn); $i++) {
					foreach ($evolve_ary as $ev) {
						if ($rtn[$i]["NO"] == $ev["BEFORE_NO"]) {
							if (!array_key_exists("EVOLVE", $rtn[$i])) $rtn[$i]["EVOLVE"] = array();
							foreach ($mns_ary as $mns) {
								if ($ev["AFTER_NO"] == $mns["NO"]) {
									$mns["EVOLVE_NAME"] = $ev["EVOLVE_NAME"];
									//進化後モンスターのさらに進化したものを入れる
									foreach ($evolve_ary as $evlv) {
										if ($evlv["BEFORE_NO"] == $mns["NO"]) {
											if (!array_key_exists("EVOLVE", $mns)) $mns["EVOLVE"] = array();
											foreach ($mns_ary as $m) {
												if ($evlv["AFTER_NO"] == $m["NO"]) {
													$m["EVOLVE_NAME"] = $evlv["EVOLVE_NAME"];
													$mns["EVOLVE"][] = $this->mnsDecoration($m, $type_ary, $awaken_ary, $super_awaken_ary);
												}
											}
										}
									}
									$rtn[$i]["EVOLVE"][] = $this->mnsDecoration($mns, $type_ary, $awaken_ary, $super_awaken_ary);
									break;
								}
							}
						}
					}
				}
			}
		}
		return $rtn;
	}

	/**
	 * 未使用
	 */
	public function mnsDecoration($mns, $type_ary, $awaken_ary, $super_awaken_ary){
		$mns["TYPE"] = array();
		foreach ($type_ary as $type) {
			if ($type["NO"] != $mns["NO"]) continue;
			$mns["TYPE"][] = $type["TYPE"];
		}
		$mns["AWAKEN"] = array();
		foreach ($awaken_ary as $awaken) {
			if ($awaken["NO"] != $mns["NO"]) continue;
			$mns["AWAKEN"][] = $awaken["AWAKEN"];
		}
		$mns["SUPER_AWAKEN"] = array();
		foreach ($super_awaken_ary as $super_awaken) {
			if ($super_awaken["NO"] != $mns["NO"]) continue;
			if (!array_key_exists("SUPER_AWAKEN", $mns)) $mns["SUPER_AWAKEN"] = array();
			$mns["SUPER_AWAKEN"][] = $super_awaken["AWAKEN"];
		}
		return $mns;
	}

	public function getType($number_ary) {
		$sql = "SELECT `NO`, `TYPE` FROM mns_type WHERE `NO` IN (" .implode(",", $number_ary). ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $ary;
	}

	public function getAwaken($number_ary) {
		$sql = "SELECT `NO`, `AWAKEN` FROM mns_awaken WHERE `NO` IN (" .implode(",", $number_ary). ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $ary;
	}

	public function getSuperAwaken($number_ary) {
		$sql = "SELECT `NO`, `AWAKEN` FROM mns_super_awaken WHERE `NO` IN (" .implode(",", $number_ary). ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $ary;
	}

}