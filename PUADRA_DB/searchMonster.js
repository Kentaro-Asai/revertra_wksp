$(()=>{
	const AWAKEN_NUM = 3;
	let selected_awaken_ary = [/* {count:1, name:"2体攻撃"} */];
	let mns_attribute = {main: '', sub: ''};
	const awaken_ary = [ //あいうえお順、種類順
		"HP強化", "攻撃強化", "回復強化", "マルチブースト", "チームHP強化", "チーム回復強化",
		"HP弱化", "攻撃弱化", "回復弱化", "火ダメージ軽減", "水ダメージ軽減", "木ダメージ軽減",
		"光ダメージ軽減", "闇ダメージ軽減", "火ドロップ強化", "水ドロップ強化", "木ドロップ強化",
		"光ドロップ強化", "闇ドロップ強化", "回復ドロップ強化", "コンボドロップ", "火属性強化",
		"水属性強化", "木属性強化", "光属性強化", "闇属性強化", "暗闇耐性", "暗闇耐性＋",
		"お邪魔耐性", "お邪魔耐性＋", "毒耐性", "毒耐性＋", "バインド耐性", "バインド耐性+",
		"バインド回復", "封印耐性", "雲耐性", "操作不可耐性",
		"神キラー", "ドラゴンキラー", "攻撃キラー", "悪魔キラー", "体力キラー",
		"バランスキラー", "回復キラー", "マシンキラー", "売却用キラー", "進化用キラー",
		"強化合成用キラー", "能力覚醒用キラー", "2体攻撃", "コンボ強化", "超コンボ強化",
		"HP80％以上強化", "HP50％以下強化", "自動回復", "操作時間延長", "操作時間延長+",
		"スキルブースト", "スキルブースト+", "追加攻撃", "超追加攻撃", "L字消し攻撃", "回復L字消し",
		"ダメージ無効貫通", "お邪魔ドロップの加護", "毒ドロップの加護", "ガードブレイク", "覚醒アシスト",
		"スキルチャージ", "スキルボイス", "ダンジョンボーナス"
	];
	const jsExplode = (concatenateAry, separate_word) => {
		let rtn = "";
		for (let v of concatenateAry) {
			rtn += "" != rtn ? (separate_word + v) : v;
		}
		return rtn;
	};

	(()=>{
		//覚醒スキルの選択
	})();
	//主属性
	$('.attribute input[name="main-attribute"]').on('click', ()=>{
		const attr_id = $('input[name="main-attribute"]:checked').attr('id');
		if ("main-attribute-none" == attr_id) {
			$('.main-attribute').css('background', '#ddd');
			mns_attribute.main = '';
		} else if ("main-attribute-fire" == attr_id) {
			$('.main-attribute').css('background', 'linear-gradient(358deg, #a22, transparent)');
			mns_attribute.main = '火';
		} else if ("main-attribute-water" == attr_id) {
			$('.main-attribute').css('background', 'linear-gradient(358deg, #44c, transparent)');
			mns_attribute.main = '水';
		} else if ("main-attribute-tree" == attr_id) {
			$('.main-attribute').css('background', 'linear-gradient(358deg, #292, transparent)');
			mns_attribute.main = '木';
		} else if ("main-attribute-light" == attr_id) {
			$('.main-attribute').css('background', 'linear-gradient(358deg, #cc4, transparent)');
			mns_attribute.main = '光';
		} else if ("main-attribute-dark" == attr_id) {
			$('.main-attribute').css('background', 'linear-gradient(358deg, #60d, transparent)');
			mns_attribute.main = '闇';
		}
	});
	//副属性
	$('.attribute input[name="sub-attribute"]').on('click', ()=>{
		const attr_id = $('input[name="sub-attribute"]:checked').attr('id');
		if ("sub-attribute-none" == attr_id) {
			$('.sub-attribute').css('background', '#ddd');
			mns_attribute.sub = '';
		} else if ("sub-attribute-fire" == attr_id) {
			$('.sub-attribute').css('background', 'linear-gradient(358deg, #a22, transparent)');
			mns_attribute.sub = '火';
		} else if ("sub-attribute-water" == attr_id) {
			$('.sub-attribute').css('background', 'linear-gradient(358deg, #44c, transparent)');
			mns_attribute.sub = '水';
		} else if ("sub-attribute-tree" == attr_id) {
			$('.sub-attribute').css('background', 'linear-gradient(358deg, #292, transparent)');
			mns_attribute.sub = '木';
		} else if ("sub-attribute-light" == attr_id) {
			$('.sub-attribute').css('background', 'linear-gradient(358deg, #cc4, transparent)');
			mns_attribute.sub = '光';
		} else if ("sub-attribute-dark" == attr_id) {
			$('.sub-attribute').css('background', 'linear-gradient(358deg, #60d, transparent)');
			mns_attribute.sub = '闇';
		} else {
			$('.sub-attribute').css('background', 'linear-gradient(358deg, #888, transparent)');
			mns_attribute.sub = '無';
		}
	});
	(()=>{
		$('.type p input[type="radio"]:checked').parent().css('background', 'dodgerblue').css('color', 'white');
	})();
	$('.type p input[type="radio"]').on('click', (e)=>{
		$('.type p label').css('background', 'none');
		$('.type p label').css('color', 'dodgerblue');
		e.target.parentElement.style.background = 'dodgerblue';
		e.target.parentElement.style.color = 'white';
	});
	//チェックボックスの色変え
	$('.type input[type=checkbox]').on('click', (e)=>{
		e.target.parentElement.style.background = e.target.checked ? "radial-gradient(#9fd, #6ca)" : null;
	});

	$('#skill-turn-button, #rarelity-button').on('click', (e)=>{
		const btn_ary = ["無効", "以上", "以下", "丁度"];
		const number_id = 'skill-turn-button' == e.target.id ? '#skill-turn': '#rarelity-number';
		let rtn = 0;
		for (let i in btn_ary) {
			if (e.target.innerText == btn_ary[i]) {
				rtn = (parseInt(i) + 1 == btn_ary.length) ? 0 : (parseInt(i) + 1);
				if ("無効" == btn_ary[rtn]) {
					$(number_id).attr('disabled', 'disabled');
				} else {
					$(number_id).removeAttr('disabled');
				}
				break;
			}
		}
		e.target.innerText = btn_ary[rtn];
	});

	//覚醒スキル(上限数まで選択できるように変更)
	$('#shortcut-awaken-table img').on('click', (e)=>{
		e.target.style.background = !!e.target.style.background ? null : "radial-gradient(wheat, #cc1)";
		if (!!e.target.style.background) {
			if (AWAKEN_NUM <= selected_awaken_ary.length) {
				$('#shortcut-awaken-table img[title="' + selected_awaken_ary[0].name + '"]')[0].style.background = null;
				if (2 == $('#shortcut-awaken-table img[title="' + selected_awaken_ary[0].name + '"]')[0].parentElement.childNodes.length) {
					$('#shortcut-awaken-table img[title="' + selected_awaken_ary[0].name + '"]')[0].parentElement.childNodes[1].remove();
				}
				selected_awaken_ary = selected_awaken_ary.filter((v, k)=> k != 0);
				selected_awaken_ary.push({
					count: 1,
					name: e.target.getAttribute('title')
				});
			} else {
				//listの後ろの方が新しい値
				selected_awaken_ary.push({
					count: 1,
					name: e.target.getAttribute('title')
				});
			}
			createModal(e.target.parentElement.id, e.target.getAttribute('title'));
		} else {
			//削除
			selected_awaken_ary = selected_awaken_ary.filter((v)=> e.target.getAttribute('title') != v.name);
			$('#shortcut-awaken-table img[title="' + e.target.getAttribute('title') + '"]')[0].parentElement.childNodes[1].remove();
		}
	});

	const createModal = (id, title)=>{
		$('#modal-background').remove();
		$('body').append('<div id="modal-background" data-awaken=\'{"id":"'+id+'", "title":"'+title+'"}\'><p><input type="number" id="awaken-cnt" value="1"><button id="awaken-cnt-btn">決定</button></p></div>');
		$('#modal-background > p').css('margin-top', (window.innerHeight / 2 + 10) + 'px');
		$('#modal-background').css('top', document.scrollingElement.scrollTop + 'px');
		window.addEventListener('scroll', ()=>{
			let scrollTop = document.scrollingElement.scrollTop;
			$('body > #modal-background').css('top', scrollTop + 'px');
		});
	};

	$('body').on('click', '#awaken-cnt-btn', ()=>{
		const cnt = parseInt($('body > #modal-background #awaken-cnt').val());
		const awaken_ary = $('body > #modal-background').data('awaken');
		for (let i in selected_awaken_ary) {
			if (awaken_ary.title == selected_awaken_ary[i].name) {
				selected_awaken_ary[i].count = cnt;
			}
		}
		$('#'+awaken_ary.id + ' > span').remove();
		$('#'+awaken_ary.id).append('<span>'+cnt+'</span>');
		$('#modal-background').remove();
	});

	$('#submit').on('click', ()=>{
		let type_ary = [];
		for (let v of $('.type input[type="checkbox"]:checked')) { //map使えない
			type_ary.push(v.dataset.type);
		}
		const send_data = {
			main_attribute: mns_attribute.main,
			sub_attribute: mns_attribute.sub,
			rarelity: parseInt($('#rarelity-number').val()),
			rarelity_option: $('#rarelity-button').html(),
			type_search: '1' === $('.type p input[type="radio"]:checked').val() ? 'OR検索' : 'AND検索',
			type: type_ary,
			super_awaken_flg: $('#contain-super-awaken').prop('checked') ? 1 : 0,
			awaken: selected_awaken_ary,
			skill: ($('#skill').val() || ""),
			skill_max_turn: $('#skill-turn').val(),
			skill_turn_option: $('#skill-turn-button').html(),
			leader_skill: ($('#leader-skill').val() || "")
		};
		$.getJSON('./server/search.json.php', send_data, ($js)=>{
			$('#result').html('<p>' + $js.msg + '</p>' + makeTable($js.mns));
		});
	});

	const makeTable = (mns)=>{
		if (0 == mns.length) return '';
		let output_mns = '<table id="mns-table">';
		output_mns += '<tr><th class="name"></th><th class="parameter">パラメータ</th><th class="awaken">覚醒</th><th class="super-awaken">超覚醒</th>'
			+'<th class="skill_turn">ターン</th><th class="skill">スキル</th><th class="leader-skill">リーダースキル</th>';
		output_mns += ("SUM_CNT" in mns[0]) ? "<th>対象個数</th>" : "";
		output_mns += '</tr>';
		for (let v of mns) {
			output_mns += `<tr class="${getAttrCls(v.MAIN_ATTRIBUTE, v.SUB_ATTRIBUTE)}">`
				+ `<td>NO. ${v.NO} <span class="assist${v.ASSIST}">★${v.RARE}</span> ${v.MAIN_ATTRIBUTE}/${v.SUB_ATTRIBUTE}<br>${v.NAME}<br>${jsExplode(v.TYPE, " / ")}</td>`
				+ `<td class="parameter">${+v.HP+990} / ${+v.ATK+495} / ${+v.RECOVER+297}<br>${getSuperParam(v)}<br>${getPlusConversion(v)}</td>`
				+ `<td>${getAwakenImgTag(v.AWAKEN)}</td>`
				+ `<td>${getAwakenImgTag(v.SUPER_AWAKEN)}</td>`
				+ `<td class="skill-turn">${v.SKILL_MAX_TURN}</td>`
				+ `<td>${v.SKILL}</td>`
				+ `<td>${v.LEADER_SKILL}</td>`;
			output_mns += ("SUM_CNT" in mns[0]) ? `<td>${v.SUM_CNT}</td>` : "";
			output_mns += `</tr>`;
		}
		output_mns += '</table>';
		return output_mns;
	};

	const getAwakenImgTag = (awaken_ary)=>{
		let rtn = '';
		if (undefined === awaken_ary) return '- 無し -';
		// Ajax通信で持ってきたデータが文字列寄りの配列になっていてfor of文でバグるからconsole.logが必要
		//console.log(awaken_ary); 
		//for (let v of awaken_ary) {
			//rtn += '<img src="./img_awaken/' + v + '.png" title="' + v + '" />';
		for (let i=0; i < awaken_ary.length; i++) {
			rtn += `<img src="img_awaken/${awaken_ary[i]}.png" title="${awaken_ary[i]}" />`;
		}
		return rtn;
	};

	const getAttrCls = (main, sub)=>{
		let rtn = 'attr';
		for (let i=0; i <= 1; i++) {
			let hs = 0 == i ? main : sub;
			if ('火' == hs) {
				rtn += '-1';
			} else if ('水' == hs) {
				rtn += '-2';
			} else if ('木' == hs) {
				rtn += '-3';
			} else if ('光' == hs) {
				rtn += '-4';
			} else if ('闇' == hs) {
				rtn += '-5';
			} else {
				rtn += '-0';
			}
		}
		return rtn;
	};

	const getSuperParam = (v)=>{
		if (0 == v.SUPER_HP) {
			return "";
		}
		return `${+v.SUPER_HP+990} / ${+v.SUPER_ATK+495} / ${+v.SUPER_RECOVER+297}`;
	}

	const getPlusConversion = (v)=>{
		if (0 == v.PLUS_CONVERSION) {
			return "";
		}
		let rtn = `+換算値: ${v.PLUS_CONVERSION}`;
		if (0 < v.SUPER_HP) {
			rtn += `<br>110+換算値: ${v.SUPER_PLUS_CONVERSION}<br>限界突破上昇率: ${v.SUPER_UP_RATE}`;
		}
		return rtn;
	}

});