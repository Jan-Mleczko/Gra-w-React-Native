/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import UklKosci from "./uklkosci.js";
import PU1 from "./jedprz.js";
import PU2 from "./dwoprz.js";
import PU3 from "./troprz.js";
import PU4 from "./czwprz.js";
import PU5 from "./piaprz.js";
import PU6 from "./szoprz.js";
import PU7 from "./parprz.js";
import PU8 from "./dpaprz.js";
import PU9 from "./trkprz.js";
import PU10 from "./fulprz.js";
import PU11 from "./mstprz.js";
import PU12 from "./dstprz.js";
import PU13 from "./karprz.js";
import PU14 from "./genprz.js";

function wystap (param, los) {
	var i, a, s;
	
	i = 0;
	a = param;
	s = a * -3;
	while (i < 5) {
		if (los[i] == a)
			s += a;
		++i;
		}
	return s;
	}

function powtorz (param, los) {
	var i, w, a;
	
	i = 0;
	w = [0, 0, 0, 0, 0, 0, 0];
	while (i < 5)
		++w[los[i++]];
	i = 1;
	a = 0;
	while (i < 7) {
		if (w[i] >= param)
			a = i;
		++i;
		}
	return a * param;
	}

function sprDPA (nzn, los) {
	var i, w, licznik, s;
	i = 0;
	w = [0, 0, 0, 0, 0, 0, 0];
	s = 0;
	while (i < 5)
		++w[los[i++]];
	licznik = 0;
	i = 1;
	while (i < 7) {
		if (w[i] >= 2) {
			++licznik;
			s += i * 2.0;
			}
		++i;
		}
	return licznik >= 2 ? s : 0;
	}

function sprFUL (nzn, los) {
	var i, a, bylo, licznik, s;
	i = 0;
	bylo = new Array ();
	licznik = 0;
	while (i < 5) {
		a = los[i];
		if (!bylo[a]) {
			++licznik;
			bylo[a] = true;
			}
		++i;
		}
	if (licznik == 2) {
		s = i = 0;
		while (i < 5)
			s += los[i++];
		return s;
		}
	return 0;
	}

function sprMST (nzn, los) {
	var i, bylo;
	i = 0;
	bylo = [true,
			false, false, false,
			false, false];
	while (i < 5)
		bylo[los[i++]] = true;
	i = 1;
	while (i < 6) {
		if (!bylo[i])
			return 0;
		++i;
		}
	return 15;
	}

function sprDST (nzn, los) {
	var i, bylo;
	i = 0;
	bylo = [true,
			true, false, false,
			false, false, false];
	while (i < 5)
		bylo[los[i++]] = true;
	i = 1;
	while (i < 6) {
		if (!bylo[i])
			return 0;
		++i;
		}
	return 20;
	}

function sprGEN (nzn, los) {
	var pkt;
	pkt = powtorz (5, los);
	if (pkt > 0)
		return pkt + 50;
	return 0;
	}

var uk = new Array ();
uk[0] = new UklKosci ("jedynki", PU1, 3, 162, wystap, 1);
uk[1] = new UklKosci ("dwojki", PU2, 3, 190, wystap, 2);
uk[2] = new UklKosci ("trojki", PU3, 3, 218, wystap, 3);
uk[3] = new UklKosci ("czworki", PU4, 3, 246, wystap, 4);
uk[4] = new UklKosci ("piatki", PU5, 3, 274, wystap, 5);
uk[5] = new UklKosci ("szostki", PU6, 3, 302, wystap, 6);
uk[6] = new UklKosci ("karete", PU13, 3, 330, powtorz, 4);
uk[7] = new UklKosci ("pare", PU7, 322, 162, powtorz, 2);
uk[8] = new UklKosci ("dwie pary", PU8, 322, 190, sprDPA, null);
uk[9] = new UklKosci ("trojke", PU9, 322, 218, powtorz, 3);
uk[10] = new UklKosci ("ful", PU10, 322, 246, sprFUL, null);
uk[11] = new UklKosci ("maly strit", PU11, 322, 274, sprMST, null);
uk[12] = new UklKosci ("duzy strit", PU12, 322, 302, sprDST, null);
uk[13] = new UklKosci ("generala", PU14, 322, 330, sprGEN, null);

export default uk;
