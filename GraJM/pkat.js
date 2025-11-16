/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

function Pkat (x, y, s, w) {
	this._x1 = x;
	this._y1 = y;
	this._x2 = x + s;
	this._y2 = y + w;
	}

Pkat.prototype.wewn = function (x, y) {
	return x >= this._x1 && x < this._x2 &&
			y >= this._y1 && y < this._y2;
	};

export default Pkat;
