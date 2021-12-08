document.addEventListener('DOMContentLoaded', function () {
    const headerBurger = document.querySelector('#header-burger');
    const headerMenu = document.querySelector('#header-menu');
    const header = document.querySelector('#header');
    const hero = document.querySelector('#hero');
    if (!headerMenu || !headerBurger || !header || !hero) return;

    window.onscroll = function(){
        if(window.pageYOffset > hero.offsetTop){
            header.classList.add('fixed');
        }
        else{
            header.classList.remove('fixed');
        }
    }

    headerBurger.onclick = function () {
        if (!headerMenu.classList.contains('active'))
            headerMenu.classList.add('active')
        else headerMenu.classList.remove('active')
    }
})