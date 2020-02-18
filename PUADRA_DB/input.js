$(()=>{
	//内部パラメータの保存
	let mns = {
		TYPE:[], AWAKEN:[], SUPER_AWAKEN:[], EVOLVE:[]
	};

	//パラメータの画面への反映
	let outputParameter = ()=>{
		$('#name').val(mns["NAME"]);
		$('#rare').val(mns["RARE"]);
		$('#main-attribute').val(mns["MAIN_ATTRIBUTE"]);
		$('#sub-attribute').val(mns["SUB_ATTRIBUTE"]);
		$('#cost').val(mns["COST"]);
		$('#assist').val(mns["ASSIST"]);
		console.log(mns["TYPE"]);
		if (!!mns["TYPE"] && 0 < mns["TYPE"].length) {
			let i = 1;
			for (let cb of $('.type input[type="checkbox"]')) {
				$(cb).attr('checked', false);
				$(cb).parent().css('background', null);
				for (let v of mns["TYPE"]) {
					if (v == $(cb).data('type')) {
						$(cb).attr('checked', true);
						$(cb).parent().css('background', 'radial-gradient(#9fd, #6ca)');
						$('#type' + i).html(v);
						i++;
					}
				}				
			}
		}
		$('#hp').val(mns["HP"]);
		$('#atk').val(mns["ATK"]);
		$('#recover').val(mns["RECOVER"]);
		$('#super_hp').val(mns["SUPER_HP"]);
		$('#super_atk').val(mns["SUPER_ATK"]);
		$('#super_recover').val(mns["SUPER_RECOVER"]);
		console.log(mns["AWAKEN"]);
		if (!!mns["AWAKEN"] && 0 < mns["AWAKEN"].length) {
			let i = 1;
			for (let v of mns["AWAKEN"]) {
				$('#awaken' + i).html(`<img src="img_awaken/${v}.png">`);
				$('#awaken-name' + i).val(v);
				i++;
			}
		}
		console.log(mns["SUPER_AWAKEN"]);
		if (!!mns["SUPER_AWAKEN"] && 0 < mns["SUPER_AWAKEN"].length) {
			let i = 1;
			for (let v of mns["SUPER_AWAKEN"]) {
				$('#super-awaken' + i).html(`<img src="img_awaken/${v}.png">`);
				$('#super-awaken-name' + i).val(v);
				i++;
			}
		}
		$('#skill-turn').val(mns["SKILL_TURN"]);
		$('#skill-max-turn').val(mns["SKILL_MAX_TURN"]);
		$('#skill').html(mns["SKILL"]);
		$('#leader-skill').html(mns["LEADER_SKILL"]);
		console.log(mns["EVOLVE"]);
		if (!!mns["EVOLVE"] && 0 < mns["EVOLVE"].length) {
			let i = 1;
			for (let v of mns["EVOLVE"]) {
				$('#evolve-name' + i).val(v.EVOLVE_NAME);
				$('#evolve-after-number' + i).val(v.AFTER_NO);
				i++;
			}
		}
	};

	$('#done').on('click', ()=>{
		let target_no = parseInt($('#mns-number').val());
		$.getJSON('server/input.json.php', {purpose: 'read', target_number: target_no}, ($js)=>{
			if (null != $js) {
				mns = $js;
				outputParameter();
				$('#output-insert-sentence').html('');
				$('#output-update-sentence').html('');
			}
		});
	});

	//チェックボックスの色変え
	$('.type input[type=checkbox]').on('click', (e)=>{
		//e.currentTarget.parentElement.style.background = e.currentTarget.checked ? "radial-gradient(#9fd, #6ca)" : null;
		//typeの削除に対応していない(重複するし、3つ以上のマークがつく)
		let hs = mns.TYPE.filter(v => v != e.currentTarget.dataset.type);
		if (hs.length == mns.TYPE.length) {
			mns.TYPE.push(e.currentTarget.dataset.type);
			if (3 < mns["TYPE"].length) mns["TYPE"].shift();
		} else {
			//すでにタイプが含まれていたので、削除
			mns.TYPE = hs;
		}
		//文字の制御ここから
		for (let i=1; i <= 3; i++) {
			$('#type' + i).html('');
		}
		let i = 1;
		for (let v of mns["TYPE"]) {
			$('#type' + i).html(v);
			i++;
		}
		//文字の制御ここまで

		// タイプ全てのチェックボックスのチェックを外す
		// 選んだタイプのチェックボックスをつける
		for (let v of $('.type input[type=checkbox]')) {
			v.setAttribute('checked', false);
			for (let type of mns.TYPE) {
				if (type == v.dataset.type) {
					v.setAttribute('checked', true);
					break;
				}
			}
			v.parentElement.style.background = ("true" == v.getAttribute('checked')) ? "radial-gradient(#9fd, #6ca)" : null;
		}
	});

	for (let i=1; i <= 9; i++) {
		$('#awaken-name' + i).on('change', (e)=>{
			$('#awaken' + i).html(`<img src="img_awaken/${e.currentTarget.value}.png">`);
		});
		$('#super-awaken-name' + i).on('change', (e)=>{
			$('#super-awaken' + i).html(`<img src="img_awaken/${e.currentTarget.value}.png">`);
		});
	}

	$('#mns-done').on('click', ()=>{
		//mns変数の中身を作成
		mns.NO = $('#mns-number').val();
		mns.NAME = $('#name').val();
		mns.RARE = $('#rare').val();
		mns.MAIN_ATTRIBUTE = $('#main-attribute').val();
		mns.SUB_ATTRIBUTE = $('#sub-attribute').val();
		mns.COST = $('#cost').val();
		mns.ASSIST = $('#assist').val();
		mns.HP = $('#hp').val() || 0;
		mns.ATK = $('#atk').val() || 0;
		mns.RECOVER = $('#recover').val() || 0;
		mns.SUPER_HP = $('#super_hp').val() || 0;
		mns.SUPER_ATK = $('#super_atk').val() || 0;
		mns.SUPER_RECOVER = $('#super_recover').val() || 0;
		mns.SKILL_MAX_TURN = $('#skill-max-turn').val() || 0;
		mns.SKILL_TURN = $('#skill-turn').val() || 0;
		mns.SKILL = $('#skill').val();
		mns.LEADER_SKILL = $('#leader-skill').val();
		mns.AWAKEN = [];
		mns.SUPER_AWAKEN = [];
		for (let i=1; i <= 9; i++) {
			if ($('#awaken-name'+i).val()) mns.AWAKEN.push($('#awaken-name'+i).val());
			if ($('#super-awaken-name'+i).val()) mns.SUPER_AWAKEN.push($('#super-awaken-name'+i).val());
		}
		mns.EVOLVE = [];
		for (let i=1; i <= 4; i++) {
			if ($('#evolve-after-number'+i).val()) {
				mns.EVOLVE.push({
					AFTER_NO: $('#evolve-after-number'+i).val(), 
					EVOLVE_NAME: $('#evolve-name'+i).val()
				});
			}
		}
		//typeはすでに入れている
		console.log(mns);
		//insert文の作成
		let sql = 'INSERT INTO mns (`NO`, `NAME`, MAIN_ATTRIBUTE, SUB_ATTRIBUTE, RARE, `COST`, ASSIST, '
			+'HP, ATK, `RECOVER`, `SKILL`, SKILL_TURN, SKILL_MAX_TURN, LEADER_SKILL, SUPER_HP, SUPER_ATK, SUPER_RECOVER) VALUES ';
		sql += `(${mns.NO},"${mns.NAME}","${mns.MAIN_ATTRIBUTE}","${mns.SUB_ATTRIBUTE}",${mns.RARE},${mns.COST},${mns.ASSIST},
			${mns.HP},${mns.ATK},${mns.RECOVER},"${mns.SKILL}",${mns.SKILL_TURN},${mns.SKILL_MAX_TURN},"${mns.LEADER_SKILL}",${mns.SUPER_HP},${mns.SUPER_ATK},${mns.SUPER_RECOVER});<br>`;
		for (let v of mns.TYPE) {
			sql += 'INSERT INTO mns_type (`NO`, `TYPE`) VALUES ';
			sql += `(${mns.NO}, "${v}");<br>`;
		}
		for (let v of mns.AWAKEN) {
			sql += 'INSERT INTO mns_awaken (`NO`, `AWAKEN`) VALUES ';
			sql += `(${mns.NO}, "${v}");<br>`;
		}
		for (let v of mns.SUPER_AWAKEN) {
			sql += 'INSERT INTO mns_super_awaken (`NO`, `AWAKEN`) VALUES ';
			sql += `(${mns.NO}, "${v}");<br>`;
		}
		for (let v of mns.EVOLVE) {
			sql += 'INSERT INTO evolve (BEFORE_NO, AFTER_NO, EVOLVE_NAME) VALUES ';
			sql += `(${mns.NO}, ${v.AFTER_NO}, "${v.EVOLVE_NAME}");<br>`;
		}
		$('#output-insert-sentence').html(sql);
		//update文 && delete文
		let upd = `UPDATE mns SET \`NAME\`="${mns.NAME}", MAIN_ATTRIBUTE="${mns.MAIN_ATTRIBUTE}", SUB_ATTRIBUTE="${mns.SUB_ATTRIBUTE}",
		 RARE=${mns.RARE}, \`COST\`=${mns.COST}, ASSIST=${mns.ASSIST}, HP=${mns.HP}, ATK=${mns.ATK}, \`RECOVER\`=${mns.RECOVER}, \`SKILL\`="${mns.SKILL}",
		 SKILL_TURN=${mns.SKILL_TURN}, SKILL_MAX_TURN=${mns.SKILL_MAX_TURN}, LEADER_SKILL="${mns.LEADER_SKILL}",
		 SUPER_HP=${mns.SUPER_HP}, SUPER_ATK=${mns.SUPER_ATK}, SUPER_RECOVER=${mns.SUPER_RECOVER}`;
		upd += 'WHERE `NO` = ' + mns.NO + ';<br>';
		upd += 'DELETE FROM mns_type WHERE `NO` = ' + mns.NO + ';<br>';
		for (let v of mns.TYPE) {
			upd += 'INSERT INTO mns_type (`NO`, `TYPE`) VALUES ';
			upd += `(${mns.NO}, "${v}");<br>`;
		}
		upd += 'DELETE FROM mns_awaken WHERE `NO` = ' + mns.NO + ';<br>';
		for (let v of mns.AWAKEN) {
			upd += 'INSERT INTO mns_awaken (`NO`, `AWAKEN`) VALUES ';
			upd += `(${mns.NO}, "${v}");<br>`;
		}
		upd += 'DELETE FROM mns_super_awaken WHERE `NO` = ' + mns.NO + ';<br>';
		for (let v of mns.SUPER_AWAKEN) {
			upd += 'INSERT INTO mns_super_awaken (`NO`, `AWAKEN`) VALUES ';
			upd += `(${mns.NO}, "${v}");<br>`;
		}
		$('#output-update-sentence').html(upd);
		/*$.getJSON('server/input.json.php', {purpose: 'write', data: mns}, ($js)=>{
			console.log($js);
		});*/
	});
});