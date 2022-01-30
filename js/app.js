
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


/**
 * Define Global Variables
 *
*/

const sections = document.getElementsByTagName('section');
const navList = document.getElementById('navbar__list');
const navLinks = navList.getElementsByTagName('a');


/** Build navigation bar
 *
 * This loop creates menu items for each section in the index.html file.
 * Each menu item scrolls to its related section when clicked.
 *
*/

for (const section of sections) {
  const currentSection = section;
  const newListElement = document.createElement('li');
  const newLinkElement = document.createElement('a');
  const currentSectionId = currentSection.id;
  newLinkElement.setAttribute('class', 'menu__link');
  newLinkElement.textContent = currentSection.dataset.nav;
  newLinkElement.classList.add(currentSectionId);
  newLinkElement.addEventListener('click', function(e) {
    window.scrollBy(
        {
          top: section.getBoundingClientRect().top - navList.offsetHeight + 1,
          left: 0,
          behavior: 'smooth',
        },
    );
    e.preventDefault();
  });
  newListElement.appendChild(newLinkElement);
  navList.appendChild(newListElement);
}


/**
 *
 * This eventListener checks on scroll if a section is in the viewport.
 * If yes, it adds an active state to the section and the related navigation item
 * and removes it for the other sections.
 *
*/

document.addEventListener('scroll', function() {
  let current;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= navList.offsetHeight && section.getBoundingClientRect().bottom > navList.offsetHeight) {
      section.classList.add('your-active-class');
      current = section.id;
    } else {
      section.classList.remove('your-active-class');
    }
  }

  for (const navLink of navLinks) {
    if (navLink.classList.contains(current)) {
      navLink.classList.add('menu__link__active');
    } else {
      navLink.classList.remove('menu__link__active');
    }
  }
},
);
