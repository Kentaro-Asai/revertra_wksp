$(()=>{
	const quiz_ary = [
		{
			question: "自分に都合の良い方に流される認知バイアスを何と言う？",
			choices: ["自己中心性バイアス", `利用可能性ヒューリスティック`, "確証バイアス", "後知恵バイアス"],
			answer_num: 0,
			answer_sentence: "自己中心性バイアス。客観的に物事を捉えられない人、自尊心の強い人。強く働くと、嫉妬心や攻撃的な態度になりやすくなります。<br>自己重要感を獲得するために、相手の過失を指摘します。",
		},
		{
			question: "自分の予測に沿った物事に流される認知バイアスを何と言う？",
			choices: ["自己中心性バイアス", `利用可能性ヒューリスティック`, "確証バイアス", "後知恵バイアス"],
			answer_num: 2,
			answer_sentence: "確証バイアス。自分の有能性を証明する【予測的中】という結果を求めてしまって引っかかってしまいます。",
		},
		{
			question: "自分は認知バイアスの影響を受けてる？",
			choices: ["Yes", "No"],
			answer_num: 0,
			answer_sentence: "自分がバイアスの影響を受けていることに気づけないことは多くあります。<br>【バイアスの盲点】と言います。",
		},
		{
			question: "印象に振り回されているのは？",
			choices: ["文脈効果", "ハロー効果", "バンドワゴン効果"	],
			answer_num: 0,
			answer_sentence: "",
		},
		{
			question: "相手を言い負かすと自分が正しいと思うことを何と言う？",
			choices: ["偶像バイアス", "自己正当化バイアス", "確証バイアス"],
			answer_num: 0,
			answer_sentence: "",
		},
		{
			question: `記憶を歪めてしまう認知バイアス全般を何という？`,
			choices: ["作話", "自己奉仕バイアス", "後知恵バイアス", "前後即因果の誤謬"],
			answer_num: 0,
			answer_sentence: "",
		},
		{
			question: `すぐに結論を出してしまう認知バイアスを何という？`,
			choices: ["", "", "", ""],
			answer_num: 0,
			answer_sentence: "",
		},
		{
			question: `ゴールに向かって進んでいる時、より幸福度が高まる効果を何という？`,
			choices: ["プライミング効果", "Endawed progress effect", "", ""],
			answer_num: 1,
			answer_sentence: "人の幸せは、質よりも回数が重要になってきます。小さな幸せを体感できる目標設定をしましょう。",
		}
	];

	const quiz = quiz_ary[Math.floor(Math.random() * quiz_ary.length)];
	$("#quiz_question").text(quiz.question);
	
});