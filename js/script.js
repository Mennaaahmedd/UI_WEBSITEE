var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4
        }
      }
  });

  $(document).ready(function() {
    $('.menu-overlay').fadeOut();

    $('.toggle').on('click', function() {
        $(this).parent().addClass('open-menu');
        $('.menu-overlay').fadeIn();
    });

    $('.menu-overlay').on('click', function() {
        $('.navbar').removeClass('open-menu');
        $(this).fadeOut();
    });
  });