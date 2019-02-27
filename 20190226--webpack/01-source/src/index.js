import _ from 'lodash';
import './style.css';
import Img from './test.jpg';

function component() {
  const ele = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
  ele.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = Img;
  ele.appendChild(myIcon);
  return ele;
}

document.body.appendChild(component());