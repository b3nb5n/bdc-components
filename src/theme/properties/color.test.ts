import { Color, createColorTheme, defaultColorTheme } from './color';

test('Constructor should normalize channels', () => {
	const color = new Color(5000, -100, 36.82, 0.35);
	expect(color.r).toBe(255);
	expect(color.g).toBe(0);
	expect(color.b).toBe(37);
	expect(color.a).toBe(0.35);
});

test('Alpha channel should default to 1', () => {
	let color = new Color(0, 0, 0);
	expect(color.a).toBe(1);

	color = new Color(0, 0, 0, 0.27);
	expect(color.a).toBe(0.27);
});

test('From RGBA should  validate input', () => {
	expect(() => Color.fromRGBAString('' as any)).toThrow();
	expect(() => Color.fromRGBAString('rgb()' as any)).toThrow();
	expect(() => Color.fromRGBAString('rgba()' as any)).toThrow();
	expect(() => Color.fromRGBAString('rgb(0 0 0)' as any)).toThrow();
	expect(() => Color.fromRGBAString('rgb(0,0,0)' as any)).not.toThrow();
	expect(() => Color.fromRGBAString('rgb(255, 255, 255)' as any)).not.toThrow();
	expect(() => Color.fromRGBAString('rgba(0,0,0,0)' as any)).not.toThrow();
	expect(() => Color.fromRGBAString('rgba(255,255,255,1)' as any)).not.toThrow();
});

test('From RGBA should correctly parse channels', () => {
	let color = Color.fromRGBAString('rgb(45, 216, 173)');
	expect(color.r).toBe(45);
	expect(color.g).toBe(216);
	expect(color.b).toBe(173);
	expect(color.a).toBe(1);

	color = Color.fromRGBAString('rgba(39, 221, 107, 0.37)');
	expect(color.r).toBe(39);
	expect(color.g).toBe(221);
	expect(color.b).toBe(107);
	expect(color.a).toBe(0.37);
});

test('From Hex should validate input', () => {
	expect(() => Color.fromHexString('')).toThrow();
	expect(() => Color.fromHexString('#')).toThrow();
	expect(() => Color.fromHexString('#f')).toThrow();
	expect(() => Color.fromHexString('#ffff')).toThrow();
	expect(() => Color.fromHexString('ffff')).toThrow();

	expect(() => Color.fromHexString('f83')).not.toThrow();
	expect(() => Color.fromHexString('#E5F')).not.toThrow();
	expect(() => Color.fromHexString('F8EC9A')).not.toThrow();
	expect(() => Color.fromHexString('#09fAC3')).not.toThrow();
	expect(() => Color.fromHexString('458FF0b3')).not.toThrow();
	expect(() => Color.fromHexString('#d3ee5b01')).not.toThrow();
});

test('From Hex should correctly parse channels', () => {
	let color = Color.fromHexString('#257c0fa5');

	expect(color.r).toBe(37);
	expect(color.g).toBe(124);
	expect(color.b).toBe(15);
	expect(color.a).toBeCloseTo(0.647, 3);

	color = Color.fromHexString('#81a427');

	expect(color.r).toBe(129);
	expect(color.g).toBe(164);
	expect(color.b).toBe(39);
	expect(color.a).toBe(1);

	color = Color.fromHexString('#4B9');

	expect(color.r).toBe(68);
	expect(color.g).toBe(187);
	expect(color.b).toBe(153);
	expect(color.a).toBe(1);
});

test('Expect From string to throw on invalid format', () => {
	expect(() => Color.fromString('')).toThrow();
	expect(() => Color.fromString('#')).toThrow();
	expect(() => Color.fromString('#ff')).toThrow();
	expect(() => Color.fromString('#rgb()')).toThrow();
});

test('Get Contrasting Foreground should create legible contrast', () => {
	expect(Color.black.getContrastingForeground()).toEqual(Color.white);
	expect(Color.white.getContrastingForeground()).toEqual(Color.black);
});

test('Create Color Theme should properly merge theme data', () => {
	expect(createColorTheme()).toEqual(defaultColorTheme);
	expect(createColorTheme({ primary: '#00f' }).primary).toEqual(Color.fromHexString('#00f'));
});
