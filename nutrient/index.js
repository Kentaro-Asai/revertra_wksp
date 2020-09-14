$(function(){
	const unselect_option = '- 選択してください -';
	const standard_nutrient = {
		calory: {unit:'kcal', label:'カロリー'},
		carbo: {unit:'g', label:'糖質'},
		fiber: {unit:'g', label:'食物繊維'},
		protein: {unit:'g', label:'タンパク質'},
		oil: {unit:'g', label:'脂質'}
	};
	const nutrient_table = {
		vitamin: {
			A: { //年齢:[目安or推奨, 上限]
				male: {2:[400,600], 5:[500,700], 7:[450,900], 9:[500,1200], 11:[600,1500], 14:[800,2100], 17:[900,2600], 29:[850,2700], 49:[900,2700], 69:[850,2700], 70:[800,2700]},
				female: {2:[350,600], 5:[400,700], 7:[400,900], 9:[500,1200], 11:[600,1500], 14:[700,2100], 17:[650,2600], 29:[650,2700], 49:[700,2700], 69:[700,2700], 70:[650,2700]},
				unit: 'μgRAE',
				label: "ビタミンA"
			},
			B1: {
				male: {2:[0.5,0],5:[0.7,0],7:[0.8,0],9:[1.0,0],11:[1.2,0],14:[1.4,0],17:[1.5,0],29:[1.4,0],49:[1.4,0],69:[1.3,0],70:[1.2,0]},
				female: {2:[0.5,0],5:[0.7,0],7:[0.8,0],9:[0.9,0],11:[1.1,0],14:[1.3,0],17:[1.2,0],29:[1.1,0],49:[1.1,0],69:[1.0,0],70:[0.9,0]},
				unit: 'mg',
				label: "ビタミンB1"
			},
			B2: {
				male: {2:[0.6,0],5:[0.8,0],7:[0.9,0],9:[1.1,0],11:[1.4,0],14:[1.6,0],17:[1.7,0],29:[1.6,0],49:[1.6,0],69:[1.5,0],70:[1.3,0]},
				female: {2:[0.5,0],5:[0.8,0],7:[0.9,0],9:[1.0,0],11:[1.3,0],14:[1.4,0],17:[1.4,0],29:[1.2,0],49:[1.2,0],69:[1.1,0],70:[1.1,0]},
				unit: 'mg',
				label: "ビタミンB2"
			},
			B6: {
				male: {2:[0.5,10],5:[0.6,15],7:[0.8,20],9:[0.9,25],11:[1.2,30],14:[1.4,40],17:[1.5,50],29:[1.4,55],49:[1.4,60],69:[1.4,55],70:[1.4,50]},
				female: {2:[0.5,10],5:[0.6,15],7:[0.7,20],9:[0.9,25],11:[1.2,30],14:[1.3,40],17:[1.3,45],29:[1.2,45],49:[1.2,45],69:[1.2,45],70:[1.2,40]},
				unit: 'mg',
				label: "ビタミンB6"
			},
			B12: {
				male: {2:[0.9,0],5:[1.0,0],7:[1.3,0],9:[1.5,0],11:[1.8,0],14:[2.3,0],17:[2.5,0],29:[2.4,0],49:[2.4,0],69:[2.4,0],70:[2.4,0]},
				female: {2:[0.9,0],5:[1.0,0],7:[1.3,0],9:[1.5,0],11:[1.8,0],14:[2.3,0],17:[2.5,0],29:[2.4,0],49:[2.4,0],69:[2.4,0],70:[2.4,0]},
				unit: 'μg',
				label: "ビタミンB12"
			},
			C: {
				male: {2:[35,0],5:[40,0],7:[55,0],9:[60,0],11:[75,0],14:[95,0],17:[100,0],29:[100,0],49:[100,0],69:[100,0],70:[100,0]},
				female: {2:[35,0],5:[40,0],7:[55,0],9:[60,0],11:[75,0],14:[95,0],17:[100,0],29:[100,0],49:[100,0],69:[100,0],70:[100,0]},
				unit: 'mg',
				label: "ビタミンC"
			},
			D: {
				male: {2:[2,20], 5:[2.5,30], 7:[3,40], 9:[3.5,40], 11:[4.5,60], 14:[5.5,80], 17:[6,90], 29:[5.5,100], 49:[5.5,100], 69:[5.5,100], 70:[5.5,100]},
				female: {2:[5.0, 25], 5:[5.0, 25], 7:[2.0, 20], 9:[2.5, 30], 11:[3.0, 40], 14:[3.5, 40], 17:[4.5, 60], 29:[5.5, 80], 49:[6.0, 90], 69:[5.5, 100], 70:[5.5, 100]},
				unit: 'μg',
				label: "ビタミンD"
			},
			E: {
				male: {2:[3.5,150],5:[4.5,200],7:[5.0,300],9:[5.5,350],11:[5.5,450],14:[7.5,650],17:[7.5,750],29:[6.5,800],49:[6.5,900],69:[6.5,850],70:[6.5,750]},
				female: {2:[3.5,150],5:[4.5,200],7:[5.0,300],9:[5.5,350],11:[5.5,450],14:[6.0,600],17:[6.0,650],29:[6.0,650],49:[6.0,700],69:[6.0,700],70:[6.0,650]},
				unit: 'mg',
				label: "ビタミンE"
			},
			K: {
				male: {2:[60,0],5:[70,0],7:[85,0],9:[100,0],11:[120,0],14:[150,0],17:[160,0],29:[150,0],49:[150,0],69:[150,0],70:[150,0]},
				female: {2:[60,0],5:[70,0],7:[85,0],9:[100,0],11:[120,0],14:[150,0],17:[160,0],29:[150,0],49:[150,0],69:[150,0],70:[150,0]},
				unit: 'μg',
				label: "ビタミンK"
			}
		},
		mineral: {
			Na: {
				male: {2:[0,3.0],5:[0,4.0],7:[0,5.0],9:[0,5.5],11:[0,6.5],14:[0,8.0],17:[0,8.0],29:[0,8.0],49:[0,8.0],69:[0,8.0],70:[0,8.0]},
				female: {2:[0,3.5],5:[0,4.5],7:[0,5.5],9:[0,6.0],11:[0,7.0],14:[0,7.0],17:[0,7.0],29:[0,7.0],49:[0,7.0],69:[0,7.0],70:[0,7.0]},
				unit: 'g',
				label: "食塩相当量"
			},
			K: {
				male: {2:[900,0],5:[1100,0],7:[1800,0],9:[2000,0],11:[2200,0],14:[2600,0],17:[3000,0],29:[3000,0],49:[3000,0],69:[3000,0],70:[3000,0]},
				female:{2:[800,0],5:[1000,0],7:[1800,0],9:[2000,0],11:[2000,0],14:[2400,0],17:[2600,0],29:[2600,0],49:[2600,0],69:[2600,0],70:[2600,0]},
				unit: 'mg',
				label: "カリウム"
			},
			Ca: {
				male: {2:[450,0],5:[600,0],7:[600,0],9:[650,0],11:[700,0],14:[1000,0],17:[800,0],29:[800,2500],49:[650,2500],69:[700,2500],70:[700,2500]},
				female: {2:[400,0],5:[550,0],7:[550,0],9:[750,0],11:[750,0],14:[800,0],17:[650,0],29:[650,2500],49:[650,2500],69:[650,2500],70:[650,2500]},
				unit: 'mg',
				label: "カルシウム"
			},
			Mg: {
				male: {2:[70,0],5:[100,0],7:[130,0],9:[170,0],11:[210,0],14:[290,0],17:[360,0],29:[340,0],49:[370,0],69:[350,0],70:[320,0]},
				female: {2:[70,0],5:[100,0],7:[130,0],9:[160,0],11:[220,0],14:[290,0],17:[310,0],29:[270,0],49:[290,0],69:[290,0],70:[270,0]},
				unit: 'mg',
				label: "マグネシウム"
			},
			P: {
				male: {2:[500,0],5:[800,0],7:[900,0],9:[1000,0],11:[1100,0],14:[1200,0],17:[1200,0],29:[1000,3000],49:[1000,3000],69:[1000,3000],70:[1000,3000]},
				female: {2:[500,0],5:[600,0],7:[900,0],9:[900,0],11:[1000,0],14:[1100,0],17:[900,0],29:[800,3000],49:[800,3000],69:[800,3000],70:[800,3000]},
				unit: 'mg',
				label: "リン"
			},
			Fe: {
				male: {2:[4.5,25],5:[5.5,25],7:[6.5,30],9:[8.0,35],11:[10.0,35],14:[11.5,50],17:[9.5,50],29:[7.0,50],49:[7.5,55],69:[7.5,50],70:[7.0,50]},
				female: {2:[4.5,20],5:[5.0,25],7:[6.5,30],9:[8.5,35],11:[14.0,35],14:[14.0,50],17:[10.5,40],29:[10.5,40],49:[10.5,40],69:[10.5,40],70:[6.0,40]},
				unit: 'mg',
				label: "鉄"
			},
			Zn: {
				male: {2:[3,0],5:[4,0],7:[5,0],9:[6,0],11:[7,0],14:[9,0],17:[10,0],29:[10,40],49:[10,45],69:[10,45],70:[9,40]},
				female: {2:[3,0],5:[4,0],7:[5,0],9:[5,0],11:[7,0],14:[8,0],17:[8,0],29:[8,35],49:[8,35],69:[8,35],70:[7,35]},
				unit: 'mg',
				label: "亜鉛"
			},
			Cu: {
				male: {2:[0.3,0],5:[0.4,0],7:[0.5,0],9:[0.6,0],11:[0.7,0],14:[0.8,0],17:[1.0,0],29:[0.9,10],49:[1.0,10],69:[0.9,10],70:[0.9,10]},
				female: {2:[0.3,0],5:[0.4,0],7:[0.5,0],9:[0.5,0],11:[0.7,0],14:[0.8,0],17:[0.8,0],29:[0.8,10],49:[0.8,10],69:[0.8,10],70:[0.7,10]},
				unit: 'mg',
				label: "銅"
			}
		},
		amino_acid: {
			Trp:{dose:4,unit:'mg',label: "トリプトファン"}, Met:{dose:15,unit:'mg',label: "メチオニン"},
			Phe:{dose:25,unit:'mg',label: "フェニルアラニン"}, Thr:{dose:15,unit:'mg',label: "スレオニン"},
			Val:{dose:26,unit:'mg',label: "バリン"}, Leu:{dose:39,unit:'mg',label: "ロイシン"},
			Ile:{dose:20,unit:'mg',label: "イソロイシン"}, His:{dose:10,unit:'mg',label: "ヒスチジン"}, Lys:{dose:45,unit:'mg',label: "リジン"}
		}
	};
	//data in localStorage
	// body_parameter = {gender: "", height:160, ...}
	//menu contain materials(it's copies. because if you delete the material, could not regain menu). materials contain nutrients.
	// menu = [[{name:"", weight(g):""},{}], [{}]];
	// materials = [{name:"", weight(g):"", A:1,..}, {}];

	//Harris-Benedict式
	//http://fph.pref.fukui.lg.jp/introhospital/wp-content/uploads/sites/7/2014/08/doc3.pdf
	$('#your-nutrient input').on('change keydown focus blur', ()=>{
		const body_parameter = {
			gender: $('input[name="gender"]:checked').attr('id'),
			weight: parseFloat($('#body-weight').val()),
			height: parseFloat($('#body-height').val()),
			age: parseInt($('#body-age').val()),
			AF: parseFloat($('#your-nutrient input[name="AF"]:checked').val()),
			SF: parseFloat($('#your-nutrient input[name="SF"]:checked').val()),	
		};
		bodyParameterView(body_parameter);
		//memory your body
		localStorage.setItem('body_parameter', JSON.stringify(body_parameter));
	});

	const bodyParameterView = (body_parameter)=>{
		const gender = body_parameter.gender.substr(body_parameter.gender.indexOf('-') + 1);
		let wanted_energy = 0;
		if ('gender-male' == body_parameter.gender) {
			//BEE = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
			wanted_energy = 6600 + (1370 * body_parameter.weight) + (500 * body_parameter.height) - (680 * body_parameter.age);
			//energy = BEE * AF * SF
			wanted_energy *= (100 * body_parameter.AF) * (100 * body_parameter.SF) / 1000000;
		} else { //female
			//BEE = 655 + (9.6 * weight) + (1.7 * height) - (4.7 * age)
			wanted_energy = 65500 + (960 * body_parameter.weight) + (170 * body_parameter.height) - (470 * body_parameter.age);
			wanted_energy *= (100 * body_parameter.AF) * (100 * body_parameter.SF) / 1000000;
		}
		$('#need-calory').html(Math.round(wanted_energy));
		//タンパク質必要量
		$('#need-protein').html(10 * parseFloat($('#your-nutrient input[name="accelerate-protein"]:checked').val()) * body_parameter.weight / 10);
		//脂質必要量
		const need_oil = Math.round(wanted_energy * 25 / 90) / 10;
		$('#need-oil').html((need_oil <= 2.5 * body_parameter.weight) ? need_oil : (2.5 * body_parameter.weight));
		//食物繊維必要量
		const dietaly_fiber_table = {
			male: {7:11, 9:12, 11:13, 14:17, 17:19, 29:20, 49:20, 69:20, 70:19},
			female: {7:10, 9:12, 11:13, 14:16, 17:17, 29:18, 49:18, 69:18, 70:17}
		};
		let need_fiber = 0;
		for (let i in dietaly_fiber_table[gender]) {
			need_fiber = dietaly_fiber_table[gender][i];
			if (body_parameter.age <= i) break;
		}
		$('#need-fiber').html(need_fiber);
		//ビタミン
		//https://www.fukushihoken.metro.tokyo.lg.jp/kensui/ei_syo/katsuyou/ichinichi_eiyo/vitamin.html
		//https://www.tyojyu.or.jp/net/kenkou-tyoju/eiyouso/vitamin-b6.html
		let vitamin_ary = {A:[], B1:[], B2:[], B6:[], B12:[], C:[], D:[], E:[], K:[]};
		const vitamin_table = nutrient_table.vitamin;
		for (let a in vitamin_ary) {
			for (let i in vitamin_table[a][gender]) {
				vitamin_ary[a] = vitamin_table[a][gender][i];
				if (body_parameter.age <= i) break;
			}
			$('#need-vitamin' + a).html(vitamin_ary[a][0] + '～' + (0 == vitamin_ary[a][1] ? '' : vitamin_ary[a][1]));
		}
		//ミネラル
		// https://jp.glico.com/navi/e07-3.html
		let mineral_ary = {Na:[], K:[], Ca:[], Mg:[], P:[], Fe:[], Zn:[], Cu:[]};
		const mineral_table = nutrient_table.mineral;
		for (let a in mineral_ary) {
			for (let i in mineral_table[a][gender]) {
				mineral_ary[a] = mineral_table[a][gender][i];
				if (body_parameter.age <= i) break;
			}
			$('#need-' + a).html((0 == mineral_ary[a][0] ? '' : mineral_ary[a][0]) + '～' + (0 == mineral_ary[a][1] ? '' : mineral_ary[a][1]));
		}
		//必須アミノ酸
		// https://www.orthomolecular.jp/nutrition/amino/
		let amino_acid_ary = nutrient_table.amino_acid;
		for (let a in amino_acid_ary) {
			$('#need-' + a).html(amino_acid_ary[a].dose);
		}
	}; 
	
	// get body_parameter => view
	(function bodyParameter(){
			const body_parameter_str = localStorage.getItem('body_parameter');
			if (!!body_parameter_str) {
				const body_parameter = JSON.parse(body_parameter_str);
				$('#'+body_parameter.gender).attr('checked', 'checked');
				$('#body-weight').val(body_parameter.weight);
				$('#body-height').val(body_parameter.height);
				$('#body-age').val(body_parameter.age);
				for (let v of $('input[name="AF"]')) {
					if (v.value == body_parameter.AF) v.setAttribute('checked', 'checked');
					else v.removeAttribute('checked');
				}
				for (let v of $('input[name="SF"]')) {
					if (v.value == body_parameter.SF) v.setAttribute('checked', 'checked');
					else v.removeAttribute('checked');
				}
				bodyParameterView(body_parameter);
				// hide this input area.
				$('#your-input-area').css('display', 'none');
				$('#your-abstract').html(`${'gender-male' == body_parameter.gender ? '♂':'♀'} ${body_parameter.age}歳 身長 ${body_parameter.height}cm`);
			} else {
				// there is nothing in localStorage, because first visit.
				$('#your-abstract').css('display', 'none');
			}
	})();

	$('#your-abstract').on('click',()=>{
		$('#your-input-area').css('display','block');
		$('#your-abstract').css('display','none');
	});

	$('#your-input-area-button').on('click',()=>{
		// hide this input area.
		$('#your-input-area').css('display','none');
		const body_parameter_str = localStorage.getItem('body_parameter');
		if (!!body_parameter_str) {
			const body_parameter = JSON.parse(body_parameter_str);
			$('#your-abstract').html(`${'gender-male' == body_parameter.gender ? '♂':'♀'} ${body_parameter.age}歳 身長 ${body_parameter.height}cm`);
		}
		$('#your-abstract').css('display','block');
	});

	const setYourMenu = ()=>{
		const menu_str = localStorage.getItem('menu');
		if (!!menu_str) {
			const menu_ary = JSON.parse(menu_str);
			let sel_menu_str = menu_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
			$('#select-menu select').html('<option>'+unselect_option+'</option>' + sel_menu_str);
			$('#menu-creator-select').html('<option>新規メニュー</option>' + sel_menu_str);
		} else {
			$('#select-menu select').html('<option>- メニューが登録されていません -</option>');
			$('#menu-creator-select').html('<option>新規メニュー</option>');
			$('#menu-change-button').attr('disabled', 'disabled');
			$('#menu-delete-button').attr('disabled', 'disabled');
		}
	};

	//引数と現在の状況に合わせて中身を作り変える。引数にパラメータがあればそれを反映、無ければ今ある値を取得してそれを追加
	const setMaterialsInMenu = (request_material_ary)=>{
		let mim_select_option = '';
		const material_str = localStorage.getItem('materials');
		if (!!material_str) {
			const materials_ary = JSON.parse(material_str);
			if (!request_material_ary || 0 < request_material_ary.length) {
				let select_view = '';
				if (!!request_material_ary && 0 < request_material_ary.length) {
					for (let v of request_material_ary) {
						select_view += '<li><select class="mim-select"><option>'+unselect_option+'</option>';
						for (let a_material of materials_ary) {
							select_view += `<option ${a_material.name == v.name ? 'selected' : ''}>${a_material.name}</option>`;
						}
						select_view += '</select><input type="number" class="mim-weight" value="'+v.weight+'" placeholder="グラム数を入力" /> g</li>';
					}
				}
				$('#materials-in-menu').html(select_view);
				mim_select_option = materials_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
				$('#materials-in-menu').append( '<li>'
				+ '<select class="mim-select"><option>'+unselect_option+'</option>' + mim_select_option + '</select>'
				+ '<input type="number" class="mim-weight" value="0" placeholder="グラム数を入力" /> g' + '</li>'
				);
				return request_material_ary;
			} else {
				//今ある値を取得しそれをrequest_aryとする。
				let request_ary = [];
				$('#materials-in-menu li').each((i, select_html)=>{
					//if 値があったら取得、なかったらコンテニュー 
					if (unselect_option != $(select_html).children('select').val() && 0 < parseFloat($(select_html).children('input').val())) {
						request_ary.push({
							name: $(select_html).children('select').val(),
							weight: parseFloat($(select_html).children('input').val())
						});
					}
				});
				if (0 < request_ary.length && request_ary.length == $('#materials-in-menu li').length) {
					//TODO: $('#materials-in-menu').htmlからselectでやると、今まさに素材登録した物が使えるようになる
					//追加途中なのでemptyを追加
					mim_select_option = materials_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
					$('#materials-in-menu').append( '<li>'
					+ '<select class="mim-select"><option>'+unselect_option+'</option>' + mim_select_option + '</select>'
					+ '<input type="number" class="mim-weight" value="0" placeholder="グラム数を入力" /> g' + '</li>'
					);
				} else if (0 < request_ary.length) {
					//入力がハンパなので何もしない
				} else {
					// this is empty
					mim_select_option = materials_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
					$('#materials-in-menu').html( '<li>'
					+ '<select class="mim-select"><option>'+unselect_option+'</option>' + mim_select_option + '</select>'
					+ '<input type="number" class="mim-weight" value="0" placeholder="グラム数を入力" /> g' + '</li>'
					);
				}
				return request_ary;
			}	
		}
	};

	(function setMenu(){
		setYourMenu();
		setMaterialsInMenu([]);
		$('#menu-change-button').attr('disabled', 'disabled');
		$('#menu-delete-button').attr('disabled', 'disabled');
		$('#menu-suggestion').html('');
	})();

	$('#menu-creator-select').on('change', (e)=>{
		if ('新規メニュー' == e.target.value) {
			$('#menu-name').removeAttr('disabled').attr('placeholder', '新規素材名');
			$('#menu-regist-button').removeAttr('disabled');
			$('#menu-change-button').attr('disabled', 'disabled');
			$('#menu-delete-button').attr('disabled', 'disabled');
			let material_ary = setMaterialsInMenu([]);
			$('#menu-suggestion').html( (material_ary.length && !!$('#menu-name').val()) ? ($('#menu-name').val() + 'の栄養素（1人前分）') : '');
			setMenuNutrients(material_ary);
		} else {
			$('#menu-name').attr('disabled', 'disabled').attr('placeholder', '');
			$('#menu-suggestion').html('' == e.target.value ? '' : (e.target.value + 'の栄養素（1人前分）'));
			setMenuParameter($('#menu-creator-select').val());
			$('#menu-name').val('');
			$('#menu-regist-button').attr('disabled', 'disabled');
			$('#menu-change-button').removeAttr('disabled');
			$('#menu-delete-button').removeAttr('disabled');
		}
	});

	$('#menu-serving').on('change', ()=>{
		let material_ary = setMaterialsInMenu([]);
		if (0 < material_ary.length) {
			$('#menu-suggestion').html( (material_ary.length && !!$('#menu-name').val()) ? ($('#menu-name').val() + 'の栄養素（1人前分）') : '');
			setMenuNutrients(material_ary);
		}
	});

	$('#materials-in-menu').on('keyup change', 'select, input', (e)=>{
		if ("mim-weight" == e.target.className) {
			if (e.target.value <= 0) return;
			if (unselect_option == e.target.parentElement.children[0].value) return;
		}
		if ("mim-select" == e.target.className) {
			if (e.target.parentElement.children[1].value <= 0) return;
			if (unselect_option == e.target.value) return;
		}
		//どちらか入力できていない場合は呼ばない
		let material_ary = setMaterialsInMenu([]);
		$('#menu-suggestion').html( (material_ary.length && !!$('#menu-name').val()) ? ($('#menu-name').val() + 'の栄養素（1人前分）') : '');
		setMenuNutrients(material_ary);
	});

	const getMaterialsInMenu = ()=>{
		let rtn = {
			name: $('#menu-name').val(),
			materials: []
		};
		const serving = parseFloat($('#menu-serving').val());
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			const materials_ary = JSON.parse(materials_str);
			$('#materials-in-menu li').each((i, v)=>{
				for (let a_material of materials_ary) {
					if (!$(v).children('input').val()) break;
					if ($(v).children('select').val() == a_material.name) {
						const new_material_weight = parseFloat($(v).children('input').val());
						let new_material = {
							name: a_material.name,
							weight: new_material_weight / serving,
							nutrients: {}
						};
						for (const nutrient_category in a_material.nutrients) {
							new_material.nutrients[nutrient_category] = maxNumberDisplay(a_material.nutrients[nutrient_category] * new_material_weight / a_material.weight / serving, 6);
						}
						rtn.materials.push(new_material);
					}
				}
			});
		}
		return rtn;
	};

	//material_ary = [{name:'', weight:0}, ]
	const setMenuNutrients = (material_ary)=>{
		let added_nutrient = '';
		const registed_materials_str = localStorage.getItem('materials');
		if (!registed_materials_str) return;
		const registed_materials = JSON.parse(registed_materials_str);
		const serving = parseFloat($('#menu-serving').val());
		//栄養分を集計
		let nutrient_add_up = {};
		for (let a_registed_material of registed_materials) {
			for (let a_material of material_ary) {
				if (a_material.name == a_registed_material.name) {
					for (let key in a_registed_material.nutrients) {
						if (!nutrient_add_up[key]) nutrient_add_up[key] = 0;  
							nutrient_add_up[key] += parseFloat(a_registed_material.nutrients[key]) * parseFloat(a_material.weight) / parseFloat(a_registed_material.weight);
					}
				}
			}
		}
		//栄養分を表示
		for (let category in standard_nutrient) {
			added_nutrient += `<dt>${standard_nutrient[category].label}(${standard_nutrient[category].unit})</dt>`
			+`<dd class="${category}">${maxNumberDisplay(nutrient_add_up[category] / serving, 6)}</dd>`;
		}
		for (let genre in nutrient_table) {
			for (let i in nutrient_table[genre]) {
				const key = 'vitamin' == genre ? ('vitamin'+i) : i;
				added_nutrient += `<dt>${'vitamin' == genre ? ('ビタミン'+i) : i} (${nutrient_table[genre][i].unit})</dt>`
				+`<dd class="${key}">${maxNumberDisplay(nutrient_add_up[key] / serving, 6)}</dd>`;
			}
		}
		$('#menu-creator > dl').html(added_nutrient);
	};

	$('#menu-regist-button').on('click', ()=>{
		let registed_menu = getMaterialsInMenu();
		if ('' == registed_menu.name) return alert('メニュー名がありません。');
		if (0 == registed_menu.materials) return alert('素材がありません。');
		const menu_str = localStorage.getItem('menu');
		if (!!menu_str) {
			let menu_ary = JSON.parse(menu_str);
			//重複があるか確認すべきだろうか？
			for (a_menu of menu_ary) {
				if (a_menu.name == registed_menu.name) return alert('メニュー名が重複しています。');
			}
			menu_ary.push(registed_menu);
			localStorage.setItem('menu', JSON.stringify(menu_ary));
		} else {
			localStorage.setItem('menu', JSON.stringify([registed_menu]));
		}
		alert('メニューを登録しました。');
		//登録したらメニューのセレクトに登録
		setYourMenu();
		//表示初期化
		$('#menu-name').val('');
		$('#menu-suggestion').html('');
		setMaterialsInMenu(null);
		$('#menu-creator dl').html('');
	});

	//引数のメニュー名の栄養素を表示
	const setMenuParameter = (menu_name)=>{
		const menu_str = localStorage.getItem('menu');
		if (!menu_str) return;
		const menu_ary = JSON.parse(menu_str);
		const serving = parseFloat($('#menu-serving').val());
		let added_nutrient = '';
		for (let a_menu of menu_ary) {
			if (menu_name == a_menu.name) {
				//materials-in-menuの中身を無くして、新しく追加
				setMaterialsInMenu(a_menu.materials);
				//栄養分を集計
				let nutrient_add_up = {};
				for (let a_material of a_menu.materials) {
					for (let key in a_material.nutrients) {
						if (!nutrient_add_up[key]) nutrient_add_up[key] = 0;  
						nutrient_add_up[key] += parseFloat(a_material.nutrients[key]);
					}
				}
				//栄養分を表示
				for (let category in standard_nutrient) {
					added_nutrient += `<dt>${standard_nutrient[category].label}(${standard_nutrient[category].unit})</dt>`
					+`<dd class="${category}">${maxNumberDisplay(nutrient_add_up[category] / serving, 6)}</dd>`;
				}
				for (let genre in nutrient_table) {
					for (let i in nutrient_table[genre]) {
						const key = 'vitamin' == genre ? ('vitamin'+i) : i;
						added_nutrient += `<dt>${'vitamin' == genre ? ('ビタミン'+i) : i} (${nutrient_table[genre][i].unit})</dt>`
						+`<dd class="${key}">${maxNumberDisplay(nutrient_add_up[key] / serving, 6)}</dd>`;
					}
				}
				break;
			}
		}
		$('#menu-creator > dl').html(added_nutrient);
	};

	const setMaterialSelect = ()=>{
		let material_select_option = '<option>新規素材</option>';
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			const materials_ary = JSON.parse(materials_str);
			for (let v of materials_ary) {
				material_select_option += `<option>${v.name}</option>`;
			}
		}
		$('#material-select').html(material_select_option);
		$('#material-change-button').attr('disabled', 'disabled');
		$('#material-delete-button').attr('disabled', 'disabled');
	};

	const setMaterialParameter = (selected_material)=>{
		if ('' == selected_material) {
			$('#material-suggestion').html(`${$('#material-name').val()} ${$('#material-weight').val()}グラム当たりの素材の栄養素`);
			return;
		}
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			const materials_ary = JSON.parse(materials_str);
			for (let v of materials_ary) {
				if (selected_material == v.name) {
					$('#material-suggestion').html(`${selected_material} ${v.weight}グラム当たりの素材の栄養素`);
					$('#material-weight').val(v.weight);
					//ここで各栄養素の値を入れる
					for (let dd of $('#material-creator dl dd')) {
						$(dd).children('input').val(v.nutrients[dd.childNodes[0].className]);
					}
					break;
				}
			}
		}
	};

	(function setMaterials(){
		setMaterialSelect();
		//栄養素の入力欄作成
		let nutrients = '';
		for (let i in standard_nutrient) {
			nutrients += `<dt>${standard_nutrient[i].label} (${standard_nutrient[i].unit})</dt><dd><input type="number" value="0" class="${i}" /></dd>`;
		}
		for (let genre in nutrient_table) {
			for (let i in nutrient_table[genre]) {
				nutrients += `<dt>${'vitamin' == genre ? ('ビタミン'+i) : i} (${nutrient_table[genre][i].unit})</dt><dd><input type="number" value="0" class="${'vitamin' == genre ? ('vitamin'+i) : i}" /></dd>`;
			}
		}
		$('#material-creator dl').html(nutrients);
	})();

	$('#material-name, #material-weight').on('keyup click blur', (e)=>{
		$('#material-weight').html(parseFloat($('#material-weight').val()));
		$('#material-suggestion').html(`${$('#material-name').val()} ${$('#material-weight').val()}グラム当たりの素材の栄養素`);
	});

	$('#select-menu').on('change', 'ul select', (e)=>{
		const menu_str = localStorage.getItem('menu');
		if (!menu_str) return;
		let menu_ary = JSON.parse(menu_str);
		//メニュー表示
		let selected_menu = [];
		for (let v of $('#select-menu ul select')) {
			if (unselect_option == v.value) continue;
			selected_menu.push(v.value);
		}
		//一旦、栄養を0に設定する
		for (let genre in nutrient_table) {
			for (let nutrient_name in nutrient_table[genre]) {
				const intake_name = 'vitamin' == genre ? ('vitamin' + nutrient_name) : nutrient_name;
				$('#intake-'+intake_name).html('0');
			}
		}
		//栄養を加算しまくる
		for (let v of selected_menu) {
			for (let a_menu of menu_ary) {
				if (v == a_menu.name) {
					for (let i=0; i < a_menu.materials.length; i++) {
						for (let k in standard_nutrient) {
							$('#intake-' + k).html(maxNumberDisplay(parseFloat(a_menu.materials[i].nutrients[k]) + parseFloat($('#intake-' + k).html()), 6));
						}
						for (let genre in nutrient_table) {
							for (let nutrient_name in nutrient_table[genre]) {
								const intake_name = 'vitamin' == genre ? ('vitamin' + nutrient_name) : nutrient_name;
								$('#intake-'+intake_name).html(maxNumberDisplay(parseFloat(a_menu.materials[i].nutrients[intake_name]) + parseFloat($('#intake-'+intake_name).html()), 6));
							}
						}
					}
				}
			}
		}
		//色を変更
		for (let v of $('#your-nutrient dd')) {
			const need_param = $(v).children('span')[1].innerHTML;
			const quota_param = -1 != need_param.indexOf('～') ? parseFloat(need_param.substr(0, need_param.indexOf('～'))) : parseFloat(need_param);
			const limit_param = -1 == need_param.indexOf('～') ? 0 : parseFloat(need_param.substr(need_param.indexOf('～') + 1));
			const intake_id = $(v).children('span')[0].id;
			if (!!quota_param && !!limit_param) {
				if (quota_param <= parseFloat($(v).children('span')[0].innerHTML) && parseFloat($(v).children('span')[0].innerHTML) <= limit_param) {
					$('#' + intake_id).css('color', '#6b6');
				} else if (limit_param < parseFloat($(v).children('span')[0].innerHTML)) {
					$('#' + intake_id).css('color', '#c53');
				} else {
					$('#' + intake_id).css('color', 'red');
				}
			} else if (!quota_param && !!limit_param) {
				$('#' + intake_id).css('color', parseFloat($(v).children('span')[0].innerHTML) <= limit_param ? '#6b6' : '#c53');
			} else {
				$('#' + intake_id).css('color', quota_param <= parseFloat($(v).children('span')[0].innerHTML) ? '#6b6' : 'red');
			}
		}
		//もしunselectが無ければ、メニューを追加
		let exist_unselect = false;
		for (let v of $('.' + e.target.className)) {
			console.log(v);
			if (unselect_option == v.value) exist_unselect = true;
		}
		if (!exist_unselect) {
			const sel_menu_str = menu_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
			const added_sel = '<li><select class="'+e.target.className+'"><option>'+unselect_option+'</option>'+sel_menu_str+'</select></li>';
			$('#' + e.target.className.substr(0, e.target.className.indexOf('-')) + '-list').append(added_sel);
		}
	});

	$('#menu-register, #material-creator dl').on('focus', 'input', ()=>{
		$(this).select();
	});

	//メニュー変更、メニュー消去ボタン
	$('#menu-change-button, #menu-delete-button').on('click', (e)=>{
		const button_id = e.target.id;
		const menu = localStorage.getItem('menu');
		if (!menu || "[]" == menu) return;
		const menu_ary = JSON.parse(menu);
		let registed_menu = getMaterialsInMenu();
		registed_menu.name = $('#menu-creator-select').val();
		let changed_menu_ary = [];
		//deleteは、飛ばす。changeは、代わりに取得したものを代わりに入れる
		for (let a_menu of menu_ary) {
			if (registed_menu.name != a_menu.name) {
				changed_menu_ary.push(a_menu);
			} else if ("menu-change-button" == button_id) {
				changed_menu_ary.push(registed_menu);
			} else {
				//deleteの時はpushしない
			}
		}
		localStorage.setItem('menu', JSON.stringify(changed_menu_ary));
		alert(registed_menu.name + '\n' + ("menu-change-button" == button_id ? 'メニューを変更しました。' : 'メニューを消去しました。'));
		setYourMenu();
	});

	$('#material-select').on('change',(e)=>{
		if ('新規素材' == e.target.value) {
			$('#material-name').removeAttr('disabled').attr('placeholder', '新規素材名');
			$('#material-regist-button').removeAttr('disabled');
			$('#material-change-button').attr('disabled', 'disabled');
			$('#material-delete-button').attr('disabled', 'disabled');
		} else {
			$('#material-name').attr('disabled', 'disabled').attr('placeholder', '');
			setMaterialParameter($('#material-select').val());
			$('#material-regist-button').attr('disabled', 'disabled');
			$('#material-change-button').removeAttr('disabled');
			$('#material-delete-button').removeAttr('disabled');
		}
	});

	//素材登録ボタン
	$('#material-regist-button').on('click',()=>{
		let new_material = {
			name: $('#material-name').val(),
			weight: parseFloat($('#material-weight').val()),
			nutrients: {}
		};
		if ('' == new_material.name) return alert('素材名がありません。');
		if (0 == new_material.weight) return alert('重さが入力されていません。');
		for (let a of $('#material-creator dl dd')) {
			new_material.nutrients[$(a).children('input').attr('class')] = parseFloat($(a).children('input').val());
		}
		//登録
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			let materials = JSON.parse(materials_str);
			for (let a_material of materials) {
				if (a_material.name == new_material.name) return alert('素材名が重複しています。');
			}
			materials.push(new_material);
			localStorage.setItem('materials', JSON.stringify(materials));
		} else {
			localStorage.setItem('materials', JSON.stringify([new_material]));
		}
		//登録したら　#material-selectに追加、メニュー周りにも追加
		setMaterialSelect();
		setMaterialsInMenu([]);
		$('#material-name').val('');
		$('#material-suggestion').val('');
		//素材が登録されたリアクション
		$('#material-creator dl dd input[type="number"]').val('0');
		alert("素材は登録されました。");
	});

	//素材の変更ボタン
	$('#material-change-button').on('click', ()=>{
		let changed_material = {
			name: $('#material-select').val(),
			weight: parseFloat($('#material-weight').val()),
			nutrients: {}
		};
		for (let a of $('#material-creator dl dd')) {
			changed_material.nutrients[$(a).children('input').attr('class')] = parseFloat($(a).children('input').val());
		}
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			const materials = JSON.parse(materials_str);
			let rtn = [];
			for (let a_material of materials) {
				rtn.push(a_material.name == changed_material.name ? changed_material : a_material);
			}
			localStorage.setItem('materials', JSON.stringify(rtn));
			alert(changed_material.name+'\n素材は変更されました。')
		}
	});

	//素材の削除ボタン
	$('#material-delete-button').on('click', ()=>{
		const delete_material_name = $('#material-select').val();
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			let materials = JSON.parse(materials_str);
			if (confirm(`素材\n ${delete_material_name}\n は、削除してもよろしいでしょうか。`)) {
				let rtn = [];
				for (const v of materials) {
					if (v.name != delete_material_name) rtn.push(v);
				}
				localStorage.setItem('materials', JSON.stringify(rtn));
				alert(`素材\n ${delete_material_name}\n を削除しました。`);
			} else {
				alert('削除はキャンセルされました。');
			}
		}
	});

	const maxNumberDisplay = (num, characters)=>{
		const num_str = num.toString();
		if (num_str.length <= characters) return num;
		const decimal_point = num_str.indexOf('.');
		if (-1 == decimal_point) return num;
		if (decimal_point <= characters) {
			let forInteger = 1;
			for (let i=0; i < decimal_point; i++) {
				forInteger *= 10;
			}
			return parseFloat(Math.round(num * forInteger) / forInteger);
		}
		//小数点が桁数より多い時は、小数点より上を返す
		return Math.round(num);
	};
});
// 素材のみの登録をしまくりたい。素材を入れたい