/*!
* Start Bootstrap - Resume v6.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav"
    });

    $("#toggle").on("click", function(evt) { //# is for id

        $("#hardware").toggleClass("hardware-on");
        $("#software").toggleClass("software-on");
        $("[id=hw-section]").toggleClass("projects-hide");
        $("[id=hw-section-container]").toggleClass("projects-hide");
        $("[id=sw-section]").toggleClass("projects-hide");
        $("[id=sw-section-container]").toggleClass("projects-hide");
        $("[id=hw-section]").toggleClass("d-flex");
        $("[id=sw-section]").toggleClass("d-flex");
      });

      // [selects multiple], # selects 1
      
      //outside = initial state
      $("#hardware").toggleClass("hardware-on");
      $("[id=sw-section]").toggleClass("projects-hide");
      $("[id=sw-section]").toggleClass("d-flex");

      $("[id=sw-section-container]").toggleClass("projects-hide");
})(jQuery); // End of use strict
