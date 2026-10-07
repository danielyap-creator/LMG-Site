/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

  menuToggle.addEventListener("click", () => {

    const isOpen = menu.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

  });


  /* Fecha o menu quando clicar em um link */

  const menuLinks = menu.querySelectorAll("a");

  menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

      menu.classList.remove("active");

      menuToggle.textContent = "☰";

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   ANIMAÇÃO AO ROLAR
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }

    );


  revealElements.forEach((element, index) => {

    element.style.transitionDelay =
      `${Math.min(index % 4, 3) * 70}ms`;

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach((element) => {
    element.classList.add("active");
  });

}


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header = document.querySelector(".header");

function updateHeader() {

  if (!header) return;

  if (window.scrollY > 40) {

    header.classList.add("header-scrolled");

  } else {

    header.classList.remove("header-scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();