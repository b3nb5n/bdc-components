import Css from '../../types/css';

export class Color {
	readonly r: number;
	readonly g: number;
	readonly b: number;
	readonly a: number;

	/**
	 * @param {number} r 0-255
	 * @param {number} g 0-255
	 * @param {number} b 0-255
	 * @param {number} a 0.0-1.0
	 * @constructs Color
	 */
	constructor(r: number, g: number, b: number, a: number = 1) {
		const normalize = (num: number, min: number, max: number) =>
			Math.min(Math.max(num, min), max);

		this.r = normalize(Math.round(r), 0, 255);
		this.g = normalize(Math.round(g), 0, 255);
		this.b = normalize(Math.round(b), 0, 255);
		this.a = normalize(a, 0, 1);
	}

	static readonly black = new Color(0, 0, 0);
	static readonly white = new Color(255, 255, 255);
	static readonly transparent = new Color(0, 0, 0, 0);

	/**
	 * Constructs a new Color from a rgb or rgba string
	 * @param {string} color rgb or rgba format color
	 * @constructs Color
	 * @throws Will throw if `color` is not in the expected format
	 */
	static fromRGBAString(color: Css.Color.RGB | Css.Color.RGBA) {
		if (!Css.Color.isRGB(color) && !Css.Color.isRGBA(color)) throw Error('Invalid rgba format');
		const parser = /(?:\d*\.\d+)|(?:\d+)/g;
		const [r, g, b, a] = color.match(parser)!.map((chan) => parseFloat(chan));
		return new Color(r, g, b, a);
	}

	/**
	 * Constructs a new Color from a hex string
	 * @param {string} color hex format color
	 * @constructs Color
	 * @throws Will throw if `color` is not in the expected format
	 */
	static fromHexString(color: Css.Color.Hex) {
		if (!Css.Color.isHex(color)) throw Error('Invalid hex format');
		let hex = color[0] === '#' ? color.substring(1) : color;
		if (hex.length === 3) hex = hex.split('').reduce((hex, chan) => hex + chan.repeat(2), '');

		const parser = /[0-9a-f]{2}/gi;
		const [r, g, b, a] = hex.match(parser)!.map((chan) => parseInt(chan, 16));
		return new Color(r, g, b, a / 255 || 1);
	}

	/**
	 * Constructs a new Color from a string
	 * @param {string} color any format color
	 * @constructs Color
	 * @throws Will throw if `color` is not in a valid format
	 */
	static fromString(color: Css.Color.Any) {
		if (Css.Color.isRGB(color) || Css.Color.isRGBA(color)) return this.fromRGBAString(color);
		if (Css.Color.isHex(color)) return this.fromHexString(color);
		throw Error('Invalid color format');
	}

	/**
	 * Constructs a new Color with the current rgb values and the given a value
	 * @param {number} a a number 0-1 to use as the new alpha
	 * @constructs Color
	 */
	withAlpha(a: number) {
		return new Color(this.r, this.g, this.b, a);
	}

	/**
	 * Constructs a new color (black or white) that contrasts with the current color
	 * @constructs Color
	 */
	getContrastingForeground() {
		const luminance = (this.r * 0.299 + this.g * 0.587 + this.b * 0.114) / 255;
		return luminance < 0.5 ? Color.white : Color.black;
	}

	/** Returns an rgba string representation of the current color */
	toString() {
		return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
	}
}

export interface ColorTheme {
	primary: Color;
	background: Color;
	error: Color;
	inactive: Color;
}

export const defaultColorTheme: ColorTheme = {
	primary: new Color(0, 0, 0, 1),
	background: new Color(255, 255, 255, 1),
	error: new Color(255, 0, 0, 1),
	inactive: new Color(200, 200, 200, 1),
};

export type ColorThemeData = {
	[k in keyof ColorTheme]: Css.Color.Any | Color;
};

/**
 * Merges `partialThemeData` with `defaultColorTheme`
 * to create a complete color theme object
 */
export const createColorTheme = (partialThemeData?: Partial<ColorThemeData>): ColorTheme => {
	const resolveColor = (color: Css.Color.Any | Color) =>
		color instanceof Color ? color : Color.fromString(color);

	const themeData = { ...defaultColorTheme, ...partialThemeData };
	return Object.entries(themeData).reduce<ColorTheme>(
		(theme, [key, value]) => ({ ...theme, [key]: resolveColor(value) }),
		{} as ColorTheme
	);
};
