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
			'series': $('#kosiki').attr('data000'),
			//no.と排出率を入力
			'rare':[]
		}
		 */
		$rtn = array();
		
		for ($i=0; $i < $data['times']; $i++) {
			$rd = mt_rand(1, 100 * self::SHOSU);
			$rr = 0;
			for ($j=0; $j < count($data["rare"]); $j++) {
				$rr += $data["rare"][$j];
				if ($rr >= $rd) {
					$rtn[$i] = $mns[$j];
					break;
				}
			}
		}

		return $rtn;
	}
}
