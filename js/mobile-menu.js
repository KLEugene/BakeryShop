const btnOpen=document.querySelector('.header__open-menu');
const btnClose=document.querySelector('.mobile-menu__button--close');
const mobileMenu=document.querySelector('.mobile-menu');
const menuLink=document.querySelector('.mobile-menu__list');


const handleClick=()=>{
    mobileMenu.classList.toggle('is-open')
}
btnOpen.addEventListener('click', handleClick);
btnClose.addEventListener('click', handleClick);
menuLink.addEventListener('click',handleLinkClick)

function handleLinkClick(event){
const activeLink=event.target;
activeLink.classList.toggle('active')
mobileMenu.classList.toggle('is-open')
};
