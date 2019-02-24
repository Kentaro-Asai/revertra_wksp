$(function(){
	//直近の労働データ
	var todayAry = {/*
		msg: '',
		btn_time: '2018/01/10 08:03:21',
		rest_time: '10:03:21',
		work_time: '10:03:21',
		work_start: '2018/01/10 08:03:21',
		work_end: '2018/01/10 08:03:21',
		update: false
	*/};
	//過去の労働データ
	var tblAry = [/*
		{
			'date': '01/01',
			'start': '00:00',
			'end': '00:00',
			'work': '00:00',
			'rest': '00:00',
			'comment': ''
		}, {...}, {...}
	*/];
	//今のモード(休憩中か仕事中か)
	var boolAry = {'work': false, 'rest': false};
	//countUpの中のループを1つだけしか呼ばないようにする(古いループは捨てる)
	var loopKey = 0;
	
	//initialFunc();
	var initialFunc = ()=>{
	//(function(){
		tblStorage();
		todayAry = getTodayStorage();
		$('#tbl_data').html(outputTblHtml(tblAry));
		boolAryStorage();
		if(!!todayAry.work_start){
			$('#start').html(todayAry.work_start);
			$('#work_time').html(todayAry.work_time);
			$('#rest_time').html(todayAry.rest_time);
			countUpTime(++loopKey);
		}
		$('#msg').html(todayAry.msg);
		//btnリストの修正
		if(boolAry.work){
			$('#btn_box').html(makeBtn(['rest', 'work_end']));
		}else if(boolAry.rest){
			$('#btn_box').html(makeBtn(['work', 'work_end']));
		}else if(!!todayAry.btn_time){
			//すでに働いていて、勤務終了ボタンを押した。しかし、戻ってきた
			$('#btn_box').html(makeBtn(['still_work', 'new_work']));
		}
		//tblAryの下にある労働時間をつくる
		updateTotalTbl();
	};	
	//})();
		
	$('#btn_box').on('click', '#work_btn, #still_work_btn', (e)=>{
	//$('#work_btn').on('click', ()=>{
		let dt = new Date();
		let now_time = timeFunc.getStrTime('full', dt);
		let btn_dt = !!todayAry.btn_time ? new Date(todayAry.btn_time): new Date();
		let rest_timestamp = timeFunc.internalTime(todayAry.rest_time)
				+ Math.floor(dt.getTime() / 1000) - Math.floor(btn_dt.getTime() / 1000);
		//まだ仕事をしていない
		if(!todayAry.work_start){
			todayAry.work_start = '' + now_time;
			boolAry = {'work': false, 'rest': false};
			$('#start').html(todayAry.work_start);
		}
		if(!boolAry.work){
			boolAry.work = true;
			//まだ働くボタンを押したら、true
			todayAry.update = 'still_work_btn' === e.target.id;
			if(boolAry.rest){
				//仕事の再開
				//休憩時間の確定
				todayAry.rest_time = timeFunc.viewTime(rest_timestamp);
			}else{
				//仕事の最初 or 仕事の再開
			}
			boolAry.rest = false;
			//ボタンを押した時間を記録
			todayAry.btn_time = '' + now_time;
			//休憩時間のカウントアップの停止 & 仕事時間のカウントアップの開始
			countUpTime(++loopKey);
			//btnリストの修正
			$('#btn_box').html(makeBtn(['rest', 'work_end']));
			todayAry.msg = '現在仕事中です。';
			$('#msg').html(todayAry.msg);
			//現状の保存
			setTodayStorage(todayAry);
			boolAryStorage(boolAry);
		}
		
	});
	
	//休憩ボタン(開始)
	$('#btn_box').on('click', '#rest_btn', ()=>{
		let dt = new Date();
		let now_time = timeFunc.getStrTime('full', dt);
		let btn_dt = new Date(todayAry.btn_time);
		let work_timestamp = timeFunc.internalTime(todayAry.work_time)
				+ Math.floor(dt.getTime() / 1000) - Math.floor(btn_dt.getTime() / 1000);
		if(!boolAry.rest){
			boolAry = {'work': false, 'rest': true};
			//仕事時間の確定
			todayAry.work_time = timeFunc.viewTime(work_timestamp);
			//ボタンを押した時間を記録
			todayAry.btn_time = '' + now_time;
			//休憩時間のカウントアップの停止 & 仕事時間のカウントアップの開始
			countUpTime(++loopKey);
			$('#btn_box').html(makeBtn(['work', 'work_end']));
			todayAry.msg = '現在休憩中です。';
			$('#msg').html(todayAry.msg);
			setTodayStorage(todayAry);
			boolAryStorage(boolAry);
		}
	});
	
	//仕事終了ボタン(開始) tblAryにtodayAryのデータを格納
	$('#btn_box').on('click', '#work_end_btn', ()=>{
		if(!boolAry.work && !boolAry.rest) return ;
		let dt = new Date();
		let now_time = timeFunc.getStrTime('full', dt);
		let btn_dt = new Date(todayAry.btn_time);
		if(boolAry.work){
			let tmstmp = timeFunc.internalTime(todayAry.work_time)
				+ Math.floor(dt.getTime() / 1000) - Math.floor(btn_dt.getTime() / 1000);
			boolAry = {'work': false, 'rest': false};
			todayAry.work_time = timeFunc.viewTime(tmstmp);
		}else if(boolAry.rest){
			let tmstmp = timeFunc.internalTime(todayAry.rest_time)
				+ Math.floor(dt.getTime() / 1000) - Math.floor(btn_dt.getTime() / 1000);
			boolAry = {'work': false, 'rest': false};
			todayAry.rest_time = timeFunc.viewTime(tmstmp);
		}
		//btn_timeから保存
		todayAry.work_end = '' + now_time;
		$('#btn_box').html(makeBtn(['still_work', 'new_work']));
		todayAry.msg = 'お疲れさまでした。';
		$('#msg').html(todayAry.msg);
		loopKey = 0; //loop end
		new Promise((resolve, reject)=>{
			setTodayStorage();
			tblStorage(todayAry);
			boolAryStorage(boolAry);
			resolve();
		}).then(()=>{
			//今日の仕事を追加で表示
			$('#tbl_data').html(outputTblHtml(tblAry));
			updateTotalTbl();
		});
		
	});
	
	//新しい仕事ボタン
	$('#btn_box').on('click', '#new_work_btn', ()=>{
		let dt = new Date();
		let now_time = timeFunc.getStrTime('full', dt);
		let findTarget = {
			'today': timeFunc.getStrTime('dateOnly', dt),
			'yesterday': timeFunc.getStrTime('dateOnly', new Date(timeFunc.getYesterday(now_time)))
		};
		let ret = tblAry.find(dayOb =>
			findTarget.today === dayOb.date
				|| (dayOb.start < dayOb.end && findTarget.yesterday === dayOb.date)
		);
		//今日働いていないなら押しても何もしない
		if(!ret) return ;
		
		todayAry = {
			'msg': '現在仕事中です。',
			'btn_time': '' + now_time,//ボタンを押した時間を記録
			'rest_time': '',
			'work_time': '',
			'work_start': '' + now_time,
			'work_end': '',
			'update': false
		};
		boolAry = {'work': true, 'rest': false};
		$('#start').html(todayAry.work_start);
		//仕事時間のカウントアップの開始
		countUpTime(++loopKey);
		//btnリストの修正
		$('#btn_box').html(makeBtn(['rest', 'work_end']));
		$('#msg').html(todayAry.msg);
		//現状の保存
		setTodayStorage(todayAry);
		boolAryStorage(boolAry);
	});
	
	//今までのデータの編集可能部分を増やす場合、ここを編集
	$('#reg_time_btn1, #reg_time_btn2').on('click', ()=>{
		let tbl_date = $('.tbl_date');
			tbl_work = $('.tbl_formal_work'),
			tbl_start = $('.tbl_formal_start'),
			tbl_end = $('.tbl_formal_end'),
			comment = $('.comment');
		let tbl_html_ary = [];
		for(let i=0; i < tbl_date.length; i++){
			tbl_html_ary.push({
				'date': tbl_date[i].innerHTML,
				'work': tbl_work[i].value,
				'start': tbl_start[i].value,
				'end': tbl_end[i].value,
				'comment': comment[i].value
			});
		}
		for(let i in tblAry){
			//if(tblAry[i].date.substr(tblAry[i].date.indexOf('/')+1) === tbl_html_ary[i].date){
				tblAry[i].formal_work = tbl_html_ary[i].work;
				tblAry[i].start = tbl_html_ary[i].start;
				tblAry[i].end = tbl_html_ary[i].end;
				tblAry[i].comment = tbl_html_ary[i].comment;
			//}
		}
		transMsg(0 < tblAry.length ? '勤務時間を書き換えました。' : '勤務終了ボタンを押して、表中にデータを追加してください。');
		localStorage.setItem('tblAry', JSON.stringify(tblAry));
	});
	
	//メッセージを表示（徐々に消えていく演出）
	var transMsg = msg =>{
		let tbl_span = $('.tbl span');
		let num = {'opacity': 10, 'buffer': 20};
		tbl_span.html(msg);
		tbl_span.css('opacity', num.opacity / 10);
		let key = window.setInterval(()=>{
			if(0 < num.buffer) num.buffer--;
			else tbl_span.css('opacity', (--num.opacity) / 10);
			if(0 === num.opacity) window.clearInterval(key);
		}, 40);
	};
	
	//現在のモードの(get OR set)を引数あるなしで行う
	function boolAryStorage(boolObj){
		if(!!boolObj){
			//this is set
			localStorage.setItem('boolAry', JSON.stringify(boolObj));
		}else{
			//this is get
			let str = localStorage.getItem('boolAry');
			if(!!str && !!todayAry.btn_time){
				boolAry = JSON.parse(str);
			}
		}
	};
	
	//過去の労働時間(get and set)
	function tblStorage(todayObj){
		if(!!todayObj){
			//this is set
			let st = new Date(todayObj.work_start);
			let start = timeFunc.marumeTime('start', todayObj.work_start);
			let end = timeFunc.marumeTime('end', todayObj.work_end);
			let lack = {'end': timeFunc.internalTime(end + ':00'), 'start': timeFunc.internalTime(start + ':00'), 'labor': 0};
			lack.labor = 0 <= lack.end - lack.start ? lack.end - lack.start : 24*60*60 + lack.end - lack.start;
			if(60 * 60 <= timeFunc.internalTime(todayObj.rest_time) && 60 * 60 <= lack.labor){
				//休憩時間が一時間以上なら、労働時間から一時間引く。
				lack.labor -= 60 * 60;
			}
			//挿入するデータ
			let today_tblAry = {
				'date': timeFunc.getStrTime('dateOnly', st),
				'start': start,
				'end': end,
				'formal_work': timeFunc.viewTime(lack.labor).slice(0, -3),
				'work': todayObj.work_time.slice(0, -3),
				'rest': todayObj.rest_time.slice(0, -3),
				'comment': ''
			};
			if(todayObj.update){
				let yesterday_date = timeFunc.getStrTime('dateOnly', timeFunc.getYesterday());
				tblAry = tblAry.filter(v => v.date !== today_tblAry.date && v.date !== yesterday_date);
			}
			//データの入力
			tblAry.push(today_tblAry);
			//2ヶ月前までのデータを削除
			let two_month_ago = new Date();
			two_month_ago.setMonth(two_month_ago.getMonth() -2);
			tblAry = tblAry.filter(v => new Date(v.date) >= two_month_ago);
			localStorage.setItem('tblAry', JSON.stringify(tblAry));
		}else{
			//this is get
			let str = localStorage.getItem('tblAry');
			tblAry = !!str ? JSON.parse(str) : [];
		}
	};
	
	//今日の労働を保存
	function setTodayStorage(todayObj){
		if(!!todayObj){
			localStorage.setItem('todayAry', JSON.stringify(todayObj));
		}else{
			localStorage.removeItem('todayAry');
		}
	}
	
	//直近の労働を返す
	function getTodayStorage(){
		let todayObj = {};
		let needNew = false;
		//TODO: 仕事をして本日中に終了後、またスタートして戻ってきた時の対応がない
		//途中の仕事があるか => 今日終えた仕事があるか => 新しい仕事の判定順
		let str = localStorage.getItem('todayAry');
		if(!!str){
			todayObj = JSON.parse(str);
			let day = new Date();
			let nowDate = timeFunc.getStrTime('dateOnly', day);
			day.setDate(day.getDate() - 1);
			let lastDate = timeFunc.getStrTime('dateOnly', day);
			let ob = {
				'start': timeFunc.getStrTime('dateOnly', new Date(todayObj.work_start)),
				'end': timeFunc.getStrTime('dateOnly', new Date(todayObj.work_end))
			};
			if(!!todayObj.work_end){
				//終了時間が入力されている
				if(ob.start === nowDate){
					//今日の仕事を終えている
				}else if(ob.end === nowDate){
					//昨日スタートの仕事を今日終えた
				}else{
					//データが古いので、今日の新しいデータを挿入
					//古いデータの編集できるといい
					needNew = true;
				}
			}else if(ob.start === lastDate){
				//昨日の仕事をまだ終えていない
				
			}else{
				//needNew = true;
			}
		}else{
			let workedObj = todayWorked();
			//初めて使う人はtrue
			needNew = !workedObj;
			//今日すでに仕事した人
			if(!needNew) todayObj = workedObj;
		}
		return needNew ? {
			'msg': 'おはようございます。',
			'work_time': '00:00:00', //sec
			'rest_time': '00:00:00',
			'btn_time': '', //ボタンを押した時間
			'work_start': '',
			'work_end': '',
			'update': false
		} : todayObj;
	};
	
	function outputTblHtml(tblList){
		if(null == tblList || !tblList.length) return '<tr><td colspan="7">まだ登録されていません。</td></tr>';
		let str = '';
		//<tr><th>日付</th><th>開始</th><th>終了</th><th>勤務時間</th><th>休憩</th></tr>
		for(let v of tblList){
			str += '<tr>'
				+'<td class="tbl_date">'+v.date.substr(v.date.indexOf('/')+1)+'</td>'
				+'<td><input type="text" class="tbl_formal_start" value="'+v.start+'"></td>'
				+'<td><input type="text" class="tbl_formal_end" value="'+v.end+'"></td>'
				+'<td><input type="text" class="tbl_formal_work" value="'+v.formal_work+'" ></td>'
				+'<td>'+v.work+'</td>'
				+'<td>'+v.rest+'</td>'
				+'<td><textarea class="comment">'+(!!v.comment?v.comment:'')+'</textarea></td>'
			+'</tr>';
		}
		return !!str ? str : '<tr><td colspan="7">まだ登録されていません。</td></tr>';
	};
	
	function makeBtn(ary){
		let btnStr = '';
		let viewStr = '';
		for(let val of ary){
			if('rest' === val) viewStr = '休憩開始';
			else if('work' === val) viewStr = '仕事開始';
			else if('work_end' === val) viewStr = '勤務終了';
			else if('still_work' === val) viewStr = 'やっぱり仕事再開';
			else if('new_work' === val) viewStr = '新しい仕事開始';
			btnStr += '<button id="'+val+'_btn">'+viewStr+'</button>';
		}
		return btnStr;
	};
	
	//表示をOutput
	function countUpTime(myKey){
		let btn_d = !!todayAry.btn_time ? new Date(todayAry.btn_time) : new Date();
		let btn_stmp = Math.floor(btn_d.getTime() / 1000);
		let viewed_time = 0;
		let countOb = {};
		if(boolAry.work){
			countOb = {'htm': $('#work_time'), 'prev_count': timeFunc.internalTime(todayAry.work_time)};
		}else if(boolAry.rest){
			countOb = {'htm': $('#rest_time'), 'prev_count': timeFunc.internalTime(todayAry.rest_time)};
		}else{
			return ;
		}
		loop();
		function loop(){
			let d = new Date();
			let stmp = Math.floor(d.getTime() / 1000);
			let cumulative_time = stmp - btn_stmp + countOb.prev_count;
			if(cumulative_time !== viewed_time){
				countOb.htm.html(timeFunc.viewTime(cumulative_time));
				viewed_time = 0 + cumulative_time;
			}
			if(myKey === loopKey) requestAnimationFrame(loop);			
		}
	};
	
	//今日すでに働いているか、働いているならtodayAryを返す
	function todayWorked(){
		let dt = new Date();
		let d_now = {
			'date': timeFunc.getStrTime('dateOnly', dt),
			'time': dt.getHours() * 60 + dt.getMinutes()
		};
		dt.setDate(dt.getDate() - 1);
		let yesterday_date = timeFunc.getStrTime('dateOnly', dt);
		let ret = false;
		let rtn = {};
		for(let d of tblAry){
			let start_min = parseInt(d.start.substr(0, 2))*60 + parseInt(d.start.substr(-2));
			let end_min = parseInt(d.end.substr(0, 2))*60 + parseInt(d.end.substr(-2));
			if(d_now.date === d.date && d_now.time >= end_min){
				//今日すでに働いている
				ret = true;
				rtn = d;
				break;
			}else if(yesterday_date === d.date && start_min >= end_min && d_now.time*120 <= start_min){
				//日を跨ぎ働いており、昨日の時間より2 hour以上早い
				ret = true;
				rtn = d;
				break;
			}
		}
		//すでに働いていた時、todayAryを返す
		return ret ? {
			'msg': 'お疲れさまでした。<br>もしかして、まだ働きますか？',
			'btn_time': rtn.date +' '+ rtn.end + ':00',
			'rest_time': rtn.rest + ':00',
			'work_time': rtn.work + ':00',
			'work_start': rtn.start + ':00',
			'work_end': rtn.end + ':00'
		} : false;
	};

	/**
	 * tblAryを元に、今月分とかのまとめの値を表で表示する
	 */
	function updateTotalTbl(){
		if(0 == tblAry.length){
			$('#total_tbl').html('');
			$('#total_tbl').css('display', 'none');
			return ;
		}
		let totalAry = [
			/* {'month': 0, 'total_work': 0, 'work': 0, 'rest': 0} */
		];
		let can_contain = false;
		for(let v of tblAry){
			can_contain = false;
			var n_month = parseInt(v.date.substring(v.date.indexOf('/')+1, v.date.lastIndexOf('/')));
			for(let t of totalAry){
				if(t.month == n_month){
					t.formal_work += timeFunc.internalTime(v.formal_work + ':00');
					t.work += timeFunc.internalTime(v.work + ':00');
					t.rest += timeFunc.internalTime(v.rest + ':00');
					can_contain = true;
					break;
				}
			}
			if(!can_contain){
				//同じ月が無ければ新しい月を作成
				totalAry.push({
					'month': n_month,
					'formal_work': timeFunc.internalTime(v.formal_work + ':00'),
					'work': timeFunc.internalTime(v.work + ':00'),
					'rest': timeFunc.internalTime(v.rest + ':00')
				});
			}
		}
		//テーブル作成
		let tbl_str = '<table>'
			+'<caption>労働時間（まとめ）</caption>'
			+'<thead><tr><th>月</th><th>総労働時間</th><th>仕事</th><th>休憩</th></tr></thead>'
			+'<tbody>';
		for(let t of totalAry){
			var hs = {
				'formal_work': timeFunc.viewTime(t.formal_work),
				'work': timeFunc.viewTime(t.work),
				'rest': timeFunc.viewTime(t.rest)
			};
			tbl_str += '<tr>'
				+'<td>' + t.month + '</td>'
				+'<td>' + hs.formal_work.substr(0, hs.formal_work.lastIndexOf(':')) + '</td>'
				+'<td>' + hs.work.substr(0, hs.work.lastIndexOf(':')) + '</td>'
				+'<td>' + hs.rest.substr(0, hs.rest.lastIndexOf(':')) + '</td>'
			+'</tr>';
		}
		tbl_str += '</tbody></table>';
		$('#total_tbl').html(tbl_str);
		$('#total_tbl').css('display', 'block');
	}
	
	/**
	 * 時間に関するツール
	 */
	var timeFunc = {
		//時:分:秒をint timeStamp(秒)で表現
		'internalTime': str => {
			let total_sec = 0;
			if(!!str){
				let sec = str.substr(str.lastIndexOf(':')+1, 2);
				let hr = str.substr(0, str.indexOf(':'));
				let minutes = str.substring(str.indexOf(':')+1, str.lastIndexOf(':'));

				total_sec = parseInt(hr) * 60 * 60 + parseInt(minutes) * 60 + parseInt(sec);
			}
			return total_sec;
		},
		//int timeStamp(秒)を、時:分:秒で表現
		'viewTime': sec => {
			let rtn = '';
			if(60*60 <= sec){
				let hr = Math.floor(sec / (60 * 60));
				rtn += 10 > hr ? '0'+hr : hr;
				sec -= Math.floor(sec / (60 * 60)) * (60 * 60);
			}else{
				rtn += '00';
			}
			rtn += ':';
			let min = Math.floor(sec / 60);
			rtn += 10 > min ? '0'+min : min;
			sec -= Math.floor(sec / 60) * 60;
			sec = 10 > sec ? '0'+sec : sec;
			rtn += ':' + sec;

			return rtn;
		},
		//2019/01/01 02:08:06 の形式で日付取得
		'getStrTime': (mode, dateObj) => {
			let yr = dateObj.getFullYear();
			let mnth = dateObj.getMonth() + 1;
			mnth = mnth < 10 ? '0'+mnth : mnth;  
			let dt = dateObj.getDate();
			dt = dt < 10 ? '0'+dt : dt;
			let hrs = dateObj.getHours();
			hrs = hrs < 10 ? '0'+hrs : hrs;
			let mnts = dateObj.getMinutes();
			mnts = mnts < 10 ? '0'+mnts : mnts;
			let sec = dateObj.getSeconds();
			sec = sec < 10 ? '0'+sec : sec;
			if('dateOnly' === mode){
				return yr + '/' + mnth + '/' + dt;
			}else{
				return yr + '/' + mnth + '/' + dt + ' ' + hrs + ':' + mnts + ':' + sec;
			}
		},
		// Date Objectを返す
		'getYesterday': str => {
			let dt = new Date(str);
			if('Invalid Date' === dt){
				dt = new Date();
			}
			return new Date(dt.setDate(dt.getDate()-1));
		},
		//開始は15分刻みで遅くなる。終了は早くなる(返す値に日付を付加)
		'marumeTime': (mode, tm) => {
			let dt = new Date(tm);
			let rtn = '';
			let hrs = dt.getHours();
			let mins = dt.getMinutes();
			if('start' === mode){
				if(mins <= 15){
					rtn = hrs + ':15';
				}else if(mins <= 30){
					rtn = hrs + ':30';
				}else if(mins <= 45){
					rtn = hrs + ':45';
				}else{
					hrs = 23 === hrs ? '00' : hrs + 1; 
					rtn = hrs + ':00';
				}
			}else if('end' === mode){
				if(mins < 15){
					rtn = hrs + ':00';
				}else if(mins < 30){
					rtn = hrs + ':15';
				}else if(mins < 45){
					rtn = hrs + ':30';
				}else{
					rtn = hrs + ':45';
				}
			}else{
				rtn = 'error';
			}
			return 5 === rtn.length ? rtn : '0'+rtn;
		}
	};
	
	initialFunc();
});