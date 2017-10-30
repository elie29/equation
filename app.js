(function() {
	"use strict";

    class Polynomial {
        constructor() {
           this.str = new String();
        }
        
        addMember(coeff, member) {
            if (coeff !== 0) {
                if (coeff > 0 && this.str.length !== 0) {
                    this.str += "+";
                }
                if (Math.abs(coeff) === 1) {
                    if (member.length !== 0) {
                        if (coeff === -1) {
                            this.str += "-";
                        }
                        this.str += member;
                    }
                    else {
                        this.str += coeff;
                    }
                }
                else {
                    this.str += coeff + member;
                }
            }
        }
        
        getPolynomial() {
            return this.str;
        }
    }
    
    //Calcul des solutions
    function calcul() {
        let a = parseFloat(document.getElementById("a").value, 10),
            b = parseFloat(document.getElementById("b").value, 10),
            c = parseFloat(document.getElementById("c").value, 10);
        if (isNaN(b)) {
            b = 0;
            document.getElementById("b").value = b;
        }
        if (isNaN(c)) {
            c = 0;
            document.getElementById("c").value = c;
        }
        let delta = b * b - 4.0 * a * c;
        if (a === 0 || isNaN(a)) {
            document.getElementById("Solutions").value = "Le paramètre a doit être renseigné et non nul";
            document.getElementById("Solutions").type = "text";
            document.getElementById("a").focus();
            document.getElementById("s1").value = "";
            document.getElementById("s1").type = "hidden";
            document.getElementById("s2").value = "";
            document.getElementById("s2").type = "hidden";
        }
        else {
            let p = new Polynomial();
            p.addMember(a, "x²");
            p.addMember(b, "x");
            p.addMember(c, "");
            if (delta < 0) {
                document.getElementById("Solutions").value = "L'équation " + p.getPolynomial() + " = 0 admet deux solutions dans C : ";
                document.getElementById("Solutions").type = "text";
                document.getElementById("s1").value = "z1 = (" + -b + "-i√" + -delta + ") / " + 2 * a;
                document.getElementById("s1").type = "text";
                document.getElementById("s2").value = "z2 = (" + -b + "+i√" + -delta + ") / " + 2 * a;
                document.getElementById("s2").type = "text";
            }
            else {
                if (delta === 0) {
                    let x = -b/(2.0*a);
                    document.getElementById("Solutions").value = "L'équation " + p.getPolynomial() + " = 0 admet une solution dans R : ";
                    document.getElementById("Solutions").type = "text";
                    document.getElementById("s1").value = "x = " + -b + " / " + 2 * a + " = " + x;
                    document.getElementById("s1").type = "text";
                    document.getElementById("s2").value = "";
                    document.getElementById("s2").type = "hidden";
                }
                else {
                    let x1 = (-b - Math.sqrt(delta)) / (2.0 * a);
                    let x2 = (-b + Math.sqrt(delta)) / (2.0 * a);
                    document.getElementById("Solutions").value = "L'équation " + p.getPolynomial() + " = 0 admet deux solutions dans R : ";
                    document.getElementById("Solutions").type = "text";
                    document.getElementById("s1").value = "x1 = (" + -b + "-√" + delta + ") / " + 2 * a + " = " + x1;
                    document.getElementById("s1").type = "text";
                    document.getElementById("s2").value = "x2 = (" + -b + "+√" + delta + ") / " + 2 * a + " = " + x2;
                    document.getElementById("s2").type = "text";
                }
            }
        }
    }

    window.onload = function () {
        document.getElementById("a").focus();
    };
    
    document.onkeypress = function (e) {
        if (e.keyCode === 13) { //enter
            document.getElementById("OK").focus();
         }
    };

    document.getElementById("OK").onclick = calcul;
})();