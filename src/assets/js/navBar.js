const navBar = () => {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  const navContainer = document.createElement('div');
  const navBrand = document.createElement('a');
  const togglerButton = document.createElement('button')
  const togglerButtonSpan = document.createElement('span')
  const collapseDiv = document.createElement('div');
  const navNav = document.createElement('ul');
  const navItemHome = document.createElement('li');
  const navItemMenu = document.createElement('li');
  const navItemInfo = document.createElement('li');
  const navLinkHome = document.createElement('a');
  const navLinkMenu = document.createElement('a');
  const navLinkInfo = document.createElement('a');
  const navClasses = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'];
  nav.classList.add(...navClasses);
  navContainer.classList.add('container-fluid');
  navBrand.classList.add('navbar-brand');
  navBrand.href = '#';
  navBrand.text = 'Grand Taco';
  togglerButton.classList.add('navbar-toggler');
  togglerButton.type = 'button';
  togglerButton.setAttribute('data-bs-toggle', 'collapse');
  togglerButton.setAttribute('data-bs-target', '#navbarNav');
  togglerButton.setAttribute('aria-controls', 'navbarNav');
  togglerButton.setAttribute('aria-expanded', 'false');
  togglerButton.setAttribute('aria-label', 'Toggle navigation');
  togglerButtonSpan.classList.add('navbar-toggler-icon');
  collapseDiv.classList.add('collapse', 'navbar-collapse', 'justify-content-end');
  collapseDiv.setAttribute('id', 'navbarNav');
  navNav.classList.add('navbar-nav');

  navItemHome.classList.add('nav-item');
  navItemMenu.classList.add('nav-item');
  navItemInfo.classList.add('nav-item');

  navLinkHome.classList.add('nav-link');
  navLinkHome.setAttribute('id', 'home')
  navLinkMenu.classList.add('nav-link');
  navLinkMenu.setAttribute('id', 'menu')
  navLinkInfo.classList.add('nav-link');
  navLinkInfo.setAttribute('id', 'info')

  navLinkHome.text = 'HOME';
  navLinkHome.href = '#';
  navLinkMenu.text = 'MENU';
  navLinkMenu.href = '#';
  navLinkInfo.text = 'LOCATION';
  navLinkInfo.href = '#';

  navItemHome.appendChild(navLinkHome);
  navItemMenu.appendChild(navLinkMenu);
  navItemInfo.appendChild(navLinkInfo);

  navNav.appendChild(navItemHome);
  navNav.appendChild(navItemMenu);
  navNav.appendChild(navItemInfo);

  togglerButton.appendChild(togglerButtonSpan)
  navContainer.appendChild(navBrand);
  navContainer.appendChild(togglerButton);
  collapseDiv.appendChild(navNav);
  navContainer.appendChild(collapseDiv);
  nav.appendChild(navContainer);
  content.appendChild(nav)
}

export default navBar;