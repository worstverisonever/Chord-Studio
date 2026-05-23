const navbar = document.querySelector(".navbar");
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
};
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    breakpoints: {
     768: {
        slidesPerView: 2,
      },
  
      991: {
        slidesPerView: 3,
      },
    },
    loop: true,
    navigation:{
      nextEl:".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  
  
  });


