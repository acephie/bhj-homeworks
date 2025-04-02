"use strict";

const reveledElements = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", () => {
  reveledElements.forEach((item) => {
    if (
      item.getBoundingClientRect().top < window.innerHeight &&
      item.getBoundingClientRect().bottom >= 0
    ) {
      item.classList.add("reveal_active");
    } else {
      item.classList.remove("reveal_active");
    }
  });
});
