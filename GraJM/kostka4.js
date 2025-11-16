/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (76, 76, function (ctx, bx, by, par) {
	prostokat (ctx, "white", bx, by, 76, 76);
	kolo (ctx, "black", bx + 20, by + 20, 10);
	kolo (ctx, "black", bx + 56, by + 20, 10);
	kolo (ctx, "black", bx + 20, by + 56, 10);
	kolo (ctx, "black", bx + 56, by + 56, 10);
	}, null);
