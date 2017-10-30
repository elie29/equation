;(function() {

  'use strict';

  function get(id) {
    return $('#' + id);
  }

  function set(id, value) {
    get(id).val(value);
  }

  function getVal(id) {
    return get(id).val();
  }

  function getFloat(id) {
    return parseFloat(getVal(id), 10);
  }

  function setSolution(text, s1, s2) {
    let result = "&nbsp;" + text + '<br/>';
    if (s1) result += s1 + '<br />';
    if (s2) result += s2 + '<br/>';
    get('result').html(result);
  }

  // Calcul des solutions
  function calcul() {
    let a = getFloat('a');
    let b = getFloat('b');
    let c = getFloat('c');

    if (isNaN(b)) {
      b = 0;
      set('b', b);
    }
    if (isNaN(c)) {
      c = 0;
      set('c', c);
    }

    const delta = b * b - 4.0 * a * c;
    if (a === 0 || isNaN(a)) {
      setSolution('Le paramètre a doit être renseigné et non null');
      get('a').focus();
    }
    else {
      const p = new Polynomial();
      p.addMember(a, 'x²');
      p.addMember(b, 'x');
      p.addMember(c, '');
      if (delta < 0) {
        setSolution(
          'L\'équation ' + p.getPolynomial() + ' = 0 admet deux solutions dans C:',
          'z1 = (' + -b + '-i√' + -delta + ') / ' + (2 * a),
          'z2 = (' + -b + '+i√' + -delta + ') / ' + (2 * a)
        );
      }
      else {
        if (delta === 0) {
          const x = -b/(2.0*a);
          setSolution(
            'L\'équation ' + p.getPolynomial() + ' = 0 admet une solution dans R:',
            'x = ' + -b + ' / ' + (2 * a) + ' = ' + x
          );
        }
        else {
          let x1 = (-b - Math.sqrt(delta)) / (2.0 * a);
          let x2 = (-b + Math.sqrt(delta)) / (2.0 * a);
          setSolution(
            'L\'équation ' + p.getPolynomial() + ' = 0 admet deux solutions dans R:',
            'x1 = (' + -b + '-√' + delta + ') / ' + (2 * a) + ' = ' + x1,
            'x2 = (' + -b + '+√' + delta + ') / ' + (2 * a) + ' = ' + x2
          );
        }
      }
    }
  }

  window.onload = function () {
    get('a').focus();
  };

  document.onkeypress = function (e) {
    if (e.keyCode === 13) { //enter
      get('OK').focus();
    }
  };

  get('OK').on('click', calcul);

})();