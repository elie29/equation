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
    let result = text + '<br/>';
    if (s1) result += s1 + '<br />';
    if (s2) result += s2 + '<br/>';
    get('result').html(result);
  }

  /**
   * Verify that some elements are set correctly!!
   */
  function verify() {
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

    if (a === 0 || isNaN(a)) {
      setSolution('Le paramètre a doit être renseigné et non null');
      get('a').focus();
      return false;
    }
    return true;
  }

  window.onload = function () {
    get('a').focus();
  };

  document.onkeypress = function (e) {
    if (e.keyCode === 13) { //enter
      get('OK').focus();
    }
  };

  get('OK').on('click', function() {
    get('result').html('');
    if (!verify()) return;
    $.post({
      url: 'api/calcul.php',
      data: {
        a: getVal('a'),
        b: getVal('b'),
        c: getVal('c')
      },
      success: function(result) {
        get('result').append(result);
      }
    });
  });

})();