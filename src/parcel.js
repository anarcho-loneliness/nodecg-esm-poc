/* This is the JS that gets used by parcel.
 * It is different in that it doesn't support externals, 
 * and therefore has to use window.NodeCGLib, 
 * instead of "faking it" like how Webpack does it. */

import cjsColor from 'rgb'; // CJS dep from npm
import * as d3 from 'd3-color'; // ESM dep from npm
const {log} = window.NodeCGLib; // external ESM

console.log('cjs deps work if this prints an rgb string:', cjsColor('maroon'));
console.log('esm deps work if this prints an rgb object:', d3.color("steelblue"));

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Hello bundler';
	return element;
}

document.body.appendChild(component());
log();
