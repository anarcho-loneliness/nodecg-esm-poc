import cjsFunction from 'noop3';
import esmFunction from '@tomekf/noop';

cjsFunction();
esmFunction();

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Hello bundler';
	return element;
}

document.body.appendChild(component());
window.NodeCGLib.log();
