const images = [
  'url("assets/na_comunidade_1.png")',
  'url("assets/na_comunidade_2.jpg")',
  'url("assets/na_comunidade_3.jpg")',
  'url("assets/na_comunidade_4.jpg")',
];

let currentIndex = 0;
const backgroundContainer = document.querySelector("#sec-5 .container .container-img ");

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  backgroundContainer.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackgroundImage, 2500);


const swiper = new Swiper('.swiper', {
  slidesPerView: 3, 
  spaceBetween: 20, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { 
      slidesPerView: 1,
      spaceBetween: 60, 
    },
    768: { 
      slidesPerView: 2,
      spaceBetween: 80,
    },
    1024: { 
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});