<?php
function __autoload($name)
{
	//require_once($_SERVER["DOCUMENT_ROOT"]."/wksp/tools/pd_db/".$name.".class.php");
	require_once($_SERVER["DOCUMENT_ROOT"]."/revertra/revertra_wksp/tools/pd_db/".$name.".class.php");
}
$rtn = array(
	"msg" => "",
	"mns" => array()
);
if (isset($_REQUEST)) {
	$db_obj = new padmnsDb();
	$obm = new searchMns();
  $ar = $_REQUEST;
	if (array_key_exists("sql", $ar)) {
		$mns = $db_obj->getData($ar['sql']);
	} else {
		$sql = $db_obj->getPointSql($ar);
		$mns = $db_obj->getData($sql);
	}
	$number_ary = $obm->getNo($mns);
	$ary = $db_obj->getTypeAndAwaken($number_ary);
	$rtn["mns"] = $obm->getMns($mns, $ary);
	$rtn["msg"] = $obm->getMsg();
}

header('Content-type: application/json');
echo json_encode($rtn);