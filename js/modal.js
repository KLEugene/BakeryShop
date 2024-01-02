const headerButton=document.querySelector('.header__button');
const modalClose=document.querySelector('[data-modal-close]');
const modal=document.querySelector('.modal')
headerButton.addEventListener('click', handleModalClick);
modalClose.addEventListener('click', handleModalClick);

function handleModalClick(event){
    modal.classList.toggle('is-hidden');
}