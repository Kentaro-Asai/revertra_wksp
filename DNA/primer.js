$(function(){
	//入力されたら表示する文字
	var ok_word_ary = ['A', 'T', 'G', 'C', 'N', 'W', 'S', 'R', 'Y', 'M', 'K', 'B', 'V', 'H', 'D'];
	var primer_num = 1;
	var output_section_clr = 1;
	
	//プライマーの入力欄を追加
	$('#insert_primer_btn').on('click',()=>{
		// onsole.log(0 < primer_num < 10, primer_num, primer_num < 10);
		//if(0 < primer_num < 10){ //この書き方するとなんでか知らんが10より小さいが効かない。バグる
		if(primer_num < 10){
			createInputPrimer(++primer_num);
		}else{
			alert('設定限界を超えています。\n更新ボタンを押してプライマー等のデータを消してから再度作ってください。');
		}
	});
		
	//評価するボタン押したら
	$('#done').on('click',()=>{
		//初期化処理
		$('output').html('');
		//ユーザーが入力したデータを解析 ＝＞ データを出力
		for(let i=1; i <= primer_num; i++){
			let input_dna = deleteInActive($('#primer'+i+'sq').val());
			if(0 < input_dna.length){
				//primer
				let primer = deleteInActive(input_dna);
				$('#primer'+primer_num+'sq').html(primer);
				let dna = deleteInActive($('#around-dna').val());
				let dna_hms = 0 < dna.length ? templateHomologySearch(dna, primer) : [];
				//逆相補鎖、回文配列なら高い相同性
				let pm_hms = primerHomologySearch(primer);
				//tm value, base pair(length), GC contents
				let tm = getTmValue(primer);
				$('output').append(outputTable({'nm': $('#primer'+i+'nm').val(), 'sq': primer}, tm, pm_hms, dna_hms));
			}else{
				// primerの配列が存在しない
				$('output').html('ここに入力されたプライマーの評価が表示されます。');
			}
		}
		//出力に気づかない対策
		output_section_clr = 3 <= output_section_clr ? 1 : parseInt(output_section_clr) + 1;
	});
	
	function createInputPrimer(create_num){
		let new_primer = '<li>'
			+'<span>primer name</span><input type="text" id="primer'+create_num+'nm" value="プライマー配列('+create_num+')">'
			+'<span>primer sequence</span><input type="text" id="primer'+create_num+'sq" value="">'
		+'</li>';
		$('#primer_box').append(new_primer);
	}
	
	//有効な入力文字のみにします
	function deleteInActive(input_str){
		let str = '';
		let up_case = !!input_str ? input_str.toUpperCase() : '';
		for(var i=0; i < up_case.length; i++){
			if(-1 !== ok_word_ary.indexOf(up_case[i])){
				str += up_case[i];
			}
		}
		return str;
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
	}
	
	//塩基が合っているか確認します、引数は両方とも1文字でなければならない
	function baseFit($c, $a){
		switch ($c) {
			case 'A':
				switch ($a) {
					case 'A':
					case 'W':
					case 'R':
					case 'M':
					case 'H':
					case 'V':
					case 'D':
					case 'N': return true;
				}
				break;
			case 'T':
				switch ($a) {
					case 'T':
					case 'W':
					case 'Y':
					case 'K':
					case 'H':
					case 'B':
					case 'D':
					case 'N': return true;
				}
				break;
			case 'G':
				switch ($a) {
					case 'G':
					case 'S':
					case 'R':
					case 'K':
					case 'B':
					case 'V':
					case 'D':
					case 'N': return true;
				}
				break;
			case 'C':
				switch ($a) {
					case 'C':
					case 'S':
					case 'Y':
					case 'M':
					case 'H':
					case 'B':
					case 'V':
					case 'N': return true;
				}
				break;
			case "W":
				switch ($a) {
					case 'G':
					case 'C':
					case 'S':
					break;
					default: return true;
				}
				break;
			case "S":
				switch ($a) {
					case 'A':
					case 'T':
					case 'W':
					break;
					default: return true;
				}
				break;
			case "R":
				switch ($a) {
					case 'T':
					case 'C':
					case 'Y':
					break;
					default: return true;
				}
				break;
			case "Y":
				switch ($a) {
					case 'A':
					case 'G':
					case 'R':
					break;
					default: return true;
				}
				break;
			case "M":
				switch ($a) {
					case 'T':
					case 'G':
					case 'K':
					break;
					default: return true;
				}
				break;
			case "K":
				switch ($a) {
					case 'A':
					case 'C':
					case 'M':
					break;
					default: return true;
				}
				break;
			case "B":
				switch ($a) {
					case 'A':
					break;
					default: return true;
				}
				break;
			case "V":
				switch ($a) {
					case 'T':
					break;
					default: return true;
				}
				break;
			case "H":
				switch ($a) {
					case 'G':
					break;
					default: return true;
				}
				break;
			case "D":
				switch ($a) {
					case 'C':
					break;
					default: return true;
				}
				break;
			case "N":
				return true;
			   break;
		}
		return false;
	}
	
	//dnaはテンプレートDNA、pmはプライマー
	function templateHomologySearch(dna, pm){
		//dnaに十分な長さがないとエラーになる
		if(dna.length < pm.length) return false;
		
		var cnt = 0; //cnt is jump point.
		var fit = 0; //どれ位相同性があるか
		var rep = 0; //fitが連続でくると増える値
		var rp = false; //repのためのパラメータ
		var last_fit = false; //3'末端の相同性
		//CString sq1, sq2, rseq;
		var seq = {'dna':'', 'pm':''};
		//返す値は、1,2位の配列と、合わさり具合、合わさり位置
		var rtn = [
			{"dna": '', "pm": '', "fit": 0, "pos": 0},
			{"dna": '', "pm": '', "fit": 0, "pos": 0}
		];

		for(var i=0; i < dna.length; i++, rep=0, fit=0, cnt=0, rp=false){
			for(var j=0, k=0+i; j < pm.length && k < dna.length; k++, j++){
				if(baseFit(dna.substr(k, 1), pm.substr(j, 1))){
					cnt++;
					if(rp) rep++;
					fit++;
					rp = true;
					last_fit = true;
					seq = {'dna': seq.dna + dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 1)};
				}
				else if(!baseFit(dna.substr(k, 1), pm.substr(j, 1))
				&& !baseFit(dna.substr(k+1, 1), pm.substr(j+1, 1))
				&& cnt>=3){	//現在と一個向こうの配列が違えば飛ぶ
					if(dna.length > k+4 && pm.length > j+4){
					//did not enough fit,primerの場合、配列が長くても30bp位だから、
					//頻繁に1bpか2bp飛ばす位で設定する 3bp中2bpあったら、1 or 2bp飛ぶ
						if(baseFit(dna.substr(k, 1), pm.substr(j+1, 1))
						&& baseFit(dna.substr(k+1, 1), pm.substr(j+2, 1))){
							seq = {'dna': seq.dna+'-'+dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 2)};
							j++;
							fit++;
							cnt=1;   //jは飛んだ先の位置に移行
						}else if(baseFit(dna.substr(k, 1), pm.substr(j+1, 1))
						&& baseFit(dna.substr(k+2, 1), pm.substr(j+3, 1))){
							seq = {'dna': seq.dna+'-'+dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 2)};
							j++;
							fit++;
							cnt=1;
						}else if(baseFit(dna.substr(k+1, 1), pm.substr(j, 1))
						&& baseFit(dna.substr(k+2, 1), pm.substr(j+1, 1))){
							seq = {'dna': seq.dna+dna.substr(k, 2), 'pm': seq.pm+'-'+pm.substr(j, 1)};
							k++;
							fit++;
							cnt=1;
						}else if(baseFit(dna.substr(k+1, 1), pm.substr(j, 1))
						&& baseFit(dna.substr(k+3, 1), pm.substr(j+2, 1))){
							seq = {'dna': seq.dna+dna.substr(k, 2), 'pm': seq.pm+'-'+pm.substr(j, 1)};
							k++;
							fit++;
							cnt=1;
						}else if(dna.length > k+5 && pm.length > j+5){	//一個で飛べなければ2個飛び
							if(baseFit(dna.substr(k, 1), pm.substr(j+2, 1))
							&& (baseFit(dna.substr(k+1, 1), pm.substr(j+3, 1))
								|| baseFit(dna.substr(k+2, 1), pm.substr(j+4, 1))
								)
							){
								seq = {'dna': seq.dna+'--'+dna.substr(k, 1), 'pm': seq.pm+pm.substr(j, 3)};
								j+=2;
								fit++;
								cnt=1;
							}else if(baseFit(dna.substr(k+2, 1), pm.substr(j, 1))
							&& (baseFit(dna.substr(k+3, 1), pm.substr(j+1, 1))
								|| baseFit(dna.substr(k+4, 1), pm.substr(j+2, 1))
								)
							){
								seq = {'dna': seq.dna+dna.substr(k, 3), 'pm': seq.pm+'--'+pm.substr(j, 1)};
								k+=2;
								fit++;
								cnt=1;
							}else{
								seq = {'dna': seq.dna + dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 1)};
							}
						}else{
							seq = {'dna': seq.dna + dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 1)};
						}
					}else{
						seq = {'dna': seq.dna + dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 1)};
					}
					rp=false;
					last_fit=false;
				} //cnt>=3のend
				else if(!baseFit(dna.substr(k, 1), pm.substr(j, 1))){
					cnt++;
					rp=false;
					last_fit=false;
					seq = {'dna': seq.dna + dna.substr(k, 1), 'pm': seq.pm + pm.substr(j, 1)};
				}
			} //jのfor end

			//順位の代入 同値の時gapの量(fit)、3'末端のfit(last_fit)
			if(last_fit){
				if(fit > rtn[0]["fit"]
				|| (fit === rtn[0]["fit"] && rep > rtn[0]["rep"]) ){
					rtn[1] = {
						'dna': '' + rtn[0]["dna"], 'pm': '' + rtn[0]["pm"],
						'fit': 0 + rtn[0]["fit"], 'pos': 0 + rtn[0]["pos"],
						'rep': 0 + rtn[0]["rep"]
					};
					rtn[0] = {
						'dna': '' + seq.dna, 'pm': '' + seq.pm,
						'fit': 0 + fit, 'pos': 0 + i,
						'rep': 0 + rep
					};
				}else if(fit > rtn[1]["fit"]
				|| (fit === rtn[1]["fit"] && rep > rtn[1]["rep"]) ){
					rtn[1] = {
						'dna': '' + seq.dna, 'pm': '' + seq.pm,
						'fit': 0 + fit, 'pos': 0 + i,
						'rep': 0 + rep
					};
				}
			}
			seq = {'dna': '', 'pm': ''};
		} //i for end
		
		return rtn;
	}
	
	//逆相補鎖のプライマーと配列を比較し、回文配列が内包されていないかチェック(primer dimer check)
	function primerHomologySearch(pm){
		let cmp = makeComplement(pm);
		let rtn = {'primer': '', 'complement': '', 'point': 0, 'position': 0};
		let hs = {'pm': '' + pm, 'cmp': '' + cmp, 'pt': 0};
		for(let i=0; i < pm.length; i++){
			hs = {'pm': '' + pm, 'cmp': '' + cmp, 'pt': 0};
			for(let c=0, p=0+i; c < cmp.length && p < pm.length; c++, p++){
				if(baseFit(pm[p], cmp[c])){
					hs.pt++;
					hs.pm += pm[p];
					hs.cmp += cmp[c];
				}else{
					//現在位置で違うのでジャンプできたらする
					if(p + 1 < pm.length && c < cmp.length
					&& baseFit(pm[p+1], cmp[c])){
						hs.pm += pm[p] + pm[p+1];
						hs.cmp += '-' + cmp[c];
						hs.pt++;
						p++;
					}else if(p < pm.length && c + 1 < cmp.length
					&& baseFit(pm[p], cmp[c+1])){
						hs.pm += '-' + pm[p];
						hs.cmp += cmp[c] + cmp[c+1];
						hs.pt++;
						c++;
					}else if(p + 2 < pm.length && c < cmp.length
					&& baseFit(pm[p+2], cmp[c])){
						hs.pm += pm.substr(p, 3);
						hs.cmp += '--' + cmp[c];
						hs.pt++;
						p += 2;
					}else if(p < pm.length && c + 2 < cmp.length
					&& baseFit(pm[p], cmp[c+2])){
						hs.pm += '--' + pm[p];
						hs.cmp += cmp.substr(c, 3);
						hs.pt++;
						c += 2;
					}else{
						hs.pm += pm[p];
						hs.cmp += cmp[c];
					}
				}
			}
			//最も配列に相同性があったものを記録
			if(rtn.point < hs.pt){
				rtn = {
					'primer': '' + hs.pm, 'complement': '' + hs.cmp,
					'point': 0 + hs.pt, 'position': 0 + i
				};
			}
		}
		//TODO: rtnを表示しやすい形式に変換
		//return primerOutputFormation(rtn);
		return rtn;
	}
	
	function getTmValue(pm){
		var tm = {'wallace': 0, 'near': 0};
		var delta = {'H': 0, 'S': 0};
		var gc = 0;
		var beforeBase = '';
		//Wallace法の変法：Tm値（℃）＝2（nA＋nT）＋4（nC＋nG）＋35－2（nA＋nT＋nC＋nG）
		//Wallace法：2（A + T） + 4（G + C）
		//nearestNeighbor
		//Tm（℃）= 1000ΔH（ハイブリッドにおける（実験的に求めた）最近接エンタルピー変化の合計（kcal/mol））/ (-10.8+ΔS（ハイブリッドにおける最近接エントロピー変化の合計（cal/mol･K））+ R・ln（Ct（オリゴのtotalモル濃度）/ 4）) - 273.15 + 16.6 log [Na+])
		for(let d of pm){
			//まるめ誤差回避
			let hs_delta = nearestNeighbor(beforeBase, d);
			delta.H += 10 * hs_delta.H;
			delta.S += 10 * hs_delta.S;
			switch(d){
				case 'A':
				case 'T':
				 tm.wallace += 2;
				 break;
				case 'G':
				case 'C':
				 tm.wallace += 4;
				 gc++;
				 break;
				case 'R':
				case 'Y':
				 tm.wallace += 3;
				 break;
				case 'M':
				 tm.wallace += 3;
				 break;
				case 'K':
				 tm.wallace += 3;
				 break;
				case 'B':
				 tm.wallace += 3;
				 break;
				case 'H':
				 tm.wallace += 3;
				 break;
				case 'V':
				 tm.wallace += 3;
				 break;
				case 'D':
				 tm.wallace += 3;
				 break;
				case 'W':
				 tm.wallace += 2;
				 break;
				case 'S':
				 gc++;
				 tm.wallace += 4;
				 break;
				case 'N':
				 tm.wallace += 3;
			}
			beforeBase = '' + d;
		}
		//まるめ誤差回避
		var gcContents = Math.round(1000 * gc / pm.length) / 10;
		//まるめ誤差回避
		tm.near = Math.round((delta.H * 10000 / ((delta.S*10 + 2626)/10)) - 2731.5 - 215.971) / 10;
		tm.wallace += 35 - 2 * pm.length;
		return {'tm': tm, 'gc': gcContents};
	}
	
	//Tm値用
	function nearestNeighbor(fivePrime, threePrime){
		if('' === fivePrime) return {'H': 0, 'S': 0};
		if('A' === fivePrime){
			switch(threePrime){
				case 'A': return {'H': 9.1, 'S': 24};
				case 'T': return {'H': 8.6, 'S': 24};
				case 'G': return {'H': 7.8, 'S': 20.8};
				case 'C': return {'H': 6.5, 'S': 17.3};
				default: return {'H': 8.0, 'S': 17.5};
			}
		}else if('T' === fivePrime){
			switch(threePrime){
				case 'A': return {'H': 6.0, 'S': 16.9};
				case 'T': return {'H': 9.1, 'S': 24};
				case 'G': return {'H': 5.8, 'S': 12.9};
				case 'C': return {'H': 5.6, 'S': 13.5};
				default: return {'H': 6.6, 'S': 16.8};
			}
		}else if('G' === fivePrime){
			switch(threePrime){
				case 'A': return {'H': 5.6, 'S': 13.5};
				case 'T': return {'H': 5.8, 'S': 17.3};
				case 'G': return {'H': 11, 'S': 26.6};
				case 'C': return {'H': 11.9, 'S': 26.7};
				default: return {'H': 8.6, 'S': 21};
			}
		}else if('C' === fivePrime){
			switch(threePrime){
				case 'A': return {'H': 5.8, 'S': 12.9};
				case 'T': return {'H': 7.8, 'S': 20.8};
				case 'G': return {'H': 11.9, 'S': 27.8};
				case 'C': return {'H': 11, 'S': 26.6};
				default: return {'H': 9.1, 'S': 22};
			}
		}else{
			return {'H': 8.1, 'S': 19.3};
		}
	}
	
	function outputTable(pm, tm, pm_hms, dna_hms){
		let strAry = outputAround(dna_hms, pm.sq.length);
		var rtn = '<section class="sec'+output_section_clr+'">'
			+'<dl><dt>'+pm.nm+'</dt><dd>'+pm.sq+'</dd></dl>'
			+'<table class="primer-param"><tbody>'
			+'<tr><th>長さ(mer)</th><td>'+pm.sq.length+'</td>'
			+'<th>Tm値(℃) wallace変法</th><td>'+tm.tm.wallace+'</td></tr>'
			+'<tr><th>GC含量(％)</th><td>'+tm.gc+'</td>'
			+'<th>Tm値(℃) nearest neighbor法</th><td>'+tm.tm.near+'</td></tr>';
		if(!!strAry.pos) rtn += strAry.pos; 
		rtn += '</tbody></table>';
	
		rtn += '<table class="primer-form"><caption>回文配列、primer dimerのチェック</caption><tbody>'
			+'<tr><th>プライマー</th><td>'+pm_hms.primer+'</td></tr>'
			+'<tr><th></th><td>'+hmsView(pm_hms.primer, pm_hms.complement)+'</td></tr>'
			+'<tr><th>プライマー(相補鎖)</th><td>'+pm_hms.complement+'</td></tr>'
			+'</tbody></table>';
		
		rtn += strAry.hmsTbl;
	
		rtn += '</section>';
		/*pm_hms = {
					'primer': '' + hs.pm, 'complement': '' + hs.cmp,
					'point': 0 + hs.pt, 'position': 0 + i
				};*/
		/*dna_hms[0] = {
						'dna': '' + seq.dna, 'pm': '' + seq.pm,
						'fit': 0 + fit, 'pos': 0 + i,
						'rep': 0 + rep
					};*/
		return rtn;
	}
	
	function outputAround(dna_hms, len){
		let pos = '';
		let hmsTbl = '';
		for(let d of dna_hms){
			if(d.fit === d.pm.length){
				pos += '<tr><th>周辺配列上の位置</th><td colspan="3">'+(d.pos+1)+'</td></tr>';
			}else{
				hmsTbl += '<table class="primer-position"><tbody>'
					+'<tr><th>周辺塩基配列('+(1+d.pos)+')</th><td>'+d.dna+'</td></tr>'
					+'<tr><th>'+d.fit+' / '+len+'</th><td>'+hmsView(d.dna, d.pm)+'</td></tr>'
					+'<tr><th>プライマー</th><td>'+d.pm+'</td></tr>'
					+'</tbody></table>';
			}
		}
		return {'hmsTbl': hmsTbl, 'pos': pos};
	}
	
	function hmsView(dnaA, dnaB){
		let rtn = '';
		for(let i=0; i < dnaA.length && i < dnaB.length; i++){
			if(dnaA.charAt(i) === dnaB.charAt(i)){
				switch(dnaA.charAt(i)){
					case 'A': case 'T':
					case 'G': case 'C':
						rtn += '*';
						break;
					case '-':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			//以下違う場合
			}else if('A' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'N': case 'W':
					case 'R': case 'M':
					case 'V': case 'H':
					case 'D':
						rtn += '|';
						break;
					default:
						rtn += '&nbsp;';
				}
			}else if('T' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'N': case 'W':
					case 'Y': case 'K':
					case 'B': case 'H':
					case 'D':
						rtn += '|';
						break;
					default:
						rtn += '&nbsp;';
				}
			}else if('G' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'N': case 'S':
					case 'R': case 'K':
					case 'B': case 'V':
					case 'D':
						rtn += '|';
						break;
					default:
						rtn += '&nbsp;';
				}
			}else if('C' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'N': case 'S':
					case 'Y': case 'M':
					case 'B': case 'V':
					case 'H':
						rtn += '|';
						break;
					default:
						rtn += '&nbsp;';
				}
			}else if('S' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'A': case 'T': case 'W':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			}else if('W' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'G': case 'C': case 'S':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			}else if('R' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'T': case 'C': case 'Y':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			}else if('Y' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'A': case 'G': case 'Y':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			}else if('M' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'T': case 'G': case 'K':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			}else if('K' === dnaA.charAt(i)){
				switch(dnaB.charAt(i)){
					case 'A': case 'C': case 'M':
						rtn += '&nbsp;';
						break;
					default:
						rtn += '|';
				}
			}else if('B' === dnaA.charAt(i)){
				rtn += ('A' === dnaB.charAt(i) || '-' === dnaB.charAt(i)) ? '&nbsp;' : '|';
			}else if('V' === dnaA.charAt(i)){
				rtn += ('T' === dnaB.charAt(i) || '-' === dnaB.charAt(i)) ? '&nbsp;' : '|';
			}else if('H' === dnaA.charAt(i)){
				rtn += ('G' === dnaB.charAt(i) || '-' === dnaB.charAt(i)) ? '&nbsp;' : '|';
			}else if('D' === dnaA.charAt(i)){
				rtn += ('C' === dnaB.charAt(i) || '-' === dnaB.charAt(i)) ? '&nbsp;' : '|';
			}else if('N' === dnaA.charAt(i)){
				rtn += '-' === dnaB.charAt(i) ? '&nbsp;' : '|';
			}else{ // '-' === dnaA.charAt(i)
				rtn += '&nbsp;';
			}
		}
		return rtn;
	}
});