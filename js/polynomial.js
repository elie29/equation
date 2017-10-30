"use strict";

class Polynomial {

	constructor() {
		this.str = '';
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