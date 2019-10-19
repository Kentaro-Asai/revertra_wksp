<?php
class padmnsDb {
	private $pdo;
	//private $link;

	public function __construct()	{
		//$db = DBconnec::getIns();
		//$this->pdo = $db->dbc();
		
		$this->pdo = new PDO("mysql:host=localhost; dbname=padmns", "root", "root");
		//$this->link = mysql_connect("localhost", "root", "root");
		//$this->pdo = new PDO("mysql:host=mysql1.webcrow-php.netowl.jp; dbname=revertra_mh", "revertra_usr", "usrusr");
	}

	public function getData($sql) {
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$arys = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $arys;
	}

	public function getTypeAndAwaken($no_ary) {
		$rtn = array("type"=>array(), "awaken"=>array(), "super_awaken"=>array());
		$sql = "SELECT `NO`, `TYPE` FROM mns_type WHERE `NO` IN (" . implode(",", $no_ary) . ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$rtn["type"] = $stmt->fetchAll(PDO::FETCH_ASSOC);

		$sql = "SELECT `NO`, `AWAKEN` FROM mns_awaken WHERE `NO` IN (" . implode(",", $no_ary) . ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$rtn["awaken"] = $stmt->fetchAll(PDO::FETCH_ASSOC);

		$sql = "SELECT `NO`, `AWAKEN` FROM mns_super_awaken WHERE `NO` IN (" . implode(",", $no_ary) . ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$rtn["super_awaken"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $rtn;
	}

	public function getPointSql($ary){
		$sql = "";
		$onlyOne = 1 == count($ary["awaken"]);
		$restrict = $this->getRestrictsParts($ary);
		foreach ($ary["awaken"] as $v) {
			if ($onlyOne) {
				$sql = "SELECT COUNT(a.`NO`) AS CNT, m.* FROM mns_awaken AS a"
					." LEFT JOIN mns AS m ON m.`NO` = a.NO"
					. $restrict["left_join"]
					." WHERE a.AWAKEN = \"".$v."\"" . $restrict["restrict"]
					." GROUP BY a.`NO`"
					." ORDER BY CNT DESC";
			} else {
				//TODO: こっちは制限かけられていない
				$sql .= ("" == $sql) ? "SELECT SUM(a.CNT), m.* FROM ( " : " UNION ALL ";
				$sql .= " (SELECT `NO`, COUNT(`NO`) AS CNT FROM mns_awaken"
				." WHERE AWAKEN = \"".$v."\"" 
				." GROUP BY `NO`"
				." ORDER BY CNT DESC)";
			}
		}
		if (!$onlyOne) {
			$sql .= ") AS a LEFT JOIN mns AS m ON m.`NO` = a.NO"
				.$restrict["left_join"] 
				.(0 < (mb_strlen($restrict["restrict"])) ? (" WHERE ". mb_substr($restrict["restrict"], 4)) : "") // " AND"を切り出す
				." GROUP BY a.`NO` ORDER BY SUM(a.CNT) DESC";
		}
		$sql .= " LIMIT 100";
		return $sql;
	}

	private function getRestrictsParts($ary){
		$restricted = "";
		$left_join = "";
		$restricted .= "選択しない" != $ary["main_attribute"] ? (" AND MAIN_ATTRIBUTE = \"".$ary["main_attribute"]."\"") : "";
		$restricted .= "選択しない" != $ary["sub_attribute"] ? (" AND SUB_ATTRIBUTE = \"".$ary["sub_attribute"]."\"") : "";
		$restricted .= "" != $ary["skill"] ? (" AND `SKILL` LIKE = \"%".$ary["skill"]."\"%") : "";
		$restricted .= "" != $ary["leader_skill"] ? (" AND `LEADER_SKILL` LIKE \"%".$ary["leader_skill"]."\"%") : "";
		if ("選択しない" != $ary["type1"] || "選択しない" != $ary["type2"]) {
			$left_join = " LEFT JOIN mns_type AS t ON m.NO = t.NO";
		}
		if ("選択しない" == $ary["type1"]) {
			$restricted .= "選択しない" == $ary["type2"] ? "" : (" AND t.TYPE = \"".$ary["type2"]."\"");
		} elseif ("選択しない" == $ary["type2"]) {
			$restricted .= " AND t.TYPE = \"".$ary["type1"]."\"";
		} else {
			$restricted .= " AND (t.TYPE = \"".$ary["type1"]."\" OR t.TYPE = \"".$ary["type2"]."\")";
		}
		return array(
			"restrict" => $restricted,
			"left_join" => $left_join
		);
	}
}