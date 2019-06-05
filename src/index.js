import printMe from './print.js';
import { cube } from './math.js';
import './style.css';

function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'hello webpack',
    '5cube' + cube(5)
  ].join('\n\n');
  element.classList.add('hello');
  return element;
}
document.body.appendChild(component());
