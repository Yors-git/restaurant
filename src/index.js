import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, Toast, Popover } from 'bootstrap';

import navBar from './assets/js/navBar';
import bgImage from './assets/images/mainBg.jpg';
import mainHomeImage  from './assets/images/mainTaco.jpg';
import menuImg1 from './assets/images/menuBeefTaco.jpg';
import menuImg2 from './assets/images/menuPastor.jpg';
import menuImg3 from './assets/images/menuQueso.jpg';
import menuImg4 from './assets/images/menuVeg.jpg';
import locmap from './assets/images/locMap.png';
import home from './assets/js/home';
import menu from './assets/js/menu';
import info from './assets/js/info';

const menuImgArr = [menuImg1, menuImg2, menuImg3, menuImg4];
const menuTitleArr = ['The Best Beef Tacos', 'Delicious Pastor Tacos', 'Great Quesadillas', 'Vegetarian Tacos']
const menuTextArr = [
  'Our premium beef seasoned with our special blend and cooked on poin, you will love them', 
  'The speciale seasoning of the meat combined with our cooking methods are the best', 
  'Our premium ingredients combined with selected cheese, you must taste ut', 
  'Vegetarian options if you prefer, but also delicious']

const background = () => {
  document.body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bgImage}) no-repeat`;
  document.body.style.backgroundSize = 'auto, cover';
  document.body.style.backgroundRepeat = 'repeat';
}

const selectRender = (key) => {
  const content = document.getElementById('container')
  switch (key) {
    case 'home':
      content.remove();
      home(mainHomeImage);
      break;
    case 'menu':
      content.remove();
      menu(menuImgArr, menuTitleArr, menuTextArr);
      break;
    case 'info':
      content.remove();
      info(locmap);
      break;
  
    default:
      home(mainHomeImage);
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => { 
  background()
  navBar()
  home(mainHomeImage)
  const homeTab = document.getElementById('home');
  const menuTab = document.getElementById('menu');
  const infoTab = document.getElementById('info');

  homeTab.addEventListener('click', () => {selectRender('home')})
  menuTab.addEventListener('click', () => {selectRender('menu')})
  infoTab.addEventListener('click', () => {selectRender('info')})
})
