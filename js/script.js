'use strict'

const openMenu = document.querySelector('img.menu-burger__icon'),
      closeMenu = document.querySelector('.menu-burger__close'),
      menuWindow = document.querySelector('.menu-burger'),
      menuAbout = document.querySelector('.menu__about'),
      menuSkills = document.querySelector('.menu__skills'),
      menuPortfolio = document.querySelector('.menu__portfolio'),
      menuContacts = document.querySelector('.menu__contacts'),
      iconUp = document.querySelector('.icon__up'),
      menuAbout1 = document.querySelector('.menu__about1'),
      menuSkills1 = document.querySelector('.menu__skills1'),
      menuPortfolio1 = document.querySelector('.menu__portfolio1'),
      menuContacts1 = document.querySelector('.menu__contacts1'),
      portfolio1Menu = document.querySelector('.portfolio');



function menuClick(){
    openMenu.addEventListener('click',()=>{
        menuWindow.classList.add('menu-burger__open');
        document.documentElement.scrollTop = 0;
        document.body.style.overflow = 'hidden'
    })
    closeMenu.addEventListener('click',()=>{
        menuWindow.classList.remove('menu-burger__open');
        document.body.style.overflow = ''
    })

}
menuClick();



function menuScroll(about, skills, portfolio, contacts){
    about.addEventListener('click', ()=>{
        document.documentElement.scrollTop = 674;
        menuWindow.classList.remove('menu-burger__open');
        document.body.style.overflow = ''
    });
    skills.addEventListener('click', ()=>{
        document.documentElement.scrollTop = 1173;
        menuWindow.classList.remove('menu-burger__open');
        document.body.style.overflow = ''
    });
    portfolio.addEventListener('click', ()=>{
        // document.documentElement.scrollTop = 1876;
        portfolio1Menu.scrollIntoView()
        menuWindow.classList.remove('menu-burger__open');
        document.body.style.overflow = ''
    });
    contacts.addEventListener('click', ()=>{
        document.documentElement.scrollTop = 4079;
        menuWindow.classList.remove('menu-burger__open');
        document.body.style.overflow = ''
    });

}

menuScroll(menuAbout, menuSkills, menuPortfolio, menuContacts)
menuScroll(menuAbout1, menuSkills1, menuPortfolio1, menuContacts1)


    window.addEventListener('scroll', () => {
        if (window.pageYOffset == 0) {
            iconUp.style.display = 'none';
        } else {
            iconUp.style.display = 'block';
        }
    });

    iconUp.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });



