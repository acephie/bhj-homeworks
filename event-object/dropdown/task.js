const droppingWrap = document.querySelector(".dropdown__value");
const droppingList = document.querySelector(".dropdown__list");
const droppingLinks = Array.from(document.querySelectorAll(".dropdown__link"));
droppingWrap.addEventListener("click", listDown);

function listDown() {
  droppingList.classList.toggle("dropdown__list_active");
  for (let index = 0; index < droppingLinks.length; index += 1) {
    droppingLinks[index]
      .closest(".dropdown__item")
      .addEventListener("click", () => {
        droppingWrap.textContent = droppingLinks[index].textContent;
        droppingList.classList.remove("dropdown__list_active");
      });
  }
}
