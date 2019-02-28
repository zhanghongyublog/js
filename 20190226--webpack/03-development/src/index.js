import _ from 'lodash';
import printMe from './print.js';

function component() {
  const ele = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = "Click me & check console!";
  btn.onclick = printMe;
  ele.innerHTML = _.join(['Hello', 'webpack'], ' ');

  ele.appendChild(btn);
  return ele;
}

document.body.appendChild(component());