/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025.*/

function Obraz (szer, wys, funkcja, param) {
	var pierwot = new Object ();
	
	if ((typeof szer) == "object") {
		this.szerok = szer.szerok;
		this.wysok = szer.wysok;
		this._elementy = new Array ();
		szer.nanies (this, 0, 0);
		return;
		}

	this._elementy = new Array ();
	this.szerok = szer;
	this.wysok = wys;
	pierwot.fn = funkcja;
	pierwot.par = param;
	pierwot.bx = 0;
	pierwot.by = 0;
	this._elementy[0] = pierwot;
	}

Obraz.prototype.nanies = function (cel, px, py) {
	var i, n, wpis, odpow;
	
	n = this._elementy.length;
	i = 0;
	while (i < n) {
		wpis = this._elementy[i++];
		odpow = new Object ();
		odpow.fn = wpis.fn;
		odpow.par = wpis.par;
		odpow.bx = wpis.bx + px;
		odpow.by = wpis.by + py;
		cel._elementy.push (odpow);
		}
	};

Obraz.prototype.naklej = function (cel, px, py) {
	this.nanies (cel, px, py);
	};

Obraz.prototype.rysuj = function (ctx) {
	var i, n, a;
	
	n = this._elementy.length;
	i = 0;
	while (i < n) {
		a = this._elementy[i++];
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		a.fn (ctx, a.bx, a.by, a.par);
		}
	};

export default Obraz;
