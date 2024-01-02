const btnOpen=document.querySelector('.header__open-menu');
const btnClose=document.querySelector('.mobile-menu__button--close');
const mobileMenu=document.querySelector('.mobile-menu');
const menuLink=document.querySelectorAll('.mobile-menu__link');

console.log(menuLink)
const handleClick=()=>{
    mobileMenu.classList.toggle('is-open')
}
btnOpen.addEventListener('click', handleClick);
btnClose.addEventListener('click', handleClick);
menuLink.forEach(link=>link.addEventListener('click',handleClick))

//console.dir(window)