$(function(){

	//表をクリップボードにコピー
	$('.tbl').on('click', '#to_clipboard', ()=>{
		let str = localStorage.getItem('tblAry');
		let tblAry = !!str ? JSON.parse(str) : null;
		if(!!tblAry){
			let copy_str = excelStr(tblAry);
			let ret = execCopy(copy_str);
			alert(ret ? 'クリップボードにコピーしました。\nプレーンテキストで貼り付けてください。':'webブラウザが対応していません。');
		}else{
			alert('勤務実績がありません。');
		}
	});

	function excelStr(tblList){
		let rtn = '日付\t開始\t終了\t勤務時間\t仕事\t休憩\tコメント\n';
		for(let v of tblList){
			rtn += v.date+'\t'+v.start+'\t'+v.end+'\t'+v.formal_work+'\t'+v.work+'\t'+v.rest+'\t'+v.comment+'\n';
		}
		rtn += '\n' + getTotalTblStr();
		return rtn;
	}

	//thを取得すれば, コード変えなくてもいけるようになるよ
	function getTotalTblStr(){
		let rtn = '';
		let html_td = $('#total_tbl td');
		if(!!html_td.length){
			rtn += '月\t総労働時間\t仕事\t休憩\n';
		}
		for(let i = 0; 0 < html_td.length; i += 4){
			rtn += html_td[i].innerHTML + '\t';
			rtn += html_td[i+1].innerHTML + '\t';
			rtn += html_td[i+2].innerHTML + '\t';
			rtn += html_td[i+3].innerHTML + '\n';
		}
		return rtn;
	}

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
});
