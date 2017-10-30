<?php

header('Content-Type: text/html; charset=utf-8');

function getFloat($id) {
	if (empty($_POST[$id])) {
		return 0;
	}
	return floatval($_POST[$id]);
}

// Calcul des solutions
function calcul() {
	$a = getFloat('a');
	$b = getFloat('b');
	$c = getFloat('c');

	if (!$a) {
		return 'Le paramètre a ne peut être 0 ou null';
	}

	$delta = $b * $b - 4.0 * $a * $c;

	require 'polynomial.php';
	$p = new Polynomial();

	$p->addMember($a, 'x²');
	$p->addMember($b, 'x');
	$p->addMember($c, '');
	$res = '';
	if ($delta < 0.0) {
		$res .= 'L\'équation ' . $p->getPolynomial() . ' = 0 admet deux solutions dans C:';
		$res .= '<br/> z1 = (' . -$b . ' - i√' . -$delta . ') / ' . (2 * $a);
		$res .= '<br/> z2 = (' . -$b . ' + i√' . -$delta . ') / ' . (2 * $a);
	}
	elseif ($delta === 0.0) {
		$x = -$b / (2.0 * $a);
		$res .= 'L\'équation ' . $p->getPolynomial() . ' = 0 admet une solution dans R:';
		$res .=	'<br/> x = ' . -$b . ' / ' . (2 * $a) . ' = ' . number_format($x, 2);
	}
	else {
		$x1 = (-$b - sqrt($delta)) / (2.0 * $a);
		$x2 = (-$b + sqrt ($delta)) / (2.0 * $a);
		$res .= 'L\'équation ' . $p->getPolynomial() . ' = 0 admet deux solutions dans R:';
		$res .=	'<br/> x1 = (' . -$b . ' - √' . $delta . ') / ' . (2 * $a) . ' = ' . number_format($x1, 2);
		$res .=	'<br/> x2 = (' . -$b . ' + √' . $delta . ') / ' . (2 * $a) . ' = ' . number_format($x2, 2);
	}
	return $res;
}

echo calcul();