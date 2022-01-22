
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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections = document.getElementsByTagName('section');
const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/** Wiederhole nachfolgende Schritte so oft wie die Anzahl an Elementen im Array sections:
  Erstelle ein Linkelement. Füge als Linktext den Inhalt des Attributs data-nav ein.
  Füge als Linkziel "#" + ElementID ein
  Ergänze im Element UL das Linkelement in einem Listenelement als Kindelemente.
  */
  for (let section of sections){
    const currentSection = section;
    const newListElement = document.createElement('li');
    const newLinkElement = document.createElement('a');
    newLinkElement.setAttribute("href", "#" + currentSection.id);
    newLinkElement.setAttribute("class", "menu__link");
    newLinkElement.textContent = currentSection.dataset.nav;
    newListElement.appendChild(newLinkElement);
    navbarList.appendChild(newListElement);
  }


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav

document.addEventListener("scroll", function(){
    for (let section of sections){
        if (section.getBoundingClientRect().top < (0 + navbarList.offsetHeight)) {
          section.classList.add("your-active-class");
        } else {
          section.classList.remove("your-active-class");
        }
    }
  }
)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
