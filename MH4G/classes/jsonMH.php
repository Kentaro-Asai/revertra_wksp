<?php //ここにデータベース接続の半分を記述する。スキルスロット。
function __autoload($name)
{
	//require_once("http://localhost/mh3gjs/HTML5Application/public_html/".$name.".class.php");
	//require_once($_SERVER["DOCUMENT_ROOT"]."/mh4g/classes/".$name.".class.php");
	require_once($_SERVER["DOCUMENT_ROOT"]."/PhpProject1/MH4G/classes/".$name.".class.php");
	//require_once('D:\XAMPP1\xampp\htdocs\mh3gjs\HTML5Application\public_html\\'.$name.'.class.php');
	//require_once('http://localhost/mh3gjs/HTML5Application/public_html/'.$name.'.class.php');
}
$js = array();
$ob = new next();
$js = $ob->caller();
//$js = $ob->basic();
header("Content-type: data.json; charset=UTF-8");
echo json_encode($js);
