/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (640, 360, function (ctx, bx, by, par) {
	prostokat (ctx, "rgb(174, 160, 125)", bx, by, 640, 42);
	prostokat (ctx, "rgb(9, 130, 59)", bx, by + 42, 640, 318);
	ctx.font = "bold 25px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText ("TURA", bx + 7, by + 10);
	ctx.fillText ("RZUT", bx + 263, by + 10);
	ctx.fillText ("pkt", bx + 592, by + 10);
	}, null);
