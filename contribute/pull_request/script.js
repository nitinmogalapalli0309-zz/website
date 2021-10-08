function navSlide(){
  const navsmall = document.querySelector(".navsmall");
  const nav = document.querySelector("#menu ul");
  const navLinks = document.querySelectorAll("#menu ul");

  navsmall.addEventListener("click", () => {

    nav.classList.toggle("nav-links");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards 0.1s`;
      }
    });

    navsmall.classList.toggle("toggle");
  });
}

navSlide();