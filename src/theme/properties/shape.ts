export interface ShapeTheme {
	borderRadius: number;
	density: number;
	size: number;
}

export const defaultShapeTheme: ShapeTheme = {
	borderRadius: 4,
	density: 1,
	size: 1,
};

export const createShapeTheme = (theme?: Partial<ShapeTheme>) => {
	if (!theme) return defaultShapeTheme;
	return { ...defaultShapeTheme, ...theme };
};
