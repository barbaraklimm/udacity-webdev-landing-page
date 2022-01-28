
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
// Build menu
// build the nav
// Scroll to anchor ID using scrollTO event

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


// Set sections and link in navigation bar as active
// Scroll to section on link click
document.addEventListener('scroll', function() {
  let current;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= navList.offsetHeight) {
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
