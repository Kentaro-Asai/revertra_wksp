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

	// 覚醒スキル以外の条件で検索
	public function getConditionNumber($search_param) {
		$rtn = array();
		$sql = "SELECT m.NO FROM mns as m ";
		$left_join = "";
		$where = array();
		if ("" != $search_param["main_attribute"]) {
			$where[] = "m.MAIN_ATTRIBUTE = \"".$search_param["main_attribute"]."\"";
		}
		if ("" != $search_param["sub_attribute"]) {
			$where[] = "m.SUB_ATTRIBUTE = \"".$search_param["sub_attribute"]."\"";
		}
		if ("" != $search_param["skill"]) {
			$where[] = "m.SKILL LIKE \"%".$search_param["skill"]."%\"";
		}
		if ('以下' == $search_param["skill_turn_option"]) {
			$where[] = "m.SKILL_MAX_TURN <= " . $search_param["skill_max_turn"] . " AND m.SKILL_MAX_TURN <> 0";
		} elseif ('以上' == $search_param["skill_turn_option"]) {
			$where[] = "m.SKILL_MAX_TURN >= " . $search_param["skill_max_turn"];
		} elseif ('丁度' == $search_param["skill_turn_option"]) {
			$where[] = "m.SKILL_MAX_TURN = " . $search_param["skill_max_turn"];
		}
		if ("" != $search_param["leader_skill"]) {
			$where[] = "m.LEADER_SKILL LIKE \"%".$search_param["leader_skill"]."%\"";
		}
		if (array_key_exists("type", $search_param) && 0 < count($search_param["type"])) {
			$left_join = "LEFT JOIN mns_type AS t ON t.`NO` = m.`NO`";
			$type = "";
			if ("AND検索" == $search_param["type_search"] && 1 < count($search_param["type"])) {
				foreach ($search_param["type"] as $v) {
					$type .= "" == $type ? "" : " AND ";
					$type .= " t.`NO` IN (SELECT `NO` from mns_type WHERE `TYPE` = \"".$v."\")";
				}
				$type .= " GROUP BY m.`NO`";
			} else {
				foreach ($search_param["type"] as $v) {
					$type .= "" == $type ? (" (t.TYPE = \"".$v."\"") : (" OR t.TYPE = \"".$v."\"");
				}
				$type .= ") GROUP BY m.`NO`";
			}
			$where[] = $type;
		}
		if (0 < count($where)) { //検索条件があるならSQL発行
			$sql .= $left_join . " WHERE " . implode(" AND ", $where);
			$stmt = $this->pdo->prepare($sql);
			$stmt->execute();
			$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
			foreach ($ary as $v) {
				$rtn[] = $v["NO"];
			}
		}
		return $rtn;
	}

	//全ての覚醒を持っていないと返さない
	public function getAwakenNumber($awaken_ary, $number_ary, $super_awaken_flg) {
		$rtn = array();
		$sql = "SELECT `NO`, AWAKEN FROM mns_awaken WHERE ";
		$sql .= 0 < count($number_ary) ? ("`NO` IN (".implode(",", $number_ary).") AND ") : "";
		$awaken_name_ary = array();
		for ($i=0; $i < count($awaken_ary); $i++) {
			switch ($awaken_ary[$i]["name"]) {
				case '操作時間延長': case 'スキルブースト': case 'バインド耐性':
				$awaken_name_ary[] = $awaken_ary[$i]["name"];
				$awaken_name_ary[] = $awaken_ary[$i]["name"] . '+';
				break;
				case '操作時間延長+': case 'スキルブースト+': case 'バインド耐性+':
				$awaken_name_ary[] = $awaken_ary[$i]["name"];
				$awaken_name_ary[] = mb_substr($awaken_ary[$i]["name"], 0, mb_strlen($awaken_ary[$i]["name"]) - 1);
				$awaken_ary[$i]["name"] = mb_substr($awaken_ary[$i]["name"], 0, mb_strlen($awaken_ary[$i]["name"]) - 1); //+無しに上書き
				$awaken_ary[$i]["count"] *= 2;
				break;
				default:
				$awaken_name_ary[] = $awaken_ary[$i]["name"];
				break;
			}
		}
		$sql .= "AWAKEN IN (\"".implode("\",\"", $awaken_name_ary)."\") ORDER BY `NO`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		$survey = array();
		$super_awaken_ary = array();
		$sum_cnt_sort_ary = array();
		foreach ($ary as $v) {
			foreach ($awaken_ary as $awaken) {
				if ($v["AWAKEN"] == $awaken["name"] || $v["AWAKEN"] == $awaken["name"].'+') {
					if (array_key_exists($v["NO"], $survey)) {
						for ($i=0; $i < count($survey[$v["NO"]]); $i++) { //foreach($ary as &$v)はバグるから使えない
							if ($survey[$v["NO"]][$i]["name"] == $awaken["name"]) {
								switch ($v["AWAKEN"]) {
									case '操作時間延長+': case 'スキルブースト+': case 'バインド耐性+':
									$survey[$v["NO"]][$i]["count"] += 2;
									break;
									default:
									$survey[$v["NO"]][$i]["count"]++;
									break;
								}
							}
						}
					} else {
						$survey[$v["NO"]] = $awaken_ary;
						for ($i=0; $i < count($survey[$v["NO"]]); $i++) {
							if ($survey[$v["NO"]][$i]["name"] == $awaken["name"]) {
								switch ($v["AWAKEN"]) {
									case '操作時間延長+': case 'スキルブースト+': case 'バインド耐性+':
									$survey[$v["NO"]][$i]["count"] = 2;
									break;
									default:
									$survey[$v["NO"]][$i]["count"] = 1;
									break;
								}
							} else {
								$survey[$v["NO"]][$i]["count"] = 0;
							}
						}
					}
				}
			}
		}
		//覚醒スキルのチェック (得点が多い物が先頭になるようにしたい)
		foreach ($survey as $number => $s) {
			$sum_cnt = 0;
			$complete_flg = true;
			foreach ($awaken_ary as $awaken) {
				for ($i=0; $i < count($s); $i++) {
					if (!array_key_exists("name", $s[$i])) {
						//php のバグっぽい
						continue;
					}
					if ($s[$i]["name"] == $awaken["name"]) {
						$sum_cnt += $s[$i]["count"];
						if ($s[$i]["count"] < $awaken["count"]) $complete_flg = false;
					}
				}
			}
			//超覚醒のチェック
			if (!$complete_flg && $super_awaken_flg) {
				$checked_ary = $this->checkSuperAwaken($awaken_ary, $number_ary, $super_awaken_ary, $number, $s);
				$complete_flg = $checked_ary["complete_flg"];
				$sum_cnt += $checked_ary["add_cnt"];
			}
			//覚醒の条件を満たしていれば登録
			//if ($complete_flg) $rtn[] = $number;
			if ($complete_flg) {
				$rtn[] = $number;
				$sum_cnt_sort_ary[] = $sum_cnt;
			}
		}
		array_multisort($sum_cnt_sort_ary, SORT_DESC, $rtn);
		return $rtn;
	}

	//全ての覚醒を必要個数持っていないと返さない
	public function checkSuperAwaken($awaken_ary, $number_ary, &$super_awaken_ary, $target_number, $survey) {
		if (0 == count($super_awaken_ary)) {
			$sql = "SELECT `NO`, AWAKEN FROM mns_super_awaken WHERE ";
			$sql .= 0 < count($number_ary) ? ("`NO` IN (".implode(",", $number_ary).") AND ") : "";
			$awaken_name_ary = array();
			for ($i=0; $i < count($awaken_ary); $i++) {
				switch ($awaken_ary[$i]["name"]) {
					case '操作時間延長': case 'スキルブースト': case 'バインド耐性':
					$awaken_name_ary[] = $awaken_ary[$i]["name"];
					$awaken_name_ary[] = $awaken_ary[$i]["name"] . '+';
					break;
					case '操作時間延長+': case 'スキルブースト+': case 'バインド耐性+':
					$awaken_name_ary[] = $awaken_ary[$i]["name"];
					$awaken_name_ary[] = mb_substr($awaken_ary[$i]["name"], 0, mb_strlen($awaken_ary[$i]["name"]) - 1);
					break;
					default:
					$awaken_name_ary[] = $awaken_ary[$i]["name"];
					break;
				}
			}
			$sql .= "AWAKEN IN (\"".implode("\",\"", $awaken_name_ary)."\") ORDER BY `NO`";
			$stmt = $this->pdo->prepare($sql);
			$stmt->execute();
			$super_awaken_ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
		// 足りていない部分を追加 (超覚醒はどれか一つしか発動しない)
		$add_cnt = 0;
		for ($i=0; $i < count($survey); $i++) {
			if (!array_key_exists("name", $survey[$i])) {
				//phpのバグっぽい
				return array("complete_flg" => false, "add_cnt" => 0);
			}
			foreach ($super_awaken_ary as $v) {
				if ($v["NO"] == $target_number) {
					foreach ($awaken_ary as $awaken) {
						if ($survey[$i]["name"] == $awaken["name"] && ($survey[$i]["name"] == $v["AWAKEN"] || $survey[$i]["name"].'+' == $v["AWAKEN"])) {
							if ($survey[$i]["count"] < $awaken["count"]) {
								switch ($v["AWAKEN"]) {
									case '操作時間延長+': case 'スキルブースト+': case 'バインド耐性+':
									$survey[$i]["count"] += 2;
									$add_cnt = 2;
									break;
									default:
									$survey[$i]["count"]++;
									$add_cnt = 1;
									break;
								}
								break 3;
							}
						}
					}
				} elseif ($target_number < $v["NO"]) {
					//超覚醒、無くなった
					break;
				}
			}
		}
		// 要件を満たしていたらtrueを返す
		$complete_flg = true;
		foreach ($awaken_ary as $awaken) {
			foreach ($survey as $s) {
				if (!array_key_exists("name", $s)) {
					//phpのバグっぽい
					return array("complete_flg" => false, "add_cnt" => 0);
				}
				if ($s["name"] == $awaken["name"]) {
					if ($s["count"] < $awaken["count"]) {
						$complete_flg = false;
						break 2;
					}
				}
			}
		}
		return array("complete_flg" => $complete_flg, "add_cnt" => $add_cnt);
	}

	public function getMns($number_ary) {
		$sql = "SELECT * FROM mns WHERE `NO` IN (" .implode(",", $number_ary). ") ORDER BY `NO` DESC ";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		//array_multisort($number_ary, SORT_DESC, $ary);
		$rtn = array();
		for ($i=0; $i < count($number_ary) && $i < 100; $i++) {
			foreach ($ary as $v) {
				if ($number_ary[$i] == $v["NO"]) {
					$rtn[] = $v;
					break;
				}
			}
		}
		return $ary;
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

	public function getEvolve($number_ary) {
		$sql = "SELECT * FROM evolve WHERE `NO` IN (" .implode(",", $number_ary). ")";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$ary = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $ary;
	}

	public function getSearchMns($condition) {
		$sub_query = "SELECT `NO` FROM mns_type ";
		$where = array();
		foreach ($condition as $k => $v) {
			if ("not type" == $k) {
				$where[] = "`TYPE` = \"" . implode("\" OR `TYPE` = \"", $v) . "\"";
			}
		}
		if (0 < count($where)) {
			$sub_query .= "WHERE (". implode(" AND ", $where) . ")";// GROUP BY `NO`";
		}
		$sql = "SELECT `NO`, `NAME`, MAIN_ATTRIBUTE, SUB_ATTRIBUTE, `RARE`, `COST`, ASSIST, HP, ATK, RECOVER,"
			." `SUPER_HP`, SUPER_ATK, SUPER_RECOVER"
			." FROM mns WHERE `NO` NOT IN (" . $sub_query . ") ORDER BY `NO` DESC";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		$rtn = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $rtn;
	}
}