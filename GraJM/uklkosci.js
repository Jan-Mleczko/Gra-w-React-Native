/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

function UklKosci (nazwa, oprz, xprz, yprz, fn, fa) {
	this.nazwa = nazwa;
	this.oprz = oprz;
	this.xprz = xprz;
	this.yprz = yprz;
	this.fn = fn;
	this.fa = fa;
	};

UklKosci.prototype.punktuj = function (los) {
	return this.fn (this.fa, los);
	};

export default UklKosci;
