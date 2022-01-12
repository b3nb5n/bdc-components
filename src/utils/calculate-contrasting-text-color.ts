import { Property } from 'csstype';
import { colorToRGB, hexToRGB, RGB } from './hex-convert';

const calculateLuminance = (color: RGB) => {
	const [r, g, b] = color.map((val) => {
		val /= 255;
		return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
	});

	return r * 0.2126 + g * 0.7152 + b * 0.0722;
};

const getContrastRatio = (background: RGB, foreground: RGB) => {
	const lumB = calculateLuminance(background);
	const lumA = calculateLuminance(foreground);
	return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
};

const calculateContrastingTextColor = (background: Property.Color) => {
	const LIGHT_TEXT_HEX = '#FFF';
	const DARK_TEXT_HEX = '#000';
	const lightTextRGB = hexToRGB(LIGHT_TEXT_HEX);
	const darkTextRGB = hexToRGB(DARK_TEXT_HEX);
	const bgRGB = colorToRGB(background);

	const lightTextContrast = getContrastRatio(bgRGB, lightTextRGB);
	const darkTextContrast = getContrastRatio(bgRGB, darkTextRGB);
	console.log(lightTextContrast, darkTextContrast);
	return darkTextContrast > lightTextContrast ? '#000' : '#FFF';
};

export default calculateContrastingTextColor;
