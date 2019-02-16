<?php
function __autoload($name)
{
	require_once($_SERVER["DOCUMENT_ROOT"]."/wksp/PUADRA_G/".$name.".class.php");
}
$rtn = array();
if (isset($_REQUEST)){
	$ar = $_REQUEST;
	$obm = new mnsdata();
	$mns = $obm->lstMns($ar['series']);
	//$mns = mnsdata::lstMns($ar['series']);
	$obg = new gatya();
	$rtn = $obg->ctr($ar, $mns);
}

header('Content-type: application/json');
echo json_encode($rtn);