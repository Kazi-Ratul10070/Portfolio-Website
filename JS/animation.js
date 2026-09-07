document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize AOS (Animate On Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }

  // 2. Initialize Typed.js
  const typedElement = document.getElementById("typed");
  if (typedElement && typeof Typed !== "undefined") {
    new Typed("#typed", {
      strings: [
        "Software Engineer.",
        "ICE Student.",
        "Network Enthusiast.",
        "Problem Solver.",
        "Modern Web Developer.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }
});
