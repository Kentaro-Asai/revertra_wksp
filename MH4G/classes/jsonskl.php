<?php //ここにデータベース接続の半分を記述する。スキルスロット。
//function __autoload($name)
//{
//	require_once("http://localhost/mh3gjs/HTML5Application/public_html/".$name.".class.php");
	require_once($_SERVER["DOCUMENT_ROOT"]."/mh4g/classes/arySkill.class.php");
//}
//require_once('D:\XAMPP1\xampp\htdocs\mh3gjs\HTML5Application\public_html\arySkill.class.php');
$js = array();
$js[0] = arySkill::expSkill();
$js[1] = arySkill::skillSystem();
header("Content-type: data.json; charset=UTF-8");
echo json_encode($js);
