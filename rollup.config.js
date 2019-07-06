import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
	input: 'src/webpack_and_rollup.js',
	output: [
	  {
		file: 'dist/rollup.js',
		format: 'esm'
	  }
	],
	external: [
	  './nodecg.js'
	],
	plugins: [
	  resolve(),
	  commonjs()
	]
}];
