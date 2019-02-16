<?php //ここにデータベース接続の半分を記述する。スキルスロット。
class model
{
	private static $ins = null;
	private $pdo;
	/*private $arysA; //頭
	private $arysD; //胴
	private $arysK; //腰
	private $arysS; //脚
	private $arysU; //腕
	*/
	private function __construct()
	{
		//$db = DBconnec::getIns();
		//$this->pdo = $db->dbc();
		
		$this->pdo = new PDO("mysql:host=localhost; dbname=MH4G", "root", "");
		//$this->pdo = new PDO("mysql:host=mysql1.webcrow-php.netowl.jp; dbname=revertra_mh", "revertra_usr", "usrusr");
	}
	
	public static function getIns()
	{
		if (is_null(self::$ins)) {
			self::$ins = new self;
		}
		
		return self::$ins;
	}
	
	public function getA($sex, $sob, $hlm)
	{
		$sqls = "SELECT id, skl1, sklVal1, skl2, sklVal2, skl3, sklVal3, skl4, sklVal4, skl5, sklVal5, slot FROM mh4gsa"; //sobiA		
		$sqls .= $this->getSentense($sex, $sob);
		if ($hlm == "swd") { //gunnner装備なし
			$sqls .= ' AND gun = 0';
		} elseif ($hlm == "gun") $sqls .= ' AND gun = 1';
		$stmt = $this->pdo->prepare($sqls);
		$stmt->execute();
		$arys = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $arys;
	}
	
	//G級, 下位，上位の３種しかない
	public function getBui($sex, $sob, $sog, $bui)
	{
		$sqls = "SELECT id, skl1, sklVal1, skl2, sklVal2, skl3, sklVal3, skl4, sklVal4, skl5, sklVal5, slot FROM mh4gs".$bui;
		$sqls .= $this->getSentense($sex, $sob);
		if ($sog == false) {
			$sqls .= ' AND gun = 0';
		} else {
			$sqls .= ' AND gun = 1';
		}	  
		$stmt = $this->pdo->prepare($sqls);
		$stmt->execute();
		$arys = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $arys;
	}

	private function getSentense($sex, $sob)
	{
		if (count($sob) == 1) { //下位、上位、G級の３種 + 発掘
			$sqls = ' WHERE ';
			for ($i=0; $i < count($sob); $i++) {
				if ($sob[$i] == 1) { //下位
					$sqls .= 'rank = 1';
				} elseif ($sob[$i] == 2) {//上位
					$sqls .= 'rank = 2';
				} elseif ($sob[$i] == 3) {//G級
					$sqls .= 'rank = 3';
				} else {
					$sqls .= 'rank = 4'; //発掘
				}
			}
			if ($sex == 1) {
				$sqls .= ' AND (sex = 0 OR sex = 1)';
			} else {
				$sqls .= ' AND (sex = 0 OR sex = 2)';
			}
		} elseif (count($sob) == 2 || count($sob) == 3) {
			$sqls = ' WHERE (';
			for ($i=0; $i < count($sob); $i++) {
				if ($sob[$i] == 1) { //下位
					$sqls .= 'rank = 1';
				} elseif ($sob[$i] == 2) {//上位
					$sqls .= 'rank = 2';
				} elseif ($sob[$i] == 3) {
					$sqls .= 'rank = 3';
				} else {
					$sqls .= 'rank = 4';
				}
				$sqls .= ' OR ';
			}
			$sqls = rtrim($sqls, ' OR ');
			$sqls .= ') ';
			if ($sex == 1) {
				$sqls .= 'AND (sex = 0 OR sex = 1)';
			} else {
				$sqls .= 'AND (sex = 0 OR sex = 2)';
			}
			//完成は、SELECT * FROM sobid WHERE (rank = 2 OR rank = 3) AND (sex = 0 OR sex = 1)
			
		} else { //count($sob) = 3
			if ($sex == 1) { //man
				$sqls = ' WHERE (sex = 0 OR sex = 1)';
			} else {
				$sqls = ' WHERE (sex = 0 OR sex = 2)';
			}
		}
		return $sqls;
	}
	
	public function getnm($nms, $nm)
	{
		if(count($nms) > 0) {
			$sqls = "SELECT * FROM mh4gn".$nm." WHERE";
			foreach ($nms as $nm) {
				$sqls .= " `id` = ".$nm." OR";
			}
			$sqls = rtrim($sqls, " OR");
			$stmt = $this->pdo->prepare($sqls);
			$stmt->execute();
			$arys = $stmt->fetchAll(PDO::FETCH_ASSOC);
			return $arys;
		}
		return 0;
	}
	
	//メールできないからDBに入れる
	public function mailer($ttl, $msg)
	{
		$sqls = "INSERT INTO msg(ttl, msg, date) VALUES (\"".$ttl."\",\"".$msg."\", now())";
		$stmt = $this->pdo->prepare($sqls);
		$stmt->execute();
		$rtn = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if (!$rtn) return "送信しました。";
	}
}