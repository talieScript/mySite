// make nav items clickable 
let navItems = document.querySelectorAll('.nav__item');
navItems.forEach((el) => {
    el.addEventListener('click', () => {
        el.childNodes[0].click();
    });
});

// colapsable navigation
const navCheckbox = document.querySelector('#nav-checkbox');
const navBar = document.querySelector('#nav');
const navItem = document.querySelectorAll('.nav__item');
const navIcon = document.querySelector('#nav-icon');
navCheckbox.addEventListener('click', () => {
    if(navCheckbox.checked === true ) {
        navBar.classList.add('nav--animate');
        navIcon.classList.add('nav__icon--animate');
        navItem.forEach((el) => {
            el.classList.add('nav__item--animate');
        })
    } else {
        navBar.classList.remove('nav--animate');
        navIcon.classList.remove('nav__icon--animate');
        navItem.forEach((el) => {
            el.classList.remove('nav__item--animate');
        })
    }
});
    