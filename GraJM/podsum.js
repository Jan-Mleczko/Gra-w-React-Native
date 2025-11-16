/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (400, 160, function (ctx, bx, by, par) {
	prostokat (ctx, "black", bx + 30, by, 340, 160);
	prostokat (ctx, "black", bx, by + 30, 30, 100);
	prostokat (ctx, "black", bx + 370, by + 30, 30, 100);
	kolo (ctx, "black", bx + 30, by + 30, 30);
	kolo (ctx, "black", bx + 370, by + 30, 30);
	kolo (ctx, "black", bx + 30, by + 130, 30);
	kolo (ctx, "black", bx + 370, by + 130, 30);
	napis (ctx, "white", bx + 101, by + 21, 30, "KONIEC GRY");
	prostokat (ctx, "silver", bx + 98, by + 120, 205, 31);
	napis (ctx, "black", bx + 186, by + 129, 25, "OK");
	}, null);
