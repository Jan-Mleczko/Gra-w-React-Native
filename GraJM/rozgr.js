/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import Obraz from "./obraz.js";
import UklKosci from "./uklkosci.js";
import uklady from "./uklady.js";
import Prostokat from "./pkat.js";

import GRUBE from "./00czcion.js";
import CIENKIE from "./01czcion.js";
import STOL from "./stol.js";
import RZUCNAP from "./rzucnap.js";
import ZATRZNAP from "./zatrznap.js";
import RZUCPRZ from "./rzucprz.js";
import DALEJPRZ from "./dalejprz.js";
import PODSUM from "./podsum.js";

import K1 from "./kostka1.js";
import K2 from "./kostka2.js";
import K3 from "./kostka3.js";
import K4 from "./kostka4.js";
import K5 from "./kostka5.js";
import K6 from "./kostka6.js";

var KOSTKI = [null, K1, K2, K3, K4, K5, K6];

function rzutpojed () {
	return Math.floor (Math.random () * 6) + 1;
	}

function Rozgrywka () {
	var i;

	this.powrot = false;
	this.tura = this.rzut = 1;
	this.kosci = new Array ();
	i = 0;
	while (i < 5)
		this.kosci[i++] = rzutpojed ();
	this.ruchome = 5;
	this.punktow = 0;
	this.jestUkl = false;
	this.dostUkl = new Array ();
	i = 0;
	while (i < 14)
		this.dostUkl[i++] = true;
	this.wybrUkl = null;
	this._ostwid = null;
	this._migniecie = true;
	
	this.dwyb = new Array ();
	i = 0;
	while (i < 14) {
		this.dwyb[i] = new Prostokat (uklady[i].xprz, uklady[i].yprz,
				315, 25);
		++i;
		}
	this.drzuc = new Prostokat (533, 43, 104, 41);
	this.ddalej = new Prostokat (533, 185, 104, 41);
	this.dwroc = new Prostokat (218, 220, 204, 32);
	}

Rozgrywka.prototype._rzuc = function () {
	var i;
	
	i = this.ruchome;
	while (i-- > 0)
		this.kosci[i] = rzutpojed ();
	};

Rozgrywka.prototype.zachow = function (ktora) {
	var i, tymcz;
	
	ktora = Math.floor (Number (ktora));
	if (ktora < 0 || ktora >= this.ruchome)
		return;
	tymcz = this.kosci[i = ktora];
	while (++i < 5)
		this.kosci[i - 1] = this.kosci[i];
	this.kosci[4] = tymcz;
	--this.ruchome;
	};

Rozgrywka.prototype.przywr = function (ktora) {
	var i, tymcz;
	
	ktora = Math.floor (Number (ktora));
	if (ktora < 0)
		return;
	ktora += this.ruchome;
	if (ktora >= 5)
		return;
	
	tymcz = this.kosci[i = ktora];
	while (i > this.ruchome) {
		--i;
		this.kosci[i + 1] = this.kosci[i];
		}
	this.kosci[this.ruchome++] = tymcz;
	};

Rozgrywka.prototype.biezpkt = function () {
	var p = 0;
	if (this.jestUkl)
		p = this.wybrUkl.punktuj (this.kosci);
	if (p > 0 && this.rzut == 1)
		p *= 2;
	return p;
	};

