(function(){
const openButton = document.querySelector('.nav__menu');
const menu = document.querySelector('.nav_link');
const closemenu = document.querySelector('.nav__close');

openButton.addEventListener('click', ()=>{
    menu.classList.add('nav__link--show');
});

closemenu.addEventListener('click', ()=>{
    menu.classList.remove('nav__link--show');

});

})();