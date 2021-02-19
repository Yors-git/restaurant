const menu = (imgArr, titleArr, textArr) => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.classList.add('container', 'py-5');
  container.setAttribute('id', 'container');
  const row = document.createElement('div');
  const rowClasses = ['row', 'row-cols-1', 'row-cols-md-2', 'g-4']
  row.classList.add(...rowClasses);

  for(let i = 0; i < imgArr.length; i++){
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    card.style.background = 'chocolate';
    card.style.color = 'white';
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', imgArr[i]);
    card.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = titleArr[i];
    cardBody.appendChild(cardTitle);
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = textArr[i];
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    colDiv.appendChild(card);
    row.appendChild(colDiv);
  }
  container.appendChild(row);
  content.appendChild(container);
}

export default menu;