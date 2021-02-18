import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, Toast, Popover } from 'bootstrap';

import navBar from './assets/js/navBar';
import bgImage from './assets/images/mainBg.jpg';
import mainHomeImage  from './assets/images/mainTaco.jpg';
import home from './assets/js/home'

const background = () => {
  document.body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bgImage}) no-repeat`;
  document.body.style.backgroundSize = 'auto, cover';
  document.body.style.backgroundRepeat = 'repeat';
}

document.addEventListener('DOMContentLoaded', () => { 
  background()
  navBar()
  home(mainHomeImage)
})
