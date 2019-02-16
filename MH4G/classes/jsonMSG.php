<?php

if (isset($_POST["msg"])) {
	$msg = $_POST["msg"];
}
//addrに連絡します。
$addr = "coding_secret@yahoo.co.jp";

if (mb_send_mail($addr,"MH4G スキルシミュレータ",$msg, "From: http://revertra.webcrow.jp")) {
	$js = "送信しました。";
} else {
	$js = "送信に失敗しました。";
}

//Databaseに入れる
/*if (isset($_POST["msg"])) {
	$msg = $_POST["msg"];
}
$ttl = "MH4G スキルシミュレータ";
$m = model::getIns();
$js = $m->mailer($ttl,$msg);
*/
header("Content-type: data.json; charset=UTF-8");
echo json_encode($js);