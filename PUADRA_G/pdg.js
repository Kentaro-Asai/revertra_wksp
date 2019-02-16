$(function(){
	var cnt = {'sum':0, 'mns_no':[], 'nm':[], 'num':[]};
	var usr_cnt = {'sum':0, 'mns_no':[], 'num':[]};
	var SHOSU = 1000; //けた
	var nav_toggle = true;
	
	$('#all_rr4').on('change', function(){
		pcEven(4);
	});
	$('#all_rr5').on('change', function(){
		pcEven(5);
	});
	$('#all_rr6').on('change', function(){
		pcEven(6);
	});
	$('#all_rr7').on('change', function(){
		pcEven(7);
	});
	$('#all_rr8').on('change', function(){
		pcEven(8);
	});
	function pcEven(num){
		var total = $('#kosiki').children().length;
		var rr_ar = [];
		for (var i=1; i <= total; i++) {
			if (num === parseInt($('#mns'+i).data('rr'))) {
				rr_ar.push(i);
			}
		}
		var total_pc = $('#all_rr'+num).val();
		var kobetu_pc = Math.round(1000 * total_pc / rr_ar.length);
		var amari = Math.round(1000 * total_pc - (kobetu_pc * rr_ar.length));
		for (i=0; i < rr_ar.length; i++) {
			if (amari > 0) {
				$('#mns'+rr_ar[i]).val( (kobetu_pc + 1) / 1000);
				amari--;
			} else if(amari < 0) {
				$('#mns'+rr_ar[i]).val( (kobetu_pc - 1) / 1000);
				amari++;
			} else {
				$('#mns'+rr_ar[i]).val(kobetu_pc / 1000);
			}
		}
	}
	
	$('#reset_encount').on('click',function(){
		if (cnt['sum'] > 0) {
			//display reset
			cnt['sum'] = 0;
			for (var i=0; i < cnt['num'].length; i++) {
				cnt['num'][i] = 0;
			}
			
			//make img tags
			var series =  $('#kosiki').attr('data-0');
			var imgs = '';
			for (var i=0; i < cnt['mns_no'].length; i++) {
				imgs += '<img width=40 height=40 title='+cnt['nm'][i]+' src=img/i'+series+'/c'+cnt['mns_no'][i]+'.jpg />';
			}
			
			$('.rst_cnt dd').html('0回');
			$('.not_encount dd').html(imgs);
			$('.encount dd').html('なし');
			$('#rst ul').html('<li></li>');
			
		}
		for(var i=0; i < cnt['num'].length; i++){
			cnt['num'][i] = 0;
		}
	});
	
	$('#exec_gatya').on('click',function(){
		var num = comuServe(1);
		if (num !== 100 * SHOSU) {
			errDisp('rst', num);
		}
	});
	$('#exec_gatya17').on('click',function(){
		var num = comuServe(17);
		if (num !== 100 * SHOSU) {
			errDisp('rst', num);
		}
	});
	
	cntInit();
	function cntInit(){
		var mns_ar = $('#kosiki').children().children().children('img');
		for (var i=0; i < mns_ar.length; i++) {
			var hs = mns_ar[i].src;
			cnt['mns_no'][i] = hs.substring(hs.indexOf("/c")+2, hs.indexOf(".jpg"));
			cnt['num'][i] = 0;
			cnt['nm'][i] = mns_ar[i].alt;
		}
	}
	function errDisp(str, num){
		if (isNaN(num)) {
			$('#'+str).html('<p class=shoki >しばらく待っていれば、良いかも...</p>');
		}else{
			$('#'+str).html('<p class=shoki >排出率の合計値が'+(parseFloat(num) / SHOSU)+'％です。<br />'
				+'100％になるように設定してください。<br />'
				+'（小数点以下'+Math.log10(SHOSU)+'桁まで対応しています。）<br />ここに結果を示します。</p>');
		}
	}
	
	function comuServe(times){
		var mns_ar = $('#kosiki').children();
		var data = {
			'times': parseInt(times),
			'series': $('#kosiki').attr('data-0'),
			//no.と排出率を入力
			'rare':[]
		};
		var pc_sum = 0;
		for (var i=0; i < mns_ar.length; i++) {
			data['rare'][i] = Math.round(parseFloat($('#mns'+(i+1)).val()) * SHOSU);
			//ついでにpc_sum
			pc_sum += data['rare'][i];
		}
		if (pc_sum === 100 * SHOSU) {
			$.getJSON('gatya.json.php', data, function($js){
				//console.log($js);
				//[{no: 3284, nm: "龍喚士の弟子・シーナ", rr: 5, pc: 15}]
				var otpt ='<ul>';
				for (var i in $js) {
					cnt['sum']++;
					otpt += '<li class="output rare'+$js[i]['rr']+'">'
							+'<p><img src=img/i'+data['series']+'/c'+$js[i]['no']+'.jpg width=50 height=50 title='+$js[i]['nm']+' /></p>'
							+'<div>'
								+'<h5>'+$js[i]['nm']+'</h5>'
								+'<p>レアリティ：★'+$js[i]['rr']+'</p>'
							+'</div>'
							+'</li>';
					for (var j=0; j < cnt['mns_no'].length; j++) {
						if ($js[i]['no'] == cnt['mns_no'][j]) cnt['num'][j]++;
					}
				}
				//何が何回出たかの実装
				var no_mons = true;
				var otpt_data = '<dl class=rst_cnt><dt>通算：</dt><dd>'+cnt['sum']+'回</dd></dl>'
							+'<dl class=not_encount><dt>出てないモンスター</dt><dd>';
				for (var i=0; i < cnt['mns_no'].length; i++) {
					if (cnt['num'][i] === 0) {
						otpt_data += '<img src=img/i'+data['series']+'/c'+cnt['mns_no'][i]+'.jpg width=40 height=40 title='+cnt['nm'][i]+' />';
						no_mons = false;
					}
				}
				if (no_mons) otpt_data += ' なし';
				otpt_data += '</dd></dl>';
				otpt_data += '<dl class=encount><dt>出てきたモンスター</dt><dd>';
				for (var i=0; i < cnt['mns_no'].length; i++) {
					if (cnt['num'][i] > 0) {
						otpt_data += '<span><img src=img/i'+data['series']+'/c'+cnt['mns_no'][i]+'.jpg width=40 height=40 title='+cnt['nm'][i]+' />×'
								+cnt['num'][i]+'</span>';
					}
				}
				otpt_data += '</dd></dl>';

				$('#rst').html(otpt_data + otpt);
				return pc_sum;
			});
		}else{
			//書き方はダルいけど、trueの時getJSONの中で返した方が良い
			return pc_sum;
		}
	}
	
	//
	//user gatya 
	//

	//add monster
	$('.mns_box').on('click', 'input[type=button]', function(){
		var id = $(this).attr('name');
		var usr_html = '<h4><input type="text" name="usr_nm'+id.slice(3)+'" value="モンスター'+id.slice(3)+'" /></h4>'
					+'<p><img src="img/c0000.jpg" width="33" height="33" alt="任意のモンスター" /></p>'
					+'<p class="rare">'
						+'レアリティ： ★<input type="text" name=usr_rr'+id.slice(3)+' value="4" /><br />'
						+'排出率： <input type="text" name="usr_pc'+id.slice(3)+'" /> ％'
					+'</p>';
		var but_html = '<li id=usr'+(parseInt(id.slice(3))+1)
				+'><input type="button" name=usr'+(parseInt(id.slice(3))+1)+' value="モンスター追加" /></li>';
		$('#'+id).html(usr_html);
		$('#usr').append(but_html);
	});

	//
	$('#usr_gatya').on('click', function(){
		var num = gatyaGatya(1);
		if (num !== 100 * SHOSU) {
			errDisp('rst_usr', num);
		}
	});
	$('#usr_gatya17').on('click', function(){
		var num = gatyaGatya(17);
		if (num !== 100 * SHOSU) {
			errDisp('rst_usr', num);
		}
	});
	
	function gatyaGatya(times){
		var li_ary = $("#usr").children();
		var ary = {'pc':[], 'rr':[], 'nm':[]};
		var tosen = {'pc':[], 'rr':[], 'nm':[]};

		var pc_sum = 0;
		for (var i=1; i < li_ary.length; i++) {
			var pc = $('input[name=usr_pc'+i+']').val();
			if (Number.isNaN(parseInt(pc))) {
				$('input[name=usr_pc'+i+']').val(0);
				pc = 0;
			}
			pc_sum += Math.round(parseFloat(pc) * SHOSU);
		}
		if (pc_sum !== 100 * SHOSU) return pc_sum;
		
		for(var i=1; i < li_ary.length; i++){
			ary['pc'][i] = $('input[name=usr_pc'+i+']').val();
			ary['rr'][i] = $('input[name=usr_rr'+i+']').val();
			ary['nm'][i] = $('input[name=usr_nm'+i+']').val();
		}
		for (var i=0; i < times; i++) {
			var rd = rand(1, 100 * SHOSU);
			var pc = 0;
			for (var j=1; j < li_ary.length; j++) {
				pc += Math.round(parseFloat(ary["pc"][j]) * SHOSU);  
				if (pc >= rd) {
					tosen['pc'][i] = ary['pc'][j];
					tosen['rr'][i] = ary['rr'][j];
					tosen['nm'][i] = ary['nm'][j];
					break;
				}
			}
		}
		var rtn = '<ul>';
			for (var i=0; i < times; i++) {
				usr_cnt['sum']++;
				rtn += '<li class=output>'
						+'<p><img src=img/c0000.jpg width=50 height=50 /></p>'
						+'<div>'
							+'<h5>'+tosen['nm'][i]+'</h5>'
							+'<p>レアリティ：★'+tosen['rr'][i]+' 排出率：'+tosen['pc'][i]+'％</p>'
						+'</div>'
						+'</li>';
			}
		$('#rst_usr').html(rtn);
		return pc_sum;
	}
	
	$('#nav_other').on('click', function(){
		var ht = navToggle(nav_toggle);
		nav_toggle = !nav_toggle;
	});
	
	function navToggle(bo){
		//off -> on
		if (bo) {
			var addbox = '';
			var glist = $('#nav_other').attr('data-glist');
			var ref_ary = []; // inputted cutting position
			var ttl_ary = [];
			var glist_ary = [[], []]; //this is complete.0:number,1:title
			for (var i=0; i < glist.length; i++) {
				if(glist.charAt(i) === '-') {
					ttl_ary.push(i);
				} else if (glist.charAt(i) === '_') {
					ref_ary.push(i);
				}
			}
			//ref_aryで、_で区切られた文字列をinput
			if (ref_ary.length > 0){
				glist_ary[0].push(glist.substring(0, ttl_ary[0]));
				glist_ary[1].push(glist.substring(ttl_ary[0]+1, ref_ary[0]));
				for (var j=0; j < ref_ary.length; j++){
					glist_ary[0].push(glist.substring(ref_ary[j]+1, ttl_ary[j+1]));
					if (j+1 < ref_ary.length) {
						glist_ary[1].push(glist.substring(ttl_ary[j+1]+1, ref_ary[j+1]));
					} else {
						glist_ary[1].push(glist.slice(ttl_ary[j+1]+1));
					}
				}
			} else {
				glist_ary[0].push(glist.substring(0, ttl_ary[0]));
				glist_ary[1].push(glist.slice(ttl_ary[0]+1));
			}
			//生成
			addbox += '<div id=nav_toggle>';
			for (var i=0; i < glist_ary[0].length; i++) {
				addbox += '<a href=./?g='+glist_ary[0][i]+'>'+glist_ary[1][i]+'</a>';
			}
			addbox += '</div>';

			$('nav').append(addbox);
		// on -> off
		} else {
			$('#nav_toggle').remove();
		}
	}
	
	function rand(min, max) {
		var num = Math.floor((Math.random() * ((max + 1) - min)) + min);
    	return parseInt(num);
    }
});