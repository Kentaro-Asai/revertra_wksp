$(()=>{
	// 自作関数
	const shuffleAndChoice = ([...array], choice_number) => {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		if (0 < choice_number && choice_number < array.length) array.length = choice_number; 
		return array;
	};

	const jsImplode = (prefix, [...array], suffix) => {
		if (0 == array.length) {
			return ``;
		}
		let rtn = ``;
		for (let v of array) {
			rtn += prefix + v + suffix;
		}
		return rtn;
	};

	$(`#hide-toggle-button`).on(`click`, (e)=>{
		if (`rotate` == e.target.getAttribute(`class`)) {
			e.target.setAttribute(`class`, `non-rotate`); 
			$(`#hide-box`).css(`display`, `block`);
		} else {
			e.target.setAttribute(`class`, `rotate`);
			$(`#hide-box`).css(`display`, `none`);
		}
	});

	// one day nutrient
	let standard_nutrient = {/* Ca: {label: 'カルシウム', need: '800', limit: '2500', unit: 'mg'} */};
	// foods
	let foods = [];

	(()=>{
		const dd = $(`#standard-nutrient dd`);
		for (const the_dd of dd) {
			standard_nutrient[the_dd.id] = {
				label: the_dd.dataset.label,
				need: the_dd.dataset.need,
				limit: the_dd.dataset.limit,
				unit: the_dd.dataset.unit
			};
		}
		const p_tags = $(`#foods p`);
		for (const the_p of p_tags) {
			foods.push( JSON.parse(the_p.dataset.food) );
		}
	})();

	const quizHighProtein = ()=>{
		let rtn = {};
		const high_protein = 6;
		const high_protein_foods = foods.filter(v => high_protein <= 100 / v.weight * v.nutrients.protein);
		const quiz_food = shuffleAndChoice(high_protein_foods, 1);
		if (0 < Object.keys(quiz_food[0]).length) {
			const protein = parseFloat(Math.round(1000 / quiz_food[0].weight * quiz_food[0].nutrients.protein) / 10);
			let answers = [Math.round(10 * protein/3) / 10, Math.round(10 * protein/2) / 10, protein*15/10, protein*2];
			answers = shuffleAndChoice(answers, 2);
			answers.push(protein);
			rtn = {
				question: `${quiz_food[0].name}のタンパク質は100グラム中何グラム？`,
				class: `candidate-values`,
				candidates: shuffleAndChoice(answers, 3),
				answers: [protein],
				answer_parameter: quiz_food[0]
			};
		}
		return 0 < Object.keys(rtn).length ? rtn : false;
	};

	const quizMainNutrients = ()=>{
		let rtn = {};
		//豊富な栄養は1日に必要な栄養素の10％以上とする
		const high_nutrient_ratio = 10;
		// クイズにする食材を選ぶ
		let quiz_food = shuffleAndChoice(foods, 1);
		let rich_nutrients = [];
		for (const a_nutrient in quiz_food[0].nutrients) {
			if (high_nutrient_ratio / 100 <= 100 / quiz_food[0].weight * quiz_food[0].nutrients[a_nutrient] / standard_nutrient[a_nutrient].need) {
				rich_nutrients.push(standard_nutrient[a_nutrient].label);
			}
		}
		if (0 < rich_nutrients.length) {
			//クイズ文作成
			let candidates = [];
			for (let k in standard_nutrient) {
				const v = standard_nutrient[k];
				if (`カロリー` != v.label) candidates.push(v.label);
			}
			rtn = {
				question: `${quiz_food[0].name}の栄養素の中で、豊富なものは？(100グラムで1日の栄養素の${high_nutrient_ratio}％以上ある栄養素)`,
				class: `candidate-nutrients`,
				candidates: candidates,
				answers: rich_nutrients,
				answer_parameter: quiz_food[0]
			};
		}
		return 0 < Object.keys(rtn).length ? rtn : false;
	};

	const quiz = ()=>{
		let roop = 0;
		let rtn = {}
		while (roop < 10) {
			const rand = Math.floor(100 * Math.random());
			// ●● 100gで取得できるタンパク質量は？
			// ○○で摂取できる主な栄養素は？（複数選択可）　答えと栄養素（％）全部を表示
			rtn = 70 <= rand ? quizHighProtein() : quizMainNutrients();
			if (!!rtn) break;
			console.log(roop++);
		}
		let html = `
			<h6>${rtn.question}</h6>
			<p id="candidates" class="${rtn.class}">${jsImplode(`<span>`, rtn.candidates, `</span>`)}</p>
			<p><button id="view-result">回答する</button></p>
			<p id="answers">${jsImplode(`<span>`, rtn.answers, `</span>`)}</p>
			<p><button id="next-question">次の問題へ</button></p>
			<h6 class="answer-parameter">${rtn.answer_parameter.name}(${rtn.answer_parameter.weight}グラム)の栄養素</h6>
			<dl class="answer-parameter">
		`;
		const ans_nut = rtn.answer_parameter.nutrients;
		for (let k in standard_nutrient) {
			const v = standard_nutrient[k];
			html += `<dt>${v.label}</dt><dd>${ans_nut[k]}(${v.unit})<br>${Math.round(1000*ans_nut[k]/v.need)/10}％</dd>`;
		}
		$(`#answers, .answer-parameter, #next-question`).css('display', 'none');
		$(`main`).html(html+`</dl>`);
		$(`#answers, .answer-parameter, #next-question`).css('display', 'none');
	};

	(()=>{quiz();})();

	$(`main`).on(`click`, `#candidates span`, (e)=>{
		if ('block' == $(`.answer-parameter`).css('display')) return ;
		if (['', `#ccc`, `rgb(204, 204, 204)`].includes(e.target.style.backgroundColor)) {
			e.target.style.backgroundColor = `#9bf`;
		} else {
			e.target.style.backgroundColor = `#ccc`;
		}
	});
	
	$(`main`).on('click', `#view-result`, ()=>{
		$(`.answer-parameter`).css('display', 'block');
		$(`#view-result`).css('display', 'none');
		$(`#next-question`).css('display', 'block');
		// 正解を表示
		for (let v of $(`#candidates span`)) {
			for (let w of $(`#answers span`)) {
				if (v.innerHTML == w.innerHTML) {
					v.style.border = "solid 2px gold";
				}
			}
		}
	});

	$(`main`).on(`click`, `#next-question`, ()=>{
		$(`#answers, .answer-parameter`).css('display', 'none');
		$(`#candidates span`).css(`background-color`, `#ccc`).css(`border`, `solid 2px black`);
		quiz();
	});
})