new WOW().init();
  document.addEventListener("DOMContentLoaded", function () {
      var swiper = new Swiper(".gallery-slider", {
          slidesPerView: 3,    
          spaceBetween: 10,    
          loop: true,          
          autoplay: {
              delay: 2500,     
              disableOnInteraction: false, 
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          
         breakpoints: {
                  1200: {
                      slidesPerView: 3,
                  },
                  992: {
                      slidesPerView: 3,
                  },
                  768: {
                      slidesPerView: 1,
                  },
                  576: {
                      slidesPerView: 1,
                  },
                  320: {
                      slidesPerView: 1,
                  }
              }
      });
  });
