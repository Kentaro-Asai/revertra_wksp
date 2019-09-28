$(function(){
	let gatya_ary = [/*
		{mns_no:idみたいなもの, nm:"name", num:ガチャから出てきた数, pc:ユーザが変えられる値}*/
	];
	let gatya_sum = 0; //ガチャした回数
	const SHOSU = 1000; //有効けた数
	const RARE = {'UNDER':4, 'UPPER': 8}; //ガチャレア範囲
	let nav_toggle = true;
	
	for (let i=RARE.UNDER; i <= RARE.UPPER; i++) {
		$('#all_rr'+i).on('change', function(){
			pcEven(i);
		});
	}

	let pcEven = (num) => {
		let rr_ary = [];
		for (let v of gatya_ary) {
			if (num === parseInt($('#mns'+v.mns_no).data('rr'))) {
				rr_ary.push(v.mns_no);
			}
		}
		const total_pc = $('#all_rr'+num).val();
		const kobetu_pc = Math.round(SHOSU * total_pc / rr_ary.length);
		let amari = Math.round(SHOSU * total_pc - (kobetu_pc * rr_ary.length));
		for (let target_rarelity_mns_no of rr_ary) {
			if (amari > 0) {
				$('#mns'+target_rarelity_mns_no).val( (kobetu_pc + 1) / SHOSU);
				amari--;
			} else if(amari < 0) {
				$('#mns'+target_rarelity_mns_no).val( (kobetu_pc - 1) / SHOSU);
				amari++;
			} else {
				$('#mns'+target_rarelity_mns_no).val(kobetu_pc / SHOSU);
			}
		}
	};
	
	$('#reset_encount').on('click',function(){
		if (gatya_sum > 0) {
			//display reset
			gatya_sum = 0;
			for (let i in gatya_ary) {
				gatya_ary[i].num = 0;
			}
			//make img tags
			const series =  $('#kosiki').data('series');
			let imgs = '';
			for (let v of gatya_ary) {
				imgs += `<img title="${v.nm}" src="img/i${series}/c${v.mns_no}.jpg" />`;
			}
			
			$('.encount > dt > span').html('(通算: 0回)');
			$('.not_encount dd').html(imgs);
			$('.encount dd').html('なし');
			$('#rst ul').html('<li class="none_gatya_result">ガチャ結果をここに表示します。</li>');			
		}
		for(let v of gatya_ary){
			v.num = 0;
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
	
	// 初期動作
	(function cntInit(){
		const mns_ary = $('#kosiki').children().children().children('img');
		for (let i in mns_ary) {
			let hs = mns_ary[i].src;
			if (!!hs) {
				gatya_ary[i] = {
					mns_no: hs.substring(hs.indexOf("/c")+2, hs.indexOf(".jpg")),
					nm: mns_ary[i].alt,
					num: 0
				};
			}
		}
	})();

	function errDisp(str, num){
		if (isNaN(num)) {
			$('#'+str).html('<p class="shoki">しばらく待っていれば、良いかも...</p>');
		}else{
			$('#'+str).html('<p class="shoki">排出率の合計値が'+(parseFloat(num) / SHOSU)+'％です。<br />'
				+'100％になるように設定してください。<br />'
				+'（小数点以下'+Math.log10(SHOSU)+'桁まで対応しています。）<br />ここに結果を示します。</p>');
		}
	}
	
	function comuServe(times){
		var data = {
			'times': parseInt(times),
			'series': $('#kosiki').data('series'),
			//no.と排出率を入力
			'mns': [/* {'mns_no': 数字, 'pc': 数字},*/]
		};
		var pc_sum = 0;
		for (let i in gatya_ary) {
			data.mns[i] = {
				pc: Math.round(parseFloat($('#mns'+(gatya_ary[i].mns_no)).val()) * SHOSU),
				mns_no: gatya_ary[i].mns_no
			};
			//ついでにpc_sum
			pc_sum += data.mns[i].pc;
		}
		if (pc_sum === 100 * SHOSU) {
			$.getJSON('gatya.json.php', data, function($js){
				//console.log($js);
				//[{no: 3284, nm: "龍喚士の弟子・シーナ", rr: 5, pc: 15}]
				let otpt ='<ul>';
				for (let $v of $js) {
					gatya_sum++;
					otpt += `<li class="output rare${$v.rr}">
							<p><img src="img/i${data['series']}/c${$v.no}.jpg" title="${$v.nm}" /></p>
							<div>
								<p>★${$v.rr}</p>
								<h5>${$v.nm}</h5>
							</div>
						</li>`;
					for (let j in gatya_ary) {
						if ($v.no == gatya_ary[j].mns_no) gatya_ary[j].num++;
					}
				}
				//何が何回出たかの実装
				let no_mons = true;
				let otpt_data = '<dl class="not_encount"><dt>出てないモンスター</dt><dd>';
				for (let v of gatya_ary) {
					if (v.num === 0) {
						otpt_data += `<img src="img/i${data.series}/c${v.mns_no}.jpg" title="${v.nm}" />`;
						no_mons = false;
					}
				}
				if (no_mons) otpt_data += ' なし';
				otpt_data += '</dd></dl>';
				otpt_data += '<dl class="encount"><dt>出てきたモンスター<span>(通算：'+gatya_sum+'回)</span></dt><dd>';
				for (let v of gatya_ary) {
					if (v.num > 0) {
						otpt_data += `<span><img src="img/i${data.series}/c${v.mns_no}.jpg" title="${v.nm}" />×${v.num}</span>`;
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

	//モンスター名を小さくして全部表示
	(function allDisplay(){
		let mns_name = $('#kosiki h4');
		for (let v of mns_name) {
			//文字数で判定
			if (v.innerHTML.length <= 12) {
				// 文字が入る(font-size:14)
			} else if (v.innerHTML.length <= 14) {
				v.style.fontSize = "12px";
			} else {
				v.style.fontSize = "10px";
			}
		}
	})();

	//全種出るまで引くを実装
	$('#exec_complete_gatya').on('click', ()=>{
		let num = gatyaGatya();
		if (num !== 100 * SHOSU) {
			errDisp('rst', num);
		}
	});

	let gatyaGatya = ()=>{
		//確率を取得
		let pc_sum = 0;
		for (let i in gatya_ary) {
			gatya_ary[i]['pc'] = Math.round(parseFloat($('#mns'+(gatya_ary[i].mns_no)).val()) * SHOSU);
			//ついでに確率合計値取得
			pc_sum += gatya_ary[i].pc;
		}
		if (pc_sum !== 100 * SHOSU) return pc_sum;
		let is_complete = !gatya_ary.find(v => v.num == 0);
		if (is_complete) {
			alert("すでに全種のモンスターを出しています。");
			return pc_sum;
		}
		while (!is_complete) {
			//ガチャを引く
			let rd = rand(1, 100 * SHOSU);
			let pc = 0;
			for (let i in gatya_ary) {
				pc += gatya_ary[i].pc;
				if (pc >= rd) {
					//引いたものを追加 && 通算回数の追加
					gatya_ary[i].num++;
					gatya_sum++;
					break;
				}
			}
			//出たモンスターがコンプリートしていないなら、まだ回す
			is_complete = !gatya_ary.find(v => v.num == 0);
		}
		let series = $('#kosiki').data('series');
		let output_data = '<dl class="not_encount"><dt>出てないモンスター</dt><dd>なし</dd></dl>';
		output_data += `<dl class="encount"><dt>出てきたモンスター<span>(通算：${gatya_sum}回)</span></dt><dd>`;
		for (let v of gatya_ary) {
			output_data += `<span><img src="img/i${series}/c${v.mns_no}.jpg" title="${v.nm}" />×${v.num}</span>`;
		}
		output_data += '</dd></dl>';
		$('#rst').html(output_data);
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
			for (let i=0; i < glist.length; i++) {
				if (glist.charAt(i) === '-') {
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
			addbox += '<div id="nav_toggle">';
			for (var i=0; i < glist_ary[0].length; i++) {
				addbox += '<a href="./?g='+glist_ary[0][i]+'">'+glist_ary[1][i]+'</a>';
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