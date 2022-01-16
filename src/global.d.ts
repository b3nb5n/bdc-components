declare global {
	namespace Jss {
		export interface Theme {
			typography: import('./theme/properties/typography').TypographyTheme;
			color: import('./theme/properties/color').ColorTheme;
			shape: import('./theme/properties/shape').ShapeTheme;
			motion: import('./theme/properties/motion').MotionTheme;
		}
	}
}

export {};

