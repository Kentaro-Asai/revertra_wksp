<?php
class nutrient
{

	public function __construct() {
		
	}

	public static function standardNutrient(){
		return [
			"calory"=>["need"=>1400, "limit"=>3150, "name"=>"calory", "label"=>"カロリー", "unit"=>"kcal"],
			"carbo"=>["need"=>175, "limit"=>512, "name"=>"carbo", "label"=>"糖質", "unit"=>"g"],
			"protein"=>["need"=>65, "limit"=>157.5, "name"=>"protein", "label"=>"タンパク質", "unit"=>"g"],
			"oil"=>["need"=>46.7, "limit"=>105, "name"=>"oil", "label"=>"脂質", "unit"=>"g"],
			"fiber"=>["need"=>21, "limit"=>0, "name"=>"fiber", "label"=>"食物繊維", "unit"=>"g"],
			"n_3"=>["need"=>2.2, "limit"=>0, "name"=>"n_3", "label"=>"n-3系脂肪酸", "unit"=>"g"],
			"n_6"=>["need"=>11, "limit"=>0, "name"=>"n_6", "label"=>"n-6系脂肪酸", "unit"=>"g"],
			"vitaminA"=>["need"=>900, "limit"=>2700, "name"=>"vitaminA", "label"=>"ビタミンA", "unit"=>"μgRAE"],
			"vitaminB1"=>["need"=>1.4, "limit"=>0, "name"=>"vitaminB1", "label"=>"ビタミンB1", "unit"=>"mg"],
			"vitaminB2"=>["need"=>1.6, "limit"=>0, "name"=>"vitaminB2", "label"=>"ビタミンB2", "unit"=>"mg"],
			"niacin"=>["need"=>15, "limit"=>250, "name"=>"niacin", "label"=>"ナイアシン", "unit"=>"mgNE"],
			"vitaminB6"=>["need"=>1.4, "limit"=>40, "name"=>"vitaminB6", "label"=>"ビタミンB6", "unit"=>"mg"],
			"vitaminB12"=>["need"=>2.4, "limit"=>0, "name"=>"vitaminB12", "label"=>"ビタミンB12", "unit"=>"μg"],
			"folic_acid"=>["need"=>240, "limit"=>900, "name"=>"folic_acid", "label"=>"葉酸", "unit"=>"μg"],
			"pantothenic_acid"=>["need"=>6, "limit"=>0, "name"=>"pantothenic_acid", "label"=>"パントテン酸", "unit"=>"mg"],
			"biotin"=>["need"=>50, "limit"=>0, "name"=>"biotin", "label"=>"ビオチン", "unit"=>"μg"],
			"vitaminC"=>["need"=>100, "limit"=>0, "name"=>"vitaminC", "label"=>"ビタミンC", "unit"=>"mg"],
			"vitaminD"=>["need"=>8.5, "limit"=>100, "name"=>"vitaminD", "label"=>"ビタミンD", "unit"=>"μg"],
			"vitaminE"=>["need"=>7, "limit"=>650, "name"=>"vitaminE", "label"=>"ビタミンE", "unit"=>"mg"],
			"vitaminK"=>["need"=>150, "limit"=>0, "name"=>"vitaminK", "label"=>"ビタミンK", "unit"=>"μg"],
			"Na"=>["need"=>1.5, "limit"=>6.5, "name"=>"Na", "label"=>"食塩相当量", "unit"=>"g"],
			"K"=>["need"=>3000, "limit"=>0, "name"=>"K", "label"=>"カリウム", "unit"=>"mg"],
			"Ca"=>["need"=>800, "limit"=>2500, "name"=>"Ca", "label"=>"カルシウム", "unit"=>"mg"],
			"Mg"=>["need"=>370, "limit"=>0, "name"=>"Mg", "label"=>"マグネシウム", "unit"=>"mg"],
			"P"=>["need"=>1000, "limit"=>3000, "name"=>"P", "label"=>"リン", "unit"=>"mg"],
			"Fe"=>["need"=>11, "limit"=>40, "name"=>"Fe", "label"=>"鉄", "unit"=>"mg"],
			"Zn"=>["need"=>11, "limit"=>30, "name"=>"Zn", "label"=>"亜鉛", "unit"=>"mg"],
			"Cu"=>["need"=>0.9, "limit"=>7, "name"=>"Cu", "label"=>"銅", "unit"=>"mg"],
			"Mo"=>["need"=>30, "limit"=>500, "name"=>"Mo", "label"=>"モリブデン", "unit"=>"μg"],
			"Mn"=>["need"=>4, "limit"=>11, "name"=>"Mn", "label"=>"マンガン", "unit"=>"mg"],
			"Se"=>["need"=>30, "limit"=>350, "name"=>"Se", "label"=>"セレン", "unit"=>"μg"],
			"I"=>["need"=>130, "limit"=>3000, "name"=>"I", "label"=>"ヨウ素", "unit"=>"μg"],
			"Cr"=>["need"=>10, "limit"=>500, "name"=>"Cr", "label"=>"クロム", "unit"=>"μg"]
		];
	}

