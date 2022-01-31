import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: {
			file: packageJson.main,
			format: 'esm',
			sourcemap: true,
		},
		plugins: [
			external(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
	{
		input: 'dist/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()],
	},
];
