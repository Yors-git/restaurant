const home = (img) => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const mainHome = document.createElement('div');
  const imageDiv = document.createElement('div');
  const text = document.createElement('p');
  container.classList.add('container');
  const mainHomeClasses = ['row', 'justify-content-center', 'py-5', 'px-2', 'my-5'];
  mainHome.classList.add(...mainHomeClasses);

  container.setAttribute('id', 'container');

  imageDiv.style.maxWidth = '28rem';
  imageDiv.style.backgroundImage = `url(${img})`;
  imageDiv.style.backgroundSize = 'contain';
  imageDiv.style.backgroundRepeat = 'no-repeat';
  imageDiv.style.backgroundPositionX = 'center';
  imageDiv.style.padding = '0 5% 34% 5%';
  imageDiv.style.display = 'flex';
  imageDiv.style.justifyContent = 'center';
  text.style.color = 'white';
  text.style.margin = '6rem 2rem';
  text.style.textShadow = '-2px 1px black';
  text.style.fontWeight = '800';
  text.style.fontSize = '1.7rem';

  text.innerHTML = "COME TRY OUR WONDERFUL TACOS, YOU WON'T REGRET IT!!!";
  imageDiv.appendChild(text);
  mainHome.appendChild(imageDiv);
  container.appendChild(mainHome);
  content.appendChild(container);
};

export default home;