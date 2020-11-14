$(()=>{
	//全問出題
	let question_number = 0;
	const full_question_tbl = [
		{question: "空気(ムード)について",
			answer: [
				{label: "気にするし作る", point: {type1:0, type2:0, type3:1, type4:0, type5:0, type6:0, type7:2, type8:2, type9:0}},
				{label: "気にするが作れない", point: {type1:1, type2:1, type3:1, type4:1, type5:0, type6:1, type7:0, type8:0, type9:2}},
				{label: "気にならない", point: {type1:1, type2:1, type3:0, type4:1, type5:2, type6:0, type7:0, type8:1, type9:0}},
			]
		},
		{question: "人前で自然体か",
			answer: [
				{label: "自然体でいられる", point: {type1:1, type2:2, type3:0, type4:0, type5:0, type6:1, type7:2, type8:2, type9:0}},
				{label: "自分を演出する", point: {type1:0, type2:0, type3:1, type4:2, type5:1, type6:0, type7:0, type8:0, type9:1}},
			]
		},
		{question: "意思決定で選びがちなのは？",
			answer: [
				{label: "自分の気持ち", point: {type1:0, type2:2, type3:0, type4:2, type5:0, type6:0, type7:1, type8:0, type9:0}},
				{label: "周りの人の気持ち", point: {type1:0, type2:0, type3:1, type4:2, type5:1, type6:1, type7:0, type8:0, type9:2}},
				{label: "論理", point: {type1:2, type2:0, type3:0, type4:1, type5:2, type6:1, type7:0, type8:1, type9:0}},
			]
		},/*
		{question: "負の感情の処理について",
			answer: [
				{label: "否定する", point: {type1:0, type2:2, type3:0, type4:2, type5:0, type6:0, type7:1, type8:0, type9:0}},
				{label: "逃避する", point: {type1:0, type2:0, type3:1, type4:0, type5:0, type6:0, type7:2, type8:1, type9:2}},
				{label: "受け入れる", point: {type1:1, type2:0, type3:0, type4:1, type5:2, type6:2, type7:0, type8:0, type9:0}},
			]
		},*/
		{question: "集団行動",
			answer: [
				{label: "主体的でリーダー寄り", point: {type1:0, type2:0, type3:2, type4:0, type5:0, type6:0, type7:2, type8:2, type9:0}},
				{label: "協力的なサポーター", point: {type1:2, type2:2, type3:0, type4:0, type5:0, type6:2, type7:0, type8:0, type9:0}},
				{label: "マイペースにいきたい", point: {type1:0, type2:0, type3:0, type4:2, type5:2, type6:0, type7:0, type8:0, type9:2}},
			]
		},
		{question: "普段の妄想",
			answer: [
				{label: "過去を思い返す", point: {type1:0, type2:2, type3:2, type4:2, type5:0, type6:0, type7:0, type8:0, type9:0}},
				{label: "大体今に集中", point: {type1:2, type2:0, type3:1, type4:0, type5:0, type6:0, type7:0, type8:2, type9:2}},
				{label: "未来を見ている", point: {type1:0, type2:0, type3:0, type4:0, type5:2, type6:2, type7:2, type8:0, type9:0}},
			]
		},
		{question: "普段のあなたの様子",
			answer: [
				{label: "元気が無いと言われる", point: {type1:0, type2:0, type3:0, type4:1, type5:2, type6:2, type7:0, type8:0, type9:0}},
				{label: "元気と言われる", point: {type1:1, type2:1, type3:1, type4:0, type5:0, type6:0, type7:2, type8:2, type9:1}},
			]
		},
		{question: "望む方向性",
			answer: [
				{label: "注目されて認められたい", point: {type1:0, type2:2, type3:2, type4:2, type5:0, type6:0, type7:1, type8:1, type9:0}},
				{label: "心の平穏", point: {type1:0, type2:0, type3:0, type4:0, type5:0, type6:2, type7:0, type8:0, type9:2}},
				{label: "楽しみたい", point: {type1:0, type2:0, type3:0, type4:0, type5:0, type6:0, type7:2, type8:0, type9:0}},
				{label: "正しくありたい", point: {type1:2, type2:0, type3:0, type4:0, type5:1, type6:0, type7:0, type8:1, type9:0}},
			]
		},
		{question: "人との付き合い方",
			answer: [
				{label: "本音でぶつかり合いたい", point: {type1:0, type2:0, type3:1, type4:0, type5:0, type6:0, type7:1, type8:2, type9:0}},
				{label: "追従したい", point: {type1:2, type2:1, type3:0, type4:0, type5:0, type6:2, type7:0, type8:0, type9:1}},
				{label: "基本単独行動", point: {type1:0, type2:0, type3:0, type4:1, type5:2, type6:0, type7:0, type8:0, type9:1}},
				{label: "人とべったり", point: {type1:0, type2:2, type3:0, type4:1, type5:0, type6:0, type7:0, type8:0, type9:0}},
			]
		},
		{question: "エネルギーの消費どころ",
			answer: [
				{label: "好奇心・アイデア", point: {type1:0, type2:0, type3:2, type4:2, type5:2, type6:1, type7:1, type8:0, type9:0}},
				{label: "ルール遵守", point: {type1:2, type2:0, type3:0, type4:0, type5:1, type6:2, type7:0, type8:0, type9:2}},
				{label: "外向性", point: {type1:0, type2:2, type3:0, type4:0, type5:2, type6:0, type7:1, type8:2, type9:0}},
			]
		},
		{question: "心の向き",
			answer: [
				{label: "内向的", point: {type1:1, type2:0, type3:0, type4:2, type5:2, type6:2, type7:0, type8:0, type9:2}},
				{label: "外向的", point: {type1:1, type2:2, type3:2, type4:0, type5:0, type6:0, type7:2, type8:2, type9:0}},
			]
		},
		{question: "人生の成功の仕方",
			answer: [
				{label: "趣味の充実", point: {type1:0, type2:0, type3:1, type4:0, type5:0, type6:0, type7:1, type8:2, type9:0}},
				{label: "仕事での成功", point: {type1:0, type2:0, type3:2, type4:0, type5:0, type6:2, type7:0, type8:0, type9:0}},
				{label: "居心地の良い一人の空間", point: {type1:0, type2:0, type3:0, type4:0, type5:2, type6:0, type7:0, type8:0, type9:0}},
				{label: "人間関係の充実", point: {type1:1, type2:2, type3:0, type4:2, type5:0, type6:0, type7:0, type8:0, type9:2}},
			]
		},
		/*{question: "時間",
			answer: [
				{label: "本音でぶつかり合いたい", point: {type1:0, type2:0, type3:1, type4:0, type5:0, type6:0, type7:1, type8:2, type9:0}},
				{label: "追従したい", point: {type1:0, type2:0, type3:0, type4:0, type5:0, type6:2, type7:0, type8:0, type9:2}},
				{label: "基本単独行動", point: {type1:0, type2:0, type3:0, type4:0, type5:2, type6:0, type7:0, type8:0, type9:0}},
			]
		},*/
	];
	//
	let your_point_tbl = {choice:[], type1:0, type2:0, type3:0, type4:0, type5:0, type6:0, type7:0, type8:0, type9:0};

	const display_question = (num)=>{
		if (full_question_tbl.length == num) {
			$('#question-output').html("<p>あなたは全て回答されました。お疲れさまでした。</p>");
		} else {
			let rtn = `<h4>Q${num+1}. ${full_question_tbl[num].question}</h4>`;
			rtn += '<p class="button-box">' + full_question_tbl[num].answer.map(v=>"<button>"+v.label+"</button>").reduce((a,b)=>a+b) + "</p>";
			$('#question-output').html(rtn);
		}
	};

	const display_result = ()=>{
		let rtn = '<table class="question-result-table">';
		rtn += '<tr><th>質問</th><th>あなたの回答</th></tr>';
		for (let v of your_point_tbl.choice) {
			rtn += `<tr><td>${v.question}</td><td>${v.answer}</td></tr>`;
		}
		for (let i in full_question_tbl) {
			if (parseInt(i)+1 > your_point_tbl.choice.length) {
				rtn += `<tr><td class="empty-answer">- Q${parseInt(i)+1} -</td><td class="empty-answer">-</td></tr>`;
			}
		}
		rtn += '</table>';
		// 最後まで答えたら、どのタイプっぽいか教えてあげる
		if (your_point_tbl.choice.length == full_question_tbl.length) {
			rtn += '<table class="type-result-table"><tr><th></th>';
			let your_point_html = '';
		 	for (let i=1; i <= 9; i++) {
				rtn += `<th>type${i}</th>`;
				your_point_html += `<td>${your_point_tbl["type"+i]}</td>`;
			}
			rtn += '</tr><tr><th>傾向度</th>'+your_point_html+'</tr></table>';
		}
		$('#result-output').html(rtn);
	};

	(()=>{
		//question-output
		display_question(question_number);
		display_result();
	})();


	$('#question-output').on('click', 'button', (e)=>{
		your_point_tbl.choice.push({question: full_question_tbl[question_number].question, answer: e.target.innerText});
		for (let i=1; i <= 9; i++) {
			for (let v of full_question_tbl[question_number].answer) {
				if (v.label == e.target.innerText) your_point_tbl["type" + i] += v.point["type" + i];
			}
		}
		display_question(++question_number);
		display_result();
	});
});