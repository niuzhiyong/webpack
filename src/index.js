import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['hello','webpack'], '');
  element.classList.add('hello');

  btn.innerHTML = 'CLICK ME';
  btn.onclick = printMe;

  console.error('this is error');

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    print();
  })
}