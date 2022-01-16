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

	export type GlobalValue = 'inherit' | 'revert' | 'initial' | 'unset';
	export type NumericValue<U extends Unit.Any = 'px'> = `${number}${U}`;
}

export default Css;
