
const headerLinksEl = document.querySelectorAll("a");
const headerEl = document.querySelector(".header");
const barsLinlsEl = document.querySelector(".bars");
const linksEl = document.querySelector(".bars .links");
const imageContainerEl = document.getElementById("images-container");
const imgEl = document.querySelectorAll("#img");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");


barsLinlsEl.addEventListener("click", () => {
    linksEl.style.display ="flex";
});

window.onscroll = function() {
    linksEl.style.display = "none";
};

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        headerEl.classList.add("hide-header");
    }
    else {
        headerEl.classList.remove("hide-header");
    }
    lastScrollY = window.scrollY;
});

headerLinksEl.forEach(element => {
    element.addEventListener("click", function() {
        headerLinksEl.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});


let imagIndexEl = 1;
let imageStop ;
nextEl.addEventListener("click", () => {
    imagIndexEl++;
    clearTimeout(imageStop);
    imageMove();
});

prevEl.addEventListener("click", () => {
    imagIndexEl--;
    clearTimeout(imageStop);
    imageMove();
});

imageMove();
function imageMove() {

    if (imagIndexEl > imgEl.length) {

        imagIndexEl = 1;
    }

    else if (imagIndexEl < 1) {

        imagIndexEl = imgEl.length;
    }

    imageContainerEl.style.transform = `translateX(-${(imagIndexEl - 1) * 400}px)`;

    imageStop = setTimeout(() => {

        imagIndexEl++;
        imageMove();
    }, 7000)
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 5,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slideContainerContentEl = document.querySelectorAll(".slide-container .content")
const btnEls = document.querySelectorAll(".all-products .btn")
const popupCountEl = document.querySelector(".slide-container .popup-cont")
const closeIconEl = document.querySelectorAll(".close-icon i")

btnEls.forEach(oneBtn => {

    oneBtn.addEventListener("click", () => {

        popupCountEl.classList.remove("active")

        slideContainerContentEl.forEach(ele => {
            
            ele.classList.add("active")
        })
    })
});

closeIconEl.forEach(oneClose => {

    oneClose.addEventListener("click", () => {

        popupCountEl.classList.add("active")

        slideContainerContentEl.forEach(ele => {

            ele.classList.remove("active")
        })
    })
})