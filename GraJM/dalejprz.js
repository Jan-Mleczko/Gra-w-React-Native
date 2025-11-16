/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (104, 41, function (ctx, bx, by, par) {
	prostokat (ctx, "black", bx, by, 104, 41);
	prostokat (ctx, "silver", bx + 2, by + 2, 100, 37);
	napis (ctx, "black", bx + 4, by + 4, 30, "Dalej >");
	}, null);
