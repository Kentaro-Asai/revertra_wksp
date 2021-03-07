$(function(){
	const unselect_option = '- 選択 -';
	const standard_nutrient = {
		calory: {unit:'kcal', label:'カロリー'},
		carbo: {unit:'g', label:'糖質'},
		fiber: {unit:'g', label:'食物繊維'},
		protein: {unit:'g', label:'タンパク質'},
		oil: {unit:'g', label:'脂質'}
	};
	const nutrient_table = {
		vitamin: {
			vitaminA: { //年齢:[目安or推奨, 上限]
				male: {2:[400,600], 5:[500,700], 7:[450,900], 9:[500,1200], 11:[600,1500], 14:[800,2100], 17:[900,2600], 29:[850,2700], 49:[900,2700], 69:[850,2700], 70:[800,2700]},
				female: {2:[350,600], 5:[400,700], 7:[400,900], 9:[500,1200], 11:[600,1500], 14:[700,2100], 17:[650,2600], 29:[650,2700], 49:[700,2700], 69:[700,2700], 70:[650,2700]},
				pregnant: {first: 0, middle: 0, last: 80, lactating: 450, option: '追加'},
				unit: 'μgRAE',
				label: "ビタミンA"
			},
			vitaminB1: {
				male: {2:[0.5,0],5:[0.7,0],7:[0.8,0],9:[1.0,0],11:[1.2,0],14:[1.4,0],17:[1.5,0],29:[1.4,0],49:[1.4,0],69:[1.3,0],70:[1.2,0]},
				female: {2:[0.5,0],5:[0.7,0],7:[0.8,0],9:[0.9,0],11:[1.1,0],14:[1.3,0],17:[1.2,0],29:[1.1,0],49:[1.1,0],69:[1.0,0],70:[0.9,0]},
				pregnant: {first: 0.2, middle: 0.2, last: 0.2, lactating: 0.2, option: '追加'},
				unit: 'mg',
				label: "ビタミンB1"
			},
			vitaminB2: {
				male: {2:[0.6,0],5:[0.8,0],7:[0.9,0],9:[1.1,0],11:[1.4,0],14:[1.6,0],17:[1.7,0],29:[1.6,0],49:[1.6,0],69:[1.5,0],70:[1.3,0]},
				female: {2:[0.5,0],5:[0.8,0],7:[0.9,0],9:[1.0,0],11:[1.3,0],14:[1.4,0],17:[1.4,0],29:[1.2,0],49:[1.2,0],69:[1.1,0],70:[1.1,0]},
				pregnant: {first: 0.3, middle: 0.3, last: 0.3, lactating: 0.6, option: '追加'},
				unit: 'mg',
				label: "ビタミンB2"
			},
			niacin: {
				male:{2:[5,60],5:[7,80],7:[9,100],9:[11,150],11:[13,200],14:[15,250],17:[16,300],29:[15,300],49:[15,350],69:[14,350],70:[13,350]},
				female: {2:[5,60],5:[7,80],7:[8,100],9:[10,150],11:[12,200],14:[14,250],17:[13,250],29:[11,250],49:[12,250],69:[11,250],70:[10,250]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 3, option: '追加'},
				unit: 'mgNE',
				label: "ナイアシン"
			},
			vitaminB6: {
				male: {2:[0.5,10],5:[0.6,15],7:[0.8,20],9:[0.9,25],11:[1.2,30],14:[1.4,40],17:[1.5,50],29:[1.4,55],49:[1.4,60],69:[1.4,55],70:[1.4,50]},
				female: {2:[0.5,10],5:[0.6,15],7:[0.7,20],9:[0.9,25],11:[1.2,30],14:[1.3,40],17:[1.3,45],29:[1.2,45],49:[1.2,45],69:[1.2,45],70:[1.2,40]},
				pregnant: {first: 0.2, middle: 0.2, last: 0.2, lactating: 0.3, option: '追加'},
				unit: 'mg',
				label: "ビタミンB6"
			},
			vitaminB12: {
				male: {2:[0.9,0],5:[1.0,0],7:[1.3,0],9:[1.5,0],11:[1.8,0],14:[2.3,0],17:[2.5,0],29:[2.4,0],49:[2.4,0],69:[2.4,0],70:[2.4,0]},
				female: {2:[0.9,0],5:[1.0,0],7:[1.3,0],9:[1.5,0],11:[1.8,0],14:[2.3,0],17:[2.5,0],29:[2.4,0],49:[2.4,0],69:[2.4,0],70:[2.4,0]},
				pregnant: {first: 0.4, middle: 0.4, last: 0.4, lactating: 0.8, option: '追加'},
				unit: 'μg',
				label: "ビタミンB12"
			},
			folic_acid: {
				male: {2:[90,200],5:[100,300],7:[130,400],9:[150,500],11:[180,700],14:[230,900],17:[250,900],29:[240,900],49:[240,1000],69:[240,1000],70:[240,900]},
				female: {2:[90,200],5:[100,300],7:[130,400],9:[150,500],11:[180,700],14:[230,900],17:[250,900],29:[240,900],49:[240,1000],69:[240,1000],70:[240,900]},
				pregnant: {first: 240, middle: 240, last: 240, lactating: 100, option: '追加'},
				unit: 'μg',
				label: "葉酸"
			},
			pantothenic_acid: {
				male: {2:[3,0],5:[4,0],7:[5,0],9:[5,0],11:[6,0],14:[7,0],17:[7,0],29:[5,0],49:[5,0],69:[5,0],70:[5,0]},
				female: {2:[3,0],5:[4,0],7:[5,0],9:[5,0],11:[6,0],14:[7,0],17:[7,0],29:[4,0],49:[4,0],69:[5,0],70:[5,0]},
				pregnant: {first: 5, middle: 5, last: 5, lactating: 5, option: '置換'},
				unit: 'mg',
				label: "パントテン酸"
			},
			biotin: {
				male: {2:[20,0],5:[20,0],7:[25,0],9:[30,0],11:[35,0],14:[50,0],17:[50,0],29:[50,0],49:[50,0],69:[50,0],70:[50,0]},
				female: {2:[20,0],5:[20,0],7:[25,0],9:[30,0],11:[35,0],14:[50,0],17:[50,0],29:[50,0],49:[50,0],69:[50,0],70:[50,0]},
				pregnant: {first: 50, middle: 50, last: 50, lactating: 50, option: '置換'},
				unit: 'μg',
				label: "ビオチン"
			},
			vitaminC: {
				male: {2:[35,0],5:[40,0],7:[55,0],9:[60,0],11:[75,0],14:[95,0],17:[100,0],29:[100,0],49:[100,0],69:[100,0],70:[100,0]},
				female: {2:[35,0],5:[40,0],7:[55,0],9:[60,0],11:[75,0],14:[95,0],17:[100,0],29:[100,0],49:[100,0],69:[100,0],70:[100,0]},
				pregnant: {first: 10, middle: 10, last: 10, lactating: 45, option: '追加'},
				unit: 'mg',
				label: "ビタミンC"
			},
			vitaminD: {
				male: {2:[2,20], 5:[2.5,30], 7:[3,40], 9:[3.5,40], 11:[4.5,60], 14:[5.5,80], 17:[6,90], 29:[5.5,100], 49:[5.5,100], 69:[5.5,100], 70:[5.5,100]},
				female: {2:[5.0, 25], 5:[5.0, 25], 7:[2.0, 20], 9:[2.5, 30], 11:[3.0, 40], 14:[3.5, 40], 17:[4.5, 60], 29:[5.5, 80], 49:[6.0, 90], 69:[5.5, 100], 70:[5.5, 100]},
				pregnant: {first: 7, middle: 7, last: 7, lactating: 8, option: '置換'},
				unit: 'μg',
				label: "ビタミンD"
			},
			vitaminE: {
				male: {2:[3.5,150],5:[4.5,200],7:[5.0,300],9:[5.5,350],11:[5.5,450],14:[7.5,650],17:[7.5,750],29:[6.5,800],49:[6.5,900],69:[6.5,850],70:[6.5,750]},
				female: {2:[3.5,150],5:[4.5,200],7:[5.0,300],9:[5.5,350],11:[5.5,450],14:[6.0,600],17:[6.0,650],29:[6.0,650],49:[6.0,700],69:[6.0,700],70:[6.0,650]},
				pregnant: {first: 6.5, middle: 6.5, last: 6.5, lactating: 7, option: '置換'},
				unit: 'mg',
				label: "ビタミンE"
			},
			vitaminK: {
				male: {2:[60,0],5:[70,0],7:[85,0],9:[100,0],11:[120,0],14:[150,0],17:[160,0],29:[150,0],49:[150,0],69:[150,0],70:[150,0]},
				female: {2:[60,0],5:[70,0],7:[85,0],9:[100,0],11:[120,0],14:[150,0],17:[160,0],29:[150,0],49:[150,0],69:[150,0],70:[150,0]},
				pregnant: {first: 150, middle: 150, last: 150, lactating: 150, option: '置換'},
				unit: 'μg',
				label: "ビタミンK"
			}
		},
		mineral: {
			Na: {
				male: {2:[0,3.0],5:[0,4.0],7:[0,5.0],9:[0,5.5],11:[0,6.5],14:[0,8.0],17:[0,8.0],29:[0,8.0],49:[0,8.0],69:[0,8.0],70:[0,8.0]},
				female: {2:[0,3.5],5:[0,4.5],7:[0,5.5],9:[0,6.0],11:[0,7.0],14:[0,7.0],17:[0,7.0],29:[0,7.0],49:[0,7.0],69:[0,7.0],70:[0,7.0]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 0, option: '追加'},
				unit: 'g',
				label: "食塩相当量"
			},
			K: {
				male: {2:[900,0],5:[1100,0],7:[1800,0],9:[2000,0],11:[2200,0],14:[2600,0],17:[3000,0],29:[3000,0],49:[3000,0],69:[3000,0],70:[3000,0]},
				female:{2:[800,0],5:[1000,0],7:[1800,0],9:[2000,0],11:[2000,0],14:[2400,0],17:[2600,0],29:[2600,0],49:[2600,0],69:[2600,0],70:[2600,0]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 0, option: '追加'},
				unit: 'mg',
				label: "カリウム"
			},
			Ca: {
				male: {2:[450,0],5:[600,0],7:[600,0],9:[650,0],11:[700,0],14:[1000,0],17:[800,0],29:[800,2500],49:[650,2500],69:[700,2500],70:[700,2500]},
				female: {2:[400,0],5:[550,0],7:[550,0],9:[750,0],11:[750,0],14:[800,0],17:[650,0],29:[650,2500],49:[650,2500],69:[650,2500],70:[650,2500]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 0, option: '追加'},
				unit: 'mg',
				label: "カルシウム"
			},
			Mg: {
				male: {2:[70,0],5:[100,0],7:[130,0],9:[170,0],11:[210,0],14:[290,0],17:[360,0],29:[340,0],49:[370,0],69:[350,0],70:[320,0]},
				female: {2:[70,0],5:[100,0],7:[130,0],9:[160,0],11:[220,0],14:[290,0],17:[310,0],29:[270,0],49:[290,0],69:[290,0],70:[270,0]},
				pregnant: {first: 40, middle: 40, last: 40, lactating: 0, option: '追加'},
				unit: 'mg',
				label: "マグネシウム"
			},
			P: {
				male: {2:[500,0],5:[800,0],7:[900,0],9:[1000,0],11:[1100,0],14:[1200,0],17:[1200,0],29:[1000,3000],49:[1000,3000],69:[1000,3000],70:[1000,3000]},
				female: {2:[500,0],5:[600,0],7:[900,0],9:[900,0],11:[1000,0],14:[1100,0],17:[900,0],29:[800,3000],49:[800,3000],69:[800,3000],70:[800,3000]},
				pregnant: {first: 800, middle: 800, last: 800, lactating: 800, option: '置換'},
				unit: 'mg',
				label: "リン"
			},
			Fe: {
				male: {2:[4.5,25],5:[5.5,25],7:[6.5,30],9:[8.0,35],11:[10.0,35],14:[11.5,50],17:[9.5,50],29:[7.0,50],49:[7.5,55],69:[7.5,50],70:[7.0,50]},
				female: {2:[4.5,20],5:[5.0,25],7:[6.5,30],9:[8.5,35],11:[14.0,35],14:[14.0,50],17:[10.5,40],29:[10.5,40],49:[10.5,40],69:[10.5,40],70:[6.0,40]},
				pregnant: {first: 2.5, middle: 15, last: 15, lactating: 2.5, option: '追加'},
				unit: 'mg',
				label: "鉄"
			},
			Zn: {
				male: {2:[3,0],5:[4,0],7:[5,0],9:[6,0],11:[7,0],14:[9,0],17:[10,0],29:[10,40],49:[10,45],69:[10,45],70:[9,40]},
				female: {2:[3,0],5:[4,0],7:[5,0],9:[5,0],11:[7,0],14:[8,0],17:[8,0],29:[8,35],49:[8,35],69:[8,35],70:[7,35]},
				pregnant: {first: 2, middle: 2, last: 2, lactating: 3, option: '追加'},
				unit: 'mg',
				label: "亜鉛"
			},
			Cu: {
				male: {2:[0.3,0],5:[0.4,0],7:[0.5,0],9:[0.6,0],11:[0.7,0],14:[0.8,0],17:[1.0,0],29:[0.9,10],49:[1.0,10],69:[0.9,10],70:[0.9,10]},
				female: {2:[0.3,0],5:[0.4,0],7:[0.5,0],9:[0.5,0],11:[0.7,0],14:[0.8,0],17:[0.8,0],29:[0.8,10],49:[0.8,10],69:[0.8,10],70:[0.7,10]},
				pregnant: {first: 0.1, middle: 0.1, last: 0.1, lactating: 0.5, option: '追加'},
				unit: 'mg',
				label: "銅"
			},
			Mo: {
				male: {2:[0,0],5:[0,0],7:[0,0],9:[0,0],11:[0,0],14:[0,0],17:[0,0],29:[25,550],49:[30,550],69:[25,550],70:[25,550]},
				female: {2:[0,0],5:[0,0],7:[0,0],9:[0,0],11:[0,0],14:[0,0],17:[0,0],29:[20,450],49:[25,450],69:[25,450],70:[20,450]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 3, option: '追加'},
				unit: 'μg',
				label: "モリブデン"
			},
			Mn: {
				male: {2:[1.5,0],5:[1.5,0],7:[2.0,0],9:[2.5,0],11:[3,0],14:[4,0],17:[4.5,0],29:[4,11],49:[4,11],69:[4,11],70:[4,11]},
				female: {2:[1.5,0],5:[1.5,0],7:[2.0,0],9:[2.5,0],11:[3,0],14:[4,0],17:[3.5,0],29:[3.5,11],49:[3.5,11],69:[3.5,11],70:[3.5,11]},
				pregnant: {first: 3.5, middle: 3.5, last: 3.5, lactating: 3.5, option: '置換'},
				unit: 'mg',
				label: "マンガン"
			},
			Se: {
				male: {2:[10,80],5:[15,110],7:[15,150],9:[20,190],11:[25,240],14:[30,330],17:[35,400],29:[30,420],49:[30,460],69:[30,440],70:[30,400]},
				female: {2:[10,70],5:[10,110],7:[15,150],9:[20,180],11:[25,240],14:[30,320],17:[25,350],29:[25,330],49:[25,350],69:[25,350],70:[25,330]},
				pregnant: {first: 5, middle: 5, last: 5, lactating: 20, option: '追加'},
				unit: 'μg',
				label: "セレン"
			},
			I: {
				male: {2:[50,250],5:[60,350],7:[75,500],9:[90,500],11:[110,500],14:[140,1200],17:[140,2000],29:[130,3000],49:[130,3000],69:[130,3000],70:[130,3000]},
				female: {2:[50,250],5:[60,350],7:[75,500],9:[90,500],11:[110,500],14:[140,1200],17:[140,2000],29:[130,3000],49:[130,3000],69:[130,3000],70:[130,3000]},
				pregnant: {first: 110, middle: 110, last: 110, lactating: 140, option: '追加'},
				unit: 'μg',
				label: "ヨウ素"
			},
			Cr: {
				male: {2:[0,0],5:[0,0],7:[0,0],9:[0,0],11:[0,0],14:[0,0],17:[0,0],29:[10,0],49:[10,0],69:[10,0],70:[10,0]},
				female: {2:[0,0],5:[0,0],7:[0,0],9:[0,0],11:[0,0],14:[0,0],17:[0,0],29:[10,0],49:[10,0],69:[10,0],70:[10,0]},
				pregnant: {first: 10, middle: 10, last: 10, lactating: 10, option: '置換'},
				unit: 'μg',
				label: "クロム"
			},
		},
		/*amino_acid: {
			Trp:{dose:4,unit:'mg',label: "トリプトファン"}, Met:{dose:15,unit:'mg',label: "メチオニン"},
			Phe:{dose:25,unit:'mg',label: "フェニルアラニン"}, Thr:{dose:15,unit:'mg',label: "スレオニン"},
			Val:{dose:26,unit:'mg',label: "バリン"}, Leu:{dose:39,unit:'mg',label: "ロイシン"},
			Ile:{dose:20,unit:'mg',label: "イソロイシン"}, His:{dose:10,unit:'mg',label: "ヒスチジン"}, Lys:{dose:45,unit:'mg',label: "リジン"}
		}*/
	};
	//一食分(1日分)の必要量を保存
	let need_nutrients = {};
	//一食分(1日分)の上限量を保存
	let limit_nutrients = {};

	//data in localStorage
	// body_parameter = {gender: "", height:160, ...}
	//menu contain materials(it's copies. because if you delete the material, could not regain menu). materials contain nutrients.
	// menu = [[{name:"", weight(g):""},{}], [{}]];
	// materials = [{name:"", weight(g):"", A:1,..}, {}];

	//Harris-Benedict式
	//http://fph.pref.fukui.lg.jp/introhospital/wp-content/uploads/sites/7/2014/08/doc3.pdf
	$('#your-nutrient input').on('change keydown focus blur', (e)=>{
		if ('gender' == e.target.getAttribute('name')) {
			$('#only-female-fieldset').css('display', e.target.id == 'gender-female' ? 'block' : 'none');
		} else if ('pregnant-stage' == e.target.getAttribute('name')) {
			//2個以上のチェックにならないようにする
			$('input[name="pregnant-stage"]').each((i, v)=>{
				if (v.getAttribute('id') != e.target.id) {
					//$('#'+v.getAttribute('id')).removeAttr('checked');
					v.checked = false;
				}
			});
		}
		const body_parameter = {
			gender: $('input[name="gender"]:checked').attr('id'),
			pregnantStage: $('input[name="pregnant-stage"]:checked').attr('id') || "",
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

	// need_nutrient変数の値も作成
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
			if ('pregnant-first' == body_parameter.pregnantStage) wanted_energy += 50;
			else if ('pregnant-middle' == body_parameter.pregnantStage) wanted_energy += 250;
			else if ('pregnant-last' == body_parameter.pregnantStage) wanted_energy += 450;
			else if ('lactating' == body_parameter.pregnantStage) wanted_energy += 350;
		}
		$('#need-calory').html(Math.round(wanted_energy));
		need_nutrients.calory = Math.round(wanted_energy);
		//タンパク質必要量
		let need_protein = 10 * parseFloat($('#your-nutrient input[name="accelerate-protein"]:checked').val()) * body_parameter.weight / 10;
		if ('gender-female' == body_parameter.gender) {
			if ('pregnant-first' == body_parameter.pregnantStage) need_protein += 0;
			else if ('pregnant-middle' == body_parameter.pregnantStage) need_protein += 10;
			else if ('pregnant-last' == body_parameter.pregnantStage) need_protein += 25;
			else if ('lactating' == body_parameter.pregnantStage) need_protein += 20;
		}
		$('#need-protein').html(need_protein + '～');
		need_nutrients.protein = need_protein;
		//脂質必要量
		const need_oil = Math.round(wanted_energy * 25 / 90) / 10;
		$('#need-oil').html(((need_oil <= 2.5 * body_parameter.weight) ? need_oil : (2.5 * body_parameter.weight)) + '～');
		need_nutrients.oil = parseFloat($('#need-oil').html());
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
		$('#need-fiber').html(need_fiber + '～');
		need_nutrients.fiber = need_fiber;
		//ビタミン
		//https://www.fukushihoken.metro.tokyo.lg.jp/kensui/ei_syo/katsuyou/ichinichi_eiyo/vitamin.html
		//https://www.tyojyu.or.jp/net/kenkou-tyoju/eiyouso/vitamin-b6.html
		for (let genre in nutrient_table.vitamin) {
			let age_nutrient = [];
			for (let i in nutrient_table.vitamin[genre][gender]) {
				age_nutrient = nutrient_table.vitamin[genre][gender][i];
				if (body_parameter.age <= i) break;
			}
			$('#need-' + genre).html(age_nutrient[0] + '～' + (0 == age_nutrient[1] ? '' : age_nutrient[1]));
			need_nutrients[genre] = age_nutrient[0];
			limit_nutrients[genre] = age_nutrient[1];
		}
		//ミネラル
		// https://jp.glico.com/navi/e07-3.html
		for (let genre in nutrient_table.mineral) {
			let age_nutrient = [];
			for (let i in nutrient_table.mineral[genre][gender]) {
				age_nutrient = nutrient_table.mineral[genre][gender][i];
				if (body_parameter.age <= i) break;
			}
			$('#need-' + genre).html((0 == age_nutrient[0] ? '' : age_nutrient[0]) + '～' + (0 == age_nutrient[1] ? '' : age_nutrient[1]));
			need_nutrients[genre] = age_nutrient[0];
			limit_nutrients[genre] = age_nutrient[1];
		}
		//必須アミノ酸
		// https://www.orthomolecular.jp/nutrition/amino/
		/*let amino_acid_ary = nutrient_table.amino_acid;
		for (let a in amino_acid_ary) {
			$('#need-' + a).html(amino_acid_ary[a].dose + "～");
			need_nutrients[a] = amino_acid_ary[a].dose / 3;
		}*/
	}; 
	
	// get body_parameter => view
	(function bodyParameter() {
		const body_parameter_str = localStorage.getItem('body_parameter');
		if (!!body_parameter_str) {
			const body_parameter = JSON.parse(body_parameter_str);
			$('#'+body_parameter.gender).attr('checked', 'checked');
			if (!!body_parameter.pregnantStage) {
				$('#'+body_parameter.pregnantStage).attr('checked', 'checked');
			}
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
		$('#only-female-fieldset').css('display', document.getElementById('gender-female').checked ? 'block' : 'none');
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
			//選択されている料理を取得する
			for (let selected_menu of $('#select-menu select')) {
				let select_option = '<option>'+unselect_option+'</option>';
				for (const a_menu of menu_ary) {
					select_option += `<option ${a_menu.name == selected_menu.value ? 'selected':''}>${a_menu.name}</option>`;
				}
				selected_menu.innerHTML = select_option;
			}
			const sel_menu_ary = menu_ary.map(v => '<option>'+v.name+'</option>');
			$('#menu-creator-select').html(1 < sel_menu_ary.length ? sel_menu_ary.reduce((w, x) => w+x) : sel_menu_ary[0]);
		} else {
			$('#select-menu select').html('<option>- 料理が登録されていません -</option>');
			$('#menu-change-button').css('display', 'none');
			$('#menu-delete-button').css('display', 'none');
		}
	};

	//引数と現在の状況に合わせて中身を作り変える。引数にパラメータがあればそれを反映、無ければ今ある値を取得してそれを追加
	const setMaterialsInMenu = (request_material_ary)=>{
		let mim_select_option = `<option>${unselect_option}</option>`;
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
						select_view += `</select><input type="number" class="mim-weight" value="${v.weight}" placeholder="グラム数を入力" /> g</li>`;
					}
				}
				$('#materials-in-menu').html(select_view);
				mim_select_option += materials_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
				$('#materials-in-menu').append( '<li>'
				+ '<select class="mim-select">' + mim_select_option + '</select>'
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
					//追加途中なのでemptyを追加
					mim_select_option += materials_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
					$('#materials-in-menu').append( '<li>'
					+ '<select class="mim-select">' + mim_select_option + '</select>'
					+ '<input type="number" class="mim-weight" value="0" placeholder="グラム数を入力" /> g' + '</li>'
					);
				} else if (0 < request_ary.length) {
					//入力がハンパなので何もしない
				} else {
					// this is empty
					mim_select_option += materials_ary.map(v => '<option>'+v.name+'</option>').reduce((w, x) => w+x);
					$('#materials-in-menu').html( '<li>'
					+ '<select class="mim-select">' + mim_select_option + '</select>'
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
		$('#menu-creator-select').css('display', 'none');
		$('#menu-change-button').css('display', 'none');
		$('#menu-delete-button').css('display', 'none');
	})();

	//mimの中を空にするボタンがいるかも

	$('#menu-creator-select').on('change', (e)=>{
		//let material_ary = setMaterialsInMenu('');
		//setMenuNutrients(material_ary);
		setMenuParameter($('#menu-creator-select').val());
	});

	$('#menu-register, #menu-change').on('click', ()=>{
		const menu_form_ary = {
			'menu-register': ['#menu-name', '#menu-regist-button'],
			'menu-change': ['#menu-creator-select', '#menu-change-button', '#menu-delete-button']
		};
		const target_id = $('input[name="menu-crud"]:checked').attr('id');
		for (const key in menu_form_ary) {
			for (const v of menu_form_ary[key]) {
				$(v).css('display', (key == target_id ? 'inline-block' : 'none'));
			}
		}
		if ('menu-change' == target_id) {
			setMenuParameter($('#menu-creator-select').val());
		}
	});

	$('#material-register, #material-change').on('click', ()=>{
		const material_form_ary = {
			'material-register': ['#material-name', '#material-regist-button'],
			'material-change': ['#material-select', '#material-change-button', '#material-delete-button']
		};
		const target_id = $('input[name="material-crud"]:checked').attr('id');
		for (const key in material_form_ary) {
			for (const v of material_form_ary[key]) {
				$(v).css('display', (key == target_id ? 'inline-block' : 'none'));
			}
		}
		$('#material-suggestion').html(`${'material-register' == target_id ? '新規素材' : $('#material-select').val()} ${$('#material-weight').val()}グラム当たりの素材の栄養素`);
		if ('material-change' == target_id) {
			setMaterialParameter($('#material-select').val());
		}
	});

	$('#menu-name, #menu-serving').on('change, input', ()=>{
		let material_ary = setMaterialsInMenu([]);
		if (0 < material_ary.length) {
			//$('#menu-suggestion').html( (material_ary.length && !!$('#menu-name').val()) ? ($('#menu-name').val() + 'の栄養素（1人前分）') : '');
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
		//$('#menu-suggestion').html( (material_ary.length && !!$('#menu-name').val()) ? ($('#menu-name').val() + 'の栄養素（1人前分）') : '');
		setMenuNutrients(material_ary);
	});

	const getMaterialsInMenu = ()=>{
		let rtn = {
			name: $('#menu-name').val(),
			serving: parseFloat($('#menu-serving').val()),
			materials: []
		};
		const menu_ary = JSON.parse(localStorage.getItem('menu'));
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			const materials_ary = JSON.parse(materials_str);
			$('#materials-in-menu li').each((i, v)=>{
				let new_material = {
					name: "", weight: 0, nutrients: {}
				};
				const new_material_weight = parseFloat($(v).children('input').val());
				for (let a_material of materials_ary) {
					if (0 == new_material_weight) break;
					if ($(v).children('select').val() == a_material.name) {
						new_material = {
							name: a_material.name,
							weight: new_material_weight,
							nutrients: {}
						};
						for (const nutrient_category in a_material.nutrients) {
							new_material.nutrients[nutrient_category] = maxNumberDisplay(a_material.nutrients[nutrient_category] * new_material_weight / a_material.weight / rtn.serving, 6);
						}
					}
				}
				//昔登録した素材（今は存在していない）の値を既存料理から取得
				if (!new_material.name) {
					const selected_menu_name = $('#menu-creator-select').val();
					if (!!menu_ary && 0 < menu_ary.length) {
						for (let a_menu of menu_ary) {
							if (selected_menu_name == a_menu.name) {
								for (let a_material of a_menu.materials) {
									if (a_material.name == $(v).children('select').val()) {
										new_material = Object.assign(a_material, {});
										break;
									}
								}
							}
						}
					}
				}
				if (0 != new_material_weight && unselect_option != $(v).children('select').val()) rtn.materials.push(new_material);
			});
		}
		return rtn;
	};

	//material_ary = [{name:'', weight:0}, ]
	const setMenuNutrients = (material_ary)=>{
		let rtn = '';
		const registed_materials = JSON.parse(localStorage.getItem('materials'));
		const serving = parseFloat($('#menu-serving').val());
		//栄養分を集計
		let nutrient_add_up = {};
		if (!!registed_materials) {
			for (let a_material of material_ary) {
				let exist_flg = false;
				for (let a_registed_material of registed_materials) {
					if (a_material.name == a_registed_material.name) {
						exist_flg = true;
						for (let key in a_registed_material.nutrients) {
							if (!nutrient_add_up[key]) nutrient_add_up[key] = 0;  
							nutrient_add_up[key] += parseFloat(a_registed_material.nutrients[key]) * parseFloat(a_material.weight) / parseFloat(a_registed_material.weight);
						}
					}
				}
				if (!exist_flg) {
					for (let key in a_material.nutrients) {
						if (!nutrient_add_up[key]) nutrient_add_up[key] = 0;  
						nutrient_add_up[key] += parseFloat(a_material.nutrients[key]) * parseFloat(a_material.weight) / parseFloat(a_material.weight);
					}
				}
			}
		}
		//栄養分を表示
		for (let category in standard_nutrient) {
			const a_nutrient_value = maxNumberDisplay(nutrient_add_up[category] / serving, 6);
			const a_nutrient_rate = !!need_nutrients[category] ? maxNumberDisplay(100 * a_nutrient_value / need_nutrients[category], 2) : '-';
			rtn += `<dt>${standard_nutrient[category].label}(${standard_nutrient[category].unit})</dt>`
			+`<dd class="${category}">${a_nutrient_value} (${a_nutrient_rate}%)</dd>`;
		}
		for (let genre in nutrient_table) {
			for (let nutrient_name in nutrient_table[genre]) {
				const a_nutrient_value = maxNumberDisplay(nutrient_add_up[nutrient_name] / serving, 6);
				const a_nutrient_rate = !!need_nutrients[nutrient_name] ? maxNumberDisplay(100 * a_nutrient_value / need_nutrients[nutrient_name], 2) : '-';
				rtn += `<dt>${nutrient_table[genre][nutrient_name].label} (${nutrient_table[genre][nutrient_name].unit})</dt>`
				+`<dd class="${nutrient_name}">${a_nutrient_value} (${a_nutrient_rate}%)</dd>`;
			}
		}
		$('#menu-creator > div > dl').html(rtn);
	};

	$('#menu-regist-button').on('click', ()=>{
		let registed_menu = getMaterialsInMenu();
		if ('' == registed_menu.name) return alert('料理名がありません。');
		if (0 == registed_menu.materials) return alert('素材がありません。');
		const menu_str = localStorage.getItem('menu');
		if (!!menu_str) {
			let menu_ary = JSON.parse(menu_str);
			//重複があるか確認すべきだろうか？
			for (a_menu of menu_ary) {
				if (a_menu.name == registed_menu.name) return alert('料理名が重複しています。');
			}
			menu_ary.push(registed_menu);
			localStorage.setItem('menu', JSON.stringify(menu_ary));
		} else {
			localStorage.setItem('menu', JSON.stringify([registed_menu]));
		}
		alert('料理を登録しました。');
		//登録したら料理のセレクトに登録
		setYourMenu();
		//表示初期化
		$('#menu-name').val('');
		setMaterialsInMenu(null);
		$('#menu-creator dl dd').html('0(-%)');
	});

	//引数の料理名の栄養素を表示
	const setMenuParameter = (menu_name)=>{
		const menu_str = localStorage.getItem('menu');
		if (!menu_str) return;
		const menu_ary = JSON.parse(menu_str);
		for (let a_menu of menu_ary) {
			if (menu_name == a_menu.name) {
				$('#menu-serving').val(a_menu.serving || "1");
				//materials-in-menuの中身を無くして、新しく追加
				setMaterialsInMenu(a_menu.materials);
				//栄養素の表示
				setMenuNutrients(a_menu.materials);
				break;
			}
		}
	};

	const setMaterialSelect = ()=>{
		let material_select_option = ''; //'<option>新規素材</option>';
		const materials_str = localStorage.getItem('materials');
		if (!!materials_str) {
			const materials_ary = JSON.parse(materials_str);
			for (let v of materials_ary) {
				material_select_option += `<option>${v.name}</option>`;
			}
			$('#material-change').removeAttr('disabled');
		} else {
			//素材が無い
			$('#material-change').attr('disabled', 'disabled');
		}
		$('#material-select').html(material_select_option);
		$('#material-change-button').css('display', 'none');
		$('#material-delete-button').css('display', 'none');
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
				nutrients += `<dt>${nutrient_table[genre][i].label} (${nutrient_table[genre][i].unit})</dt><dd><input type="number" value="0" class="${i}" /></dd>`;
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
		//料理表示
		let selected_menu = [];
		for (let v of $('#select-menu ul select')) {
			if (unselect_option == v.value) continue;
			selected_menu.push(v.value);
		}
		//一旦、栄養を0に設定する
		for (let k in standard_nutrient) {
			$('#intake-' + k).html('0');
		}
		for (let genre in nutrient_table) {
			for (let nutrient_name in nutrient_table[genre]) {
				$('#intake-'+nutrient_name).html('0');
			}
		}
		//栄養を加算しまくる
		for (let v of selected_menu) {
			for (let a_menu of menu_ary) {
				if (!menu_ary.serving) menu_ary.serving = 1; //互換性確保
				if (v == a_menu.name) {
					for (let i=0; i < a_menu.materials.length; i++) {
						for (let k in standard_nutrient) {
							const additional_value = isNaN(a_menu.materials[i].nutrients[k]) ? 0 : (a_menu.materials[i].nutrients[k] / menu_ary.serving);
							const added_value = isNaN($('#intake-' + k).html()) ? 0 : $('#intake-' + k).html();
							$('#intake-' + k).html(maxNumberDisplay(parseFloat(additional_value) + parseFloat(added_value), 6));
						}
						for (let genre in nutrient_table) {
							for (let nutrient_name in nutrient_table[genre]) {
								const additional_value = isNaN(a_menu.materials[i].nutrients[nutrient_name]) ? 0 : (a_menu.materials[i].nutrients[nutrient_name] / menu_ary.serving);
								const added_value = isNaN($('#intake-' + nutrient_name).html()) ? 0 : $('#intake-' + nutrient_name).html();
								$('#intake-'+nutrient_name).html(maxNumberDisplay(parseFloat(additional_value) + parseFloat(added_value), 6));
							}
						}
					}
				}
			}
		}
		//色を変更
		for (let v of $('#your-nutrient li > p')) {
			const need_param = $(v).children('span')[1].innerHTML;
			const range_param = {
				quota: -1 != need_param.indexOf('～') ? parseFloat(need_param.substr(0, need_param.indexOf('～'))) : parseFloat(need_param),
				limit: -1 == need_param.indexOf('～') ? 0 : parseFloat(need_param.substr(need_param.indexOf('～') + 1))
			};
			const intake_id = $(v).children('span')[0].id;
			const your_intake_param = parseFloat($(v).children('span')[0].innerHTML);
			if (!!range_param.quota && !!range_param.limit) {
				if (range_param.quota <= your_intake_param && your_intake_param <= range_param.limit) {
					$('#' + intake_id).css('color', '#6b6');
				} else if (range_param.limit < your_intake_param) {
					$('#' + intake_id).css('color', '#c53');
				} else {
					$('#' + intake_id).css('color', 'red');
				}
			} else if (!range_param.quota && !!range_param.limit) { // ~ x
				$('#' + intake_id).css('color', your_intake_param <= range_param.limit ? '#6b6' : '#c53');
			} else { // x ~ 
				$('#' + intake_id).css('color', range_param.quota <= your_intake_param ? '#6b6' : 'red');
			}
		}
		//もしunselectが無ければ、料理を追加
		let exist_unselect = false;
		for (let v of $('.' + e.target.className)) {
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

	//料理変更、料理消去ボタン
	$('#menu-change-button, #menu-delete-button').on('click', (e)=>{
		const button_id = e.target.id;
		const menu = localStorage.getItem('menu');
		if (!menu || "[]" == menu) return;
		const menu_ary = JSON.parse(menu);
		let registed_menu = getMaterialsInMenu();
		registed_menu.name = $('#menu-creator-select').val();
		let changed_menu_ary = [];
		//deleteは、飛ばす。changeは、代わりに取得したものを入れる
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
		alert(registed_menu.name + '\n' + ("menu-change-button" == button_id ? '料理を変更しました。' : '料理を消去しました。'));
		setYourMenu();
		//表示初期化
		$('#menu-name').val('').css('display', 'inline-block');
		$('#menu-creator-select').css('display', 'none');
		setMaterialsInMenu(null);
		$('#menu-creator dl dd').html('0');
		document.getElementById('menu-register').checked  = true;
	});

	$('#material-select').on('change',(e)=>{
		setMaterialParameter($('#material-select').val());
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
		//登録したら　#material-selectに追加、料理周りにも追加
		setMaterialSelect();
		setMaterialsInMenu([]);
		$('#material-name').val('');
		$('#material-suggestion').html('');
		$('#material-weight').val('');
		//素材が登録されたリアクション
		$('#material-creator dl dd input[type="number"]').val('0');
		alert("素材を登録しました。");
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

	$('#create-menu-button').on('click', (e)=>{
		const materials = JSON.parse(localStorage.getItem('materials'));
		if (null === materials || 0 == materials.length) return alert('素材（料理の材料）が登録されていません。\n素材を登録しないと料理を作成できません。');
		$('#your-nutrient').css('display', 'none');
		$('#menu-creator').css('display', 'block');
		if ('none' == $('#menu-creator-select').css('display') && $('#materials-in-menu').children().length) {
			//初期化
			setMenuNutrients(setMaterialsInMenu(''));
		}
	});

	$('#create-material-button').on('click', (e)=>{
		$('#your-nutrient').css('display', 'none');
		$('#material-creator').css('display', 'block');
	});

	$('.back-buttons > button').on('click', ()=>{
		$('#create-menu-button').css('background-color', 'white').css('color', '#995').css('box-shadow', '1px 1px 1px #aaa');
		$('#create-material-button').css('background-color', 'white').css('color', '#595').css('box-shadow', '1px 1px 1px #aaa');
		$('#menu-creator').css('display', 'none');
		$('#material-creator').css('display', 'none');
		$('#section-selecter').css('display', 'none');
		$('#explore-perfect').css('display', 'none');
		$('#your-nutrient').css('display', 'block');
	});

	//横3個か4個か、responsive web design
	const fitWindowSize = ()=>{
		const html_width_ary = [
			{tag_name: ".nutrient-table > ul", tight: 55.3, wide: 73.6},
			{tag_name: "#material-creator dl", tight: 42.8, wide: 57},
			{tag_name: "#menu-creator dl", tight: 53.2, wide: 71},
			//{tag_name: "#menu-creator dl, #material-creator dl", tight: 41.3, wide: 55},
			{tag_name: "#material-creator div", tight: 43.8, wide: 58},
			{tag_name: "#menu-creator div", tight: 54, wide: 71.8},
			{tag_name: ".perfect-menu-list", tight: 55.6, wide: 74},
			{tag_name: ".perfect-menu-nutrients-table", tight: 54.2, wide: 72.6}
		];
		const root_em = parseFloat(getComputedStyle(document.documentElement).fontSize);
		const html_width = (79 * root_em <= window.innerWidth) ? 'wide' : 'tight';
		for (const v of html_width_ary) {
			//css関数は px じゃないと受け付けない (remじゃダメ)
			$(v.tag_name).css('width', v[html_width] * root_em);
		}
	};
	fitWindowSize();
	window.addEventListener('resize', fitWindowSize); //即時関数だと引数に使えない

	const maxNumberDisplay = (num, characters)=>{
		if (isNaN(num)) return 0;
		const num_str = num.toString();
		if (num_str.length <= characters) return num || 0;
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

	$('header h5').on('click', (e)=>{
		const is_toggle_opening_flg = 'explain-toggle-close' == e.target.parentElement.className;
		e.target.parentElement.className = is_toggle_opening_flg ? 'explain-toggle-open' : 'explain-toggle-close';
	});

	//
	// explore
	//

	const getMenuInExplore = ()=>{
		const menu_ary = JSON.parse(localStorage.getItem('menu'));
		if (!menu_ary || 0 == menu_ary.length) return alert('メニューがありません。');
		let rtn = '<select><option>' + unselect_option + '</option>';
		//1　== ary.length だとバグるからfor使う。menu_list_html += menu_ary.map(v => `<option>${v}</option>`).reduce((w, x)=> w + x);
		for (let v of menu_ary) {
			rtn += `<option>${v.name}</option>`;
		}
		rtn += '</select>';
		return rtn;
	};

	$('#explore-perfect-button-box > button').on('click', ()=>{
		const menu_ary = JSON.parse(localStorage.getItem('menu'));
		if (!menu_ary || 0 == menu_ary.length) return alert('メニューがありません。');
		const menu_list_html = getMenuInExplore();
		$('#contain-menu-list').html(menu_list_html);
		$('#not-contain-menu-list').html(menu_list_html);
		$('#your-nutrient').css('display', 'none');
		$('#explore-perfect').css('display', 'block');
		$('#output-perfect').html('');
	});

	$('#contain-menu-list, #not-contain-menu-list').on('click', (e)=>{
		if (unselect_option != e.target.value) {
			const menu_list_html = getMenuInExplore();
			$('#'+e.target.parentElement.id).append(menu_list_html);
		}
	});

	// 栄養素が足りているかチェック
	const getLackNutrients = (menus_ary)=>{
		let enough_flg = true;
		let survey_nutrients_ary = [];
		const for_serving_rate = `one-serving` == $('input[name="for-serving"]:checked').attr('id') ? 1/3 : 1;
		// 現在含まれる栄養素を取得して100％に満たないものを返す
		for (const a_nutrient_name in need_nutrients) {
			if ('calory' == a_nutrient_name) continue;
			if ('Na' == a_nutrient_name) continue;
			let added_value = 0;
			for (const a_menu of menus_ary) {
				for (const a_material of a_menu.materials) {
					added_value += parseFloat(100 * (a_material.nutrients[a_nutrient_name] || 0) / (a_menu.serving || 1) / (need_nutrients[a_nutrient_name] * for_serving_rate));
				}
			}
			survey_nutrients_ary.push({value: added_value, name: a_nutrient_name});
			if (added_value < 100) {
				//lack_nutrients.push({value: added_value, name: a_nutrient_name});
				enough_flg = false;
			}
		}
		// ソート
		if (0 < survey_nutrients_ary.length) {
			survey_nutrients_ary.sort((a,b)=>{
				if (a.value < b.value) return -1;
				if (a.value < b.value) return 1;
				return 0;
			});
		}
		//return enough_flg ? false : survey_nutrients_ary;
		return {enough_flg: enough_flg, survey_nutrients_ary: survey_nutrients_ary};
	};

	// 優秀な料理を見つける（カロリー↓とビタミンミネラル↑）
	const getRichNutrientsMenu = (menu_ary, survey_nutrients_ary)=>{
		let evaluation = {value: 0, best: 0, best_menu: {}};
		const for_serving_rate = `one-serving` == $('input[name="for-serving"]:checked').attr('id') ? 1/3 : 1;
		if (0 < menu_ary.length) {
			for (const a_menu of menu_ary) {
				let limit_over_flg = false;
				for (const a_material of a_menu.materials) {
					if (limit_over_flg) break;
					for (const v of survey_nutrients_ary) {
						if (0 == need_nutrients[v.name]) continue;
						if (100 <= v.value) {
							// 過剰摂取になる場合、候補に入れないようにする
							if (0 != limit_nutrients[v.name] && parseFloat(100 * limit_nutrients[v.name] * for_serving_rate) < (v.value * need_nutrients[v.name] * for_serving_rate)) {
								limit_over_flg = true;
							}
						} else {
							evaluation.value += parseFloat(100 * (a_material.nutrients[v.name] || 0) / (a_menu.serving || 1) / (need_nutrients[v.name]*for_serving_rate));
						}
					}
				}
				if (evaluation.best < evaluation.value && !limit_over_flg) {
					evaluation = {value: 0, best: evaluation.value, best_menu: a_menu};
				} else {
					evaluation.value = 0;
				}
			}
		}
		return evaluation.best_menu;
	};

	// return {unit: "ugRAE", label: "vitaminA"}
	const getNutrientView = (a_nutrient_name)=>{
		if (standard_nutrient[a_nutrient_name]) {
			return standard_nutrient[a_nutrient_name];
		}
		for (const category in nutrient_table) {
			if (nutrient_table[category][a_nutrient_name]) {
				return nutrient_table[category][a_nutrient_name];
			}
		}
	};

	const countAryDisplay = (ary)=>{
		let inputted = [];
		let rtn = '';
		for (const v of ary) {
			if (-1 == inputted.indexOf(v)) {
				inputted.push(v);
				//rtn.push({name: v, count: ary.filter(w => v == w).length});
				const a_menu_count = ary.filter(w => v == w).length;
				rtn += 1 == a_menu_count ? `<li><h6 class="one-length">${v}</h6></li>` : `<li><h6>${v}</h6><span>×${a_menu_count}</span></li>`;
			}
		}
		return rtn;
	};

	const displayPerfectMenus = (perfect_menus_ary)=>{
		const for_serving_rate = `one-serving` == $('input[name="for-serving"]:checked').attr('id') ? 1/3 : 1;
		let rtn = '';
		for (const i in perfect_menus_ary) {
			let menus_count_ary = []; // name
			let perfect_nutrients_ary = {};
			rtn += `<article><h4>パターン${parseInt(i) + 1}</h4><ul class="perfect-menu-list">`;
			for (const a_menu of perfect_menus_ary[i]) {
				menus_count_ary.push(a_menu.name);
				//rtn += `<li>${a_menu.name}</li>`;
				for (const a_nutrient_name in need_nutrients) {
					if (!perfect_nutrients_ary[a_nutrient_name]) {
						perfect_nutrients_ary[a_nutrient_name] = {value: 0, need: need_nutrients[a_nutrient_name] * for_serving_rate};
					}
					for (const a_material of a_menu.materials) {
						perfect_nutrients_ary[a_nutrient_name].value += parseFloat(a_material.nutrients[a_nutrient_name] / (a_menu.serving || 1)) || 0;
					}
				}
			}
			rtn += countAryDisplay(menus_count_ary);
			rtn += '</ul><ul class="perfect-menu-nutrients-table">';
			for (const a_nutrient_name in perfect_nutrients_ary) {
				const percentage = (0 == perfect_nutrients_ary[a_nutrient_name].need) ? ' - ' : maxNumberDisplay(100 * perfect_nutrients_ary[a_nutrient_name].value / perfect_nutrients_ary[a_nutrient_name].need, 2);
				const nutrient_obj = getNutrientView(a_nutrient_name);
				let color_class_name = ``;
				if (percentage < 100) {
					color_class_name = `poor-color`;
				}	else if ((0 == limit_nutrients[a_nutrient_name] * for_serving_rate) && 100 < percentage) {
					//color_class_name = `safe-color`;
				} else if ((0.8 * limit_nutrients[a_nutrient_name] * for_serving_rate) < perfect_nutrients_ary[a_nutrient_name].value && (perfect_nutrients_ary[a_nutrient_name].value < limit_nutrients[a_nutrient_name] * for_serving_rate)) {
					color_class_name = `danger-color`;
				} else if ((0.5 * limit_nutrients[a_nutrient_name] * for_serving_rate) < perfect_nutrients_ary[a_nutrient_name].value && (perfect_nutrients_ary[a_nutrient_name].value < limit_nutrients[a_nutrient_name] * for_serving_rate)) {
					color_class_name = `caution-color`;
				}
				rtn += `<li><h5>${nutrient_obj.label}</h5><p class="${color_class_name}">${maxNumberDisplay(perfect_nutrients_ary[a_nutrient_name].value, 2)} ${nutrient_obj.unit} (${percentage}%)</p></li>`;
			}
			rtn += '</ul></article>';
		}
		return rtn;
	};

	$('#explore-button').on('click', ()=>{
		let perfect_menus_ary = [];
		let unperfect_menus_ary = [];
		let menu_ary = JSON.parse(localStorage.getItem('menu'));
		const can_duplicate_menu_flg = $('#can-duplicate-menu-flg').prop('checked');
		// make candidate menu course
		let candidate_menu_ary = [];
		if (0 < $('#contain-menu-list select').length) {
			for (let v of $('#contain-menu-list select')) {
				for (let i in menu_ary) {
					if (v.value == menu_ary[i].name) {
						candidate_menu_ary.push(menu_ary[i]);
						break;
					}
				}
			}
		}
		if (0 < $('#not-contain-menu-list select').length) {
			for (let v of $('#not-contain-menu-list select')) {
				for (let i in menu_ary) {
					if (v.value == menu_ary[i].name) {
						menu_ary.splice(i, 1);
						break;
					}
				}
			}
		}
		// 全料理をチェック
		for (const a_menu of menu_ary) {
			let check_menu_ary = candidate_menu_ary.concat([]); //concatしないと同一になってしまう
			// 重複しないようにする時、採用する料理に入っているものを選ばない
			if (!can_duplicate_menu_flg && 0 < check_menu_ary.length) {
				can_continue_flg = false;
				for (let v of check_menu_ary) {
					if (a_menu.name == v.name) {
						can_continue_flg = true;
						break;
					}
				}
				if (can_continue_flg) continue;
			}
			check_menu_ary.push(a_menu);
			// 選択可能な料理の配列を用意
			let selectable_menu_ary = [];
			if (can_duplicate_menu_flg) {
				selectable_menu_ary = menu_ary.concat([]);
			} else {
				for (let v of menu_ary) {
					let is_exist_flg = false;
					if (0 < check_menu_ary.length) {
						for (let w of check_menu_ary) {
							if (w.name == v.name) is_exist_flg = true;
						}
					}
					if (!is_exist_flg) selectable_menu_ary.push(v);
				}
			}
			// これまでの加算した栄養素の欠点を埋める料理を見つける
			for (let i=0; i < 100; i++) {
				const ret = getLackNutrients(check_menu_ary);
				if (!ret.enough_flg) {
					const selected_menu = getRichNutrientsMenu(selectable_menu_ary, ret.survey_nutrients_ary);
					if (0 == Object.keys(selected_menu).length) {
						unperfect_menus_ary.push(check_menu_ary);
						break;
					} else {
						check_menu_ary.push(selected_menu);
						if (!can_duplicate_menu_flg) {
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
					perfect_menus_ary.push(check_menu_ary);
					break;
				}
			}
		}
		// display nutrients
		$('#output-perfect').html(0 < perfect_menus_ary.length ? displayPerfectMenus(perfect_menus_ary) : ('<p>検索しましたが、1つも発見できませんでした。</p>'+displayPerfectMenus(unperfect_menus_ary)) );
		fitWindowSize();
	});
});
