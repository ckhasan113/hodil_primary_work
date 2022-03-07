(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    //menu active
    jQuery(".stellarnav").stellarNav({
      theme: "light",
      breakpoint: 960,
      position: "right",
      phoneBtn: "+8801845592277",
      locationBtn: "https://www.google.com/maps",
    });

    //WOW Animation
    new WOW().init();

    //Welcome Owl Carousel
    var welcome_slider_img = $(".welcome_slider_img");
    welcome_slider_img.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 1000,
      items: 1,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
    });

    //welcome_area animation
    welcome_slider_img.on("translate.owl.carousel", function () {
      $(".welcome_slider_img .welcome_slider_card")
        .removeClass("fadeInLeft animated")
        .show();
    });
    welcome_slider_img.on("translated.owl.carousel", function () {
      $(".welcome_slider_img .welcome_slider_card")
        .removeClass("fadeInRight animated")
        .hide();
    });
    welcome_slider_img.on("translated.owl.carousel", function () {
      $(".owl-item.active .welcome_slider_card")
        .addClass("fadeInRight animated")
        .show();
    });

    //Client Owl Carousel
    var client_carousel = $(".client_carousel");
    client_carousel.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      smartSpeed: 1000,
      items: 1,
      autoplay: false,
      navText: [
        '<div id="prev_button" class="owl-prev"><i class="fal fa-angle-left"></i></div>',
        '<div id="next_button" class="owl-next"><i class="fal fa-angle-right"></i></div>',
      ],
    });

    //Client Slider Image Counter
    /*Increment*/
    var clicks = 1;
    $("#next_button").click(function () {
      if (clicks == 5) {
        clicks = 0;
      }
      clicks++;
      $(".figure").html(clicks);
    });
    /*Decrement*/
    $("#prev_button").click(function () {
      if (clicks == 1) {
        clicks = 6;
      }
      clicks--;
      $(".figure").html(clicks);
    });

    //Testimonial Profile carousel
    var testimonial_thumb_content_slider = $(
      ".testimonial_thumb_content_slider"
    );
    var testimonial_thumb_content_slider_settings = {
      smartSpeed: 2000,
      center: true,
      items: 3,
      singleItem: true,
      loop: true,
      margin: 10,
      dots: false,
      pagination: false,
      nav: false,
      touchDrag: false,
      slideBy: 1,
      mouseDrag: false,
      autoplay: true,
      autoplayTimeout: 7000,
    };
    testimonial_thumb_content_slider.owlCarousel(
      testimonial_thumb_content_slider_settings
    );

    //Testimonials carousel
    var testimonials_carousel = $(".testimonials_carousel");
    testimonials_carousel.owlCarousel({
      smartSpeed: 2000,
      items: 1,
      singleItem: true,
      loop: true,
      margin: 0,
      pagination: false,
      nav: true,
      touchDrag: true,
      slideBy: 1,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 7000,
      navText: [
        '<div id="testimonial_prev" class="owl-prev"><i class="fal fa-angle-left"></i></div>',
        '<div id="testimonial_next" class="owl-next"><i class="fal fa-angle-right"></i></div>',
      ],
    });

    var testimonials_carousel = $(".testimonials_carousel"),
      testimonial_thumb_content_slider = $(".testimonial_thumb_content_slider");

    //Sync testimonial_thumb_content_slider by testimonials_carousel
    testimonials_carousel.on("click onDragged", ".owl-next", function () {
      testimonial_thumb_content_slider.trigger(
        "next.owl.carousel",
        e.page.index * testimonial_thumb_content_slider_settings.slideBy
      );
    });

    testimonials_carousel.on(
      "click dragged.owl.carousel",
      ".owl-prev",
      function () {
        testimonial_thumb_content_slider.trigger(
          "prev.owl.carousel",
          e.page.index * testimonial_thumb_content_slider_settings.slideBy
        );
      }
    );

    testimonials_carousel.on("translate.owl.carousel", function (e) {
      testimonial_thumb_content_slider.trigger(
        "to.owl.carousel",
        e.page.index * testimonial_thumb_content_slider_settings.slideBy
      );
    });

    //Current Class Activation
    var navbarcurrentmenuclass = $(".navbarcurrentmenuclass");
    navbarcurrentmenuclass.onePageNav();
  });

  //jquery load function start
  jQuery(window).on("load", function () {});

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Video Plugin Activation
  var video_btn = $(".service_play_icon");
  video_btn.modalVideo();
})(jQuery);
