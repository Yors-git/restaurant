const info = (img) => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const mainHome = document.createElement('div');
  const imageDiv = document.createElement('div');
  const text = document.createElement('p');
  container.classList.add('container')
  const mainHomeClasses = ['row', 'justify-content-center', 'py-5', 'px-2', 'my-5']
  mainHome.classList.add(...mainHomeClasses);

  container.setAttribute('id', 'container')

  imageDiv.style.maxWidth = '28rem';
  imageDiv.style.backgroundImage = `url(${img})`;
  imageDiv.style.backgroundSize = 'contain';
  imageDiv.style.backgroundRepeat = 'no-repeat';
  imageDiv.style.backgroundPositionX = 'center';
  imageDiv.style.padding = '0 5% 34% 5%';
  imageDiv.style.display = 'flex';
  imageDiv.style.justifyContent = 'center';
  text.style.color = 'black';
  text.style.margin = '18rem -1rem 0 -1rem';
  text.style.fontWeight = '500';
  text.style.padding = '20px';
  text.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
  text.innerHTML = 'You can find us at: San Agustin 100, Paseos de Echegaray, ZIP 11000, Phone: 5554389211'

  imageDiv.appendChild(text);
  mainHome.appendChild(imageDiv);
  container.appendChild(mainHome);
  content.appendChild(container);
}

export default info;