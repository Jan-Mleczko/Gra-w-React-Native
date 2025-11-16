/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025.*/

export function prostokat (ctx, barwa, x, y, s, w) {
	ctx.fillStyle = barwa;
	ctx.fillRect (x, y, s, w);
	}

export function napis (ctx, barwa, x, y, wlk, tresc) {
	ctx.fillStyle = barwa;
	ctx.font = wlk + "px sans-serif";
	ctx.fillText (tresc, x, y);
	}

export function kolo (ctx, barwa, sx, sy, promien) {
	ctx.fillStyle = barwa;
	ctx.beginPath ();
	ctx.arc (sx, sy, promien, 0, Math.PI * 2);
	ctx.fill ();
	}
