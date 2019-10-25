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
			switch($v["name"]) {
				case '操作時間延長': case 'スキルブースト': case 'バインド耐性':
				$count_option = 1;
				$v["default_name"] = $v["name"];
				break;
				case '操作時間延長+': case 'スキルブースト+': case 'バインド耐性+':
				$count_option = 2;
				$v["default_name"] = mb_substr($v["name"], 0, mb_strlen($v["name"]) - 1);
				break;
				default:
				$count_option = 0;
			}
			if (0 < $count_option) {
				// '操作時間延長' 'スキルブースト' 'バインド耐性'
				if ($onlyOne) {
					$sql = "SELECT SUM(CASE WHEN AWAKEN = \"".$v["default_name"]."\" THEN 1 ELSE 2 END) AS SUM_CNT, m.* FROM mns_awaken AS a"
						." LEFT JOIN mns AS m ON m.`NO` = a.NO"
						. $restrict["left_join"]
						." WHERE a.AWAKEN = \"".$v["default_name"]."\" OR AWAKEN = \"".$v["default_name"]."+\"" . $restrict["restrict"]
						." GROUP BY a.`NO`"
						." HAVING SUM_CNT >= ".($v["cnt"] * $count_option)
						." ORDER BY SUM_CNT DESC, m.NO DESC";
				} else {
					$sql .= ("" == $sql) ? "SELECT b.SUM_CNT, m.* FROM ( SELECT `NO`, SUM(a.CNT) AS SUM_CNT, COUNT(a.NO) FROM (" : " UNION ALL ";
					$sql .= " (SELECT `NO`, SUM(CASE WHEN AWAKEN = \"".$v["default_name"]."\" THEN 1 ELSE 2 END) AS CNT FROM mns_awaken"
					." WHERE AWAKEN = \"".$v["default_name"]."\" OR AWAKEN = \"".$v["default_name"]."+\"" 
					." GROUP BY `NO`"
					." HAVING CNT >= ".($v["cnt"] * $count_option).")";
				}
			} else { // 通常時
				if ($onlyOne) {
					$sql = "SELECT COUNT(a.`NO`) AS SUM_CNT, m.* FROM mns_awaken AS a"
						." LEFT JOIN mns AS m ON m.`NO` = a.NO"
						. $restrict["left_join"]
						." WHERE a.AWAKEN = \"".$v["name"]."\"" . $restrict["restrict"]
						." GROUP BY a.`NO`"
						." HAVING SUM_CNT >= ".$v["cnt"]
						." ORDER BY SUM_CNT DESC, m.NO DESC";
				} else {
					$sql .= ("" == $sql) ? "SELECT b.SUM_CNT, m.* FROM ( SELECT `NO`, SUM(a.CNT) AS SUM_CNT, COUNT(a.NO) FROM (" : " UNION ALL ";
					$sql .= " (SELECT `NO`, COUNT(`NO`) AS CNT FROM mns_awaken"
					." WHERE AWAKEN = \"".$v["name"]."\"" 
					." GROUP BY `NO`"
					." HAVING CNT >= ".$v["cnt"].")";
				}
			}
		}
		if (!$onlyOne) {
			$sql .= ") AS a GROUP BY a.NO HAVING COUNT(a.NO) >= ".count($ary["awaken"])
				.") AS b LEFT JOIN mns AS m ON m.NO = b.NO"
				.$restrict["left_join"] 
				.(0 < mb_strlen($restrict["restrict"]) ? (" WHERE ". mb_substr($restrict["restrict"], 4)) : "") // " AND"を切り出す
				." GROUP BY b.NO ORDER BY b.SUM_CNT DESC, b.NO DESC";
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