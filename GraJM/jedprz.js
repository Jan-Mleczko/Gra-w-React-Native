/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (315, 25, function (ctx, bx, by, par) {
	prostokat (ctx, "navy", bx, by, 315, 25);
	napis (ctx, "white", bx + 2, by + 2, 22, "JEDYNKI");
	}, null);
