$(()=>{
	// mns == monster
	let mns_dictionary = [
		/*{NO:0, MAIN_ATTRIBUTE:"", NAME:"", TYPE:[""], AWAKEN:[""], HP:0, ATK0, RE:0,} */
	];
	// team_mns チームのモンスターのパラメータを全て入れる
	let team_mns = {
		main: {leader: {}, sub1: {}, sub2: {}, sub3: {}, sub4: {}, friend: {}},
		assist: {leader: {}, sub1: {}, sub2: {}, sub3: {}, sub4: {}, friend: {}}
	};
	const TEAM_ITERATOR = ['leader', 'sub1', 'sub2', 'sub3', 'sub4', 'friend'];
	let mns_selector = {attribute: '火', page: 1, select_position: '', select_role: '', sort: 'NO. ↓'};// leader? sub1? / main? assist?
	let enemy_parameter = {
		attribute: '火', type: [], hp: 100000000, defense: 0, damage_cut_flg: false, damage_absorb_flg: false, damage_cut: 10000000, damage_absorb: 1000000
	};
  
	$('#team tr.main-select > td, #team tr.assist-select > td').on('click', (e)=>{
		const class_name = e.currentTarget.parentElement.className;
		mns_selector.select_role = class_name.substr(0, class_name.indexOf("-"));
		// 最初だけ読み込んで保持する
		if (0 == mns_dictionary.length) {
			setWaiting(); //しばらくお待ちください。
			$.getJSON('server/damageCalc.json.php', {mns: "calculator"}, ($js)=>{
				mns_dictionary = $js.mns;
				mns_selector.select_position = e.currentTarget.dataset.mns;
				displayMnsSelector();
			});
		} else {
			mns_selector.select_position = e.currentTarget.dataset.mns;
			displayMnsSelector();
		}
	});

	const setWaiting = ()=>{
		$('body').append('<div id="waiting"><p>通信中...</p></div>');
		$('body > #waiting').css('top', document.scrollingElement.scrollTop + 'px');
		$('#waiting > p').css('margin', (window.innerHeight / 2 + 10) + 'px');
	};
	const displayMnsSelector = ()=>{
		$('body > #waiting').remove();
		$('body').append('<div id="mns-selector"></div>');
		$('body > #mns-selector').css('top', document.scrollingElement.scrollTop + 'px');
		const selector_header = '<ul id="selector-header"><li>火</li><li>水</li><li>木</li><li>光</li><li>闇</li><li>アシスト</li></ul>';
		const selector_footer = '<div id="selector-footer">'
			+'<button class="pager-button">＜＜ before</button><span id="selector-page">'+mns_selector.page+'</span>'
			+'<button id="sort-selector">'+mns_selector.sort+'</button><button class="pager-button">after ＞＞</button></div>';
		let selector_main = '<ul id="selector-main"></ul>';

		$('#mns-selector').html(selector_header + selector_main + selector_footer);
		//id=selector-mainに入れる
		mnsSelectorView();
	};

	$('tr.level-110 input[type="checkbox"]').on('click', (e)=>{
		let name_110 = e.currentTarget.getAttribute('name');
		for (let v of TEAM_ITERATOR) {
			if (v + '-110' == name_110 && !!team_mns.main[v].NO) {
				setTeamParameter();
				break;
			}
		}
	});

	//超覚醒
	$('#team-table .super-awaken').on('click', 'td label', (e)=>{
		e.currentTarget.children[0].setAttribute('checked', 'checked');
		team_mns.main[e.currentTarget.dataset.position].chosen_super_awaken = e.currentTarget.dataset.awaken;
		setTeamParameter()
	});
	//マルチかどうかチェックボックス
	$('#team-conclusion #multi-flg').on('click', ()=>{setTeamParameter()});

	//pop-up用
	window.onscroll = ()=>{
		if (0 < $('#waiting, #mns-selector, #potential-selector').length) {
			$('#waiting, #mns-selector, #potential-selector').css('top', document.scrollingElement.scrollTop + 'px');
		}
	};

	//モンスターセレクト-属性ボタン
	$('body').on('click', '#mns-selector #selector-header > li', (e)=>{
		if (mns_selector.attribute != e.currentTarget.innerHTML) {
			mns_selector.attribute = e.currentTarget.innerHTML;
			mns_selector.page = 1;
			mnsSelectorView();
		}
	});
	//モンスターセレクト-モンスターの選択
	$('body').on('click', '#mns-selector #selector-main li', (e)=>{
		setMnsParameter(e.currentTarget.dataset.number);
		$('#mns-selector').remove();
	});
	//モンスターセレクト-ソート
	$('body').on('click', '#mns-selector #sort-selector', ()=>{
		const SORT_OPTIONS = ['NO. ↓', '属性 ↑', 'NO. ↑', '属性 ↓'];
		let sort_choice = SORT_OPTIONS[0];
		for (let i in SORT_OPTIONS) {
			if (mns_selector.sort == SORT_OPTIONS[i] && i < SORT_OPTIONS.length - 1) {
				sort_choice = SORT_OPTIONS[parseInt(i) + 1];
				break;
			}
		}
		mns_selector.sort = sort_choice;
		mns_selector.page = 1;
		mnsSelectorView();
	});
	//モンスターセレクト-ページャー
	$('body').on('click', '#mns-selector #selector-footer .pager-button', (e)=>{
		mns_selector.page += (e.currentTarget.innerHTML == '＜＜ before') ? -1 : 1;
		mnsSelectorView();
	});

	//潜在覚醒
	$('td[id$="-potential"]').on('click', (e)=>{
		//ajax通信->画像を読み込んだら表示->6~8枠選択してDone
		const team_position = e.currentTarget.id.substr(0, e.currentTarget.id.indexOf('-potential'));
		let potential_awaken_list = {
			one: ["HP強化", "攻撃強化", "回復強化", "自動回復", "操作時間延長", "火ダメージ軽減", "水ダメージ軽減", "木ダメージ軽減", "光ダメージ軽減", "闇ダメージ軽減", "スキル遅延耐性"],
			two: ["全パラメータ強化", "操作時間延長＋", "HP強化＋", "攻撃強化＋", "回復強化＋", "火ダメージ軽減＋", "水ダメージ軽減＋", "木ダメージ軽減＋", "光ダメージ軽減＋", "闇ダメージ軽減＋", "売却用キラー", "強化合成用キラー", "能力覚醒用キラー", "進化用キラー"]
		};
		potential_awaken_list.two = $.merge(potential_awaken_list.two, getAttachablePotential(team_mns.main[team_position].TYPE));
		//$('body > #waiting').remove();
		$('body').append('<div id="potential-selector"></div>');
		let modal_html = '<h6>1枠消費</h6><p class="potential-select-box">';
		for (let v of potential_awaken_list.one) {
			modal_html += `<img src="img_potential/${v}.jpg" class="frame-1" title="${v}">`;
		}
		modal_html += '</p><h6>2枠消費</h6><p class="potential-select-box">';
		for (let v of potential_awaken_list.two) {
			modal_html += `<img src="img_potential/${v}.jpg" class="frame-2" title="${v}">`;
		}
		modal_html += '</p><h6 class="potential-selector-setted">セットする潜在覚醒</h6><p id="setted-potential"></p>';
		modal_html += '<button id="potential-decision-button" data-position="'+team_position+'">決定</button>';
		$('body > #potential-selector').append(modal_html);
		if ('potential_awaken' in team_mns.main[team_position]) {
			let potential_html = '';
			for (let v of team_mns.main[team_position].potential_awaken) {
				potential_html += `<img src="img_potential/${v.awaken_name}.jpg" class="frame-${v.frame}" title="${v.awaken_name}">`;
			}
			$('body > #potential-selector #setted-potential').html(potential_html);
		}
		$('body > #potential-selector').css('top', document.scrollingElement.scrollTop + 'px');
	});

	//潜在覚醒の選択
	$('body').on('click', '#potential-selector > p.potential-select-box > img', (e)=>{
		const team_position = $('#potential-decision-button').data('position');
		const frame_number = parseInt(e.currentTarget.getAttribute('class').substr(-1));
		if (undefined == team_mns.main[team_position].potential_awaken) {
			team_mns.main[team_position].potential_awaken = [{awaken_name: e.currentTarget.getAttribute('title'), frame: frame_number}];
		} else {
			team_mns.main[team_position].potential_awaken.push(
				{awaken_name: e.currentTarget.getAttribute('title'), frame: frame_number}
			);
			let frame_sum = 0;
			for (let v of team_mns.main[team_position].potential_awaken) {
				frame_sum += v.frame;
			}
			while (8 < frame_sum) {
				team_mns.main[team_position].potential_awaken.shift();
				frame_sum = 0;
				for (let v of team_mns.main[team_position].potential_awaken) {
					frame_sum += v.frame;
				}
			}
		}
		let potential_html = '';
		for (let v of team_mns.main[team_position].potential_awaken) {
			potential_html += `<img src="img_potential/${v.awaken_name}.jpg" class="frame-${v.frame}" title="${v.awaken_name}">`;
		}
		$('#setted-potential').html(potential_html);
	});

	//潜在覚醒の削除
	$('body').on('click', '#setted-potential > img', (e)=>{
		const team_position = $('#potential-decision-button').data('position');
		const selected_potential = e.currentTarget.getAttribute('title');
		let potential_ary = [];
		let uncontain_flg = true;
		for (let v of team_mns.main[team_position].potential_awaken) {
			if (selected_potential == v.awaken_name && uncontain_flg) {
				uncontain_flg = false;
			} else {
				potential_ary.push(v);
			}
		}
		team_mns.main[team_position].potential_awaken = $.merge([], potential_ary);
		let potential_html = '';
		for (let v of team_mns.main[team_position].potential_awaken) {
			potential_html += `<img src="img_potential/${v.awaken_name}.jpg" class="frame-${v.frame}" title="${v.awaken_name}">`;
		}
		$('#setted-potential').html(potential_html);
	});
	//潜在覚醒の決定
	$('body').on('click', '#potential-decision-button', ()=>{
		const team_position = $('#potential-decision-button').data('position');
		if (!!team_mns.main[team_position].potential_awaken && 0 < team_mns.main[team_position].potential_awaken.length) {
			let potential_html = '';
			for (let v of team_mns.main[team_position].potential_awaken) {
				potential_html += `<img src="img_potential/${v.awaken_name}.jpg" class="frame-${v.frame}" title="${v.awaken_name}">`;
			}
			$('#' + team_position + '-potential').html(potential_html);
		} else {
			$('#' + team_position + '-potential').html('');
		}
		//パラメータ修正
		setTeamParameter();
		$('body > #potential-selector').remove();
	});

	//パラメータの手入力
	$('input[id$="-hp"],input[id$="-atk"],input[id$="-recover"]').on('change', (e)=>{
		const team_position = e.currentTarget.id.substr(0, e.currentTarget.id.indexOf('-'));
		const changed_parameter = {
			hp: parseInt($(`#${team_position}-hp`).val()),
			atk: parseInt($(`#${team_position}-atk`).val()),
			recover: parseInt($(`#${team_position}-recover`).val())
		};
		//正確なパラメータを出すメソッドがあるべき。それと比較して、違ったら"param_change"してる
		const template_parameter = getTableMnsParameter(team_position, "unchange_parameter");
		//ここで比較
		if (changed_parameter.hp == template_parameter.hp && changed_parameter.atk == template_parameter.atk && changed_parameter.recover == template_parameter.recover) {
			if ("param_change" in team_mns.main[team_position]) delete team_mns.main[team_position].param_change;
		} else {
			team_mns.main[team_position].param_change = {
				hp: changed_parameter.hp, atk: changed_parameter.atk, recover: changed_parameter.recover,
			};
		}
	});
	
	//コンボの入力補助
	for (let i=1; i <= 14; i++) {
		$('#combo-attribute-' + i).on('change', (e)=>{
			e.currentTarget.parentElement.style.backgroundColor = getAttributeColor(e.currentTarget.value);
			let inputed_combo_number = 0;
			for (let k=1; k <= 14; k++) {
				if ("無" != $('#combo-attribute-' + k).val()) inputed_combo_number++;
			}
			if ($('#total-combo-number').val() < inputed_combo_number) $('#total-combo-number').val(inputed_combo_number);
		});
		$('#combo-Lform-flg-' + i).on('click', (e)=>{
			if (e.currentTarget.checked) $('#combo-drop-count-' + i).val(5);
		});
		$('#combo-row-flg-' + i).on('click', (e)=>{
			if (e.currentTarget.checked) {
				if ($('#combo-drop-count-' + i).val() < 5) $('#combo-drop-count-' + i).val(6);
			}
		});
		$('#combo-square-flg-' + i).on('click', (e)=>{
			if (e.currentTarget.checked) $('#combo-drop-count-' + i).val(9);
		});
	}

	//敵パラメータ
	$('#enemy-hp, #enemy-defense, #enemy-damage_cut, #enemy-damage_absorb').on('change', ()=>{
		const enemy_ary = ['enemy-hp', 'enemy-defense', 'enemy-damage_cut', 'enemy-damage_absorb'];
		for (let v of enemy_ary) {
			const input_parameter = commaRemove($('#' + v).val());
			enemy_parameter[v.substr(v.indexOf('-') + 1)] = parseInt(input_parameter);
			$('#' + v).val(commaAdd(input_parameter));
		}
	});
	$('#enemy-attribute-img > p').on('click', (e)=>{
		for (let v of $('#enemy-attribute-img > p')) {
			//v.style.backgroundColor = '';
			v.style.filter = 'grayscale(1)';
		}
		//e.currentTarget.style.backgroundColor = '#3ac';
		e.currentTarget.style.filter = 'grayscale(0)';
		enemy_parameter.attribute = e.currentTarget.children[0].getAttribute('alt');
	});
	$('#enemy-type > img').on('click', (e)=>{
		const MAX_TYPE_NUMBER = 3;//typeの数はこの数まで
		let rtn = []; //内部パラメータ一時的に
		if (e.currentTarget.style.backgroundColor == '') {
			if (MAX_TYPE_NUMBER == enemy_parameter.type.length) {
				for (let i=0; i < MAX_TYPE_NUMBER; i++) {
					if (0 == i) continue;
					rtn.push(enemy_parameter.type[i]);
				}
			} else {
				rtn = enemy_parameter.type;
			}
			rtn.push(e.currentTarget.getAttribute('title'));
		} else if (0 < enemy_parameter.type.length) {
			for (let v of enemy_parameter.type) {
				if (e.currentTarget.getAttribute('title') != v) rtn.push(v);
			}
		}
		enemy_parameter.type = rtn;
		//表示の変更
		for (let v of $('#enemy-type > img')) {
			if (rtn.find(type_title => type_title == v.getAttribute('title'))) {
				v.style.backgroundColor = '#3ac';
			} else {
				v.style.backgroundColor = '';
			}
		}
	});

	//計算結果をみるボタン
	$('#result-button').on('click', ()=>{
		// チームの攻撃力の取得
		let team_parameter = {};
		let team_whole_awaken = {//チームで影響する覚醒スキルの数を記録(conclusionから取得)
			plus_drop: {'火':0, '水':0, '木':0, '光':0, '闇':0, '回復':0}, //7% up
			row: {'火':0, '水':0, '木':0, '光':0, '闇':0} //15% up
		};
		for (let v of TEAM_ITERATOR) {
			team_parameter[v] = {
				primary: parseInt($(`#awaken-${v}-primary-atk`).html()) || 0,
				secondary: parseInt($(`#awaken-${v}-secondary-atk`).html()) || 0,
				recovery: parseInt($(`#awaken-${v}-recover`).html()) || 0
			};
			if (null != team_mns.main[v].AWAKEN) {
				for (let n of team_mns.main[v].AWAKEN) {
					if ('属性強化' == n.substr(1)) team_whole_awaken.row[n.substr(0, 1)]++;
					else if (0 < n.indexOf('ドロップ強化')) team_whole_awaken.plus_drop[n.substr(0, n.indexOf('ドロップ強化') + 1)]++;
				}
			}
			if (null != team_mns.main[v].chosen_super_awaken && false == $('#multi-flg').prop('checked')) {
				let n = team_mns.main[v].chosen_super_awaken;
				if ('属性強化' == n.substr(1)) team_whole_awaken.row[n.substr(0, 1)]++;
				else if (0 < n.indexOf('ドロップ強化')) team_whole_awaken.plus_drop[n.substr(0, n.indexOf('ドロップ強化') + 1)]++;
			}
			if (null != team_mns.assist[v].AWAKEN && "覚醒アシスト" == team_mns.assist[v].AWAKEN) {
				for (let n of team_mns.assist[v].AWAKEN) {
					if ('属性強化' == n.substr(1)) team_whole_awaken.row[n.substr(0, 1)]++;
					else if (0 < n.indexOf('ドロップ強化')) team_whole_awaken.plus_drop[n.substr(0, n.indexOf('ドロップ強化') + 1)]++;
				}
			}
		}
		let team_awaken = {};
		for (let v of TEAM_ITERATOR) {
			team_awaken[v] = {
				'2体攻撃': 0, 'コンボ強化': 0, '超コンボ強化': 0, 'ダメージ無効貫通': 0, '超追加攻撃': 0, 'キラー': 0,
				'HP80%以上強化': 0, 'HP50%以下強化': 0, '回復ドロップ強化': 0, 'ガードブレイク': 0
			};
			if (null != team_mns.main[v].AWAKEN) {
				for (let awaken of team_mns.main[v].AWAKEN) {
					if (awaken in team_awaken[v]) team_awaken[v][awaken]++;
					else if (enemy_parameter.type.find(type => type + 'キラー' == awaken)) team_awaken[v]['キラー']++;
				}
			}
			if (null != team_mns.main[v].chosen_super_awaken && false == $('#multi-flg').prop('checked')) {
				if (team_mns.main[v].chosen_super_awaken in team_awaken[v]) team_awaken[v][awaken]++;
				else if (enemy_parameter.type.find(type => type + 'キラー' == team_mns.main[v].chosen_super_awaken)) team_awaken[v]['キラー']++;
			}
			if (null != team_mns.assist[v].AWAKEN && "覚醒アシスト" == team_mns.assist[v].AWAKEN) {
				for (let awaken of team_mns.assist[v].AWAKEN) {
					if (awaken in team_awaken[v]) team_awaken[v][awaken]++;
					else if (enemy_parameter.type.find(type => type + 'キラー' == awaken)) team_awaken[v]['キラー']++;
				}
			}
		}
		//潜在覚醒のキラーを計算する!!
		let team_potential_awaken = {};
		for (let v of TEAM_ITERATOR) {
			team_potential_awaken[v] = 1;
			if (undefined == team_mns.main[v].potential_awaken) continue;
			for (let potential_awaken of team_mns.main[v].potential_awaken) {
				if (enemy_parameter.type.find(type => type + 'キラー' == potential_awaken.awaken_name)) team_potential_awaken[v]　*= 1.5;
			}
		}
		// コンボの取得
		const combo = getCombo();
		// ダメージの算出
		let damage_ary = {
			leader: {primary: 0, secondary: 0, damage: 0, recovery: 0},
			sub1: {primary: 0, secondary: 0, damage: 0, recovery: 0},
			sub2: {primary: 0, secondary: 0, damage: 0, recovery: 0},
			sub3: {primary: 0, secondary: 0, damage: 0, recovery: 0},
			sub4: {primary: 0, secondary: 0, damage: 0, recovery: 0},
			friend: {primary: 0, secondary: 0, damage: 0, recovery: 0},
		};
		// リーダースキル倍率
		let leader_skill = {
			atk_times: (parseInt($('#leader-skill-atk').val()) * parseInt($('#friend-leader-skill-atk').val())) || 1,
			recovery_times: (parseInt($('#leader-skill-recover').val()) * parseInt($('#friend-leader-skill-recover').val())) || 1
		};
		// 火力の計算
		for (let v of TEAM_ITERATOR) {
			for (let cmb of combo.combo_list) {
				if (team_mns.main[v].MAIN_ATTRIBUTE == cmb.attribute) {
					let hs = team_parameter[v].primary //素の攻撃力
						* leader_skill.atk_times//リーダースキル
						* (1 + (combo.total_combo_number - 1) * 0.25) //コンボ数
						* (1 + (cmb.drop_count - 3) * 0.25)//繋げたドロップ
						//マルチブーストは換算済み
						* Math.pow(3, team_awaken[v]['キラー']) //キラー(敵のタイプによる)
						* team_potential_awaken[v]
						* (1 + 0.15 * combo.row_count[cmb.attribute] * team_whole_awaken.row[cmb.attribute]);  //列強化
					//覚醒スキル
					if (7 <= combo.total_combo_number) hs *= Math.pow(2, team_awaken[v]['コンボ強化']);
					if (10 <= combo.total_combo_number) hs *= Math.pow(5, team_awaken[v]['超コンボ強化']);
					if (0 < cmb.plus_drop_count) hs *= (cmb.plus_drop_count * 0.06 + 1) * (team_whole_awaken.plus_drop[cmb.attribute] * 0.07 + 1);
					if (4 == cmb.drop_count) hs *= Math.pow(1.5, team_awaken[v]['2体攻撃']);
					if (cmb.square_flg) hs *= Math.pow(2.5, team_awaken[v]['ダメージ無効貫通']);
					if (0 < combo.recovery_square_count) hs *= 2 * combo.recovery_square_count;
					if ('hp-80' == $('#team-conclusion input[type="radio"]:checked').val()) hs *= Math.pow(1.5, team_awaken[v]['HP80%以上強化']);
					else if ('hp-50' == $('#team-conclusion input[type="radio"]:checked').val()) hs *= Math.pow(2, team_awaken[v]['HP50%以下強化']);
					damage_ary[v].primary += hs;
				}
				if (team_mns.main[v].SUB_ATTRIBUTE == cmb.attribute) {
					let hs = team_parameter[v].secondary //素の攻撃力
						* leader_skill.atk_times//リーダースキル
						* (1 + (combo.total_combo_number - 1) * 0.25) //コンボ数
						* (1 + (cmb.drop_count - 3) * 0.25) //繋げたドロップ
						//マルチブーストは換算済み
						* Math.pow(3, team_awaken[v]['キラー']) //キラー(敵のタイプによる)
						* team_potential_awaken[v]
						* (1 + 0.15 * combo.row_count[cmb.attribute] * team_whole_awaken.row[cmb.attribute]); //列強化
					//覚醒スキル
					if (7 <= combo.total_combo_number) hs *= Math.pow(2, team_awaken[v]['コンボ強化']);
					if (10 <= combo.total_combo_number) hs *= Math.pow(5, team_awaken[v]['超コンボ強化']);
					if (0 < cmb.plus_drop_count) hs *= (cmb.plus_drop_count * 0.06 + 1) * (team_whole_awaken.plus_drop[cmb.attribute] * 0.07 + 1);
					if (4 == cmb.drop_count) hs *= Math.pow(1.5, team_awaken[v]['2体攻撃']);
					if (cmb.square_flg) hs *= Math.pow(2.5, team_awaken[v]['ダメージ無効貫通']);
					if (0 < combo.recovery_square_count) hs *= 2 * combo.recovery_square_count;
					if ('hp-80' == $('#team-conclusion input[type="radio"]:checked').val()) hs *= Math.pow(1.5, team_awaken[v]['HP80%以上強化']);
					else if ('hp-50' == $('#team-conclusion input[type="radio"]:checked').val()) hs *= Math.pow(2, team_awaken[v]['HP50%以下強化']);
					damage_ary[v].secondary += hs;
				}
				if ('回復' == cmb.attribute) {
					let hs = team_parameter[v].recovery
						* leader_skill.recovery_times
						* (1 + (combo.total_combo_number - 1) * 0.25) //コンボ数
						* (1 + (cmb.drop_count - 3) * 0.25); //繋げたドロップ
					if (4 == cmb.drop_count) hs *= Math.pow(1.5, team_awaken[v]['回復ドロップ強化']);
					if (0 < cmb.plus_drop_count) hs *= (cmb.plus_drop_count * 0.06 + 1) * (team_whole_awaken.plus_drop[cmb.attribute] * 0.07 + 1);
					damage_ary[v].recovery += hs;
				}
			}
		}
		// 敵へのダメージ
		for (let v of TEAM_ITERATOR) {
			if (undefined == team_mns.main[v].NO) continue;
			let hs = damage_ary[v].primary * getAttributeMatchTimes(team_mns.main[v].MAIN_ATTRIBUTE, enemy_parameter.attribute);
			if (0 != damage_ary[v].primary) {
				hs -= (checkGuardBreak(team_awaken[v]['ガードブレイク'], combo.combo_list) ? 0 : enemy_parameter.defense);
			}
			if (enemy_parameter.damage_absorb_flg && enemy_parameter.damage_absorb <= hs) hs *= -1;
			if (enemy_parameter.damage_cut_flg) {
				if (team_awaken[v]['ダメージ無効貫通'] && combo.combo_list.find(cmb => cmb.square_flg && cmb.attribute == team_mns.main[v].MAIN_ATTRIBUTE)) {
					// 無効貫通した
				} else if (enemy_parameter.damage_cut < hs) {
					hs = 0;
				}
			}
			let hs2 = damage_ary[v].secondary * getAttributeMatchTimes(team_mns.main[v].SUB_ATTRIBUTE, enemy_parameter.attribute);
			if (0 != damage_ary[v].secondary) {
				hs2 -= (checkGuardBreak(team_awaken[v]['ガードブレイク'], combo.combo_list) ? 0 : enemy_parameter.defense);
			}
			if (enemy_parameter.damage_absorb_flg && enemy_parameter.damage_absorb <= hs2) hs2 *= -1;
			if (enemy_parameter.damage_cut_flg) {
				if (team_awaken[v]['ダメージ無効貫通'] && combo.combo_list.find(cmb => cmb.square_flg && cmb.attribute == team_mns.main[v].SUB_ATTRIBUTE)) {
					// 無効貫通した
				} else if (enemy_parameter.damage_cut < hs2) {
					hs2 = 0;
				}
			}
			damage_ary[v].damage = hs + ('無' == team_mns.main[v].SUB_ATTRIBUTE ? 0 : hs2);
			if (damage_ary[v].damage < 0) damage_ary[v].damage = 1;
		}
		// 表示
		let sum = {primary: 0, secondary: 0, damage: 0, recovery: 0};
		for (let v of TEAM_ITERATOR) {
			$(`#result-${v}-name`).html(team_mns.main[v].NAME);
			$(`#result-${v}-primary`).html(commaAdd(damage_ary[v].primary));
			$(`#result-${v}-primary`).css('background-color', getAttributeColor(team_mns.main[v].MAIN_ATTRIBUTE));
			$(`#result-${v}-secondary`).html(commaAdd(damage_ary[v].secondary));
			$(`#result-${v}-secondary`).css('background-color', getAttributeColor(team_mns.main[v].SUB_ATTRIBUTE));
			$(`#result-${v}-damage`).html(commaAdd(damage_ary[v].damage));
			$(`#result-${v}-recover`).html(damage_ary[v].recovery);
			sum.primary += damage_ary[v].primary;
			sum.secondary += damage_ary[v].secondary;
			sum.damage += damage_ary[v].damage;
			sum.recovery += damage_ary[v].recovery;
		}
		$(`#result-sum-primary`).html(commaAdd(sum.primary));
		$(`#result-sum-secondary`).html(commaAdd(sum.secondary));
		$(`#result-sum-damage`).html(commaAdd(sum.damage));
		$(`#result-sum-recover`).html(sum.recovery);
		$(`#result-percent-primary`).html(Math.round(1000 * sum.primary / sum.damage) / 10);
		$(`#result-percent-secondary`).html(Math.round(1000 * sum.secondary / sum.damage) / 10);
		$(`#result-percent-damage`).html(Math.round(1000 * sum.damage / enemy_parameter.hp) / 10);
		$(`#result-percent-recover`).html(Math.round(1000 * sum.recovery / parseInt($('#hp-conclusion').html())) / 10);
	});

	const getAttributeMatchTimes = (team_mns_attribute, enemy_attribute)=>{
		switch (team_mns_attribute) {
			case '火':
				if ('水' == enemy_attribute) return 0.5;
				else if ('木' == enemy_attribute) return 2;
				else return 1;
			case '水':
				if ('木' == enemy_attribute) return 0.5;
				else if ('火' == enemy_attribute) return 2;
				else return 1;
			case '木':
				if ('火' == enemy_attribute) return 0.5;
				else if ('水' == enemy_attribute) return 2;
				else return 1;
			case '光':
				if ('闇' == enemy_attribute) return 2;
				else return 1;
			case '闇':
				if ('光' == enemy_attribute) return 2;
				else return 1;
		}
		return 1;
	};

	//現在のmns_selectorの値を使用して、表示するリストを変更する
	const mnsSelectorView = ()=>{
		const MNS_SELECTOR_VIEW_NUM = 18;
		let rtn = '';
		// mns_dictionaryの一部。selectorで表示するもの
		let dictionary_parts_ary = [];
		if ("アシスト" == mns_selector.attribute) {
			dictionary_parts_ary = mns_dictionary.filter(v => !!v.AWAKEN && "覚醒アシスト" == v.AWAKEN[0]);
		} else {
			dictionary_parts_ary = mns_dictionary.filter(v => mns_selector.attribute == v.MAIN_ATTRIBUTE && !!v.AWAKEN && "覚醒アシスト" != v.AWAKEN[0]);
		}
		if (parseInt(dictionary_parts_ary.length / MNS_SELECTOR_VIEW_NUM) < mns_selector.page) {
			mns_selector.page = Math.ceil(dictionary_parts_ary.length / MNS_SELECTOR_VIEW_NUM);
		} else if (mns_selector.page < 1) {
			mns_selector.page = 1;
		}
		$('#selector-page').html(mns_selector.page + ' / ' + Math.ceil(dictionary_parts_ary.length / MNS_SELECTOR_VIEW_NUM));
		dictionary_parts_ary = getDictionarySort(dictionary_parts_ary);
		for (let i in dictionary_parts_ary) {// for-inとfor-ofの両方版がほしいわー
			const v = dictionary_parts_ary[i];
			if ((mns_selector.page - 1) * MNS_SELECTOR_VIEW_NUM <= i && i < mns_selector.page * MNS_SELECTOR_VIEW_NUM) {
				rtn += `<li class="${getAttributeClass(v)}" data-number="${v.NO}">
					<p>No.${v.NO} <span class="assist${v.ASSIST}">★${v.RARE}</span> ${getTypeImage(v.TYPE)}</p>
					<h6>${v.NAME}</h6><div>${setAwaken(v.AWAKEN)}</div></li>`;
			}
		}
		$('#selector-main').html(rtn);
	};
	// get color code
	const getAttributeColor = (attribute_name)=>{
		let rtn = '';
		if ("火" == attribute_name) rtn = '#f77';
		else if ("水" == attribute_name) rtn = '#77f';
		else if ("木" == attribute_name) rtn = '#6d6';
		else if ("光" == attribute_name) rtn = '#ffa';
		else if ("闇" == attribute_name) rtn = '#c5c';
		else if ("回復" == attribute_name) rtn = '#d88';
		return rtn;
	};
	const getAttributeClass = (mns)=>{
		let rtn = 'attribute';
		if ('火' == mns.MAIN_ATTRIBUTE) {
			rtn += '-1';
		} else if ('水' == mns.MAIN_ATTRIBUTE) {
			rtn += '-2';
		} else if ('木' == mns.MAIN_ATTRIBUTE) {
			rtn += '-3';
		} else if ('光' == mns.MAIN_ATTRIBUTE) {
			rtn += '-4';
		} else if ('闇' == mns.MAIN_ATTRIBUTE) {
			rtn += '-5';
		}
		if ('火' == mns.SUB_ATTRIBUTE) {
			rtn += '_1';
		} else if ('水' == mns.SUB_ATTRIBUTE) {
			rtn += '_2';
		} else if ('木' == mns.SUB_ATTRIBUTE) {
			rtn += '_3';
		} else if ('光' == mns.SUB_ATTRIBUTE) {
			rtn += '_4';
		} else if ('闇' == mns.SUB_ATTRIBUTE) {
			rtn += '_5';
		} else if ('無' == mns.SUB_ATTRIBUTE) {
			rtn += '_0';
		}
		// return param is for example -> 'attribute-1-1'
		return rtn;
	};

	const getDictionarySort = (dictionary_parts_ary)=>{
		let sorted_ary = [];
		let attribute_ary = ['火', '水', '木', '光', '闇', '無'];
		if ('属性 ↑' == mns_selector.sort) {
			const ATTRIBUTE = 'アシスト' == mns_selector.attribute ? 'MAIN_ATTRIBUTE' : 'SUB_ATTRIBUTE';
			for (let attribute_name of attribute_ary) {
				sorted_ary = sorted_ary.concat(dictionary_parts_ary.filter(v => attribute_name == v[ATTRIBUTE]));	
			}
		} else if ('属性 ↓' == mns_selector.sort) {
			const ATTRIBUTE = 'アシスト' == mns_selector.attribute ? 'MAIN_ATTRIBUTE' : 'SUB_ATTRIBUTE';
			for (let i = attribute_ary.length - 1; 0 <= i; i--) {
				sorted_ary = sorted_ary.concat(dictionary_parts_ary.filter(v => attribute_ary[i] == v[ATTRIBUTE]));	
			}
		} else if ('NO. ↑' == mns_selector.sort) {
			for (let i = dictionary_parts_ary.length - 1; 0 <= i; i--) {
				sorted_ary.push(dictionary_parts_ary[i]);
			}
		} else if ('NO. ↓' == mns_selector.sort) {
			sorted_ary = dictionary_parts_ary;
		}
		$('#sort-selector').html(mns_selector.sort);
		return sorted_ary;
	};

	const getTypeImage = (typeAry)=>{
		let rtn = '';
		for (let v of typeAry) {
			rtn += '<img src="img_type/' + v + '.png" title="' + v + '">';
		}
		return rtn;
	};

	const setAwaken = (awaken_ary)=>{
		let rtn = '';
		for (let v of awaken_ary) {
			rtn += `<img src="img_awaken/${v}.png" title="${v}">`;
		}
		return rtn;
	};

	const setSuperAwaken = (team_position, main_param)=>{
		if (undefined == main_param.SUPER_AWAKEN) {
			$('#' + team_position + '-super-awaken').html('');
			return '';
		}
		let rtn = '';
		for (let v of main_param.SUPER_AWAKEN) {
			rtn += `<label data-position="${team_position}" data-awaken="${v}">
				<input type="radio" name="${team_position}" ${main_param.chosen_super_awaken == v ? "checked":""}>
				<img src="img_awaken/${v}.png" title="${v}"></label>`;
		}
		$('#' + team_position + '-super-awaken').html(rtn);
	};

	const setConclusion = (sum_ary)=>{
		//覚醒スキルの入力
		for (let v of $('#awaken > li > img')) { //初期化
			v.nextSibling.innerHTML = 0;
		}
		for (let v of $('#awaken > li > img')) {
			let awaken_name = v.getAttribute('title');
			for (let i of TEAM_ITERATOR) {
				for (let aw in sum_ary[i].awaken) {
					if (awaken_name == aw) {
						v.nextSibling.innerHTML = sum_ary[i].awaken[awaken_name] + parseInt(v.nextSibling.innerHTML);
					}
				}
				// 超覚醒 sum_aryですでにawakenに入力済み
				/* if (0 < $('#' + i + '-super-awaken input[type="radio"]:checked').length) {
					let title = $('#' + i + '-super-awaken input[type="radio"]:checked')[0].nextElementSibling.getAttribute('title');
					if (awaken_name == title) {
						v.nextSibling.innerHTML = 1 + parseInt(v.nextSibling.innerHTML);
					}
				} */
			}
		}
		//パラメータの入力
		let sum = {hp: 0, atk: 0, recover: 0};
		for (let i of TEAM_ITERATOR) {
			if (null == team_mns.main[i].NO) continue;
			$('#awaken-' + i + '-hp').html(sum_ary[i].hp);
			$('#awaken-' + i + '-primary-atk').html(sum_ary[i].atk);
			$('#awaken-' + i + '-primary-atk').css('background-color', getAttributeColor(sum_ary[i].main_attribute));
			if ('無' != sum_ary[i].sub_attribute) {
				let secondary_atk = Math.round(sum_ary[i].atk * (sum_ary[i].main_attribute == sum_ary[i].sub_attribute ? 0.1 : (1 / 3)));
				sum.atk += secondary_atk;
				$('#awaken-' + i + '-secondary-atk').html(secondary_atk);
				$('#awaken-' + i + '-secondary-atk').css('background-color', getAttributeColor(sum_ary[i].sub_attribute));
			} else {
				$('#awaken-' + i + '-secondary-atk').html(0);
				$('#awaken-' + i + '-secondary-atk').css('background-color', 'white');
			}
			$('#awaken-' + i + '-recover').html(sum_ary[i].recover);
			sum.hp += sum_ary[i].hp;
			sum.atk += sum_ary[i].atk;
			sum.recover += sum_ary[i].recover;
		}
		$('#hp-conclusion').html(sum.hp);
		$('#atk-conclusion').html(sum.atk);
		$('#recover-conclusion').html(sum.recover);
	};

	// モンスター（テーブル）のパラメータを出します
	const getTableMnsParameter = (team_position, is_change_parameter)=>{
		let rtn = {hp: 0, atk: 0, recover: 0};
		if (null == team_mns.main[team_position].NO) return rtn;

		let is_110 = $('input[name="' + team_position + '-110"]').prop('checked');
		let base_parameter = {
			hp: is_110 ? +team_mns.main[team_position].SUPER_HP : +team_mns.main[team_position].HP,
			atk: is_110 ? +team_mns.main[team_position].SUPER_ATK : +team_mns.main[team_position].ATK,
			recover: is_110 ? +team_mns.main[team_position].SUPER_RECOVER : +team_mns.main[team_position].RECOVER
		};
		if ("param_change" in team_mns.main[team_position] && "unchange_parameter" != is_change_parameter) {
			//ユーザーがパラメータを直接入力した場合
			rtn.hp = team_mns.main[team_position].param_change.hp;
			rtn.atk = team_mns.main[team_position].param_change.atk;
			rtn.recover = team_mns.main[team_position].param_change.recover;
		} else if ("NO" in team_mns.assist[team_position] && team_mns.main[team_position].MAIN_ATTRIBUTE == team_mns.assist[team_position].MAIN_ATTRIBUTE) {
			//属性一致でボーナス
			rtn.hp += 990 + base_parameter.hp + 0.10 * parseInt(team_mns.assist[team_position].HP);
			rtn.atk += 495 + base_parameter.atk + 0.05 * parseInt(team_mns.assist[team_position].ATK);
			rtn.recover += 297 + base_parameter.recover + 0.15 * parseInt(team_mns.assist[team_position].RECOVER);
		} else {
			rtn.hp += 990 + base_parameter.hp;
			rtn.atk += 495 + base_parameter.atk;
			rtn.recover += 297 + base_parameter.recover;
		}
		//覚醒スキルのplus系(掛け算はconclusionで計算)
		let awaken_ary = {
			awaken: [
				{param: "hp", name: "HP強化", num: 0, add_value: 500},
				{param: "hp", name: "HP弱化", num: 0, add_value: -5000},
				{param: "atk", name: "攻撃強化", num: 0, add_value: 100},
				{param: "atk", name: "攻撃弱化", num: 0, add_value: -1000},
				{param: "recover", name: "回復強化", num: 0, add_value: 200},
				{param: "recover", name: "回復弱化", num: 0, add_value: -2000},
			],
			potential: [
				{param: "hp", name: "HP強化", num: 0, value: 1.5},
				{param: "atk", name: "攻撃強化", num: 0, value: 1},
				{param: "recover", name: "回復強化", num: 0, value: 10},
				{param: "hp", name: "全パラメータ強化", num: 0, value: 3},
				{param: "atk", name: "全パラメータ強化", num: 0, value: 2},
				{param: "recover", name: "全パラメータ強化", num: 0, value: 20},
				{param: "hp", name: "HP強化＋", num: 0, value: 4.5},
				{param: "atk", name: "攻撃強化＋", num: 0, value: 3},
				{param: "recover", name: "回復強化＋", num: 0, value: 30},
			]
		};
		//覚醒スキル修正
		for (let v of team_mns.main[team_position].AWAKEN) {
			for (let i in awaken_ary.awaken) {
				if (v == awaken_ary.awaken[i].name) awaken_ary.awaken[i].num++;
			}
		}
		if ("NO" in team_mns.assist[team_position] && "覚醒アシスト" == team_mns.assist[team_position].AWAKEN[0]) {
			for (let v of team_mns.assist[team_position].AWAKEN) {
				for (let i in awaken_ary.awaken) {
					if (v == awaken_ary.awaken[i].name) awaken_ary.awaken[i].num++;
				}
			}
		}
		if ("chosen_super_awaken" in team_mns.main[team_position]) {
			for (let i in awaken_ary.awaken) {
				if (awaken_ary.awaken[i].name == team_mns.main[team_position].chosen_super_awaken) awaken_ary.awaken[i].num++;
			}
		}
		//覚醒スキルのパラメータ反映
		for (let v of awaken_ary.awaken) {
			rtn[v.param] += v.num * v.add_value;
		}
		if ("potential_awaken" in team_mns.main[team_position] && 0 < team_mns.main[team_position].potential_awaken.length) {
			//集計
			for (let v of team_mns.main[team_position].potential_awaken) {
				for (let i in awaken_ary.potential) {
					if (awaken_ary.potential[i].name == v.awaken_name) awaken_ary.potential[i].num++;
				}
			}
			//潜在覚醒のパラメータ反映
			for (let v of awaken_ary.potential) {
				rtn[v.param] += v.num * v.value * base_parameter[v.param] / 100;
			}
		}
		return rtn;
	};

	// モンスターのパラメータをアシストかチームに設定
	const setMnsParameter = (number)=>{
		let selected_mns = {};
		//内部パラメータのセット
		for (let v of mns_dictionary) {
			if (v.NO == number) {
				if ('main' == mns_selector.select_role) {
					team_mns.main[mns_selector.select_position] = $.extend({}, v);
					// Lv110が無い時, 選択できなくする
					if (0 == v.SUPER_HP) $(`input[name="${mns_selector.select_position}-110"]`).attr('disabled', 'disabled');
					else $(`input[name="${mns_selector.select_position}-110"]`).removeAttr('disabled', 'disabled');
				} else { // assist
					team_mns.assist[mns_selector.select_position] = $.extend({}, v);
				}
				selected_mns = v;
				break;
			}
		}
		//表示の変更
		for (let v of $('tr.' + mns_selector.select_role + '-select > td')) {
			if (v.dataset.mns == mns_selector.select_position) {
				v.innerHTML = selected_mns.NAME;
				if (v.hasAttribute('class')) v.removeAttribute('class');
				v.setAttribute('class', getAttributeClass(selected_mns));
				break;
			}
		}
		setTeamParameter();
	};

	//team_mnsの値に基づいて、パラメータを表示
	const setTeamParameter = ()=>{
		// conclusionの覚醒とパラメータを設定
		let sum_ary = {/*leader:{hp: 0, atk: 0, recover: 0, awaken: {}}*/};
		let team_awaken = {"チームHP強化":0, "チーム回復強化":0};
		let multi_flg = $('#multi-flg').prop('checked');
		//覚醒スキルの集計のfor
		for (let v of TEAM_ITERATOR) {
			let awaken_conclusion = {};
			let potential_ary = {};
			if ("NO" in team_mns.main[v]) {
				for (let aw of team_mns.main[v].AWAKEN) {
					if (aw in awaken_conclusion) {
						awaken_conclusion[aw]++;
					} else {
						awaken_conclusion[aw] = 1;
					}
					for (let ta in team_awaken) {
						if (ta == aw) team_awaken[ta]++;
					}
				}
			}
			if ("chosen_super_awaken" in team_mns.main[v]) {
				if (team_mns.main[v].chosen_super_awaken in awaken_conclusion) {
					awaken_conclusion[team_mns.main[v].chosen_super_awaken]++;
				} else {
					awaken_conclusion[team_mns.main[v].chosen_super_awaken] = 1;
				}
				for (let ta in team_awaken) {
					if (ta == team_mns.main[v].chosen_super_awaken) team_awaken[ta]++;
				}
			}
			if ("potential_awaken" in team_mns.main[v]) { // <- いる？
				for (let aw of team_mns.main[v].potential_awaken) {
					if (aw.awaken_name in potential_ary) {
						potential_ary[aw.awaken_name]++;
					} else {
						potential_ary[aw.awaken_name] = 1;
					}
				}
			}
			if ("NO" in team_mns.assist[v]) {
				for (let i in team_mns.assist[v].AWAKEN) {
					let aw = team_mns.assist[v].AWAKEN[i];
					if (0 == i && "覚醒アシスト" != aw) break;
					if (aw in awaken_conclusion) {
						awaken_conclusion[aw]++;
					} else {
						awaken_conclusion[aw] = 1;
					}
					for (let ta in team_awaken) {
						if (ta == aw) team_awaken[ta]++;
					}
				}
			}
			sum_ary[v] = {
				main_attribute: team_mns.main[v].MAIN_ATTRIBUTE, sub_attribute: team_mns.main[v].SUB_ATTRIBUTE,
				hp: 0, atk: 0, recover: 0, awaken: awaken_conclusion, potential: potential_ary
			};
		}
		//team_mns変数の値全部を反映(team_tableに入れる値)
		let team_parameter = {/* leader:{hp: 0, atk: 0, recover: 0}, ... */};
		for (let v of TEAM_ITERATOR) {
			team_parameter[v] = getTableMnsParameter(v, "");
			if ("NO" in team_mns.main[v]) {
				if ("NO" in team_mns.assist[v] && "覚醒アシスト" == team_mns.assist[v].AWAKEN[0]) {
					$('#' + v + '-awaken').html(setAwaken(team_mns.main[v].AWAKEN) + setAwaken(team_mns.assist[v].AWAKEN));
				} else {
					$('#' + v + '-awaken').html(setAwaken(team_mns.main[v].AWAKEN));
				}
				setSuperAwaken(v, team_mns.main[v]);
			} else { //mainが空っぽ
				$('#' + v + '-awaken').html('');
				$('#' + v + '-super-awaken').html('');
			}
			$('#' + v + '-hp').val(Math.round(team_parameter[v].hp));
			$('#' + v + '-atk').val(Math.round(team_parameter[v].atk));
			$('#' + v + '-recover').val(Math.round(team_parameter[v].recover));
		}
		//各パラメータの入力のfor
		for (let v of TEAM_ITERATOR) {
			let awaken_times = {
				hp: (multi_flg ? Math.pow(1.5, sum_ary[v].awaken["マルチブースト"] || 0) : 1) + (0 < sum_ary[v].awaken["チームHP強化"] ? (sum_ary[v].awaken["チームHP強化"] * 0.05): 0),
				atk: (multi_flg ? Math.pow(1.5, sum_ary[v].awaken["マルチブースト"] || 0) : 1),
				recover: (multi_flg ? Math.pow(1.5, sum_ary[v].awaken["マルチブースト"] || 0) : 1) + (0 < sum_ary[v].awaken["チーム回復強化"] ? (sum_ary[v].awaken["チーム回復強化"] * 0.1): 0),
			};
			// ステータス加算系 -> ステータス掛算系 の演算
			sum_ary[v].hp = Math.round(team_parameter[v].hp * awaken_times.hp);
			if (sum_ary[v].hp < 1) sum_ary[v].hp = 1;
			sum_ary[v].atk = Math.round(team_parameter[v].atk * awaken_times.atk);
			if (sum_ary[v].atk < 1) sum_ary[v].atk = 1;
			sum_ary[v].recover = Math.round(team_parameter[v].recover * awaken_times.recover);
		}
		setConclusion(sum_ary);
	};

	const getAttachablePotential = (type_ary)=>{
		if (undefined == type_ary) return [];
		let rtn = [];
		for (let type of type_ary) {
			if ('ドラゴン' == type) {
				rtn.push('回復キラー');
				rtn.push('マシンキラー');
			} else if ('神' == type) {
				rtn.push('悪魔キラー');
			} else if ('悪魔' == type) {
				rtn.push('神キラー');
			} else if ('マシン' == type) {
				rtn.push('神キラー');
				rtn.push('バランスキラー');
			} else if ('体力' == type) {
				rtn.push('マシンキラー');
				rtn.push('回復キラー');
			} else if ('攻撃' == type) {
				rtn.push('体力キラー');
				rtn.push('悪魔キラー');
			} else if ('回復' == type) {
				rtn.push('ドラゴンキラー');
				rtn.push('攻撃キラー');
			} else if ('バランス' == type) {
				rtn.push('ドラゴンキラー');
				rtn.push('神キラー');
				rtn.push('悪魔キラー');
				rtn.push('マシンキラー');
				rtn.push('体力キラー');
				rtn.push('攻撃キラー');
				rtn.push('回復キラー');
				rtn.push('バランスキラー');
			}
		}
		return uniq(rtn);
	};

	// 配列の中身の重複を消す
	const uniq = (array)=>{
		return array.filter((elem, index, self)=> self.indexOf(elem) === index);
	};
	// 数値の大きいやつに,を追加して見やすくする
	const commaRemove = (str)=>{
		let rtn = '';
		while (-1 != str.indexOf(',')) {
			rtn += str.substr(0, str.indexOf(','));
			str = str.substr(str.indexOf(',') + 1);
		}
		rtn += str;
		return parseInt(rtn);
	}; 

	const commaAdd = (number)=>{
		let rtn = '';
		let number_str = Math.round(number) + '';
		while (3 <= number_str.length) {
			if ('-' == number_str.substr(0, 1) && 4 == number_str.length) {
				rtn = number_str + rtn;
				number_str = '';
				break;
			}
			rtn = number_str.substr(number_str.length - 3) + (0 < rtn.length ? (',' + rtn) : rtn);
			number_str = number_str.substr(0, number_str.length - 3);
		}
		if (0 < number_str.length && 3 <= rtn.length) rtn = number_str + ',' + rtn;
		return rtn || '0';
	};

	const getCombo = ()=>{
		let rtn = [];
		let row_count = {'火':0, '水':0, '木':0, '光':0, '闇':0};
		let recovery_square_count = 0;
		for (let i = 1; i <= 14; i++) {
			const combo_attribute = $('#combo-attribute-' + i).val();
			if ('無' != combo_attribute) {
				rtn.push({
					attribute: combo_attribute,
					drop_count: $('#combo-drop-count-' + i).val(),
					plus_drop_count: $('#combo-plus-drop-count-' + i).val(),
					Lform_flg: $('#combo-Lform-flg-' + i).prop('checked'),
					square_flg: $('#combo-square-flg-' + i).prop('checked')
				});
				if ($('#combo-row-flg-' + i).prop('checked')) {
					row_count[combo_attribute]++;
					if ('回復' == combo_attribute) recovery_square_count++;
				}
			}
		}
		return {
			row_count: row_count,//属性強化用(合計で列消しを何回したか)
			recovery_square_count: recovery_square_count, //超追加攻撃用(合計で何回回復9個消ししたか)
			combo_list: rtn,
			total_combo_number: $('#total-combo-number').val()
		};
	};

	const checkGuardBreak = (guard_break_number, combo_list) => {
		if (!guard_break_number) return false;
		// チーム内で全属性をもっているか
		let team_attribute_list = [
			{attribute:'火', count:0},
			{attribute:'水', count:0},
			{attribute:'木', count:0},
			{attribute:'光', count:0},
			{attribute:'闇', count:0},
		];
		for (let v of TEAM_ITERATOR) {
			for (let i in team_attribute_list) {
				if (team_attribute_list[i].attribute == team_mns.main[v].MAIN_ATTRIBUTE) team_attribute_list[i].count++;
				if (team_attribute_list[i].attribute == team_mns.main[v].SUB_ATTRIBUTE) team_attribute_list[i].count++;
			}
		}
		if (team_attribute_list.find(v => 0 == v.count)) return false;
		// 全属性で攻撃しているか
		let combo_attribute_list = [
			{attribute:'火', count:0},
			{attribute:'水', count:0},
			{attribute:'木', count:0},
			{attribute:'光', count:0},
			{attribute:'闇', count:0},
		];
		for (let v of combo_list) {
			for (let i in combo_attribute_list) {
				if (combo_attribute_list[i].attribute == v.attribute) combo_attribute_list[i].count++;
				if (combo_attribute_list[i].attribute == v.attribute) combo_attribute_list[i].count++;
			}
		}
		if (combo_attribute_list.find(v => 0 == v.count)) return false;
	};

});