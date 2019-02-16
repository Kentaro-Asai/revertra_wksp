$(function(){
	//お知らせボタン
	$('article p').slideUp('slow');
	$('article h3').on('click',function(){
		$(this).parent().children('p').slideToggle('slow');
	});
	//bug報告
	$('#send_msg input[type=button]').on('click',function(){
		var flg = confirm("このテキストエリアの内容で開発者にメールしますか？");
		if (flg) {
			var msg = {'msg': $('#bug').val()};
			$.post('classes/jsonMSG.php', msg, function($js){
				$('#send_msg').html($js);
			});
		}
	});
	
	var CNT = 5;
	//剣士タブかガンナータブかの区別sword or gun
	var sog = 0;
	//剣士タブの中身の記憶
	var swd = {
		'wntsk1': 0, 'wntsk2': 0, 'wntsk3': 0,
		'wntsk4': 0, 'wntsk5': 0, 'wntsk6': 0,
		's1': 1, 's2': 2, 's3': 3, 'sex': 1, 'hlm': 0,
		'amusk1': 0, 'amusk2': 0, 'skval1': 5, 'skval2': 5,
		'wepslot': 0, 'amuslot': 0, 'ms': "", 'res': ""
	};
	var gun = {
		'wntsk1': 0, 'wntsk2': 0, 'wntsk3': 0,
		'wntsk4': 0, 'wntsk5': 0, 'wntsk6': 0,
		's1': 1, 's2': 2, 's3': 3, 'sex': 1, 'hlm': 0,
		'amusk1': 0, 'amusk2': 0, 'skval1': 5, 'skval2': 5,
		'wepslot': 0, 'amuslot': 0, 'ms': "", 'res': ""
	};
	//剣士にするタブをクリックした
	$('#tab li:first-child').on('click',function(){
		$('#tab li:first-child').css('color','black');
		$('#tab li:last-child').css('color','#999');
		$('section').css('background-color','#66c');
		if (sog === 1) {
			//データを代入
			gun = {
				'wntsk1': $('#wntsk1 option:selected').val(),
				'wntsk2': $('#wntsk2 option:selected').val(),
				'wntsk3': $('#wntsk3 option:selected').val(),
				'wntsk4': $('#wntsk4 option:selected').val(),
				'wntsk5': $('#wntsk5 option:selected').val(),
				'wntsk6': $('#wntsk6 option:selected').val(),
				//'s1': $('#s1:checked').val(), 's2': $('#s2:checked').val(),
				//'s3': $('#s3:checked').val(), 'sex': $('#rdo input:checked').val(),
				'hlm': $('#hlm option:selected').val(),
				'amusk1': $('#amusk1').val(), 'amusk2': $('#amusk2').val(),
				'skval1': $('#skval1').val(), 'skval2': $('#skval2').val(),
				'wepslot': $('#wepslot').val(), 'amuslot': $('#amuslot').val(),
				'ms': $('#ms').html(), 'res': $('#res').html()
			};
			//記録していたデータを挿入
			$('#wntsk1').val(swd.wntsk1); $('#wntsk2').val(swd.wntsk2);
			$('#wntsk3').val(swd.wntsk3); $('#wntsk4').val(swd.wntsk4);
			$('#wntsk5').val(swd.wntsk5); $('#wntsk6').val(swd.wntsk6);
			/*if (1 == swd.s1) $('#s1').attr('checked','checked');
			else $('#s1').removeAttr('checked');
			if (2 == swd.s2) { $('#s2').attr('checked', true);
				console.log(swd.s2);
				console.log("dout");
			}else{ $('#s2').removeAttr('checked');
				console.log(swd.s2);
			}
			if (3 == swd.s3) $('#s3').attr('checked','checked');
			else $('#s3').removeAttr('checked');
			if (1 == swd.sex) $('#rdo input[name=sex]').val(['1']);
			else $('#rdo input[name=sex]').val(['2']);*/
			$('#hlm').val(swd.hlm);
			$('#amusk1').val(swd.amusk1);
			$('#amusk2').val(swd.amusk2);
			$('#skval1').val(swd.skval1);
			$('#skval2').val(swd.skval2);
			$('#wepslot').val(swd.wepslot);
			$('#amuslot').val(swd.amuslot),
			$('#ms').html(swd.ms);
			$('#res').html(swd.res);
		}
		//console.log(gun);
		sog = 0;
	});
	//ガンナーにするタブをクリックした
	$('#tab li:last-child').on('click',function(){
		$('#tab li:first-child').css('color','#999');
		$('#tab li:last-child').css('color','black');
		$('section').css('background-color','#399');
		if (sog === 0) {
			swd = {
				'wntsk1': $('#wntsk1 option:selected').val(),
				'wntsk2': $('#wntsk2 option:selected').val(),
				'wntsk3': $('#wntsk3 option:selected').val(),
				'wntsk4': $('#wntsk4 option:selected').val(),
				'wntsk5': $('#wntsk5 option:selected').val(),
				'wntsk6': $('#wntsk6 option:selected').val(),
				//'s1': $('#s1:checked').val(), 's2': $('#s2:checked').val(),
				//'s3': $('#s3:checked').val(), 'sex': $('#rdo input:checked').val(),
				'hlm': $('#hlm option:selected').val(),
				'amusk1': $('#amusk1').val(), 'amusk2': $('#amusk2').val(),
				'skval1': $('#skval1').val(), 'skval2': $('#skval2').val(),
				'wepslot': $('#wepslot').val(), 'amuslot': $('#amuslot').val(),
				'ms': $('#ms').html(), 'res': $('#res').html()
			};
			//記録していたデータを挿入
			$('#wntsk1').val(gun.wntsk1); $('#wntsk2').val(gun.wntsk2);
			$('#wntsk3').val(gun.wntsk3); $('#wntsk4').val(gun.wntsk4);
			$('#wntsk5').val(gun.wntsk5); $('#wntsk6').val(gun.wntsk6);
			/*if (1 == gun.s1) $('#s1').attr('checked','checked');
			else $('#s1').removeAttr('checked');
			if (2 == gun.s2) $('#s2').attr('checked','checked');
			else $('#s2').removeAttr('checked');
			if (3 == gun.s3) $('#s3').attr('checked','checked');
			else $('#s3').removeAttr('checked');
			if (1 == gun.sex) $('#rdo input[name=sex]').val(['1']);
			else $('#rdo input[name=sex]').val(['2']);*/
			$('#hlm').val(gun.hlm);
			$('#amusk1').val(gun.amusk1);
			$('#amusk2').val(gun.amusk2);
			$('#skval1').val(gun.skval1);
			$('#skval2').val(gun.skval2);
			$('#wepslot').val(gun.wepslot);
			$('#amuslot').val(gun.amuslot),
			$('#ms').html(gun.ms);
			$('#res').html(gun.res);
		}
		//console.log(swd);
		sog = 1;
	});
	
	//radio button
	$('#rdo input:checked').parent().css('background-color','#aaddff');
	$('#rdo input:checked').parent().css('border-style', 'inset');
	
	$('#rdo label').on('click',function(){
		$('#rdo label').css('background-color','');
		$('#rdo label').css('border-style','outset');
		$(this).css('background-color','#aaddff');
		$(this).css('border-style', 'inset');
	});
	
	//Jsonのボタン
	$('input[type=submit]').on('click',function(){
		$('#res').html('');
		var sk =[];
		for (var i=1, j=0; i<=6; i++) {
			var s = '#wntsk' + i.toString();
			if (parseInt($(s).val()) != 0) {
				sk[j] = parseInt($(s).val());
				j++;
			}
		}
		//$('main').after('<p id=ms></p>');
		$('#ms').css('display', 'block');
		if (sk.length == 0) {
			$('#ms').html('欲しいスキルを選んでください。');
		} else {
			button_on(true);//button無効化
			var s = [];
			for (var i=1, j=0; i<=4; i++) {//G級ありなら2を3にする(発掘防具ありだから4)
				if (document.getElementById('s'+i.toString()).checked) {//chkされてなければundefined
					s[j] = $('#s'+i.toString()).val();
					j++;
				}
				//何にもチェック入れてないならG級のみにする
				if (i == 3 && j == 0) {
					$('#s3').attr('checked', true);
					s[0] = 3;
				}
			}
			var opt1 = false;
			if (document.getElementById('opt1').checked) opt1 = true;
			//console.log(s);
			//var tf = $('#swd option:selected').val();
			//if (document.getElementById('gun').checked) tf = 1;
			var dt = {'wntsk': sk, 'sob': s, 'sex': $('#rdo input:checked').val(),
				'hlm': $('#hlm option:selected').val(), 'sog': sog, 'opt1': opt1,
				'amusk1': $('#amusk1').val(), 'amusk2': $('#amusk2').val(),
				'skval1': $('#skval1').val(), 'skval2': $('#skval2').val(),
				'wepslot': $('#wepslot').val(), 'amuslot': $('#amuslot').val()};
			//console.log(dt);
			//if (dt['swd'] != '1') dt['swd'] = 0;
			//装備のデータを送る.結果の表示
			$.post('classes/jsonMH.php', dt, function($js){
				//console.log($js);
				if ($js[0] != false) {
					$('#ms').html('<p>'+$js[0]["messe"]+'</p>'+$js[0]["kouho"]);
					var s = '';
					for (var i=0; i < $js[0]["cnt"] && i < CNT; i++) {
						//console.log($js[0][i]);
						s += rs($js[0][i]);
					}
					$('#res').html(s);
				} else {
					//1つ目が見つけられ無かったので、いっぱい返ってくる
					$('#ms').html('<p>欲しいスキルを全て適えることはできませんでした。<br />1つ除いた組合わせ全てを試します。</p>');
					var s = '';
					for (var i=1; i < $js.length; i++) {
						if ($js[i][0] == false) {
							s += '<div class="messe"><p>'+$js[i]["its"];
							s += ' (このスキルの組合わせはできませんでした。)</p>'+$js[i]["kouho"];
							continue;
						}
						s += '<div class="messe"><p>'+$js[i]["its"]+' ('+$js[i]["messe"]+')</p>'+$js[i]["kouho"]+'</div>';
						for (var j=0; j < $js[i]["cnt"] && j < CNT; j++) {
							s += rs($js[i][j]);
						}
					}
					$('#res').append(s);
					//console.log(s);
					s = '';
					//$('#res').html(s);-4
				}
			});
			button_on(false);
		}
	});
	
	//表示を作る
	function rs(sb){
		//var hs = '<div><table><caption>装備</caption>';
		var hs = '<div><table><caption>装備</caption><tr><th></th><th>装備名</th>';
		hs += '<th>火</th><th>水</th><th>氷</th><th>雷</th><th>龍</th></tr>';/*<th>防御力</th>*/
		//hs += '<tr><td>頭</td><td>'+sb['a']+'</td></tr>';
		hs += '<tr><td>頭</td><td>'+sb.a.nm+'</td><td>'+sb.a.hi+'</td><td>'+sb.a.mz+'</td><td>'+sb.a.km+'</td><td>'+sb.a.ko+'</td><td>'+sb.a.ry+'</td></tr>';//<td>'+sb.a.def+'</td>
		//hs += '<tr><td>胴</td><td>'+sb['d']+'</td></tr>';
		hs += '<tr><td>胴</td><td>'+sb.d.nm+'</td><td>'+sb.d.hi+'</td><td>'+sb.d.mz+'</td><td>'+sb.d.km+'</td><td>'+sb.d.ko+'</td><td>'+sb.d.ry+'</td></tr>';//<td>'+sb.d.def+'</td>
		//hs += '<tr><td>腕</td><td>'+sb['u']+'</td></tr>';
		hs += '<tr><td>腕</td><td>'+sb.u.nm+'</td><td>'+sb.u.hi+'</td><td>'+sb.u.mz+'</td><td>'+sb.u.km+'</td><td>'+sb.u.ko+'</td><td>'+sb.u.ry+'</td></tr>';//<td>'+sb.u.def+'</td>
		//hs += '<tr><td>腰</td><td>'+sb['k']+'</td></tr>';
		hs += '<tr><td>腰</td><td>'+sb.k.nm+'</td><td>'+sb.k.hi+'</td><td>'+sb.k.mz+'</td><td>'+sb.k.km+'</td><td>'+sb.k.ko+'</td><td>'+sb.k.ry+'</td></tr>';//<td>'+sb.k.def+'</td>
		//hs += '<tr><td>脚</td><td>'+sb['s']+'</td></tr>';
		hs += '<tr><td>脚</td><td>'+sb.s.nm+'</td><td>'+sb.s.hi+'</td><td>'+sb.s.mz+'</td><td>'+sb.s.km+'</td><td>'+sb.s.ko+'</td><td>'+sb.s.ry+'</td></tr>';//<td>'+sb.s.def+'</td>
		hs += '<tr><td>合計</td><td>-</td>';
		hs += '<td>'+keisan(sb.a.hi, sb.d.hi, sb.u.hi, sb.k.hi, sb.s.hi)+'</td>';
		hs += '<td>'+keisan(sb.a.mz, sb.d.mz, sb.u.mz, sb.k.mz, sb.s.mz)+'</td>';
		hs += '<td>'+keisan(sb.a.km, sb.d.km, sb.u.km, sb.k.km, sb.s.km)+'</td>';
		hs += '<td>'+keisan(sb.a.ko, sb.d.ko, sb.u.ko, sb.k.ko, sb.s.ko)+'</td>';
		hs += '<td>'+keisan(sb.a.ry, sb.d.ry, sb.u.ry, sb.k.ry, sb.s.ry)+'</td>';
		//hs += '<td>'+keisan(sb.a.def,sb.d.def,sb.u.def,sb.k.def,sb.s.def)+'</td>';
		hs += '<tr/></table></div>';
		//table 1(武器名)  終了
		hs += '<div><table class="slttbl"><caption>空きスロット</caption>';
		hs += '<tr><td>●－－</td><td>'+sb['aki'][0]+'</td></tr>';
		hs += '<tr><td>●●－</td><td>'+sb['aki'][1]+'</td></tr>';
		hs += '<tr><td>●●●</td><td>'+sb['aki'][2]+'</td></tr>';
		hs += '</table></div>';
		//table 2  終了
		var tb12 = '<div class="clearfix">'+hs+'</div>';
		
		hs = '<caption>各スキル系統値</caption>';
		hs += '<tr><th></th><th>頭</th><th>胴</th><th>腕</th><th>腰</th><th>脚</th>';
		hs += '<th>スロット</th><th>護石</th><th>武器</th><th>合計</th></tr>';
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
	
	function keisan(a, b, c, d, e){
		if (a === '-') a = 0;
		if (b === '-') b = 0;
		if (c === '-') c = 0;
		if (d === '-') d = 0;
		if (e === '-') e = 0;
		return parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e);
	}
	
	//buttonを押して無効にするorしない
	function button_on(io){
		if(io){
			$('input[type=submit]').attr('disabled', 'disabled');
			$('input[type=submit]:hover').removeAttr('font-weight');
			$('input[type=submit]:hover').removeAttr('text-decoration');
			$('input[type=submit]:hover').removeAttr('cursor');
		}else{
			$('input[type=submit]').removeAttr('disabled');
			$('input[type=submit]:hover').attr('font-weight','700');
			$('input[type=submit]:hover').attr('text-decoration','underline');
			$('input[type=submit]:hover').attr('cursor','pointer');
		}
	};
});