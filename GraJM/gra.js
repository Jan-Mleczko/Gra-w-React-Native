/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025

  OBIEKT POJEDYNCZY GRA */

import Obraz from "./obraz.js";
import Rozgrywka from "./rozgr.js";
import Prostokat from "./pkat.js";

import MENUPOCZ from "./menupocz.js";
import GRUBE from "./00czcion.js";
import CIENKIE from "./01czcion.js";
import PODSUM from "./podsum.js";
var Gra = new Object ();

Gra.poczatek = function () {
	var i;
	
	i = PODSUM.rozmiar;
	while (i--)
		PODSUM.krycie[i] *= 0.75;
	this.rozg = null;
	this.dgraj = new Prostokat (233, 194, 174, 47);
	};

Gra.uzysObraz = function () {
	if (this.rozg)
		return this.rozg.widok ();
	return MENUPOCZ;
	};

Gra.dotkniecie = function (xx, yy) {
        let wymaganeTykniecia = 0;
	if (this.rozg) {
		wymaganeTykniecia = this.rozg.dotkniecie (xx, yy);
		if (this.rozg.powrot)
			this.rozg = null;
		}
	else {	if (this.dgraj.wewn (xx, yy))
			this.rozg = new Rozgrywka ();
		}
	return wymaganeTykniecia;
	};

Gra.tykniecie = function () {
	if (this.rozg) {
		this.rozg.tykniecie ();
		if (this.rozg.powrot)
			this.rozg = null;
		}
	};

export default Gra;
