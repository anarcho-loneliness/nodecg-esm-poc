import cjsColor from 'rgb'; // CJS dep from npm
import * as d3 from 'd3-color'; // ESM dep from npm

console.log('cjs deps work if this prints an rgb string:', cjsColor('maroon'));
console.log('esm deps work if this prints an rgb object:', d3.color("steelblue"));

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Hello bundler';
	return element;
}

document.body.appendChild(component());
window.NodeCGLib.log();
