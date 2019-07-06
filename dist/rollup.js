import { log } from './nodecg.js';

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Hello bundler';
	return element;
}

document.body.appendChild(component());
log();
