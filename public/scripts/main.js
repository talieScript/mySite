// make nav items clickable 
let navItems = document.querySelectorAll('.nav__item');
navItems.forEach((el) => {
    let href = el.childNodes[0].getAttribute('href');
    el.addEventListener('click', () => {
        el.childNodes[0].click();
    });
});
    