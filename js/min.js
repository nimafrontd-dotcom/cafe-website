let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-btn");

if (menu && navbar) {
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
    navbar.classList.toggle("active");
  });

  let navLinks = navbar.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  document.addEventListener("click", function (e) {
    if (!navbar.contains(e.target) && e.target !== menu) {
      navbar.classList.remove("active");
    }
  });
}

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function initUltraFastAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -30px 0px",
    }
  );

  const allElements = document.querySelectorAll(
    ".home .card__header, " +
      ".about .card, .about .card__header, .about .card__body, " +
      ".menu .menu_text, .menu .menu_box .box, " +
      ".testimonials-section .testimonials_text, .testimonials-section .slider-content, " +
      ".gallery .gallery_text, .gallery .gallery_img .card_img, " +
      ".content-sectin .content_us, .content-sectin .section-content, " +
      ".content-sectin .contact-info-list li, .content-sectin .contact-form"
  );

  allElements.forEach((el) => {
    el.classList.add("scroll-animate");
    observer.observe(el);

    if (isElementInView(el)) {
      el.classList.add("show");
    }
  });
}

function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
}

document.addEventListener("DOMContentLoaded", initUltraFastAnimations);