Rozgrywka.prototype.widok = function () {
	var wid;
	var i, rx, ry;
	var podsum, koncowka, tekpods;
	
	if (this._ostwid)
		return this._ostwid;
	
	wid = new Obraz (STOL);
	GRUBE.pisz (wid, 85, 0, Math.min (this.tura, 14) + "/14");
	GRUBE.pisz (wid, 338, 0, this.rzut + "/3");
	GRUBE.pisz (wid, 588 - GRUBE.szerok (this.punktow), 0, this.punktow);
	
	RZUCNAP.nanies (wid, 3, 43);
	if (this._migniecie) {
		i = 0;
		rx = 50;
		while (i < this.ruchome) {
			KOSTKI[this.kosci[i++]].nanies (wid, rx, 76);
			rx += 86;
			}
		}
	if (this.jestUkl) {
		ZATRZNAP.nanies (wid, 3, 185);
		if (this.ruchome > 0) {
			if (this.rzut < 3)
				RZUCPRZ.naklej (wid, 533, 43);
			CIENKIE.pisz (wid, 50, 152, "Zatrzymuj kosci" +
					" dotykajac ich.");
			}
		if (this.ruchome < 5) {
			i = this.ruchome;
			rx = 50;
			while (i < 5) {
				KOSTKI[this.kosci[i++]].nanies (wid, rx, 218);
				rx += 86;
				}
			CIENKIE.pisz (wid, 50, 293, "Mozesz tez" +
					" przywracac kosci do" +
					" rzutu.");
			}
		DALEJPRZ.naklej (wid, 533, 185);
		
		CIENKIE.pisz (wid, 3, 318, "Grasz na " + this.wybrUkl.nazwa +
				". Na razie " + this.biezpkt () +
				" pkt za te ture.");
		}
	else {	CIENKIE.pisz (wid, 280, 43, "Teraz wybierz, na jaki uklad" +
				" grasz.");
		i = 0;
		while (i < 14) {
			if (this.dostUkl[i]) {
				uklady[i].oprz.naklej (wid, uklady[i].xprz,
						uklady[i].yprz);
				}
			++i;
			}
		}
	
	if (this.tura >= 15) {
		podsum = new Obraz (PODSUM);
		switch (this.punktow) {
		case 1:
			koncowka = "";
			break;
		default:
			switch (Math.abs (this.punktow) % 10) {
			case 3:
			case 4:
				koncowka = "y";
				break;
			default:
				koncowka = "ow";
				}
			}
		tekpods = "Zdobyles " + this.punktow +
				" punkt" + koncowka + ".";
		CIENKIE.pisz (podsum,
				200 - Math.floor (
				  CIENKIE.szerok (tekpods) * 0.5
				), 70, tekpods);
		podsum.nanies (wid, 120, 100);
		}
	
	return this._ostwid = wid;
	};

Rozgrywka.prototype.dotkniecie = function (xx, yy) {
	var i, traf;
	var wymaganeTykniecia = 0;

	if (this.tura >= 15) {
		if (this.dwroc.wewn (xx, yy))
			this.powrot = true;
		}
	else if (this.jestUkl) {
		if (this.drzuc.wewn (xx, yy)) {
			if (this.ruchome > 0 && this.rzut < 3) {
				this._rzuc ();
				this._migniecie = false;
				this._ostwid = null;
				++this.rzut;
				wymaganeTykniecia = 1;
				}
			}
		else if (this.ddalej.wewn (xx, yy)) {
			this.punktow += this.biezpkt ();
			if (++this.tura < 15) {
				this.rzut = 1;
				this.ruchome = 5;
				this.jestUkl = false;
				this._rzuc ();
				}
			this._ostwid = null;
			}
		else if (yy >= 76 && yy < 152) {
			xx -= 50;
			if (xx % 86 < 76 &&
			  (i = Math.floor (xx / 86)) < this.ruchome) {
				this.zachow (i);
				this._ostwid = null;
				}
			}
		else if (yy >= 218 && yy < 294) {
			xx -= 50;
			if (xx % 86 < 76 &&
			  (i = Math.floor (xx / 86)) < 5 - this.ruchome) {
				this.przywr (i);
				this._ostwid = null;
				}
			}
		}
	else {	i = 0;
		traf = false;
		while (i < 14) {
			if (this.dostUkl[i] && this.dwyb[i].wewn (xx, yy)) {
				traf = true;
				break;
				}
			++i;
			}
		if (traf) {
			this.jestUkl = true;
			this.wybrUkl = uklady[i];
			this.dostUkl[i] = false;
			this._ostwid = null;
			}
		}
	return wymaganeTykniecia;
	};

Rozgrywka.prototype.tykniecie = function () {
	if (!this._migniecie) {
		this._migniecie = true;
		this._ostwid = null;
		}
	};

export default Rozgrywka;
