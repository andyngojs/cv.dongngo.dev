import {useCallback, useEffect} from 'react';
// packages
import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import alertify from 'alertifyjs';

export default function useApp() {
  const zoomImages = useCallback(className => {
    $(`.${className}`).on('click', e => {
      $('#div-zoom-area').css('display', 'block');
      $('#img-zoom-area-content').attr('src', $(e.currentTarget)[0].src);

      $('#div-zoom-area').on('click', e => {
        $(e.currentTarget).css('display', 'none');
      });
    });
  }, []);

  const scrollTrigger = useCallback(() => {
    // Smooth scrolling using jQuery easing
    $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(e => {
      const currTarget = e.currentTarget;
      if (
        location.pathname.replace(/^\//, '') ===
          currTarget.pathname.replace(/^\//, '') &&
        location.hostname === currTarget.hostname
      ) {
        let target = $(currTarget.hash);
        target = target.length
          ? target
          : $('[name=' + currTarget.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            0,
            'easeInOutExpo',
          );
          return false;
        }
      }
    });
  }, []);

  useEffect(() => {
    scrollTrigger();

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').removeClass('show');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
    });

    // Say hello when access page.
    if (window.innerWidth < 992) {
      // Default position of notify is bottom-right
      alertify.success(
        "Have a good day, everyone! I'm Dong Ngo from Viet Nam.",
        7,
      );
    } else {
      alertify.set('notifier', 'position', 'top-right');
      alertify.success(
        "Have a good day, everyone! I'm Dong Ngo from Viet Nam.",
        7,
      );
    }

    // Zoom images that have class name: img-zoomable
    zoomImages('img-zoomable');
  }, [scrollTrigger, zoomImages]);
}
