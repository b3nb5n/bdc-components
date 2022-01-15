export class Color {
	private r: number;
	private g: number;
	private b: number;
	private a: number;

	private constructor(r: number, g: number, b: number, a: number) {
		const normalize = (x: number) => Math.min(Math.max(x, 0), 255);

		this.r = normalize(r);
		this.g = normalize(g);
		this.b = normalize(b);
		this.a = normalize(a);
	}

	static fromRGB(r: number, g: number, b: number) {
		return new Color(r, g, b, 255);
	}

	static fromRGBA(r: number, g: number, b: number, a: number) {
		return new Color(r, g, b, a);
	}

	static fromHex(hex: string) {
		hex = hex.toUpperCase();
		if (hex[0] === '#') hex = hex.substring(1);

		let r: number,
			g: number,
			b: number,
			a = 255;

		if (/^[0-9A-Z]{3}$/.test(hex)) {
			r = parseInt(hex.substring(0, 1), 16);
			g = parseInt(hex.substring(1, 2), 16);
			b = parseInt(hex.substring(2, 3), 16);
		} else if (/^[0-9A-Z]{6}$/.test(hex)) {
			r = parseInt(hex.substring(0, 2), 16);
			g = parseInt(hex.substring(2, 4), 16);
			b = parseInt(hex.substring(4, 6), 16);
		} else if (/^[0-9A-Z]{8}$/.test(hex)) {
			r = parseInt(hex.substring(0, 2), 16);
			g = parseInt(hex.substring(2, 4), 16);
			b = parseInt(hex.substring(4, 6), 16);
			a = parseInt(hex.substring(6, 8), 16);
		} else {
			throw Error('Invalid hex format');
		}

		return new Color(r, g, b, a);
	}

	withAlpha(a: number) {
		a = Math.min(Math.max(a, 0), 1);
		return new Color(this.r, this.g, this.b, a);
	}

	getContrastText() {
		const luminance = (this.r * 0.299 + this.g * 0.587 + this.b * 0.114) / 255;
		const d = (1 - Math.round(luminance)) * 255;
		return new Color(d, d, d, 255);
	}

	toString() {
		return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
	}

	toHexString() {
		const rHex = this.r.toString(16),
			bHex = this.b.toString(16),
			gHex = this.g.toString(16),
			aHex = this.a.toString(16);

		return `#${rHex}${gHex}${bHex}${aHex !== 'ff' ? aHex : ''}`;
	}
}

export interface ColorTheme {
	primary: Color;
	background: Color;
	error: Color;
	inactive: Color;
}

export const defaultColorTheme: ColorTheme = {
	primary: Color.fromHex('#000'),
	background: Color.fromHex('#FFF'),
	error: Color.fromHex('#F00'),
	inactive: Color.fromHex('#CCC'),
};
