const headerMenu = document.querySelector(".header__menu");
const bodyWidth = document.body.clientWidth;
const burgerBtn = document.querySelector("#burger");
const logo = document.querySelector('.header__logo');
const demoBtn = document.querySelector('.header__demo-btn');
const headerLinks = document.querySelectorAll(".header__link");
const timeTitle = document.querySelector('.time__title');

let isMenuOpen = false;

function toggleMenu() {
    if (bodyWidth <= 767) {
      headerMenu.classList.toggle("header__menu_active");
      logo.classList.toggle('header__logo_active');
      burgerBtn.classList.toggle("burger-btn_active");
      demoBtn.classList.toggle("header__demo-btn_active");
      headerLinks.forEach(link => {
        link.classList.toggle('header__link_active');
      });
      isMenuOpen = !isMenuOpen; 

      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'; 
        // headerMenu.style.right = '0';
      } else {
        
        document.body.style.overflow = 'auto'; 
        // headerMenu.style.right = '100%';
      }

    }

    
  }
  
  burgerBtn.addEventListener('click', toggleMenu);
  
  window.addEventListener('resize', function() {
    const bodyWidth = document.body.clientWidth;

    if (bodyWidth > 767) {
      headerMenu.classList.remove("header__menu_active");
      logo.classList.remove('header__logo_active');
      burgerBtn.classList.remove("burger-btn_active");
      demoBtn.classList.remove("header__demo-btn_active");
      headerLinks.forEach(link => {
        link.classList.remove('header__link_active');
      });
    }
    if (bodyWidth <= 437){
        timeTitle.innerHTML = '“Right time to invest into space”';
    }else {
        timeTitle.innerHTML = '“Right time to <br> invest into space”';
      }
  });

  
