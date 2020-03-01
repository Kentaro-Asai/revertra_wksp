$(function(){

	//表をクリップボードにコピー
	$('.tbl').on('click', '#to_clipboard', ()=>{
		let str = localStorage.getItem('tblAry');
		let tblAry = !!str ? JSON.parse(str) : null;
		if(!!tblAry){
			let copy_str = excelStr(tblAry);
			let ret = execCopy(copy_str);
			alert(ret ? 'クリップボードにコピーしました。\nプレーンテキストで表計算アプリに貼り付けてください。':'webブラウザが対応していません。');
		}else{
			alert('勤務実績がありません。');
		}
	});

	const excelStr = (tblList)=>{
		let rtn = '日付\t開始\t終了\t勤務時間\t仕事\t休憩\tコメント\n';
		for(let v of tblList){
			rtn += v.date+'\t'+v.start+'\t'+v.end+'\t'+v.formal_work+'\t'+v.work+'\t'+v.rest+'\t'+v.comment+'\n';
		}
		rtn += '\n' + getTotalTblStr();
		return rtn;
	}

	const getTotalTblStr = ()=>{
		let rtn = '';
		const html_td = $('#total_tbl td');
		if(!!html_td.length){
			rtn += '労働時間（まとめ）\n';
			const tbl_header = $('#total_tbl th');
			for(let i=0; i < tbl_header.length; i++){
				rtn += tbl_header[i].innerHTML + (i+1 == tbl_header.length ? '\n':'\t');
			}
		}
		for(let i = 0; i < html_td.length; i += 4){
			rtn += html_td[i].innerHTML + '\t';
			rtn += html_td[i+1].innerHTML + '\t';
			rtn += html_td[i+2].innerHTML + '\t';
			rtn += html_td[i+3].innerHTML + '\n';
		}
		return rtn;
	}

	const execCopy = (string)=>{
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
