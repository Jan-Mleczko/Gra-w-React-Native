/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (640, 360, function (ctx, bx, by, par) {
	prostokat (ctx, "rgb(9, 130, 59)", bx, by, 640, 360);
	napis (ctx, "white", bx + 180, by + 133, 40, "GRA W KOSCI");
	prostokat (ctx, "black", bx + 233, by + 194, 174, 47);
	prostokat (ctx, "silver", bx + 235, by + 196, 170, 43);
	napis (ctx, "black", bx + 286, by + 208, 27, "GRAJ");
	napis (ctx, "white", bx + 490, by + 332, 12,
			"Jan Mleczko, listopad 2025");
	napis (ctx, "white", bx + 400, by + 347, 12,
			"Zadanie rekrutacyjne dla Software Mansion");
	}, null);
