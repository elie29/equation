<?php

class Polynomial
{

	private $str = '';

	function __construct()
	{
		$this->str = '';
	}

	public function addMember($coeff, $member)
	{
		if ($coeff !== 0) {
			if ($coeff > 0 && strlen($this->str) !== 0) {
				$this->str .= ' + ';
			}
			if (abs($coeff) === 1) {
				if (strlen(member) !== 0) {
					if ($coeff === -1) {
						$this->str .= ' - ';
					}
					$this->str .= $member;
				}
				else {
					$this->str .=  $coeff;
				}
			}
			else {
				$this->str .= $coeff . $member;
			}
		}
	}

	public function getPolynomial() {
		return $this->str;
	}

}