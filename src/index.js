import cjsFunction from 'noop3';
import esmFunction from '@tomekf/noop';
import {log} from './nodecg.js';

cjsFunction();
esmFunction();

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Hello bundler';
	return element;
}

document.body.appendChild(component());
log();
