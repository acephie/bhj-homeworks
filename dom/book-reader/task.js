"use strict";

const sizeControls = Array.from(document.querySelectorAll(".font-size"));
const bookElement = document.querySelector(".book");

sizeControls.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    sizeControls.forEach((item) => {
      item.classList.remove("font-size_active");
    });
    item.classList.add("font-size_active");
    if (item.classList.contains("font-size_small")) {
      bookElement.classList.remove("book_fs-big");
      bookElement.classList.add("book_fs-small");
    } else if (item.classList.contains("font-size_big")) {
      bookElement.classList.remove("book_fs-small");
      bookElement.classList.add("book_fs-big");
    } else {
      bookElement.classList.remove("book_fs-small");
      bookElement.classList.remove("book_fs-big");
    }
  });
});
