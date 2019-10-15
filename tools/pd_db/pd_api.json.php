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
  $ar = $_REQUEST;
	if (!!$ar['sql']) {
		$db_obj = new padmnsDb();
		$mns = $db_obj->getData($ar['sql']);
		$obm = new searchMns();
		$number_ary = $obm->getNo($mns);
		$ary = $db_obj->getTypeAndAwaken($number_ary);
		$rtn["mns"] = $obm->getMns($mns, $ary);
		$rtn["msg"] = $obm->getMsg();
	} else {
		// sqlを作って、getMns関数をする
		$rtn["sql"] = $_REQUEST;
	}
	//$mns = mnsdata::lstMns($ar['series']);
}

header('Content-type: application/json');
echo json_encode($rtn);