	public static function foods(){
		return [
			["name"=>"納豆","nutrients"=>["calory"=>190,"carbo"=>12.1,"fiber"=>6.7,"protein"=>14.5,"oil"=>10,"vitaminA"=>0,"vitaminB1"=>0.07,"vitaminB2"=>0.56,"niacin"=>5.2,"vitaminB6"=>0.24,"vitaminB12"=>0,"folic_acid"=>120,"pantothenic_acid"=>3.6,"biotin"=>18,"vitaminC"=>0,"vitaminD"=>0,"vitaminE"=>0.5,"vitaminK"=>600,"Na"=>0,"K"=>660,"Ca"=>90,"Mg"=>100,"P"=>190,"Fe"=>3.3,"Zn"=>1.9,"Cu"=>0.61,"Mo"=>290,"Mn"=>0,"Se"=>16,"I"=>0,"Cr"=>1,"n_3"=>0.67,"n_6"=>4.98],"weight"=>100],
			["name"=>"鶏卵","nutrients"=>["calory"=>142,"carbo"=>0.4,"fiber"=>0,"protein"=>11.3,"oil"=>10.2,"vitaminA"=>210,"vitaminB1"=>0.06,"vitaminB2"=>0.37,"niacin"=>3.2,"vitaminB6"=>0.09,"vitaminB12"=>1.1,"folic_acid"=>49,"pantothenic_acid"=>1.16,"biotin"=>24,"vitaminC"=>0,"vitaminD"=>3.8,"vitaminE"=>1.3,"vitaminK"=>12,"Na"=>0.4,"K"=>130,"Ca"=>46,"Mg"=>10,"P"=>170,"Fe"=>1.5,"Zn"=>1.1,"Cu"=>0.05,"Mo"=>4,"Mn"=>0.02,"Se"=>24,"I"=>33,"Cr"=>0,"n_3"=>0.11,"n_6"=>1.32],"weight"=>100],
			["name"=>"みつば","nutrients"=>["calory"=>19,"carbo"=>4.1,"fiber"=>2.9,"protein"=>1.8,"oil"=>0.1,"vitaminA"=>140,"vitaminB1"=>0.05,"vitaminB2"=>0.13,"niacin"=>1.4,"vitaminB6"=>0.06,"vitaminB12"=>0,"folic_acid"=>66,"pantothenic_acid"=>0.33,"biotin"=>0,"vitaminC"=>22,"vitaminD"=>0,"vitaminE"=>1.1,"vitaminK"=>120,"Na"=>0,"K"=>500,"Ca"=>52,"Mg"=>21,"P"=>64,"Fe"=>1.8,"Zn"=>0.2,"Cu"=>0.07,"Mo"=>0,"Mn"=>0.42,"Se"=>0,"I"=>0,"Cr"=>0,"n_3"=>0,"n_6"=>0],"weight"=>100],
			["name"=>"木綿豆腐","nutrients"=>["calory"=>73,"carbo"=>1.5,"fiber"=>1.1,"protein"=>6.7,"oil"=>4.9,"vitaminA"=>0,"vitaminB1"=>0.09,"vitaminB2"=>0.04,"niacin"=>1.9,"vitaminB6"=>0.05,"vitaminB12"=>0,"folic_acid"=>12,"pantothenic_acid"=>0.02,"biotin"=>4.1,"vitaminC"=>0,"vitaminD"=>0,"vitaminE"=>0.2,"vitaminK"=>6,"Na"=>0,"K"=>110,"Ca"=>93,"Mg"=>57,"P"=>88,"Fe"=>1.5,"Zn"=>0.6,"Cu"=>0.16,"Mo"=>44,"Mn"=>0.41,"Se"=>4,"I"=>6,"Cr"=>4,"n_3"=>0.31,"n_6"=>2.29],"weight"=>100],
			["name"=>"鶏もも肉皮つき","nutrients"=>["calory"=>220,"carbo"=>0,"fiber"=>0,"protein"=>26.4,"oil"=>13.9,"vitaminA"=>25,"vitaminB1"=>0.14,"vitaminB2"=>0.24,"niacin"=>13,"vitaminB6"=>0.28,"vitaminB12"=>0.5,"folic_acid"=>8,"pantothenic_acid"=>1.2,"biotin"=>5.6,"vitaminC"=>2,"vitaminD"=>0.4,"vitaminE"=>0.2,"vitaminK"=>34,"Na"=>0.2,"K"=>390,"Ca"=>6,"Mg"=>29,"P"=>230,"Fe"=>0.9,"Zn"=>2.5,"Cu"=>0.05,"Mo"=>3,"Mn"=>0.01,"Se"=>29,"I"=>0,"Cr"=>0,"n_3"=>0.08,"n_6"=>1.65],"weight"=>100],
			["name"=>"鶏胸肉皮つき","nutrients"=>["calory"=>133,"carbo"=>0.1,"fiber"=>0,"protein"=>17.3,"oil"=>5.9,"vitaminA"=>18,"vitaminB1"=>0.09,"vitaminB2"=>0.1,"niacin"=>15,"vitaminB6"=>0.57,"vitaminB12"=>0.2,"folic_acid"=>12,"pantothenic_acid"=>1.74,"biotin"=>2.9,"vitaminC"=>3,"vitaminD"=>0.1,"vitaminE"=>0.3,"vitaminK"=>23,"Na"=>0.1,"K"=>340,"Ca"=>4,"Mg"=>27,"P"=>200,"Fe"=>0.3,"Zn"=>0.6,"Cu"=>0.03,"Mo"=>2,"Mn"=>0.01,"Se"=>17,"I"=>0,"Cr"=>1,"n_3"=>0.11,"n_6"=>0.92],"weight"=>100],
			["name"=>"鶏胸肉皮なし","nutrients"=>["calory"=>105,"carbo"=>0.1,"fiber"=>0,"protein"=>19.2,"oil"=>1.9,"vitaminA"=>9,"vitaminB1"=>0.1,"vitaminB2"=>0.11,"niacin"=>17,"vitaminB6"=>0.64,"vitaminB12"=>0.2,"folic_acid"=>13,"pantothenic_acid"=>1.92,"biotin"=>3.2,"vitaminC"=>3,"vitaminD"=>0.1,"vitaminE"=>0.3,"vitaminK"=>16,"Na"=>0.1,"K"=>370,"Ca"=>4,"Mg"=>29,"P"=>220,"Fe"=>0.3,"Zn"=>0.7,"Cu"=>0.02,"Mo"=>2,"Mn"=>0.02,"Se"=>17,"I"=>0,"Cr"=>0,"n_3"=>0.05,"n_6"=>0.32],"weight"=>100],
			["name"=>"ほうれんそう","nutrients"=>["calory"=>18,"carbo"=>3.1,"fiber"=>2.8,"protein"=>1.7,"oil"=>0.4,"vitaminA"=>350,"vitaminB1"=>0.11,"vitaminB2"=>0.2,"niacin"=>1.3,"vitaminB6"=>0.14,"vitaminB12"=>0,"folic_acid"=>210,"pantothenic_acid"=>0.2,"biotin"=>2.9,"vitaminC"=>35,"vitaminD"=>0,"vitaminE"=>2.1,"vitaminK"=>270,"Na"=>0,"K"=>690,"Ca"=>49,"Mg"=>69,"P"=>47,"Fe"=>2,"Zn"=>0.7,"Cu"=>0.11,"Mo"=>5,"Mn"=>0.32,"Se"=>3,"I"=>3,"Cr"=>2,"n_3"=>0.12,"n_6"=>0.04],"weight"=>100],
			["name"=>"油揚げ","nutrients"=>["calory"=>377,"carbo"=>0.4,"fiber"=>1.3,"protein"=>23,"oil"=>34.4,"vitaminA"=>0,"vitaminB1"=>0.06,"vitaminB2"=>0.04,"niacin"=>6.2,"vitaminB6"=>0.07,"vitaminB12"=>0,"folic_acid"=>18,"pantothenic_acid"=>0.07,"biotin"=>7.1,"vitaminC"=>0,"vitaminD"=>0,"vitaminE"=>1.3,"vitaminK"=>67,"Na"=>0,"K"=>86,"Ca"=>310,"Mg"=>150,"P"=>350,"Fe"=>3.2,"Zn"=>2.5,"Cu"=>0.22,"Mo"=>97,"Mn"=>1.55,"Se"=>8,"I"=>1,"Cr"=>5,"n_3"=>2.26,"n_6"=>11.3],"weight"=>100],
			["name"=>"こまつな","nutrients"=>["calory"=>13,"carbo"=>2.4,"fiber"=>1.9,"protein"=>1.3,"oil"=>0.2,"vitaminA"=>260,"vitaminB1"=>0.09,"vitaminB2"=>0.13,"niacin"=>1.6,"vitaminB6"=>0.12,"vitaminB12"=>0,"folic_acid"=>110,"pantothenic_acid"=>0.32,"biotin"=>2.9,"vitaminC"=>39,"vitaminD"=>0,"vitaminE"=>0.9,"vitaminK"=>210,"Na"=>0,"K"=>500,"Ca"=>170,"Mg"=>12,"P"=>45,"Fe"=>2.8,"Zn"=>0.2,"Cu"=>0.06,"Mo"=>10,"Mn"=>0.13,"Se"=>1,"I"=>2,"Cr"=>2,"n_3"=>0.06,"n_6"=>0.01],"weight"=>100],
			["name"=>"豆苗","nutrients"=>["calory"=>28,"carbo"=>4,"fiber"=>3.3,"protein"=>2.2,"oil"=>0.4,"vitaminA"=>340,"vitaminB1"=>0.24,"vitaminB2"=>0.27,"niacin"=>1.6,"vitaminB6"=>0.19,"vitaminB12"=>0,"folic_acid"=>91,"pantothenic_acid"=>0.8,"biotin"=>0,"vitaminC"=>79,"vitaminD"=>0,"vitaminE"=>3.3,"vitaminK"=>280,"Na"=>0,"K"=>350,"Ca"=>34,"Mg"=>22,"P"=>61,"Fe"=>1,"Zn"=>0.4,"Cu"=>0.08,"Mo"=>0,"Mn"=>1.11,"Se"=>0,"I"=>0,"Cr"=>0,"n_3"=>0,"n_6"=>0],"weight"=>100]

		];
	}
}