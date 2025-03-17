new WOW().init();
  document.addEventListener("DOMContentLoaded", function () {
      var swiper = new Swiper(".gallery-slider", {
          slidesPerView: 3,    // يعرض صورة واحدة فقط في كل مرة
          spaceBetween: 10,    // مسافة صغيرة بين الصور
          loop: true,          // تكرار تلقائي (Loop)
          autoplay: {
              delay: 2500,     // تغيير الصورة كل 2.5 ثانية
              disableOnInteraction: false, // يبقى يعمل حتى بعد التفاعل
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true, // يجعل النقاط (bullets) قابلة للنقر
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
                      slidesPerView: 2,
                  },
                  576: {
                      slidesPerView: 2,
                  },
                  320: {
                      slidesPerView: 2,
                  }
              }
      });
  });
