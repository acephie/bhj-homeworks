"use strict";

const rotators = Array.from(document.querySelectorAll(".rotator__case"));
let i = 0;

const intervalId = setInterval(() => {
  if (i < rotators.length - 1) {
    rotators[i].classList.remove("rotator__case_active");
    i += 1;
  } else {
    i = 0;
    rotators[rotators.length - 1].classList.remove("rotator__case_active");
  }
  rotators[i].classList.add("rotator__case_active");
}, 1000);
