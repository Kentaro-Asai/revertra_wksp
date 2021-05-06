$(function(){
	const unselect_option = '- 選択 -';
	const standard_nutrient = {
		calory: {
			male: {
				activation_level_1:{7:1350,9:1600,11:1950,14:2300,17:2500,29:35.5,49:33.7,64:32.7,74:31.3,75:30.1},
				activation_level_2:{2:950,5:1300,7:1550,9:1850,11:2250,14:2600,17:2800,29:41.5,49:39.3,64:36.7,74:36.7,75:35.5},
				activation_level_3:{7:1750,9:2100,11:2500,14:2900,17:3150,29:47.4,49:44.9,64:43.6,74:42.1},
			},
			female: {
				activation_level_1:{7:1250,9:1500,11:1850,14:2150,17:2050,29:33.2,49:32.9,64:31.1,74:30.0,75:29.0},
				activation_level_2:{2:900,5:1250,7:1450,9:1700,11:2100,14:2400,17:2300,29:38.7,49:38.4,64:36.2,74:35.2,75:34.2},
				activation_level_3:{7:1650,9:1900,11:2350,14:2700,17:2550,29:44.2,49:43.9,64:41.4,74:40.4},
			},
			pregnant: {first: 50, middle: 250, last: 450, lactating: 350, option: '追加'},
			unit:'kcal',
			label:'カロリー'
		},
		carbo: {
			male: {2:[20,30],5:[20,30],7:[20,30],9:[20,30],11:[20,30],14:[20,30],17:[20,30],29:[20,30],49:[20,30],64:[20,30],74:[20,30],75:[20,30]},
			female: {2:[20,30],5:[20,30],7:[20,30],9:[20,30],11:[20,30],14:[20,30],17:[20,30],29:[20,30],49:[20,30],64:[20,30],74:[20,30],75:[20,30]},
			unit:'g',
			label:'糖質'
		},
		fiber: {
			male: {5:8, 7:10, 9:11, 11:13, 14:17, 17:19, 29:21, 49:21, 64:21, 74:20, 75:20},
			female: {5:8, 7:10, 9:11, 11:13, 14:17, 17:18, 29:18, 49:18, 64:18, 74:17, 75:17},
			unit:'g',
			label:'食物繊維'
		},
		protein: {
			male: {
				recomend:{2:20,5:25,7:30,9:40,11:45,14:60,17:65,29:65,49:65,64:65,74:60,75:60},
				goal:{2:[13,20],5:[13,20],7:[13,20],9:[13,20],11:[13,20],14:[13,20],17:[13,20],29:[13,20],49:[13,20],64:[14,20],74:[14,20],75:[15,20]},
			},
			female: {
				recomend:{2:20,5:25,7:30,9:40,11:50,14:55,17:55,29:50,49:50,64:65,74:50,75:50},
				goal:{2:[13,20],5:[13,20],7:[13,20],9:[13,20],11:[13,20],14:[13,20],17:[13,20],29:[13,20],49:[13,20],64:[14,20],74:[14,20],75:[15,20]},
			},
			pregnant: {first: 0, middle: 5, last: 25, lactating: 20, option: '追加'},
			unit:'g',
			label:'タンパク質'
		},
		oil: {
			male: {2:[50,65],5:[50,65],7:[50,65],9:[50,65],11:[50,65],14:[50,65],17:[50,65],29:[50,65],49:[50,65],64:[50,65],74:[50,65],75:[50,65]},
			female: {2:[50,65],5:[50,65],7:[50,65],9:[50,65],11:[50,65],14:[50,65],17:[50,65],29:[50,65],49:[50,65],64:[50,65],74:[50,65],75:[50,65]},
			unit:'g',
			label:'脂質'
		}
	};
	const nutrient_table = {
		fatic_acid:{
			n_3: {
				male:	{2:[0.7,0],5:[1.1,0],7:[1.5,0],9:[1.5,0],11:[1.6,0],14:[1.9,0],17:[2.1,0],29:[2,0],49:[2,0],64:[2.2,0],74:[2.2,0],75:[2.1,0]},
				female:	{2:[0.8,0],5:[1.0,0],7:[1.3,0],9:[1.3,0],11:[1.6,0],14:[1.6,0],17:[1.6,0],29:[1.6,0],49:[1.6,0],64:[1.9,0],74:[2.0,0],75:[1.8,0]},
				pregnant: {first: 1.6, middle: 1.6, last: 1.6, lactating: 1.8, option: '置換'},
				unit: 'g',
				label: "n-3系脂肪酸"
			},
			n_6: {
				male:	{2:[4,0],5:[6,0],7:[8,0],9:[8,0],11:[10,0],14:[11,0],17:[13,0],29:[11,0],49:[10,0],64:[10,0],74:[9,0],75:[8,0]},
				female:	{2:[4,0],5:[6,0],7:[7,0],9:[7,0],11:[8,0],14:[9,0],17:[9,0],29:[8,0],49:[8,0],64:[8,0],74:[8,0],75:[7,0]},
				pregnant: {first: 9, middle: 9, last: 9, lactating: 10, option: '置換'},
				unit: 'g',
				label: "n-6系脂肪酸"
			}
		},
		vitamin: {
			vitaminA: { //年齢:[目安or推奨, 上限]
				male: 	{2:[400,600], 5:[450,700], 7:[400,950], 9:[500,1200], 11:[600,1500], 14:[800,2100], 17:[900,2500], 29:[850,2700], 49:[900,2700], 64:[850,2700], 74:[800,2700], 75:[800,2700]},
				female: {2:[350,600], 5:[500,850], 7:[400,1200], 9:[500,1500], 11:[600,1900], 14:[700,2500], 17:[650,2800], 29:[650,2700], 49:[700,2700], 64:[700,2700], 74:[700,2700], 75:[650,2700]},
				pregnant: {first: 0, middle: 0, last: 80, lactating: 450, option: '追加'},
				unit: 'μgRAE',
				label: "ビタミンA"
			},
			vitaminB1: {
				male: {2:[0.5,0],5:[0.7,0],7:[0.8,0],9:[1.0,0],11:[1.2,0],14:[1.4,0],17:[1.5,0],29:[1.4,0],49:[1.4,0],64:[1.3,0],74:[1.3,0],75:[1.2,0]},
				female: {2:[0.5,0],5:[0.7,0],7:[0.8,0],9:[0.9,0],11:[1.1,0],14:[1.3,0],17:[1.2,0],29:[1.1,0],49:[1.1,0],64:[1.1,0],74:[1.1,0],75:[0.9,0]},
				pregnant: {first: 0.2, middle: 0.2, last: 0.2, lactating: 0.2, option: '追加'},
				unit: 'mg',
				label: "ビタミンB1"
			},
			vitaminB2: {
				male: {2:[0.6,0],5:[0.8,0],7:[0.9,0],9:[1.1,0],11:[1.4,0],14:[1.6,0],17:[1.7,0],29:[1.6,0],49:[1.6,0],64:[1.5,0],74:[1.5,0],75:[1.3,0]},
				female: {2:[0.5,0],5:[0.8,0],7:[0.9,0],9:[1.0,0],11:[1.3,0],14:[1.4,0],17:[1.4,0],29:[1.2,0],49:[1.2,0],64:[1.2,0],74:[1.2,0],75:[1.0,0]},
				pregnant: {first: 0.3, middle: 0.3, last: 0.3, lactating: 0.6, option: '追加'},
				unit: 'mg',
				label: "ビタミンB2"
			},
			niacin: {
				male:{2:[6,60],5:[8,80],7:[9,100],9:[11,150],11:[13,200],14:[15,250],17:[17,300],29:[15,300],49:[15,350],64:[14,350],74:[14,300],75:[13,300]},
				female: {2:[5,60],5:[7,80],7:[8,100],9:[10,150],11:[10,150],14:[14,250],17:[13,250],29:[11,250],49:[11,250],64:[11,250],74:[11,250],75:[10,250]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 3, option: '追加'},
				unit: 'mgNE',
				label: "ナイアシン"
			},
			vitaminB6: {
				male:	{2:[0.5,10],5:[0.6,15],7:[0.8,20],9:[0.9,25],11:[1.1,30],14:[1.4,40],17:[1.5,50],29:[1.4,55],49:[1.4,60],64:[1.4,55],74:[1.4,50],75:[1.4,50]},
				female: {2:[0.5,10],5:[0.6,15],7:[0.7,20],9:[0.9,25],11:[1.1,30],14:[1.3,40],17:[1.3,45],29:[1.1,45],49:[1.1,45],64:[1.1,45],74:[1.1,40],75:[1.1,40]},
				pregnant: {first: 0.2, middle: 0.2, last: 0.2, lactating: 0.3, option: '追加'},
				unit: 'mg',
				label: "ビタミンB6"
			},
			vitaminB12: {
				male: {2:[0.9,0],5:[1.1,0],7:[1.3,0],9:[1.6,0],11:[1.9,0],14:[2.4,0],17:[2.4,0],29:[2.4,0],49:[2.4,0],64:[2.4,0],74:[2.4,0],75:[2.4,0]},
				female: {2:[0.9,0],5:[1.0,0],7:[1.3,0],9:[1.5,0],11:[1.8,0],14:[2.3,0],17:[2.5,0],29:[2.4,0],49:[2.4,0],64:[2.4,0],74:[2.4,0],75:[2.4,0]},
				pregnant: {first: 0.4, middle: 0.4, last: 0.4, lactating: 0.8, option: '追加'},
				unit: 'μg',
				label: "ビタミンB12"
			},
			folic_acid: {
				male: {2:[90,200],5:[110,300],7:[140,400],9:[160,500],11:[190,700],14:[240,900],17:[240,900],29:[240,900],49:[240,1000],64:[240,1000],74:[240,900],75:[240,900]},
				female: {2:[90,200],5:[110,300],7:[140,400],9:[160,500],11:[190,700],14:[240,900],17:[240,900],29:[240,900],49:[240,1000],64:[240,1000],74:[240,900],75:[240,900]},
				pregnant: {first: 240, middle: 240, last: 240, lactating: 100, option: '追加'},
				unit: 'μg',
				label: "葉酸"
			},
			pantothenic_acid: {
				male: {2:[3,0],5:[4,0],7:[5,0],9:[5,0],11:[6,0],14:[7,0],17:[7,0],29:[5,0],49:[5,0],64:[6,0],74:[6,0],75:[6,0]},
				female: {2:[4,0],5:[4,0],7:[5,0],9:[5,0],11:[6,0],14:[6,0],17:[6,0],29:[5,0],49:[5,0],64:[5,0],74:[5,0],75:[5,0]},
				pregnant: {first: 5, middle: 5, last: 5, lactating: 6, option: '置換'},
				unit: 'mg',
				label: "パントテン酸"
			},
			biotin: {
				male: {2:[20,0],5:[20,0],7:[30,0],9:[30,0],11:[40,0],14:[50,0],17:[50,0],29:[50,0],49:[50,0],64:[50,0],74:[50,0],75:[50,0]},
				female: {2:[20,0],5:[20,0],7:[30,0],9:[30,0],11:[40,0],14:[50,0],17:[50,0],29:[50,0],49:[50,0],64:[50,0],74:[50,0],75:[50,0]},
				pregnant: {first: 50, middle: 50, last: 50, lactating: 50, option: '置換'},
				unit: 'μg',
				label: "ビオチン"
			},
			vitaminC: {
				male: {2:[40,0],5:[50,0],7:[60,0],9:[70,0],11:[85,0],14:[100,0],17:[100,0],29:[100,0],49:[100,0],64:[100,0],74:[100,0],75:[100,0]},
				female: {2:[40,0],5:[50,0],7:[60,0],9:[70,0],11:[85,0],14:[100,0],17:[100,0],29:[100,0],49:[100,0],64:[100,0],74:[100,0],75:[100,0]},
				pregnant: {first: 10, middle: 10, last: 10, lactating: 45, option: '追加'},
				unit: 'mg',
				label: "ビタミンC"
			},
			vitaminD: {
				male: {2:[3.0,20], 5:[3.5,30], 7:[4.5,40], 9:[5,40], 11:[6.5,60], 14:[8,80], 17:[9,90], 29:[8.5,100], 49:[8.5,100], 64:[8.5,100], 74:[8.5,100], 75:[8.5,100]},
				female: {2:[3.5,25],5:[4.0,25],7:[5.0,20],9:[6.0,40],11:[8.0,60],14:[9.5,80],17:[8.5,90],29:[8.5,100],49:[8.5,100],64:[8.5,100],74:[8.5,100],75:[8.5,100]},
				pregnant: {first: 8.5, middle: 8.5, last: 8.5, lactating: 8.5, option: '置換'},
				unit: 'μg',
				label: "ビタミンD"
			},
			vitaminE: {
				male: {2:[3.0,150],5:[4.0,200],7:[5.0,300],9:[5.0,350],11:[5.5,450],14:[6.5,650],17:[7.0,750],29:[6.0,850],49:[6.0,900],64:[7.0,850],74:[7.0,850],75:[6.5,750]},
				female: {2:[3.0,150],5:[4.0,200],7:[5.0,300],9:[5.0,350],11:[5.5,450],14:[6.0,600],17:[5.5,650],29:[5.0,650],49:[5.5,700],64:[6.0,700],74:[6.5,650],75:[6.5,650]},
				pregnant: {first: 6.5, middle: 6.5, last: 6.5, lactating: 7, option: '置換'},
				unit: 'mg',
				label: "ビタミンE"
			},
			vitaminK: {
				male: {2:[50,0],5:[60,0],7:[80,0],9:[90,0],11:[110,0],14:[140,0],17:[160,0],29:[150,0],49:[150,0],64:[150,0],74:[150,0],75:[150,0]},
				female: {2:[60,0],5:[70,0],7:[90,0],9:[110,0],11:[140,0],14:[170,0],17:[150,0],29:[150,0],49:[150,0],64:[150,0],74:[150,0],75:[150,0]},
				pregnant: {first: 150, middle: 150, last: 150, lactating: 150, option: '置換'},
				unit: 'μg',
				label: "ビタミンK"
			}
		},
		mineral: {
			Na: {
				male: {2:[0,3.0],5:[0,3.5],7:[0,4.5],9:[0,5.0],11:[0,6.0],14:[0,7.0],17:[0,7.5],29:[1.5,7.5],49:[1.5,7.5],64:[1.5,7.5],74:[1.5,7.5],75:[1.5,7.5]},
				female: {2:[0,3.0],5:[0,3.5],7:[0,4.5],9:[0,5.0],11:[0,6.0],14:[0,6.5],17:[0,6.5],29:[1.5,6.5],49:[1.5,6.5],64:[1.5,6.5],74:[1.5,6.5],75:[1.5,6.5]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 0, option: '追加'},
				unit: 'g',
				label: "食塩相当量"
			},
			K: {
				male: {2:[900,0],5:[1400,0],7:[1800,0],9:[2000,0],11:[2200,0],14:[2400,0],17:[3000,0],29:[3000,0],49:[3000,0],64:[3000,0],74:[3000,0],75:[3000,0]},
				female:{2:[900,0],5:[1400,0],7:[1800,0],9:[2000,0],11:[2000,0],14:[2400,0],17:[2600,0],29:[2600,0],49:[2600,0],64:[2600,0],74:[2600,0],75:[2600,0]},
				pregnant: {first: 2600, middle: 2600, last: 2600, lactating: 2600, option: '置換'},
				unit: 'mg',
				label: "カリウム"
			},
			Ca: {
				male: {2:[450,0],5:[600,0],7:[600,0],9:[650,0],11:[700,0],14:[1000,0],17:[800,0],29:[800,2500],49:[750,2500],64:[750,2500],74:[750,2500],75:[700,2500]},
				female: {2:[400,0],5:[550,0],7:[550,0],9:[750,0],11:[750,0],14:[800,0],17:[650,0],29:[650,2500],49:[650,2500],64:[650,2500],74:[650,2500],75:[600,2500]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 0, option: '追加'},
				unit: 'mg',
				label: "カルシウム"
			},
			Mg: {
				male: {2:[70,0],5:[100,0],7:[130,0],9:[170,0],11:[210,0],14:[290,0],17:[360,0],29:[340,0],49:[370,0],64:[370,0],74:[350,0],75:[320,0]},
				female: {2:[70,0],5:[100,0],7:[130,0],9:[160,0],11:[220,0],14:[290,0],17:[310,0],29:[270,0],49:[290,0],64:[290,0],74:[280,0],75:[260,0]},
				pregnant: {first: 40, middle: 40, last: 40, lactating: 0, option: '追加'},
				unit: 'mg',
				label: "マグネシウム"
			},
			P: {
				male: {2:[500,0],5:[700,0],7:[900,0],9:[1000,0],11:[1100,0],14:[1200,0],17:[1200,0],29:[1000,3000],49:[1000,3000],64:[1000,3000],74:[1000,3000],75:[1000,3000]},
				female: {2:[500,0],5:[700,0],7:[800,0],9:[1000,0],11:[1000,0],14:[1000,0],17:[900,0],29:[800,3000],49:[800,3000],64:[800,3000],74:[800,3000],75:[800,3000]},
				pregnant: {first: 800, middle: 800, last: 800, lactating: 800, option: '置換'},
				unit: 'mg',
				label: "リン"
			},
			Fe: {
				male: {2:[4.5,25],5:[5.5,25],7:[5.5,30],9:[7.0,35],11:[8.5,35],14:[10,40],17:[10,50],29:[7.5,50],49:[7.5,50],64:[7.5,50],74:[7.5,50],75:[7.0,50]},
				female: {2:[4.5,20],5:[5.5,25],7:[5.5,30],9:[7.5,35],11:[12.0,35],14:[12.0,40],17:[10.5,40],29:[10.5,40],49:[10.5,40],64:[11,40],74:[6.0,40],75:[6.0,40]},
				pregnant: {first: 2.5, middle: 15, last: 15, lactating: 2.5, option: '追加'},
				unit: 'mg',
				label: "鉄"
			},
			Zn: {
				male: {2:[3,0],5:[4,0],7:[5,0],9:[6,0],11:[7,0],14:[10,0],17:[12,0],29:[11,40],49:[11,45],64:[11,45],74:[11,40],75:[10,40]},
				female: {2:[3,0],5:[3,0],7:[4,0],9:[5,0],11:[6,0],14:[8,0],17:[8,0],29:[8,35],49:[8,35],64:[8,35],74:[8,35],75:[8,30]},
				pregnant: {first: 2, middle: 2, last: 2, lactating: 4, option: '追加'},
				unit: 'mg',
				label: "亜鉛"
			},
			Cu: {
				male: {2:[0.3,0],5:[0.4,0],7:[0.4,0],9:[0.5,0],11:[0.6,0],14:[0.8,0],17:[0.9,0],29:[0.9,7],49:[0.9,7],64:[0.9,7],74:[0.9,7],75:[0.8,7]},
				female: {2:[0.3,0],5:[0.3,0],7:[0.4,0],9:[0.5,0],11:[0.6,0],14:[0.8,0],17:[0.7,0],29:[0.7,7],49:[0.7,7],64:[0.7,7],74:[0.7,7],75:[0.7,7]},
				pregnant: {first: 0.1, middle: 0.1, last: 0.1, lactating: 0.6, option: '追加'},
				unit: 'mg',
				label: "銅"
			},
			Mo: {
				male: {2:[10,0],5:[10,0],7:[15,0],9:[20,0],11:[20,0],14:[25,0],17:[30,0],29:[30,600],49:[30,600],64:[30,600],74:[30,600],75:[25,600]},
				female: {2:[10,0],5:[10,0],7:[15,0],9:[15,0],11:[20,0],14:[25,0],17:[25,0],29:[25,500],49:[25,500],64:[25,500],74:[25,500],75:[25,500]},
				pregnant: {first: 0, middle: 0, last: 0, lactating: 3, option: '追加'},
				unit: 'μg',
				label: "モリブデン"
			},
			Mn: {
				male: {2:[1.5,0],5:[1.5,0],7:[2.0,0],9:[2.5,0],11:[3,0],14:[4,0],17:[4.5,0],29:[4,11],49:[4,11],64:[4,11],74:[4,11],75:[4,11]},
				female: {2:[1.5,0],5:[1.5,0],7:[2.0,0],9:[2.5,0],11:[3,0],14:[4,0],17:[3.5,0],29:[3.5,11],49:[3.5,11],64:[3.5,11],74:[3.5,11],75:[3.5,11]},
				pregnant: {first: 3.5, middle: 3.5, last: 3.5, lactating: 3.5, option: '置換'},
				unit: 'mg',
				label: "マンガン"
			},
			Se: {
				male: {2:[10,100],5:[15,100],7:[15,150],9:[20,200],11:[25,250],14:[30,350],17:[35,400],29:[30,450],49:[30,450],64:[30,450],74:[30,450],75:[30,400]},
				female: {2:[10,100],5:[10,100],7:[15,150],9:[20,200],11:[25,250],14:[30,300],17:[25,350],29:[25,350],49:[25,350],64:[25,350],74:[25,350],75:[25,350]},
				pregnant: {first: 5, middle: 5, last: 5, lactating: 20, option: '追加'},
				unit: 'μg',
				label: "セレン"
			},
			I: {
				male: {2:[50,300],5:[60,400],7:[75,550],9:[90,700],11:[110,900],14:[140,2000],17:[140,3000],29:[130,3000],49:[130,3000],64:[130,3000],74:[130,3000],75:[130,3000]},
				female: {2:[50,300],5:[60,400],7:[75,550],9:[90,700],11:[110,900],14:[140,2000],17:[140,3000],29:[130,3000],49:[130,3000],64:[130,3000],74:[130,3000],75:[130,3000]},
				pregnant: {first: 110, middle: 110, last: 110, lactating: 140, option: '追加'},
				unit: 'μg',
				label: "ヨウ素"
			},
			Cr: {
				male: {2:[0,0],5:[0,0],7:[0,0],9:[0,0],11:[0,0],14:[0,0],17:[0,0],29:[10,500],49:[10,500],64:[10,500],74:[10,500],75:[10,500]},
				female: {2:[0,0],5:[0,0],7:[0,0],9:[0,0],11:[0,0],14:[0,0],17:[0,0],29:[10,500],49:[10,500],64:[10,500],74:[10,500],75:[10,500]},
				pregnant: {first: 10, middle: 10, last: 10, lactating: 10, option: '置換'},
				unit: 'μg',
				label: "クロム"
			},
		},
		/*amino_acid: { // アミノ酸は、通常欠損しない。（ヴィーガンはあり得る）
			Trp:{dose:4,unit:'mg',label: "トリプトファン"}, Met:{dose:15,unit:'mg',label: "メチオニン"},
			Phe:{dose:25,unit:'mg',label: "フェニルアラニン"}, Thr:{dose:15,unit:'mg',label: "スレオニン"},
			Val:{dose:26,unit:'mg',label: "バリン"}, Leu:{dose:39,unit:'mg',label: "ロイシン"},
			Ile:{dose:20,unit:'mg',label: "イソロイシン"}, His:{dose:10,unit:'mg',label: "ヒスチジン"}, Lys:{dose:45,unit:'mg',label: "リジン"}
		}*/
	};
	//成人の摂取量(1日分)
	const adult_nutrients = {
		calory:{need:1400, limit:3150, name:"calory", label:"カロリー", unit:"kcal"},
		carbo:{need:175, limit:512, name:"carbo", label:"糖質", unit:"g"},
		protein:{need:65, limit:157.5, name:"protein", label:"タンパク質", unit:"g"},
		oil:{need:46.7, limit:105, name:"oil", label:"脂質", unit:"g"},
		fiber:{need:21, limit:0, name:"fiber", label:"食物繊維", unit:"g"},
		n_3:{need:2.2, limit:0, name:"n_3", label:"n-3系脂肪酸", unit:"g"},
		n_6:{need:11, limit:0, name:"n_6", label:"n-6系脂肪酸", unit:"g"},
		vitaminA:{need:900, limit:2700, name:"vitaminA", label:"ビタミンA", unit:"μgRAE"},
		vitaminB1:{need:1.4, limit:0, name:"vitaminB1", label:"ビタミンB1", unit:"mg"},
		vitaminB2:{need:1.6, limit:0, name:"vitaminB2", label:"ビタミンB2", unit:"mg"},
		niacin:{need:15, limit:250, name:"niacin", label:"ナイアシン", unit:"mgNE"},
		vitaminB6:{need:1.4, limit:40, name:"vitaminB6", label:"ビタミンB6", unit:"mg"},
		vitaminB12:{need:2.4, limit:0, name:"vitaminB12", label:"ビタミンB12", unit:"μg"},
		folic_acid:{need:240, limit:900, name:"folic_acid", label:"葉酸", unit:"μg"},
		pantothenic_acid:{need:6, limit:0, name:"pantothenic_acid", label:"パントテン酸", unit:"mg"},
		biotin:{need:50, limit:0, name:"biotin", label:"ビオチン", unit:"μg"},
		vitaminC:{need:100, limit:0, name:"vitaminC", label:"ビタミンC", unit:"mg"},
		vitaminD:{need:8.5, limit:100, name:"vitaminD", label:"ビタミンD", unit:"μg"},
		vitaminE:{need:7, limit:650, name:"vitaminE", label:"ビタミンE", unit:"mg"},
		vitaminK:{need:150, limit:0, name:"vitaminK", label:"ビタミンK", unit:"μg"},
		Na:{need:1.5, limit:6.5, name:"Na", label:"食塩相当量", unit:"g"},
		K:{need:3000, limit:0, name:"K", label:"カリウム", unit:"mg"},
		Ca:{need:800, limit:2500, name:"Ca", label:"カルシウム", unit:"mg"},
		Mg:{need:370, limit:0, name:"Mg", label:"マグネシウム", unit:"mg"},
		P:{need:1000, limit:3000, name:"P", label:"リン", unit:"mg"},
		Fe:{need:11, limit:40, name:"Fe", label:"鉄", unit:"mg"},
		Zn:{need:11, limit:30, name:"Zn", label:"亜鉛", unit:"mg"},
		Cu:{need:0.9, limit:7, name:"Cu", label:"銅", unit:"mg"},
		Mo:{need:30, limit:500, name:"Mo", label:"モリブデン", unit:"μg"},
		Mn:{need:4, limit:11, name:"Mn", label:"マンガン", unit:"mg"},
		Se:{need:30, limit:350, name:"Se", label:"セレン", unit:"μg"},
		I:{need:130, limit:3000, name:"I", label:"ヨウ素", unit:"μg"},
		Cr:{need:10, limit:500, name:"Cr", label:"クロム", unit:"μg"}
	};
	//一食分(1日分)の必要量, 上限量を保存
	let your_nutrients = {/* Cr:{need:10, limit:500} */};

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
				if (v.getAttribute('id') != e.target.id) v.checked = false;
			});
		}
		const body_parameter = {
			gender: $('input[name="gender"]:checked').attr('id'),
			pregnant_stage: $('input[name="pregnant-stage"]:checked').attr('id') || "",
			weight: parseFloat($('#body-weight').val()),
			height: parseFloat($('#body-height').val()),
			age: parseInt($('#body-age').val()),
			activation_level: $('input[name="activation-level"]:checked').attr('id') || `activation_level_2`,
		};
		bodyParameterView(body_parameter);
		//memory your body
		localStorage.setItem('body_parameter', JSON.stringify(body_parameter));
	});

	// need_nutrient変数の値も作成
	const bodyParameterView = (body_parameter)=>{
		const gender = body_parameter.gender.substr(body_parameter.gender.indexOf('-') + 1);
		let wanted_energy = 0;
		for (const age_num in standard_nutrient.calory[gender][body_parameter.activation_level]) {
			const calory_value = standard_nutrient.calory[gender][body_parameter.activation_level][age_num];
			wanted_energy = 100 < calory_value ? (calory_value + 0) : parseFloat(calory_value * body_parameter.weight);
			if (body_parameter.age <= age_num) break;
		}
		if ('gender-female' == body_parameter.gender && `` != body_parameter.pregnant_stage) {
			wanted_energy += standard_nutrient.calory.pregnant[body_parameter.pregnant_stage];
		}
		$('#need-calory').html(Math.round(wanted_energy));
		your_nutrients.calory = {need: Math.round(wanted_energy), limit: 0};
		//糖質必要量
		your_nutrients.carbo = {need: your_nutrients.calory.need * 0.5 / 4, limit: your_nutrients.calory.need * 0.65 / 4};
		$('#need-carbo').html(`${Math.round(your_nutrients.carbo.need)}～${Math.round(your_nutrients.carbo.limit)}`);
		//タンパク質必要量
		let protein = {recomend: 0, goal: {need: 0, limit: 0}};
		for (const age_num in standard_nutrient.protein[gender].recomend) {
			const recomend_value = standard_nutrient.protein[gender].recomend[age_num];
			const goal_values = standard_nutrient.protein[gender].goal[age_num];
			protein = {
				recomend: recomend_value,
				goal: {
					need: Math.round(goal_values[0] * your_nutrients.calory.need / 100 / 4),
					limit: Math.round(goal_values[1] * your_nutrients.calory.need / 100 / 4)
				}
			};
			if (body_parameter.age <= age_num) break;
		}
		if ('gender-female' == body_parameter.gender && `` != body_parameter.pregnant_stage) {
			protein.recomend += standard_nutrient.protein.pregnant[body_parameter.pregnant_stage];
			protein.goal.need += standard_nutrient.protein.pregnant[body_parameter.pregnant_stage];
			protein.goal.limit += standard_nutrient.protein.pregnant[body_parameter.pregnant_stage];
		}
		your_nutrients.protein = {need: protein.recomend, limit: (protein.goal.limit < protein.recomend ? 0 : protein.goal.limit)};
		$('#need-protein').html(protein.recomend + (0 < your_nutrients.protein.limit ? `～${your_nutrients.protein.limit}` : ''));
		//脂質必要量
		let oil = {need: 0, limit: 0};
		for (const age_num in standard_nutrient.oil[gender]) {
			const goal_values = standard_nutrient.oil[gender][age_num];
			oil = {
				need: Math.round(goal_values[0] * your_nutrients.calory.need / 100 / 9),
				limit: Math.round(goal_values[1] * your_nutrients.calory.need / 100 / 9)
			};
			if (body_parameter.age <= age_num) break;
		}
		your_nutrients.oil = {need: oil.need, limit: oil.limit};
		$('#need-oil').html(`${your_nutrients.oil.need}～${your_nutrients.oil.limit}`);
		//食物繊維必要量
		let need_fiber = 0;
		if ('gender-female' == body_parameter.gender && !!body_parameter.pregnant_stage) {
			need_fiber = 18;			
		} else {
			for (const age_num in standard_nutrient.fiber[gender]) {
				need_fiber = standard_nutrient.fiber[gender][age_num];
				if (body_parameter.age <= age_num) break;
			}
		}
		$('#need-fiber').html(need_fiber + '～');
		your_nutrients.fiber = {need: need_fiber, limit: 0};
		//ビタミン・ミネラル・脂肪酸
		for (const big_genre in nutrient_table) {
			for (const genre in nutrient_table[big_genre]) {
				let age_nutrient = [];
				for (let i in nutrient_table[big_genre][genre][gender]) {
					age_nutrient = nutrient_table[big_genre][genre][gender][i];
					if (body_parameter.age <= i) break;
				}
				$('#need-' + genre).html(age_nutrient[0] + '～' + (0 == age_nutrient[1] ? '' : age_nutrient[1]));
				your_nutrients[genre] = {need: age_nutrient[0], limit: age_nutrient[1]};
			}
		}
		//必須アミノ酸
		// 普通は不足しないからOK
	};

	const getWaterNutrient = (body_parameter)=>{
		let need_water = 0;
		const water_table = {29: 40, 55: 35, 56: 30};
		for (let age_num in water_table) {
			need_water = water_table[age_num];
			if (body_parameter.age <= age_num) break;
		}
		return {total: need_water * body_parameter.weight, drink: need_water * body_parameter.weight * 2/5};
	};
	
	// get body_parameter => view
	(function bodyParameter() {
		const body_parameter_str = localStorage.getItem('body_parameter');
		if (!!body_parameter_str) {
			const body_parameter = JSON.parse(body_parameter_str);
			$('#'+body_parameter.gender).attr('checked', 'checked');
			if (!!body_parameter.pregnant_stage) {
				$('#'+body_parameter.pregnant_stage).attr('checked', 'checked');
			}
			$('#body-weight').val(body_parameter.weight);
			$('#body-height').val(body_parameter.height);
			$('#body-age').val(body_parameter.age);
			if (!!body_parameter.activation_level) {
				$('#'+body_parameter.activation_level).attr(`checked`, `checked`);
			} else {
				//デフォルト値（互換性確保）
				body_parameter.activation_level = `activation_level_2`;
			}
			bodyParameterView(body_parameter);
			// hide this input area.
			$('#your-input-area').css('display', 'none');
			const water = getWaterNutrient(body_parameter);
			$('#your-abstract').html(`${'gender-male' == body_parameter.gender ? '♂':'♀'} ${body_parameter.age}歳 身長 ${body_parameter.height}cm
				(水分総摂取量 ${water.total}ml, 飲料 ${water.drink} ml)`);
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
			const water = getWaterNutrient(body_parameter);
			$('#your-abstract').html(`${'gender-male' == body_parameter.gender ? '♂':'♀'} ${body_parameter.age}歳 身長 ${body_parameter.height}cm
				(水分総摂取量 ${water.total}ml, 飲料 ${water.drink} ml)`);
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

	$('#menu-creator-select').on('change', ()=>{
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
			const a_nutrient_rate = !!your_nutrients[category].need ? maxNumberDisplay(100 * a_nutrient_value / your_nutrients[category].need, 2) : '-';
			rtn += `<dt>${standard_nutrient[category].label}(${standard_nutrient[category].unit})</dt>
				<dd class="${category}">${a_nutrient_value} (${a_nutrient_rate}%)</dd>`;
		}
		for (let genre in nutrient_table) {
			for (let nutrient_name in nutrient_table[genre]) {
				const a_nutrient_value = maxNumberDisplay(nutrient_add_up[nutrient_name] / serving, 6);
				const a_nutrient_rate = !!your_nutrients[nutrient_name].need ? maxNumberDisplay(100 * a_nutrient_value / your_nutrients[nutrient_name].need, 2) : '-';
				rtn += `<dt>${nutrient_table[genre][nutrient_name].label} (${nutrient_table[genre][nutrient_name].unit})</dt>
					<dd class="${nutrient_name}">${a_nutrient_value} (${a_nutrient_rate}%)</dd>`;
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
			// menu全部を変更するか確認
			let is_contain = false;
			let menus = JSON.parse(localStorage.getItem('menu'));
			if (0 < menus.length) {
				for (const i in menus) {
					for (const k in menus[i].materials) {
						if (changed_material.name == menus[i].materials[k].name) {
							let the_material = {name: `${changed_material.name}`, weight: 0 + menus[i].materials[k].weight, nutrients: {}}; 
							for (const nutrient_name in changed_material.nutrients) {
								the_material.nutrients[nutrient_name] = changed_material.nutrients[nutrient_name] / changed_material.weight * the_material.weight;
							}
							// 上書き
							menus[i].materials[k] = Object.assign(the_material, {});
							is_contain = true;
							continue;
						}
					}
				}
			}
			if (is_contain) {
				localStorage.setItem('menu', JSON.stringify(menus));
				alert(`${changed_material.name}\n素材は変更されました。\n(料理の中の${changed_material.name}の値も変更されました。)`);
			} else {
				alert(changed_material.name+'\n素材は変更されました。');
			}
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
			{tag_name: ".perfect-menu-nutrients-table", tight: 54.2, wide: 72.6},
			{tag_name: ".material-nutrients", tight: 54.2, wide: 72.6}
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
		if (`H5` != e.currentTarget.tagName) return;
		const is_toggle_opening_flg = 'explain-toggle-close' == e.currentTarget.parentElement.className;
		e.currentTarget.parentElement.className = is_toggle_opening_flg ? 'explain-toggle-open' : 'explain-toggle-close';
	});

	//
	// explore
	//

	const getMenuInExplore = ()=>{
		const menu_ary = JSON.parse(localStorage.getItem('menu'));
		if (!menu_ary || 0 == menu_ary.length) return alert('料理がありません。');
		let rtn = '<select><option>' + unselect_option + '</option>';
		//1　== ary.length だとバグるからfor使う。menu_list_html += menu_ary.map(v => `<option>${v}</option>`).reduce((w, x)=> w + x);
		for (let v of menu_ary) {
			rtn += `<option>${v.name}</option>`;
		}
		rtn += '</select>';
		return rtn;
	};

	const getForServing = ()=>{
		const checked_radio_button = $('input[name="for-serving"]:checked');
		return {
			serving_rate: eval(checked_radio_button.data(`serve`)),
			nutrients: Object.assign( (`your` == checked_radio_button.attr(`id`).substr(0, 4) ? your_nutrients : adult_nutrients), {})
		};
	};

	$('#explore-perfect-button-box > button').on('click', ()=>{
		const menu_ary = JSON.parse(localStorage.getItem('menu'));
		if (!menu_ary || 0 == menu_ary.length) return alert('料理がありません。');
		const menu_list_html = getMenuInExplore();
		$('#contain-menu-list').html(menu_list_html);
		$('#not-contain-menu-list').html(menu_list_html);
		$('#your-nutrient').css('display', 'none');
		$('#explore-perfect').css('display', 'block');
		$('#output-perfect').html('');
	});

	$('#contain-menu-list, #not-contain-menu-list').on('change', (e)=>{
		if (unselect_option != e.target.value && `` != e.target.parentElement.id) {
			for (let v of $(`#${e.target.parentElement.id} select`)) {
				if (v.value == unselect_option) return;
			}
			const menu_list_html = getMenuInExplore();
			$('#'+e.target.parentElement.id).append(menu_list_html);
		}
	});

	// 栄養素が足りているかチェック
	const getLackNutrients = (menus_ary)=>{
		let enough_flg = true;
		let survey_nutrients_ary = [];
		const serve = getForServing(); 
		// 現在含まれる栄養素を取得して100％に満たないものがあるか判定して、栄養素を返す
		for (const a_nutrient_name in serve.nutrients) {
			let added_value = 0;
			for (const a_menu of menus_ary) {
				for (const a_material of a_menu.materials) {
					added_value += parseFloat(100 * (a_material.nutrients[a_nutrient_name] || 0) / (a_menu.serving || 1) / (serve.nutrients[a_nutrient_name].need * serve.serving_rate));
				}
			}
			survey_nutrients_ary.push({value: added_value, name: a_nutrient_name});
			if (added_value < 100 && 0 == [`calory`, `carbo`, `protein`, `oil`].filter(v => v == a_nutrient_name).length) enough_flg = false;
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
		const serve = getForServing();
		if (0 < menu_ary.length) {
			for (const a_menu of menu_ary) {
				let limit_over_flg = false;
				for (const a_material of a_menu.materials) {
					if (limit_over_flg) break;
					for (const v of survey_nutrients_ary) {
						if (0 == serve.nutrients[v.name].need) continue;
						const nutrient_rate = parseFloat(100 * (a_material.nutrients[v.name] || 0) / (a_menu.serving || 1) / (serve.nutrients[v.name].need*serve.serving_rate));
						if (0 < [`carbo`, `protein`, `oil`, `n_6`].filter(val => val == v.name).length) {
							// 糖質とタンパク質と脂質は考慮に入れない
						} else if (0 != serve.nutrients[v.name].limit && serve.nutrients[v.name].limit * 100 / serve.nutrients[v.name].need < v.value + nutrient_rate) {
							// 過剰摂取になる場合、候補に入れないようにする
							limit_over_flg = true;
						} else if (`calory` == v.name && 1.2 * 100 <= v.value + nutrient_rate) {
							limit_over_flg = true;
						} else {
							// 不足している分だけを評価する
							if (v.value < 100) evaluation.value += (100 < v.value + nutrient_rate) ? (100 - v.value) : nutrient_rate;
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

	/**
	 * 評価した後、すぐ後ろの料理(menus)を検証位置(rtn.menus)に用意する。それを繰り返す(再帰関数はコールスタック的にもダメ。)
	 * 料理がABCの3種存在していた時、配列要素を一つずつ追加していって、後ろから取り除いていって、全組み合わせを試す（AB -> ABC -> AC -> BC -> C）
	 */
	async function selectWholeMenu(rtn, selectable_menus) {
		//料理群の評価 → 栄養アンバランス、栄養不足で料理追加、メニュー完成 を返す
		const evaluateMenuNutrients = (rtn)=>{
			const menus = rtn.menus[rtn.menus.length - 1].concat([]);
			const serve = getForServing();
			let comment = `メニュー完成`;
			let nutrient_score = 0;
			// 現在含まれる栄養素を取得して100％に満たないものがあるか判定して、栄養素を返す
			for (const a_nutrient_name in serve.nutrients) {
				let added_value = 0;
				for (const a_menu of menus) {
					for (const a_material of a_menu.materials) {
						added_value += parseFloat( (a_material.nutrients[a_nutrient_name] || 0) / (a_menu.serving || 1) );
					}
				}
				if (0 < ['calory', 'carbo', 'protein', 'oil', `n_6`].filter(v => v == a_nutrient_name).length) {
					if (serve.nutrients[`calory`].need * serve.serving_rate * 1.2 < added_value) comment = `栄養アンバランス`;
				}	else if (0 != serve.nutrients[a_nutrient_name].limit && serve.nutrients[a_nutrient_name].limit * serve.serving_rate <= added_value) {
					comment = `栄養アンバランス`;
				} else if (added_value <= serve.nutrients[a_nutrient_name].need * serve.serving_rate) {
					if (`栄養アンバランス` != comment) {
						comment = `栄養不足で料理追加`;
						const score_point = parseFloat(100 * added_value / (serve.nutrients[a_nutrient_name].need * serve.serving_rate));
						// scoreにはカロリー等は入れない
						nutrient_score += 100 < score_point ? 100 : score_point;
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
				const continue_flg = nextMenu(rtn, selectable_menus);
				if (!continue_flg) break;
			} else if (`栄養不足で料理追加` == comment) {
				const continue_flg = addMenu(rtn, selectable_menus);
				if (!continue_flg) break;
			} else if (`メニュー完成` == comment) {
				rtn.perfect_menus.push(rtn.menus[rtn.iterator.pattern].concat([]));
				const continue_flg = nextMenu(rtn, selectable_menus);
				if (!continue_flg) break;
			}
		}
		return rtn;
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
				const a_menu_count = ary.filter(w => v == w).length;
				rtn += 1 == a_menu_count ? `<li><h6 class="one-length">${v}</h6></li>` : `<li><h6>${v}</h6><span>×${a_menu_count}</span></li>`;
			}
		}
		return rtn;
	};

	const displayPerfectMenus = (perfect_menus)=>{
		const serve = getForServing();
		let html = '';
		for (const i in perfect_menus) {
			let menus_count_ary = []; // name
			let perfect_nutrients = {};
			let materials = [/* {name: ``, value: 0, nutrients: {...}}, */];
			html += `<article><h4>パターン${parseInt(i) + 1}</h4><ul class="perfect-menu-list">`;
			for (const a_menu of perfect_menus[i]) {
				menus_count_ary.push(a_menu.name);
				for (const a_nutrient_name in serve.nutrients) {
					if (!perfect_nutrients[a_nutrient_name]) {
						perfect_nutrients[a_nutrient_name] = {value: 0, need: serve.nutrients[a_nutrient_name].need * serve.serving_rate};
					}
					for (const a_material of a_menu.materials) {
						perfect_nutrients[a_nutrient_name].value += parseFloat(a_material.nutrients[a_nutrient_name] / (a_menu.serving || 1)) || 0;
					}
				}
				// materialsに入力
				for (const a_material of a_menu.materials) {
					let can_add_flg = true;
					for (let k in materials) {
						if (materials[k].name == a_material.name) {
							can_add_flg = false;
							materials[k].weight += parseFloat(a_material.weight / (a_menu.serving || 1));
							for (const a_nutrient_name in a_material.nutrients) {
								materials[k].nutrients[a_nutrient_name] += parseFloat(a_material.nutrients[a_nutrient_name] / (a_menu.serving || 1)) || 0;
							}
						}
					}
					if (can_add_flg && `` != a_material.name) {
						let nutrients = {};
						for (const a_nutrient_name in a_material.nutrients) {
							nutrients[a_nutrient_name] = parseFloat(a_material.nutrients[a_nutrient_name] / (a_menu.serving || 1)) || 0;
						}
						materials.push({
							name: a_material.name,
							nutrients: nutrients,
							weight: parseFloat(a_material.weight / (a_menu.serving || 1)),
						});
					}
				}
			}
			html += countAryDisplay(menus_count_ary);
			html += '</ul><ul class="perfect-menu-nutrients-table">';
			for (const a_nutrient_name in perfect_nutrients) {
				const percentage = (0 == perfect_nutrients[a_nutrient_name].need) ? ' - ' : maxNumberDisplay(100 * perfect_nutrients[a_nutrient_name].value / perfect_nutrients[a_nutrient_name].need, 2);
				const nutrient_obj = getNutrientView(a_nutrient_name);
				let color_class_name = ``;
				if (`calory` == a_nutrient_name) {
					color_class_name = percentage < 100 ? `safe-color` : `caution-color`;
				}	else if (percentage < 100) {
					color_class_name = `poor-color`;
				}	else if ((0 == serve.nutrients[a_nutrient_name].limit * serve.serving_rate) && 100 < percentage) {
					//color_class_name = `safe-color`;
				} else if ((0.8 * serve.nutrients[a_nutrient_name].limit * serve.serving_rate) < perfect_nutrients[a_nutrient_name].value && (perfect_nutrients[a_nutrient_name].value < serve.nutrients[a_nutrient_name].limit * serve.serving_rate)) {
					color_class_name = `danger-color`;
				} else if ((0.5 * serve.nutrients[a_nutrient_name].limit * serve.serving_rate) < perfect_nutrients[a_nutrient_name].value && (perfect_nutrients[a_nutrient_name].value < serve.nutrients[a_nutrient_name].limit * serve.serving_rate)) {
					color_class_name = `caution-color`;
				} else if (serve.nutrients[a_nutrient_name].limit * serve.serving_rate < perfect_nutrients[a_nutrient_name].value && 0 != serve.nutrients[a_nutrient_name].limit) {
					color_class_name = `limit-over-color`;
				}
				html += `<li><h5>${nutrient_obj.label}</h5><p class="${color_class_name}">${maxNumberDisplay(perfect_nutrients[a_nutrient_name].value, 2)} ${nutrient_obj.unit} (${percentage}%)</p><span class="pattern${parseInt(i)+1} ${a_nutrient_name}"></span></li>`;
			}
			html += `</ul><div class="material-nutrients"><h6><span class="triangle-close">▼</span>素材<span>（栄養貢献度を閲覧するには、素材をクリック）</span></h6><ul data-pattern="pattern${parseInt(i)+1}">`;
			for (const a_material of materials) {
				if (`` == a_material.name) continue;
				let dataset = `{`;
				for (const a_nutrient_name in perfect_nutrients) {
					const percentage = (0 == perfect_nutrients[a_nutrient_name].need) ? ` - ` : maxNumberDisplay(100 * a_material.nutrients[a_nutrient_name] / perfect_nutrients[a_nutrient_name].need, 2);
					dataset += `"${a_nutrient_name}": "${percentage}",`;
				}
				dataset = dataset.substring(0, dataset.length - 1) + `}`;
				html += `<li data-nutrients='${dataset}'><span>${a_material.name}</span><span class="material-weight">${maxNumberDisplay(a_material.weight, 2)} g</span></ll>`;
			}
			html += '</ul></div></article>';
		}
		return html;
	};

	$('#explore-perfect').on('click', '#output-perfect .material-nutrients h6', (e)=>{
		if (`H6` != e.currentTarget.tagName) return;
		if ('triangle-close' == e.currentTarget.children[0].className) {
			e.currentTarget.children[0].className = 'triangle-open';
			e.currentTarget.nextElementSibling.style.display = 'block';
		} else {
			e.currentTarget.children[0].className = 'triangle-close';
			e.currentTarget.nextElementSibling.style.display = 'none';
		}
	});

	//素材の色変え、素材の値を挿入
	$('#explore-perfect').on('click', '.material-nutrients li', (e)=>{
		const pattern = e.currentTarget.parentElement.dataset.pattern;
		const dataset = JSON.parse(e.currentTarget.dataset.nutrients);
		if (-1 != [`rgb(68, 68, 68)`, ``, `#444`, `#444444`].indexOf(e.currentTarget.style.backgroundColor)) {
			for (let html_li of e.currentTarget.parentElement.children) {
				html_li.style.backgroundColor = `#444`;
			}
			e.currentTarget.style.backgroundColor = `#373`;
			for (const a_nutrient_name in dataset) {
				const doc = document.getElementsByClassName(`${pattern} ${a_nutrient_name}`);
				doc[0].innerHTML = dataset[a_nutrient_name] + `%`;
				if (100 < dataset[a_nutrient_name]) doc[0].style.backgroundColor = `#c33`;
				else if (33 < dataset[a_nutrient_name]) doc[0].style.backgroundColor = `#373`;
				else doc[0].style.backgroundColor = ``;
			}
		} else {
			$(`.${pattern}`).html(``);
			e.currentTarget.style.backgroundColor = `#444`;
		}
	});

	$('#explore-select-button, #explore-all-button').on('click', (e)=>{
		let perfect_menus_ary = [];
		let unperfect_menus_ary = [];
		let selectable_menus = JSON.parse(localStorage.getItem('menu'));
		const can_duplicate_menu_flg = $('#can-duplicate-menu-flg').prop('checked');
		// make candidate menu course
		let candidate_menus = [];
		if (0 < $('#contain-menu-list select').length) {
			for (let v of $('#contain-menu-list select')) {
				for (let i in selectable_menus) {
					if (v.value == selectable_menus[i].name) {
						candidate_menus.push(selectable_menus[i]);
						break;
					}
				}
			}
		}
		if (0 < $('#not-contain-menu-list select').length) {
			for (let v of $('#not-contain-menu-list select')) {
				for (let i in selectable_menus) {
					if (v.value == selectable_menus[i].name) {
						selectable_menus.splice(i, 1);
						break;
					}
				}
			}
		}
		if (`explore-all-button` == e.target.id) {
			let rtn = {
				menus: [candidate_menus.concat([])],
				perfect_menus: [],
				incompletes: {menus: [{}, {}, {}], score: [0, 0, 0]},
				iterator: {pattern: 0, selectable_menu: 0},
				candidate_menus: candidate_menus.concat([])
			};
			if (3 < selectable_menus.length) {
				$(`#loading`).css(`padding`, `calc(${window.innerHeight / 2}px - 1rem) 0 0`).css('top', `${window.scrollY}px`).css(`display`, `block`);
				setTimeout(()=>{ //この位置じゃないとレンダリングうまくいかない
					selectWholeMenu(rtn, selectable_menus).then(val => {
						$('#output-perfect').html(0 < val.perfect_menus.length ? displayPerfectMenus(val.perfect_menus) : '<p>検索しましたが、1つも発見できませんでした。</p>' + displayPerfectMenus(val.incompletes.menus));
						$(`#loading`).css(`display`, `none`);
						fitWindowSize();
					});
				}, 0);
			} else {
				$('#output-perfect').html('<p>料理の数が少なすぎます。</p>');
			}
		} else {
			// 全料理をチェック
			for (const a_menu of selectable_menus) {
				let check_menu_ary = candidate_menus.concat([]); //concatしないと同一になってしまう
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
					selectable_menu_ary = selectable_menus.concat([]);
				} else {
					for (let v of selectable_menus) {
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
		}
	});
});
