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

export type ShapeThemeData = Partial<ShapeTheme>;

export const createShapeTheme = (theme?: ShapeThemeData) => ({
	...defaultShapeTheme,
	...theme,
});
