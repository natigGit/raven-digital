const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    spaceBetween: 40,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 5000,
      },
    speed: 1000
  });