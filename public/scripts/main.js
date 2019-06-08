// make nav items clickable 
let navItems = document.querySelectorAll('.nav__item');
navItems.forEach((el) => {
    el.addEventListener('click', () => {
        el.childNodes[0].click();
    });
});
    