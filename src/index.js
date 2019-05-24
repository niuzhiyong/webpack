import _ from 'lodash';
import './style.css';
import Image from './myImage.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['hello','webpack'], '');
  element.classList.add('hello');

  btn.innerHTML = 'CLICK ME';
  btn.onclick = printMe;

  var myImg = new Image();
  myImg.src = Image;

  element.appendChild(myImg);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());