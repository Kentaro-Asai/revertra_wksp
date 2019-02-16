$(function(){
	var CNT = 3;
	//ここで護石スキルの中身、量1-2を作る
	//ここで発動スキルの中身、量1-6を作る
	$.getJSON("../classes/jsonskl.php", function($sks){
		//console.log($sks);
		var s = '';
		for (var i in $sks[1]) {
			s += '<option value='+i+'>'+$sks[1][i]+'</option>';
		}
		$('#amusk1').append(s);
		$('#amusk2').append(s);
		s = '';
		for (var i=13; i > -11; i--) {
			if (i != 5) s += '<option value='+i.toString()+'>'+i.toString()+'</option>';
			else s += '<option value='+i.toString()+' selected>'+i.toString()+'</option>';
		}
		$('#skval1').append(s);
		$('#skval2').append(s);
		s = '';
		for (var i in $sks[0]) {
			s += '<option value='+i+'>'+$sks[0][i]+'</option>';
		}
		$('#wntsk1').append(s);
		$('#wntsk2').append(s);
		$('#wntsk3').append(s);
		$('#wntsk4').append(s);
		$('#wntsk5').append(s);
		$('#wntsk6').append(s);
	});
	//内部の実装ができたので、結果を表示ボタン押したらデータ送信して、その結果を
	//受け取って、データを表示する設計をする
	$('input[type=submit]').on('click', function(){
		$('#res').html('');
		var sk =[];
		for (var i=1, j=0; i<=6; i++) {
			var s = '#wntsk' + i.toString();
			if (parseInt($(s).val()) != 0) {
				sk[j] = parseInt($(s).val());
				j++;
			}
		}
		$('#ms').css('display', 'block');
		if (sk.length == 0) {
			$('#ms').html('欲しいスキルを選んでください。');
		} else {
			$(this).attr('disabled', 'disabled');//button無効化
			var s = [];
			for (var i=1, j=0; i<=2; i++) {//G級ありなら2を3にする
				if (document.getElementById('s'+i.toString()).checked) {//chkされてなければundefined
					s[j] = $('#s'+i.toString()).val();
					j++;
				}
				//何にもチェック入れてないなら上位のみにする
				if (i == 2 && j == 0) {
					$('#s2').attr('checked', true);
					s[0] = 2;
				}
			}
			//console.log(s);
			//var tf = $('#swd option:selected').val();
			//if (document.getElementById('gun').checked) tf = 1;
			var dt = {'wntsk': sk, 'sob': s, 'sex': $('#rdo input:checked').val(),
				'gun': $('#gun option:selected').val(),
				'amusk1': $('#amusk1').val(), 'amusk2': $('#amusk2').val(),
				'skval1': $('#skval1').val(), 'skval2': $('#skval2').val(),
				'wepslot': $('#wepslot').val(), 'amuslot': $('#amuslot').val()};
			//console.log(dt);
			//if (dt['swd'] != '1') dt['swd'] = 0;
			//console.log(dt);
			
			//装備のデータを送る.結果の表示
			$.post('../classes/jsonMH.php', dt, function($js){
				//console.log($js);
				if ($js[0] != false) {
					$('#ms').html($js[0]["messe"]);
					var s = '';
					for (var i=0; i < $js[0]["cnt"] && i < CNT; i++) {
						s += rs($js[0][i]);
					}
					$('#res').html(s);
				} else {
					//1つ目が見つけられ無かったので、いっぱい返ってくる
					$('#ms').html('欲しいスキルを全て適えることはできませんでした。<br />1つ除いた組合わせ全てを試します。');
					var s = '';
					for (var i=1; i < $js.length; i++) {
						if ($js[i][0] == false) {
							s += '<p class="messe">'+$js[i]["its"];
							s += ' (このスキルの組合わせはできませんでした。)</p>';
							continue;
						}
						s += '<p class="messe">'+$js[i]["its"]+' ('+$js[i]["messe"]+')</p>';
						for (var j=0; j < $js[i]["cnt"] && j < CNT; j++) {
							s += rs($js[i][j]);
						}
					}
					$('#res').append(s);
					//console.log(s);
					s = '';
					//$('#res').html(s);-4
				}
				$('input[type=submit]').removeAttr('disabled');
			});
		}
	});
	
	//表示を作る
	function rs(sb){
		//var hs = '<div><table><caption>装備</caption>';
		var hs = '<div><table><caption>装備</caption><tr><th></th><th>装備名</th>';
		hs += '<th>火</th><th>水</th><th>雷</th><th>氷</th><th>龍</th></tr>';
		//hs += '<tr><td>頭</td><td>'+sb['a']+'</td></tr>';
		hs += '<tr><td>頭</td><td>'+sb.a.nm+'</td><td>'+sb.a.hi+'</td><td>'+sb.a.mz+'</td><td>'+sb.a.km+'</td><td>'+sb.a.ko+'</td><td>'+sb.a.ry+'</td></tr>';
		//hs += '<tr><td>胴</td><td>'+sb['d']+'</td></tr>';
		hs += '<tr><td>胴</td><td>'+sb.d.nm+'</td><td>'+sb.d.hi+'</td><td>'+sb.d.mz+'</td><td>'+sb.d.km+'</td><td>'+sb.d.ko+'</td><td>'+sb.d.ry+'</td></tr>';
		//hs += '<tr><td>腕</td><td>'+sb['u']+'</td></tr>';
		hs += '<tr><td>腕</td><td>'+sb.u.nm+'</td><td>'+sb.u.hi+'</td><td>'+sb.u.mz+'</td><td>'+sb.u.km+'</td><td>'+sb.u.ko+'</td><td>'+sb.u.ry+'</td></tr>';
		//hs += '<tr><td>腰</td><td>'+sb['k']+'</td></tr>';
		hs += '<tr><td>腰</td><td>'+sb.k.nm+'</td><td>'+sb.k.hi+'</td><td>'+sb.k.mz+'</td><td>'+sb.k.km+'</td><td>'+sb.k.ko+'</td><td>'+sb.k.ry+'</td></tr>';
		//hs += '<tr><td>脚</td><td>'+sb['s']+'</td></tr>';
		hs += '<tr><td>脚</td><td>'+sb.s.nm+'</td><td>'+sb.s.hi+'</td><td>'+sb.s.mz+'</td><td>'+sb.s.km+'</td><td>'+sb.s.ko+'</td><td>'+sb.s.ry+'</td></tr>';
		hs += '<tr><td>合計</td><td>-</td>';
		if (sb.a.hi === '-' || sb.d.hi ===  '-' || sb.u.hi ===  '-'  || sb.k.hi === '-' || sb.s.hi === '-') hs += '<td>-</td>';
		else hs += '<td>'+(parseInt(sb.a.hi)+parseInt(sb.d.hi)+parseInt(sb.u.hi)+parseInt(sb.k.hi)+parseInt(sb.s.hi)).toString()+'</td>';
		if (sb.a.mz === '-' || sb.d.mz ===  '-' || sb.u.mz ===  '-'  || sb.k.mz === '-' || sb.s.mz === '-') hs += '<td>-</td>';
		else hs += '<td>'+(parseInt(sb.a.mz)+parseInt(sb.d.mz)+parseInt(sb.u.mz)+parseInt(sb.k.mz)+parseInt(sb.s.mz)).toString()+'</td>';
		if (sb.a.km === '-' || sb.d.km ===  '-' || sb.u.km ===  '-'  || sb.k.km === '-' || sb.s.km === '-') hs += '<td>-</td>';
		else hs += '<td>'+(parseInt(sb.a.km)+parseInt(sb.d.km)+parseInt(sb.u.km)+parseInt(sb.k.km)+parseInt(sb.s.km)).toString()+'</td>';
		if (sb.a.ko === '-' || sb.d.ko ===  '-' || sb.u.ko ===  '-'  || sb.k.ko === '-' || sb.s.ko === '-') hs += '<td>-</td>';
		else hs += '<td>'+(parseInt(sb.a.ko)+parseInt(sb.d.ko)+parseInt(sb.u.ko)+parseInt(sb.k.ko)+parseInt(sb.s.ko)).toString()+'</td>';
		if (sb.a.ry === '-' || sb.d.ry ===  '-' || sb.u.ry ===  '-'  || sb.k.ry === '-' || sb.s.ry === '-') hs += '<td>-</td>';
		else hs += '<td>'+(parseInt(sb.a.ry)+parseInt(sb.d.ry)+parseInt(sb.u.ry)+parseInt(sb.k.ry)+parseInt(sb.s.ry)).toString()+'</td></tr>';
		hs += '</table></div>';
		//table 1(武器名)  終了
		hs += '<div><table class="slttbl"><caption>空きスロット</caption>';
		hs += '<tr><td>●－－</td><td>'+sb['aki'][0]+'</td></tr>';
		hs += '<tr><td>●●－</td><td>'+sb['aki'][1]+'</td></tr>';
		hs += '<tr><td>●●●</td><td>'+sb['aki'][2]+'</td></tr>';
		hs += '</table></div>';
		//table 2  終了
		var tb12 = '<div class="clearfix">'+hs+'</div>';
		
		hs = '<caption>各スキル系統値 </caption>';
		hs += '<tr><th></th><th>頭</th><th>胴</th><th>腕</th><th>腰</th><th>脚</th>';
		hs += '<th>スロット</th><th>護石</th><th>合計</th></tr>';
		for (var i in sb['skvl']) {
			hs += '<tr>';
			for (var j in sb['skvl'][i]) {
				hs += '<td>'+sb['skvl'][i][j]+'</td>';
			}
			hs += '</tr>';
		}
		//table 3  終了
		var tb3 = '<div><table>'+hs+'</table></div>';
		
		tb12 = tb12 + tb3;
		var tbs = '<div class="result">'+tb12+'</div>';
		return tbs;
	};
	
	//radio button
	$('input[type=radio]:checked').parent().parent().css('background-color', '#aaddff');
	$('input[type=radio]:checked').parent().parent().css('border-style', 'inset');
	
	$('#rdo div').on('click', function(){
		$('#rdo div').css('background-color', '#69f');
		$('#rdo div').css('border-style', 'inset');
		$(this).css('background-color', '#aaddff');
		$(this).css('border-style', 'inset');
		//console.log($('input[type=submit]'));
	});
});