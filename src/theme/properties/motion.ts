export interface MotionTheme {
	disableAnimation: boolean;
	animationSpeed: number;
}

export const defaultMotionTheme: MotionTheme = {
	disableAnimation: false,
	animationSpeed: 1,
};

export type MotionThemeData = Partial<MotionTheme>;

export const createMotionTheme = (theme?: MotionThemeData) => ({
	...defaultMotionTheme,
	...theme,
});