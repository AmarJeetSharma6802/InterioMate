const menu = document.getElementById('hamburger-menu');
const nav = document.querySelector("nav");
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const btnForm = document.querySelectorAll(".btn")

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle("show");
});

// btnForm.addEventListener("click",()=>{
//     overlay.classList.add("active")
// })
btnForm.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        overlay.classList.add("active")
    })
})
closeBtn.addEventListener("click",()=>{
    overlay.classList.remove("active")
})
     setTimeout(()=>{
       overlay.classList.add("active")

 },2000)
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true, // Allow looping
    navigation: {
        nextEl: '.c-carousel__button--next',
        prevEl: '.c-carousel__button--prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 48,
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
});


// overlay croucel
document.addEventListener('DOMContentLoaded', () => {
  // Define the configuration for each carousel
  const carousels = [
      { overlay: 'overlayCarousel1', slides: 'carouselSlides1', prevBtn: 'prevBtn1', nextBtn: 'nextBtn1', indicators: 'carouselIndicators1', gridBtn: 'grid-img-1' },
      { overlay: 'overlayCarousel2', slides: 'carouselSlides2', prevBtn: 'prevBtn2', nextBtn: 'nextBtn2', indicators: 'carouselIndicators2', gridBtn: 'grid-img-2' },
      { overlay: 'overlayCarousel3', slides: 'carouselSlides3', prevBtn: 'prevBtn3', nextBtn: 'nextBtn3', indicators: 'carouselIndicators3', gridBtn: 'grid-img-3' },
      { overlay: 'overlayCarousel4', slides: 'carouselSlides4', prevBtn: 'prevBtn4', nextBtn: 'nextBtn4', indicators: 'carouselIndicators4', gridBtn: 'grid-img-4' },
      { overlay: 'overlayCarousel5', slides: 'carouselSlides5', prevBtn: 'prevBtn5', nextBtn: 'nextBtn5', indicators: 'carouselIndicators5', gridBtn: 'grid-img-5' },
      { overlay: 'overlayCarousel6', slides: 'carouselSlides6', prevBtn: 'prevBtn6', nextBtn: 'nextBtn6', indicators: 'carouselIndicators6', gridBtn: 'grid-img-6' },
      
  ];

  carousels.forEach((carouselConfig) => {
      const overlay = document.getElementById(carouselConfig.overlay);
      const slidesContainer = document.getElementById(carouselConfig.slides);
      const prevBtn = document.getElementById(carouselConfig.prevBtn);
      const nextBtn = document.getElementById(carouselConfig.nextBtn);
      const gridBtn = document.getElementById(carouselConfig.gridBtn);
      const indicators = document.querySelectorAll(`#${carouselConfig.indicators} .indicator`);
      let currentIndex = 0;

      // Open carousel on grid image click
      gridBtn.addEventListener('click', () => {
          overlay.classList.add('active');
          updateCarousel();
      });

      // Close the carousel when the close button is clicked
      overlay.querySelector('.close-button').addEventListener('click', () => {
          overlay.classList.remove('active');
      });

      // Update carousel to show the correct slide and indicator
      function updateCarousel() {
          slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
          indicators.forEach((indicator, i) => {
              indicator.classList.toggle('active', i === currentIndex);
          });
      }

      // Next button functionality
      nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % indicators.length;
          updateCarousel();
      });

      // Previous button functionality
      prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
          updateCarousel();
      });

      // Indicator click functionality
      indicators.forEach((indicator, i) => {
          indicator.addEventListener('click', () => {
              currentIndex = i;
              updateCarousel();
          });
      });
  });
});

// feedback caroucel

const multipleItemCarousel = document.querySelector("#testimonialCarousel");

    if (window.matchMedia("(min-width:576px)").matches) {
      const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
      });

      var carouselWidth = $(".carousel-inner")[0].scrollWidth;
      var cardWidth = $(".carousel-item").width();

      var scrollPosition = 0;

      $(".carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          console.log("next");
          scrollPosition = scrollPosition + cardWidth;
          $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
      });

      $(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition = scrollPosition - cardWidth;
          $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
        }
      });
    } else {
      $(multipleItemCarousel).addClass("slide");
    }
  
   