export interface MotionTheme {
	disableAnimation: boolean;
	animationSpeed: number;
}

export const defaultMotionTheme: MotionTheme = {
	disableAnimation: false,
	animationSpeed: 1,
};

export const createMotionTheme = (theme?: Partial<MotionTheme>) => {
	if (!theme) return defaultMotionTheme;
	return { ...defaultMotionTheme, ...theme };
};