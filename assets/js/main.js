$(".slick-gallery").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".parter-slider").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});

$(".menus .link").on("click", function (e) {
  $(".menu-item").removeClass("active");
  const href = $(this).attr("href");
  const sectionTarget = $(href);
  const scrolTopTarget = sectionTarget.offset().top;
  $(this).parent().parent().addClass("active");
  if (href === "#about") {
    $(window).scrollTop(scrolTopTarget + 150);
  } else {
    $(window).scrollTop(scrolTopTarget);
  }
  e.preventDefault();
});

// $(window).on("scroll", function () {
//   $(".menu-item").removeClass("active");
//   const heroH = $("#hero").height();
//   const hero = document.querySelector("#hero").getBoundingClientRect().top;
//   const aboutH = $("#about").height();
//   const about = document.querySelector("#about").getBoundingClientRect().top;
//   const serviceH = $("#service").height();
//   const service = document
//     .querySelector("#service")
//     .getBoundingClientRect().top;
//   const contactH = $("#contact").height();
//   const contact = document
//     .querySelector("#contact")
//     .getBoundingClientRect().top;
//   const officeH = $("#office").height();
//   const office = document.querySelector("#office").getBoundingClientRect().top;

//   if (hero < 0 && hero > -heroH) {
//     $('a[href="#hero"]').parent().parent().addClass("active");
//   }
//   if (about < 0 && about > -aboutH) {
//     $('a[href="#about"]').parent().parent().addClass("active");
//   }
//   if (service < 0 && service > -serviceH) {
//     $('a[href="#service"]').parent().parent().addClass("active");
//   }
//   if (contact < 0 && contact > -contactH) {
//     $('a[href="#contact"]').parent().parent().addClass("active");
//   }
//   if (office < 0 && office > -officeH) {
//     $('a[href="#office"]').parent().parent().addClass("active");
//   }
// });
