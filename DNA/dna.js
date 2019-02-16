$(function(){
	//入力されたら表示する文字
	var ok_word_ary = ['A', 'T', 'G', 'C', 'N', 'W', 'S', 'R', 'Y', 'M', 'K', 'B', 'V', 'H', 'D'];
	
	//フォーカスをあてたら、テキスト全選択
	$('#input-text').focusin(function(){
		$(this).select();
	}).click(function(){
		$(this).select();
		return false;
	});
	
	//配列をクリップボードにコピー
	$('#to-clipboard').on('click',function(){
		let seq = deleteInActive($('#outputed_text').html());
		let is_success = execCopy(seq);
		if(is_success) alert('クリップボードにコピーしました。');
		else alert('webブラウザが対応していません。');
	});
	
	function execCopy(string){
		var temp = document.createElement('div');

		temp.appendChild(document.createElement('pre')).textContent = string;

		var s = temp.style;
		s.position = 'fixed';
		s.left = '-100%';

		document.body.appendChild(temp);
		document.getSelection().selectAllChildren(temp);

		var result = document.execCommand('copy');

		document.body.removeChild(temp);
		// true なら実行できている falseなら失敗か対応していないか
		return result;
	}

	
	//ボタン押したら
	$('#input-btn').on('click', function(){
		var input_dna = deleteInActive($('#input-text').val());
		if(0 < input_dna.length){
			//表示する
			$('#output-data').css('display','block');
			$('#inputed_text').html(insertSpace(input_dna));
			$('#inputed_text_length').html(input_dna.length);
			//GC含量
			let gcObj = getGCcontents(input_dna);
			$('#inputed_GC_contents').html(gcObj.gcContents);
			//逆相補鎖の出力
			let complement_dna = makeComplement(input_dna);
			$('#outputed_text').html(insertSpace(complement_dna));
			$('#outputed_text_length').html(complement_dna.length);
		}else{
			//非表示にする
			$('#output-data').css('display','none');
		}
	});
	
	//有効な入力文字のみにします
	function deleteInActive(input_str){
		let str = '';
		let up_case = input_str.toUpperCase();
		for(var i=0; i < up_case.length; i++){
			if(-1 !== ok_word_ary.indexOf(up_case[i])){
				str += up_case[i];
			}
		}
		return str;
	};
	
	//読みやすくなるように、半角スペースや改行を入れます
	function insertSpace(dna_str){
		let rtn = '';
		for(var i=0; i < dna_str.length; i++){
			rtn += dna_str[i];
			if(0 === (i + 1) % 10){
				rtn += (0 === (i + 1) % 50) ? '<br>' : ' ';
			}
		}
		return rtn;
	};
	
	//逆相補鎖を出力します
	function makeComplement(dna){
		let rtn = '';
		for(var i=dna.length-1; i >= 0; i--){
			switch(dna[i]){
				case 'A':
				 rtn += 'T';
				 break;
				case 'T':
				 rtn += 'A';
				 break;
				case 'G':
				 rtn += 'C';
				 break;
				case 'C':
				 rtn += 'G';
				 break;
				case 'R':
				 rtn += 'Y';
				 break;
				case 'Y':
				 rtn += 'R';
				 break;
				case 'M':
				 rtn += 'K';
				 break;
				case 'K':
				 rtn += 'M';
				 break;
				case 'B':
				 rtn += 'V';
				 break;
				case 'H':
				 rtn += 'D';
				 break;
				case 'V':
				 rtn += 'B';
				 break;
				case 'D':
				 rtn += 'H';
				 break;
				case 'W':
				 rtn += 'W';
				 break;
				case 'S':
				 rtn += 'S';
				 break;
				case 'N':
				 rtn += 'N';
				 break;
				default:
				 break;
			}
		}
		return rtn;
	};
	
	//GC含量を出力します
	function getGCcontents(dna){
		let rtn = {'gc': 0, 'gcContents': 0};
		
		for(let b of dna){
			switch(b){
				case 'A':
				case 'T':
				case 'W':
				 break;
				case 'G':
				case 'C':
				case 'S':
				 rtn.gc += 1000;
				 break;
				case 'R':
				case 'Y':
				case 'M':
				case 'K':
				 rtn.gc += 500;
				 break;
				case 'B':
				case 'V':
				 rtn.gc += 666;
				 break;
				case 'H':
				case 'D':
				 rtn.gc += 333;
				 break;
				case 'N':
				 rtn.gc += 500;
				 break;
				default:
				 break;
			}
		}
		rtn.gcContents = Math.round( rtn.gc / dna.length ) / 10;
		return rtn;
	};
});