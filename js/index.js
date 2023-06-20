let links = document.querySelectorAll(".header__nav_link");
let bodyWidth = document.body.clientWidth;

links.forEach(link => {
    if (bodyWidth === 950) {
        link.classList.toggle("header__nav_link_active");
    }
});


