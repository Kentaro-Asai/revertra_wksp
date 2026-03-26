$(()=>{
	//全問出題
	let question_number = 0;
	const full_question_tbl = [
		{question: `競争か協調か`,
			answer: [`競争`, `競争寄り`, `中間`, `協調寄り`, `協調`],
		},
		{question: `伝統か革新か`,
			answer: [`伝統`, `伝統寄り`, `中間`, `革新寄り`, `革新`],
		},
		{question: `情けか合理か`,
			answer: [`情け`, `情け寄り`, `中間`, `合理寄り`, `合理性`],
		},
		{question: `行動か思考か`,
			answer: [`行動`, `行動寄り`, `中間`, `思考寄り`, `思考`],
		},
		{question: `スピードか慎重か`,
			answer: [`スピード`, `スピード寄り`, `中間`, `慎重寄り`, `慎重`],
		},
		{question: `専門家か総合家か`,
			answer: [`専門家`, `専門家寄り`, `中間`, `総合家寄り`, `総合家`],
		},
		{question: `理系か文系か`,
			answer: [`理系`, `理系寄り`, `中間`, `文系寄り`, `文系`]
		},
		{question: `安定か刺激か`,
			answer: [`安定`, `安定寄り`, `中間`, `刺激寄り`, `刺激`]
		},
		{question: `求める仕事の規模`,
			answer: [`大規模`, `大規模寄り`, `中規模`, `小規模寄り`, `小規模`]
		},
		{question: `野心か無難か`,
			answer: [`野心`, `野心寄り`, `中間`, `無難寄り`, `無難`]
		}
	];
	let your_result_tbl = [
		//{question: `競争か協調か`, your_answer: ``},
	];

	// 全ての問いを回答してもらう → ボタンを押すと、判定して全部を押したら、「お疲れ様です」 → 結果表示
	const display_question = ()=>{
		let rtn = '';
		for (let num in full_question_tbl) {
			//rtn += `<h4>Q${num+1}. ${full_question_tbl[num].question}</h4>`;
			rtn += `<p class="button-box">
				<span>${full_question_tbl[num].answer[0]}</span>
				${full_question_tbl[num].answer.map(v=>`<button value="${v}" data-question="${full_question_tbl[num].question}"></button>`).reduce((a,b)=>a+b)}
			 	<span>${full_question_tbl[num].answer[full_question_tbl[num].answer.length - 1]}</span>
			</p>`;
		}
		rtn += `<p><button id="finish-button">回答完了</button></p>`;
		$('#question-output').html(rtn);
	};

	const display_result = ()=>{
		let rtn = '<table class="question-result-table">';
		rtn += '<tr><th>質問</th><th>あなたの回答</th></tr>';
		for (let v of your_result_tbl) {
			rtn += `<tr><td>${v.question}</td><td>${v.your_answer}</td></tr>`;
		}
		rtn += '</table>';
		$('#result-output').html(rtn + `<p><button id="retake-button">もう一度受ける</button></p>`);
		$('#question-output').html(`<p>お疲れ様でした！</p>`);
	};

	(()=>{
		//question-output
		display_question();
		//display_result();
	})();


	$('#question-output').on('click', '.button-box > button', (e)=>{
		let wasChosen = false;
		for (let v of your_result_tbl) {
			if (v.question == e.target.dataset.question) {
				wasChosen = true;
				v.your_answer = e.target.value;
				for (let i=0; i < e.target.parentNode.children.length; i++) {
					if ($(e.target.parentNode.children[i]).hasClass(`pushed`)) $(e.target.parentNode.children[i]).removeClass(`pushed`);
				}
				$(e.target).addClass(`pushed`);
			}
		}
		if (!wasChosen) {
			your_result_tbl.push({question: e.target.dataset.question, your_answer: e.target.value});
			$(e.target).addClass(`pushed`);
		}
	});

	$('#question-output').on('click', '#finish-button', ()=>{
		// 全ての質問に答えたか確認
		if (full_question_tbl.length !== your_result_tbl.length) {
			alert(`全ての質問に答えてください`);
			return;
		}
		display_result();
	});

	$('#result-output').on('click', '#retake-button', ()=>{
		your_result_tbl = [];
		display_question();
		$('#result-output').html(``);
	});
});