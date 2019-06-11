// navigation variables
const navCheckbox = document.querySelector('#nav-checkbox');
const navBar = document.querySelector('#nav');
const navItem = document.querySelectorAll('.nav__item');
const navIcon = document.querySelector('#nav-icon');

// ========= collapsed menu functionality =========
// remove casses to close colapse menu
function closeNav() {
    navBar.classList.remove('nav--animate');
    navIcon.classList.remove('nav__icon--animate');
    navItem.forEach((el) => {
        el.classList.remove('nav__item--animate');
    })
}
navCheckbox.addEventListener('click', () => {
    if(navCheckbox.checked === true ) {
        navBar.classList.add('nav--animate');
        navIcon.classList.add('nav__icon--animate');
        navItem.forEach((el) => {
            el.classList.add('nav__item--animate');
        })
    } else {
        closeNav();
    }
});

// =========== menu scrolling functionality =============
// sections variable
let sections = document.querySelectorAll('.section');
// scroll function
function scroll(section) {
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
// nav items scroll on click
let navItems = document.querySelectorAll('.nav__item');
navItems.forEach((el) => {
    el.addEventListener('click', () => {
        switch(el.getAttribute("id")) {
            case "navHome":
                scroll(sections[0])
                closeNav();
                break;
            case "navAbout":
                scroll(sections[1])
                closeNav();
                break;
            case "navPort":
                scroll(sections[2])
                closeNav();
                break;
            case "navCont":
                scroll(sections[3])
                closeNav();
                break;
        }
    });
});

// ========= active menu item functionality ======== 
// detect when the document hieght changed 
function onElementHeightChange(elm, callback){
    var lastHeight = elm.clientHeight, newHeight;
    (function run(){
        newHeight = elm.clientHeight;
        if( lastHeight != newHeight )
            callback();
        lastHeight = newHeight;

        if( elm.onElementHeightChangeTimer )
            clearTimeout(elm.onElementHeightChangeTimer);

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}

// get sections offset top values
let sectionsTop = [];
sections.forEach((el) => {
    sectionsTop.push(el.offsetTop)
})
onElementHeightChange(document.body, function(){
    sectionsTop = [];
    sections.forEach((el) => {
        sectionsTop.push(el.offsetTop)
    })
});

function removeClasses() {
    navItem.forEach((el) => {
        el.classList.remove("nav__item-active");
    })
}

function addActiveClass() {
    // get half way down user view 
    let position = window.scrollY + (window.innerHeight/2);
    // add class to nav items depending on position value
    if(position>sectionsTop[0] && position<sectionsTop[1]) {
        if(navItem[0].classList[0] !== "nav__item-active") {
            removeClasses();
            navItem[0].classList.add("nav__item-active");
        }
    }
    if(position>sectionsTop[1] && position<sectionsTop[2]) {
        if(navItem[1].classList[0] !== "nav__item-active") {
            removeClasses();
            navItem[1].classList.add("nav__item-active");
        }
    }
    if(position > sectionsTop[2] && position<sectionsTop[3]) {
        if(navItem[2].classList[0] !== "nav__item-active") {
            removeClasses();
            navItem[2].classList.add("nav__item-active");
        }
    }
    if(position > sectionsTop[3]) {
        if(navItem[3].classList[0] !== "nav__item-active") {
            removeClasses();
            navItem[3].classList.add("nav__item-active");
        }
    }  
}

window.addEventListener('scroll', () => {
    addActiveClass()
});

// lets talk and contact me buttons
document.querySelectorAll(".contact-btn").forEach((el) => {
    el.addEventListener("click", () => {  
        scroll(sections[3]);
    })
})


    