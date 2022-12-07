const main = document.querySelector('main');
const loadingpag = document.querySelector('#preloader');
const menubox = document.querySelector('#menu_all');
const menuList = document.querySelector('.menu-1');
const lineM = document.querySelector('.menu_line');

const swiperArea = document.querySelector('.swiper-area');
const teamProject = document.querySelector('.team-project');
const resume = document.querySelector('.resume');


//loading頁面結束設定
window.addEventListener("load", function (event) {
    setTimeout(() => loadingpag.classList.add('offload'), 3000);
});

//hambar設定
menubox.addEventListener('click', function () {
    menuList.classList.toggle('menu-show');
});

main.addEventListener('click', function () {
    menuList.classList.remove('menu-show');
})


// 頁面切換設定
function teamArea() {
    swiperArea.style.display = 'none';
    teamProject.style.display = 'flex';
    resume.style.display = 'none';
}

function myArea() {
    swiperArea.style.display = 'block';
    teamProject.style.display = 'none';
    resume.style.display = 'none';
}

function resumeArea() {
    swiperArea.style.display = 'none';
    teamProject.style.display = 'none';
    resume.style.display = 'block';
}



var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 10000,
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
