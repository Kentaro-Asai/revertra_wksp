<?php
function __autoload($name)
{
	//require_once($_SERVER["DOCUMENT_ROOT"]."/wksp/tools/pd_db/".$name.".class.php");
	require_once($_SERVER["DOCUMENT_ROOT"]."/revertra/revertra_wksp/PUADRA_DB/server/".$name.".class.php");
}
$rtn = array(
	"msg" => "",
	"mns" => array()
);
if (isset($_REQUEST)) {
	$obm = new searchMns();
	$rtn["mns"] = $obm->getMns(array($_REQUEST["target_number"]));
	$rtn["msg"] = $obm->getMsg();
}

header('Content-type: application/json');
echo json_encode($rtn["mns"][0]);