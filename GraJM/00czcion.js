/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {napis} from "./ksztalty.js";

var c = new Object ();

c.pisz = function (cel, x, y, tekst) {
	(new Obraz (1000, 1000, function (ctx, bx, by, p) {
		ctx.font = "bold 30px sans-serif";
		ctx.fillStyle = "black";
		ctx.fillText (p, bx, by + 10);
		}, String (tekst))).nanies (cel, x, y);
	};

c.szerok = function (tekst) {
	return String (tekst).length * 15;
	};

export default c;
