namespace Css {
	export namespace Unit {
		export type Absolute = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';
		export type Relative =
			| 'em'
			| 'ex'
			| 'ch'
			| 'rem'
			| 'lh'
			| 'vw'
			| 'vh'
			| 'vmin'
			| 'vmax'
			| '%';
		export type Size = Absolute | Relative;
		export type Angle = 'deg' | 'grad' | 'rad' | 'turn';
		export type Any = Size | Angle | '';
	}

	export namespace Color {
		export type RGB =
			| `rgb(${number}, ${number}, ${number})`
			| `rgb(${number},${number},${number})`;

		export function isRGB(color: string): color is RGB {
			const validator = /^rgb\((?:\d+, ?){2}\d+\)$/i;
			return validator.test(color);
		}

		export type RGBA =
			| `rgba(${number}, ${number}, ${number}, ${number})`
			| `rgba(${number},${number},${number},${number})`;

		export function isRGBA(color: string): color is RGBA {
			const validator = /^rgba\((?:\d+, ?){3}(?:1|0|0?\.\d+)\)$/i;
			return validator.test(color);
		}

		export type Hex = `#${string}` | string;

		export function isHex(color: string): color is Hex {
			const validator = /^#?(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})$/i;
			return validator.test(color);
		}

		export type Any = RGBA | RGB | Hex;

		export function isColor(color: string): color is Any {
			return isRGB(color) || isRGBA(color) || isHex(color);
		}
	}

	export type GlobalValue = 'inherit' | 'revert' | 'initial' | 'unset';
	export type NumericValue<U extends Unit.Any = 'px'> = `${number}${U}`;
}

export default Css;
