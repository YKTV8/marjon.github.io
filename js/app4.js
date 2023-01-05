/* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
* 
* Dependencies: None
* 
* JS Version: ES2015/ES6*/
//GLOBAL DEFINE Section and navbar__list globally defined
//Grabs unordered list from the page

// Dynamically build the navigation menu
//For loop to dynamically building navbar using for loop. 
const sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', activeSection, false); 
document.addEventListener('DOMContentLoaded', ActiveNavBar, false); 

//dynamcially building navbar for top screen.
function buildNav(){
        for(let index = 0 ; index < sections.length; index++) {
        const navMenu = document.getElementById('navbar__list');
        const liNavItem = document.createElement('li');
        const aNavItem = document.createElement('a');
        //console.log(liNavItem)
        const liLabel = sections[index].getAttribute('data-nav');
        aNavItem.classList.add('anchorNav');
        aNavItem.innerHTML = liLabel;
        //liNavItem.classList.add('listNav');
        aNavItem.setAttribute('href', '#'+ sections[index].id);
        aNavItem.setAttribute('data-id', sections[index].id);
        //code below throws error in DOM
        //liNavItem.innerHTML = `<a class='menu__link'>${sections.dataset}</a>`;
        liNavItem.append(aNavItem);
        navMenu.append(liNavItem);
        //console.log(liNavItem)
        //Click event listener add for activation of activeSection function of navbar
        aNavItem.addEventListener('click',function(event) {
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-id');
            const sectionInViewport = document.getElementById(sectionId);
            activeSection();
            event.target.classList.add('active');
            sectionInViewport.classList.add('your-active-class');
            sectionInViewport.scrollIntoView({
                behavior: 'smooth'
        });
        });
    };
};
//function created to remove active section as scroll and click occurs
function removeActiveSection(){
    for(let index = 0 ; index < sections.length; index++) {
        const anchorTags = document.getElementsByTagName('a');
        sections[index].classList.remove('your-active-class');
        anchorTags[index].classList.remove('active');
    };
};
//Brings the current section to the TOP of inViewport
function activeSection (){
    window.addEventListener('scroll', function() {
		const sections = document.getElementsByClassName('section');		
		for (let index = 0; index < sections.length; index++) {
			const position = sections[index].getBoundingClientRect();
			const topPos = position.top;
				if (topPos <= window.innerHeight/2){
					let activeClass = document.getElementsByClassName("your-active-class");
					activeClass[0].className = activeClass[0].className.replace (" your-active-class", "");
					sections[index].className += " your-active-class";
			
					let currentSect = document.getElementsByClassName("active");  
						if (currentSect.length > 0) {
							removeActiveSection();
							currentSect[0].className = currentSect[0].className.replace(" active", "");
						}
			
					let menuContainer = document.getElementById("navbar__list").querySelectorAll('li');
					menuContainer[index].className = " active";
				};
		};
	});
};
//Assigns 'active' state in nav bar when section is clicked or scrolled into viewport..
function ActiveNavBar (){
	let menuContainer = document.getElementById("navbar__list");
	let menuBar = menuContainer.querySelectorAll('li');
	for (let index = 0; index < sections.length; index++) {
  		sections[index].addEventListener("click", function() {
			let actSect = document.getElementsByClassName("active");  
    		if (actSect.length > 0) {
      			actSect[0].className = actSect[0].className.replace(" active", "");
    		}else{
                sections[index].classList.remove('your-active-class');
                sections[index].classList.remove('active');
            };
 		});
	};
};
//scrolling event function created to give indication of when one section is active and another is inactive.
function Scrolling (section1) {
	const section = document.getElementById('section'+section1);
	const positionY = section.offsetTop;
	event.preventDefault();
	window.scrollIntoView({
		left: 0, 
		top: positionY,
		behavior: 'smooth'
	});
};
buildNav();
