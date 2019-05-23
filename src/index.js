import _ from 'lodash';
import './style.css';
import Image from './myImage.jpg';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello','webpack'], '');
  element.classList.add('hello');

  var myImg = new Image();
  myImg.src = Image;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());