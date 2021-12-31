class PerfectNutrient {
	/* 
		new PerfectNutrient(
			getForServing(),
			[...document.getElementById(`contain-menu-list`).children].map(v => v.value),
			[...document.getElementById(`not-contain-menu-list`).children].map(v => v.value),
			$('#can-duplicate-menu-flg').prop('checked'),
			excluding_nutrients
		)
	*/
	constructor(serving, adopted_menus, unadopted_menus, can_duplicate_menu_flg, excluding_nutrients){
		this.serving_rate = serving.serving_rate;
		this.nutrients = serving.nutrients;
		this.can_duplicate_menu_flg = can_duplicate_menu_flg;
		this.excluding_nutrients = excluding_nutrients;
		this.selectable_menus = JSON.parse(localStorage.getItem('menu'));
		this.adopted_menus = [];
		if (0 < adopted_menus.length) {
			for (let adopting_menu_name of adopted_menus) {
				for (let i in this.selectable_menus) {
					if (adopting_menu_name == this.selectable_menus[i].name) {
						this.adopted_menus.push(this.selectable_menus[i]);
						break;
					}
				}
			}
		}		
		// unadopted_menusから作成
		if (0 < unadopted_menus.length) {
			for (let unadopting_menu_name of unadopted_menus) {
				for (let i in this.selectable_menus) {
					if (unadopting_menu_name == this.selectable_menus[i].name) {
						this.selectable_menus.splice(i, 1);
						break;
					}
				}
			}
		}
	}

	/**
	 * 評価した後、すぐ後ろの料理(menus)を検証位置(rtn.menus)に用意する。それを繰り返す(再帰関数はコールスタック的にもダメ。)
	 * 料理がABCの3種存在していた時、配列要素を一つずつ追加していって、後ろから取り除いていって、全組み合わせを試す（AB -> ABC -> AC -> BC -> C）
	 */
	async wholeMenu(){
		let rtn = {
			menus: [this.adopted_menus.concat([])],
			perfect_menus: [],
			incompletes: {menus: [{}, {}, {}], score: [0, 0, 0]},
			iterator: {pattern: 0, selectable_menu: 0},
			candidate_menus: this.adopted_menus.concat([])
		};
    //料理群の評価 → 栄養アンバランス、栄養不足で料理追加、メニュー完成 を返す
		const evaluateMenuNutrients = (rtn)=>{
			const menus = rtn.menus[rtn.menus.length - 1].concat([]);
			let comment = `メニュー完成`;
			let nutrient_score = 0;
			// 現在含まれる栄養素を取得して100％に満たないものがあるか判定して、栄養素を返す
			for (const a_nutrient_name in this.nutrients) {
				let added_value = 0;
				for (const a_menu of menus) {
					for (const a_material of a_menu.materials) {
						added_value += parseFloat( (a_material.nutrients[a_nutrient_name] || 0) / (a_menu.serving || 1) );
					}
				}
				if (this.excluding_nutrients.includes(a_nutrient_name)) {
					if (0 != this.nutrients[a_nutrient_name].limit && this.nutrients[a_nutrient_name].limit * this.serving_rate <= added_value) comment = `栄養アンバランス`;
				}	else if (`calory` == a_nutrient_name && this.nutrients[`calory`].need * this.serving_rate * 1.2 < added_value) {
					comment = `栄養アンバランス`;
				}	else if (0 != this.nutrients[a_nutrient_name].limit && this.nutrients[a_nutrient_name].limit * this.serving_rate <= added_value) {
					comment = `栄養アンバランス`;
				} else {
					const score_point = parseFloat(100 * added_value / (this.nutrients[a_nutrient_name].need * this.serving_rate));
					// scoreにはカロリー等は入れない
					nutrient_score += 100 < score_point ? 100 : score_point;
					if (`栄養アンバランス` != comment && added_value <= this.nutrients[a_nutrient_name].need * this.serving_rate) {
						comment = `栄養不足で料理追加`;
					}
				}
			}
			if (`栄養不足で料理追加` == comment) {
				for (let i in rtn.incompletes.score) {
					if (rtn.incompletes.score[i] < nutrient_score) {
						rtn.incompletes.menus.splice(i, 0, menus);
						rtn.incompletes.menus.length--;
						rtn.incompletes.score.splice(i, 0, nutrient_score);
						rtn.incompletes.score.length--;
						break;
					}
				}
			}
			return comment;
		};
		//料理の組み合わせを否定して、末端の別の料理を上書き
		const nextMenu = (rtn, selectable_menus)=>{
			//(一個前の料理を消して、)今のカーソル(iterator)位置の料理を入れる
			rtn.iterator.selectable_menu++;
			if (selectable_menus.length <= rtn.iterator.selectable_menu && 2 + rtn.candidate_menus.length < rtn.menus[rtn.iterator.pattern].length) {
				//すでに一番後ろだった場合
				rtn.menus[rtn.iterator.pattern].length--; //一番後ろを切る(× slice、○ length--)
				const last_menu = rtn.menus[rtn.iterator.pattern][ rtn.menus[rtn.iterator.pattern].length - 1 ];
				for (const i in selectable_menus) {
					if (last_menu.name == selectable_menus[i].name) {
						//次の料理を選択
						rtn.iterator.selectable_menu = (selectable_menus.length <= parseInt(i) + 1) ? (selectable_menus.length + 0) : (parseInt(i) + 1);
						break;
					}
				}
			}
			if (rtn.iterator.selectable_menu < selectable_menus.length) {
				//上書きしつつ、一つ後ろの料理に変更
				rtn.menus[rtn.iterator.pattern][ rtn.menus[rtn.iterator.pattern].length - 1 ] = selectable_menus[rtn.iterator.selectable_menu];
			} else {
				//次の料理セットへ
				rtn.iterator.pattern++;
				rtn.iterator.selectable_menu = rtn.menus.length + 0;
				if (selectable_menus.length <= rtn.menus.length) return false;
				rtn.menus[rtn.iterator.pattern] = rtn.candidate_menus.concat([]);
				rtn.menus[rtn.iterator.pattern].push(Object.assign(selectable_menus[rtn.iterator.selectable_menu], {}));
			}
			return true;
		};
		//栄養が足りないので単純に次の料理を追加
		const addMenu = (rtn, selectable_menus)=>{
			//新しい料理の組み合わせ（ひとつ前の登録されたmenu_aryの先頭をselectable_menusから取り除いて全通り）
			rtn.iterator.selectable_menu++;
			if (selectable_menus.length <= rtn.iterator.selectable_menu) {
				// 用意されている料理が無くなったので、完成された料理を返す
				if (selectable_menus.length <= rtn.iterator.pattern || selectable_menus.length <= rtn.menus.length) return false;
				rtn.iterator.pattern++;
				rtn.iterator.selectable_menu = rtn.iterator.pattern + 0;
				rtn.menus[rtn.iterator.pattern] = rtn.candidate_menus.concat([]);
				rtn.menus[rtn.iterator.pattern].push(Object.assign(selectable_menus[rtn.iterator.selectable_menu], {}));
			} else {
				rtn.menus[rtn.iterator.pattern].push(Object.assign(selectable_menus[rtn.iterator.selectable_menu], {}));
			}
			return true;
		};
		while (true) {
			const comment = evaluateMenuNutrients(rtn);
			if (`栄養アンバランス` == comment) { //失敗
				const continue_flg = nextMenu(rtn, this.selectable_menus);
				if (!continue_flg) break;
			} else if (`栄養不足で料理追加` == comment) {
				const continue_flg = addMenu(rtn, this.selectable_menus);
				if (!continue_flg) break;
			} else if (`メニュー完成` == comment) {
				rtn.perfect_menus.push(rtn.menus[rtn.iterator.pattern].concat([]));
				const continue_flg = nextMenu(rtn, this.selectable_menus);
				if (!continue_flg) break;
			}
		}
		return rtn;
	}

	async extractMenu(){
		const checkContainMenu = (check_menus, a_menu_name)=>{
			let can_continue_flg = false;
			if (!this.can_duplicate_menu_flg && 0 < check_menus.length) {
				for (let v of check_menus) {
					if (a_menu_name == v.name) {
						can_continue_flg = true;
						break;
					}
				}
			}
			return can_continue_flg;
		};
		const selectableMenus = (check_menus)=>{
			let selectable_menu_ary = [];
			if (this.can_duplicate_menu_flg) {
				return this.selectable_menus.concat([]);
			}
			for (let v of this.selectable_menus) {
				let is_exist_flg = false;
				if (0 < check_menus.length) {
					for (let w of check_menus) {
						if (w.name == v.name) is_exist_flg = true;
					}
				}
				if (!is_exist_flg) selectable_menu_ary.push(v);
			}
			return selectable_menu_ary;
		};
		// 栄養素が足りているかチェック
		const getLackNutrients = (menus_ary)=>{
			let enough_flg = true;
			let survey_nutrients_ary = [];
			// 現在含まれる栄養素を取得して100％に満たないものがあるか判定して、栄養素を返す
			for (const a_nutrient_name in this.nutrients) {
				let added_value = 0;
				for (const a_menu of menus_ary) {
					for (const a_material of a_menu.materials) {
						added_value += parseFloat(100 * (a_material.nutrients[a_nutrient_name] || 0) / (a_menu.serving || 1) / (this.nutrients[a_nutrient_name].need * this.serving_rate));
					}
				}
				survey_nutrients_ary.push({value: added_value, name: a_nutrient_name});
				if (added_value < 100 && !this.excluding_nutrients.includes(a_nutrient_name)) enough_flg = false;
			}
			// ソート
			if (0 < survey_nutrients_ary.length) {
				survey_nutrients_ary.sort((a,b)=>{
					if (a.value < b.value) return -1;
					if (a.value < b.value) return 1;
					return 0;
				});
			}
			return {enough_flg: enough_flg, survey_nutrients_ary: survey_nutrients_ary};
		};
		// 優秀な料理を見つける（カロリー↓とビタミンミネラル↑）
		const getRichNutrientsMenu = (menu_ary, survey_nutrients_ary)=>{
			let evaluation = {value: 0, best: 0, best_menu: {}};
			if (0 < menu_ary.length) {
				for (const a_menu of menu_ary) {
					let limit_over_flg = false;
					for (const a_material of a_menu.materials) {
						if (limit_over_flg) break;
						for (const v of survey_nutrients_ary) {
							if (0 == this.nutrients[v.name].need) continue;
							const nutrient_rate = parseFloat(100 * (a_material.nutrients[v.name] || 0) / (a_menu.serving || 1) / (this.nutrients[v.name].need*this.serving_rate));
							/*if (this.excluding_nutrients.includes(v.name)) {
								// 糖質とタンパク質と脂質は考慮に入れない
								if (['calory', 'carbo', 'protein', 'oil', `n_6`].includes(v.name)) {
									if (`calory` == v.name && 1.2 * 100 <= v.value + nutrient_rate) limit_over_flg = true;
									else if (0 != this.nutrients[v.name].limit && this.nutrients[v.name].limit * 100 / this.nutrients[v.name].need < v.value + nutrient_rate) limit_over_flg = true;
								}
							} else*/ if (0 != this.nutrients[v.name].limit && this.nutrients[v.name].limit * 100 / this.nutrients[v.name].need < v.value + nutrient_rate) {
								// 過剰摂取になる場合、候補に入れないようにする
								limit_over_flg = true;
							} else if (`calory` == v.name && 1.2 * 100 <= v.value + nutrient_rate) {
								limit_over_flg = true;
							} else {
								// 不足している分だけを評価する
								if (v.value < 100 && !this.excluding_nutrients.includes(v.name)) {
									evaluation.value += (100 < v.value + nutrient_rate) ? (100 - v.value) : nutrient_rate;
								}
							}
						}
					}
					if (evaluation.best < evaluation.value && !limit_over_flg) {
						evaluation = {value: 0, best: evaluation.value + 0, best_menu: Object.assign(a_menu, {})};
					} else {
						evaluation.value = 0;
					}
				}
			}
			return evaluation.best_menu;
		};
		let ret_menus = {perfect: [], unperfect: []};
		for (const a_menu of this.selectable_menus) {
			let check_menus = this.adopted_menus.concat([]); //concatしないと同一になってしまう
			// 重複しないようにする時、採用する料理に入っているものを選ばない
			if (checkContainMenu(check_menus, a_menu.name)) continue;
			check_menus.push(a_menu);
			// 選択可能な料理の配列を用意
			let selectable_menu_ary = selectableMenus(check_menus);
			// これまでの加算した栄養素の欠点を埋める料理を見つける
			while (true) {
				const ret = getLackNutrients(check_menus);
				if (!ret.enough_flg) {
					const selected_menu = getRichNutrientsMenu(selectable_menu_ary, ret.survey_nutrients_ary);
					if (0 == Object.keys(selected_menu).length) {
						ret_menus.unperfect.push(check_menus);
						break;
					} else {
						check_menus.push(selected_menu);
						if (!this.can_duplicate_menu_flg) {
							// selected_menuを弾く
							for (let i in selectable_menu_ary) {
								if (selected_menu.name == selectable_menu_ary[i].name) {
									selectable_menu_ary.splice(i, 1);
									break;
								}
							}
						}
					}
				} else {
					ret_menus.perfect.push(check_menus);
					break;
				}
			}
		}
		return ret_menus;
	}
}