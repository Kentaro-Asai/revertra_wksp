/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
	var txt = '';
	var ary = $('.panel-success');
	console.log(ary);
	for(var i=0; i < ary.length; i++){
		var seriesTitle = $(ary[i]).children('div.panel-heading').children('a').html();
		//console.log(ary[i].children('table  tr')[1].children('img').attr('src'));
		var tbl = $(ary[i]).children('table').children('tbody').children('tr');
		console.log(tbl);
		txt += '"' + seriesTitle + '" => array(<br>';
		//trを回します
		for(var k=0; k < tbl.length; k++){
			console.log(typeof($(tbl[k]).children('td.left')));
			if (typeof($(tbl[k]).children('td.left')) !== undefined){
				txt += nmAndBui(tbl[k]);
			}else if (typeof($(tbl[k]).children('td.am_1')) !== undefined) {
				txt += '"hi"=>"' + $(tbl[k]).children('td.am_1').children('span').html() + '",';
			}else if (typeof($(tbl[k]).children('td.am_2')) !== undefined) {
				txt += '"mz"=>"' + $(tbl[k]).children('td.am_2').children('span').html() + '",';
			}else if (typeof($(tbl[k]).children('td.am_3')) !== undefined) {
				txt += '"ki"=>"' + $(tbl[k]).children('td.am_3').children('span').html() + '",';
			}else if (typeof($(tbl[k]).children('td.am_4')) !== undefined) {
				txt += '"hk"=>"' + $(tbl[k]).children('td.am_4').children('span').html() + '",';
			}else if (typeof($(tbl[k]).children('td.am_5')) !== undefined) {
				txt += '"ym"=>"' + $(tbl[k]).children('td.am_5').children('span').html() + '",';
			}
			//console.log(tbl[k]);
		}
		txt += '<br>),<br>';
		break;
	}
	
	$("output").html(txt);
	
	function nmAndBui(tblAry){
		var ret = '';
		if ($(tblAry).children('td.left').children('img').attr('src') !== undefined) {
			var href = $(tblAry).children('td.left').children('img').attr('src');
			ret += '"nm" => "' + $(tblAry).children('td.left').children('a').html() + '",';
			if (href.slice(-9, -7) === "b1") {
				ret += '"bui" => "頭",';
			}else if (href.slice(-9, 2) === "b2") {
				ret += '"bui" => "胴",';
			}else if (href.slice(-9, 2) === "b3") {
				ret += '"bui" => "腕",';
			}else if (href.slice(-9, 2) === "b4") {
				ret += '"bui" => "腰",';
			}else if (href.slice(-9, 2) === "b5") {
				ret += '"bui" => "脚",';
			}
			
		}else{
			//skill
			console.log($(tblAry).children('td.left').children('a').html());
			console.log($(tblAry).children('td.left').children('span').html());
		}
		return ret;
	}
});

/*
"series" => array(
	"nm" => "クシャナXアンク",
	"bui" => "頭",
	"def" => "170",
	"hi" => -1,
	"sk" => array(
		array("nm" => 対炎龍, "val" => 2), 
		array("nm" => 匠, "val" => 4), 
	),
)
 */