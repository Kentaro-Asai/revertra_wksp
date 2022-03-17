/**
 * 食品成分表からデータ取得
 cd C:\xampp\htdocs\revertra\revertra_wksp\nutrient
 node fooddb_cheerio.js
 */
//urlの値を毎回変更して使います
let url = "https://fooddb.mext.go.jp/details/details.pl?ITEM_NO=06_06019_6";
if (0 < url.indexOf(`&MODE`)) {
	url = url.substr(0, url.indexOf(`&MODE`));
}
const url_fat = url + `&MODE=1`;
const request = require(`request`);
const cheerio = require(`cheerio`);
const material = {name: ``, nutrients:{calory:0,carbo:0,fiber:0,protein:0,oil:0,vitaminA:0,vitaminB1:0,vitaminB2:0,niacin:0,vitaminB6:0,vitaminB12:0,folic_acid:0,pantothenic_acid:0,biotin:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0,Na:0,K:0,Ca:0,Mg:0,P:0,Fe:0,Zn:0,Cu:0,Mo:0,Mn:0,Se:0,I:0,Cr:0,n_3:0,n_6:0}, weight: 0};
request(url, (e, response, body) => {
	if (e) console.error(e);
	try {
		const read_my_nutrients = {"エネルギー": "calory","アミノ酸組成によるたんぱく質": "protein","脂質": "oil","炭水化物": "carbo","ナトリウム": "Na","カリウム": "K","カルシウム": "Ca","マグネシウム": "Mg","リン": "P","鉄": "Fe","亜鉛": "Zn","銅": "Cu","マンガン": "Mn","ヨウ素": "I","セレン": "Se","クロム": "Cr","モリブデン": "Mo","レチノール活性当量": "vitaminA","D": "vitaminD","α": "vitaminE","K":  "vitaminK","B1": "vitaminB1","B2": "vitaminB2","ナイアシン当量": "niacin","B6": "vitaminB6","B12": "vitaminB12","葉酸": "folic_acid","パントテン酸": "pantothenic_acid","ビオチン": "biotin","C": "vitaminC","総量": "fiber","食塩相当量": "Na"};

		const $ = cheerio.load(body);
		material.name = $(`.foodfullname`).text();
		material.weight = parseInt($(`.weight`)[0].attribs.value);
		$('tr', `#nut`).each((i, elem) => {
			if (read_my_nutrients[ $(`.pr_name`, elem).text() ] && $(`.num`, elem).text().length) {
				let num_value = $(`.num`, elem).text();
				let pr_name_text = $(`.pr_name`, elem).text();
				num_value = -1 < num_value.indexOf("(") ? parseFloat(num_value.substring(1, num_value.length - 1)) : parseFloat(num_value);
				material.nutrients[ read_my_nutrients[ pr_name_text ] ] = isNaN(num_value) ? 0 : num_value;
			}
		});
		//脂肪酸のデータ取得
		request(url_fat, (e_fat, response, body_fat) => {
			if (e_fat) console.error(e_fat);
			try {
				const read_fat_nutrients = {"n-3系 多価不飽和": `n_3`, "n-6系 多価不飽和": `n_6`};
				const $_fat = cheerio.load(body_fat);
				$_fat('tr', `#nut`).each((i, elem) => {
					if (read_fat_nutrients[ $_fat(`.pr_name`, elem).text() ] && $_fat(`.num`, elem).text().length) {
						let num_value = $_fat(`.num`, elem).text();
						let pr_name_text = $_fat(`.pr_name`, elem).text();
						num_value = -1 < num_value.indexOf("(") ? parseFloat(num_value.substring(1, num_value.length - 1)) : parseFloat(num_value);
						material.nutrients[ read_fat_nutrients[ pr_name_text ] ] = isNaN(num_value) ? 0 : num_value;
					}
				});
				console.log(material);
				console.log(`//以下を素材ページにコピペして、素材を登録することができます。\n
					var material = ${JSON.stringify(material)};
					$('#material-name').val(material.name);
					$('#material-weight').val(material.weight);
					for (let key in material.nutrients) {
						$('.' + key).val(material.nutrients[key]);
					}`);
			} catch (e) {
				console.error(e)
			}
		});
	} catch (e) {
		console.error(e)
	}
});


