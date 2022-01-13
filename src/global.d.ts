declare global {
	namespace Jss {
		export interface Theme {
			typography: import('./theme').TypographyTheme;
			color: import('./theme').ColorTheme;
			shape: import('./theme').ShapeTheme;
			motion: import('./theme').MotionTheme;
		}
	}
}

export {};

