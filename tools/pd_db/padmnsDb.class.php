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
}