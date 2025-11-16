/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import {prostokat, kolo, napis} from "./ksztalty.js";

export default new Obraz (150, 16, function (ctx, bx, by, par) {
	napis (ctx, "white", bx, by, 20, "Rzucone kosci:");
	}, null);
