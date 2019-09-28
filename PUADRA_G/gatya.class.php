<?php
class gatya {
	const SHOSU = 1000;
	public function __construct()
	{
		
	}
	
	public static function ctr($data, $mns)
	{
		/*
		var data = {
			'times': parseInt(times),
			'series': $('#kosiki').data('series'),
			//no.と排出率を入力
			'mns': [{mns_no:000, pc: 000},]
		}
		 */
		$rtn = array();
		
		for ($i=0; $i < $data['times']; $i++) {
			$rd = mt_rand(1, 100 * self::SHOSU);
			$percent = 0;
			foreach ($data["mns"] as $val) {
				$percent += $val["pc"];
				if ($percent >= $rd) {
					$rtn[$i] = self::getMnsData($mns, $val["mns_no"]);
					break;
				}
			}
		}

		return $rtn;
	}

	private static function getMnsData($mns, $mns_no){
		$rtn = array();
		foreach ($mns as $val) {
			if ($val["no"] == $mns_no) {
				$rtn = $val;
				break;
			}
		}
		return $rtn;
	}
}
